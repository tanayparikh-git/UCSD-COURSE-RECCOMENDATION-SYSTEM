import pandas as pd
import faiss
import requests
import numpy as np

df = pd.read_csv('courses.csv')

def textual_representation(row):
    textual_representation = f"""Course Code: {row['Course Code']}\n
Course Name: {row['Course Name']}\n
Course Units: {row['Course Units']}\n
Course Description: {row['Course Description']}\n
Course Prerequisites: {row['Prerequisites']}\n
"""
    return textual_representation

df['textual_representation'] = df.apply(textual_representation, axis=1)

dim = 1024  
index = faiss.IndexFlatL2(dim)

X = np.zeros((len(df['textual_representation']), dim), dtype='float32')

for i, representation in enumerate(df['textual_representation']):
    if i % 100 == 0:
        print(f"Processing row {i}")
    try:
        response = requests.post(
            'http://localhost:11434/api/embeddings',
            json={
                'model': 'llama2',
                'prompt': representation,
            },
            timeout=10  # Set a timeout for the request
        )
        if response.status_code == 200:
            try:
                embedding = response.json().get('embedding')
                if embedding and len(embedding) == dim:
                    X[i] = np.array(embedding, dtype='float32')
                else:
                    print(f"Warning: Embedding size mismatch for row {i}. Expected {dim}, got {len(embedding) if embedding else 'None'}")
                    X[i] = np.zeros(dim, dtype='float32')  # Fill with zeros if there's a mismatch
            except ValueError:
                print(f"Error: Invalid JSON response for row {i}")
                X[i] = np.zeros(dim, dtype='float32')  # Fill with zeros if JSON is invalid
        else:
            print(f"Error: Failed to fetch embedding for row {i}, status code {response.status_code}")
            X[i] = np.zeros(dim, dtype='float32')  # Fill with zeros if the request fails
    except requests.exceptions.RequestException as e:
        print(f"Error: Request failed for row {i}: {e}")
        X[i] = np.zeros(dim, dtype='float32')  # Fill with zeros if there's a request error

# Add valid embeddings to the FAISS index
valid_embeddings = X[np.any(X != 0, axis=1)]  # Filter out rows with all zeros
index.add(valid_embeddings)