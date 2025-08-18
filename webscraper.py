from bs4 import BeautifulSoup
import requests
import csv

def scrape_courses(course_url, csv_file, course_code):
    response = requests.get(course_url)
    soup = BeautifulSoup(response.text, 'html.parser')

    name_elements = soup.find_all('p', class_='course-name')

    courses_data = []

    for name_element in name_elements:
        course_code_text = "N/A"
        course_name_text = "N/A"
        course_units = "N/A"
        course_description_text = "N/A"
        course_prerequisites = "None"

        # Extract course name and code
        full_name = name_element.text.strip()
        if "." in full_name:
            parts = full_name.split(".", 1)
            course_code_text = parts[0].strip()  # Extract the course code (e.g., VIS 23)
            course_name_text = parts[1].strip()  # Extract the course name
        else:
            # Fallback: Treat the entire text as the course name if no ". " is found
            course_name_text = full_name

        # Extract course units if present in parentheses
        if "(" in course_name_text:
            parts = course_name_text.split("(", 1)
            course_name_text = parts[0].strip()  # The part before the parenthesis
            course_units = parts[1].split(")")[0].strip()  # Extract the units

            # Check if the extracted units are numeric; if not, default to "4"
            if not course_units.isdigit():
                course_units = "4"

        # Find the first description directly under the course name
        description_element = name_element.find_next_sibling('p', class_='course-descriptions')
        if description_element:
            course_description_text = description_element.text.strip()

            # Skip descriptions that start with "Note: "
            if course_description_text.startswith("Note: "):
                print(f"Skipping description for {course_code_text} because it starts with 'Note: '")
                continue

            # Check for prerequisites in the description
            if "Prerequisites: " in course_description_text:
                parts2 = course_description_text.split("Prerequisites: ", 1)
                course_description_text = parts2[0].strip()
                course_prerequisites = parts2[1].strip()

        # Append the course data to the list
        courses_data.append([course_code_text, course_name_text, course_units, course_description_text, course_prerequisites])

    # Append the courses to the CSV file
    with open(csv_file, 'a', newline='', encoding='utf-8') as file:  # Open in append mode
        csv_writer = csv.writer(file)
        csv_writer.writerows(courses_data)

    print(f"{course_code} courses appended to '{csv_file}' successfully.")


csv_file = 'courses.csv'

# Step 1: Write the header once (clear the file)
with open(csv_file, 'w', newline='', encoding='utf-8') as file:
    csv_writer = csv.writer(file)
    csv_writer.writerow(['Course Code', 'Course Name', 'Course Units', 'Course Description', 'Prerequisites'])

# Step 2: List of course URLs and their codes
course_urls = []

# Fetch additional course codes dynamically
subjectcodespage = "https://blink.ucsd.edu/instructors/courses/schedule-of-classes/subject-codes.html"
subjectresponse = requests.get(subjectcodespage)
subsoup = BeautifulSoup(subjectresponse.text, 'html.parser')

subjectcode_elements = subsoup.find_all('td')

# Select every second <td> element
every_second_td = subjectcode_elements[0::2]

# Dynamically add course URLs to the course_urls list
for td in every_second_td:
    strtd = td.text.strip()  # Extract the course code (e.g., ECON, MATH, etc.)
    courseurl = f"https://catalog.ucsd.edu/courses/{strtd}.html"  # Construct the course URL
    course_urls.append((courseurl, strtd))  # Append the URL and code to the course_urls list

# Step 3: Scrape each course URL and append data
for course_url, course_code in course_urls:
    scrape_courses(course_url, csv_file, course_code)


