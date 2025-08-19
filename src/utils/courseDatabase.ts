export interface CourseData {
  id: string;
  course_code: string;
  course_name: string;
  course_units: string;
  course_description: string;
  prerequisites: string;
}

export const courseDatabase: CourseData[] = [
  // Computer Science
  {
    id: "1",
    course_code: "CSE 8A",
    course_name: "Introduction to Computer Science: Java (I)",
    course_units: "4",
    course_description:
      "Introduction to computer programming in Java. Covers fundamental programming concepts including variables, control structures, methods, and arrays.",
    prerequisites: "None",
  },
  {
    id: "2",
    course_code: "CSE 8B",
    course_name: "Introduction to Computer Science: Java (II)",
    course_units: "4",
    course_description:
      "Continuation of CSE 8A. Covers object-oriented programming, inheritance, polymorphism, and basic data structures.",
    prerequisites: "CSE 8A",
  },
  {
    id: "3",
    course_code: "CSE 12",
    course_name: "Basic Data Structures and Object-Oriented Design",
    course_units: "4",
    course_description:
      "Implementation of basic data structures and object-oriented design principles.",
    prerequisites: "CSE 8B or CSE 11",
  },
  {
    id: "4",
    course_code: "CSE 15L",
    course_name: "Software Tools and Techniques Laboratory",
    course_units: "2",
    course_description:
      "Hands-on experience with software development tools and techniques.",
    prerequisites: "CSE 8B or CSE 11",
  },
  {
    id: "5",
    course_code: "CSE 20",
    course_name: "Discrete Mathematics",
    course_units: "4",
    course_description:
      "Mathematical foundations for computer science including logic, sets, and combinatorics.",
    prerequisites: "MATH 20A",
  },
  {
    id: "6",
    course_code: "CSE 21",
    course_name: "Mathematics for Algorithms and Systems",
    course_units: "4",
    course_description:
      "Mathematical concepts essential for algorithm analysis and system design.",
    prerequisites: "CSE 20, MATH 20B",
  },
  {
    id: "7",
    course_code: "CSE 30",
    course_name: "Programming and Data Structures",
    course_units: "4",
    course_description:
      "Advanced programming concepts and data structures implementation.",
    prerequisites: "CSE 12",
  },
  {
    id: "8",
    course_code: "CSE 100",
    course_name: "Advanced Data Structures",
    course_units: "4",
    course_description:
      "Advanced data structures including trees, graphs, and algorithm analysis.",
    prerequisites: "CSE 12, CSE 21",
  },
  {
    id: "9",
    course_code: "CSE 101",
    course_name: "Design and Analysis of Algorithms",
    course_units: "4",
    course_description:
      "Design and analysis of efficient algorithms including dynamic programming, graph algorithms, and complexity theory.",
    prerequisites: "CSE 100, CSE 21",
  },
  {
    id: "10",
    course_code: "CSE 110",
    course_name: "Software Engineering",
    course_units: "4",
    course_description:
      "Software development methodologies, design patterns, and project management.",
    prerequisites: "CSE 100",
  },

  // Mathematics
  {
    id: "11",
    course_code: "MATH 20A",
    course_name: "Calculus for Science and Engineering",
    course_units: "4",
    course_description:
      "Differential calculus of functions of one variable. Applications to science and engineering.",
    prerequisites: "MATH 4C or MATH 10A or MATH 20A",
  },
  {
    id: "12",
    course_code: "MATH 20B",
    course_name: "Calculus for Science and Engineering",
    course_units: "4",
    course_description:
      "Integral calculus of functions of one variable. Applications to science and engineering.",
    prerequisites: "MATH 20A",
  },
  {
    id: "13",
    course_code: "MATH 20C",
    course_name: "Calculus and Analytic Geometry",
    course_units: "4",
    course_description:
      "Multivariable calculus including partial derivatives, multiple integrals, and vector calculus.",
    prerequisites: "MATH 20B",
  },
  {
    id: "14",
    course_code: "MATH 18",
    course_name: "Linear Algebra",
    course_units: "4",
    course_description:
      "Linear algebra including matrices, vector spaces, eigenvalues, and applications.",
    prerequisites: "MATH 20B",
  },
  {
    id: "15",
    course_code: "MATH 180A",
    course_name: "Introduction to Probability",
    course_units: "4",
    course_description:
      "Introduction to probability theory including random variables, distributions, and basic probability concepts.",
    prerequisites: "MATH 20C",
  },
  {
    id: "16",
    course_code: "MATH 180B",
    course_name: "Introduction to Mathematical Statistics",
    course_units: "4",
    course_description:
      "Mathematical statistics including estimation, hypothesis testing, and statistical inference.",
    prerequisites: "MATH 180A",
  },
  {
    id: "17",
    course_code: "MATH 181A",
    course_name: "Mathematical Statistics I",
    course_units: "4",
    course_description:
      "Advanced statistical theory including maximum likelihood estimation and hypothesis testing.",
    prerequisites: "MATH 180B",
  },

  // Economics
  {
    id: "18",
    course_code: "ECON 1",
    course_name: "Principles of Microeconomics",
    course_units: "4",
    course_description:
      "Introduction to microeconomic principles including supply and demand, market structures, and consumer behavior.",
    prerequisites: "None",
  },
  {
    id: "19",
    course_code: "ECON 2",
    course_name: "Principles of Macroeconomics",
    course_units: "4",
    course_description:
      "Introduction to macroeconomic principles including GDP, inflation, unemployment, and fiscal policy.",
    prerequisites: "ECON 1",
  },
  {
    id: "20",
    course_code: "ECON 3",
    course_name: "Intermediate Microeconomics",
    course_units: "4",
    course_description:
      "Advanced microeconomic theory including consumer choice, production theory, and market equilibrium.",
    prerequisites: "ECON 1, MATH 20A",
  },
  {
    id: "21",
    course_code: "ECON 4",
    course_name: "Intermediate Macroeconomics",
    course_units: "4",
    course_description:
      "Advanced macroeconomic theory including economic growth, business cycles, and monetary policy.",
    prerequisites: "ECON 2, MATH 20A",
  },
  {
    id: "22",
    course_code: "ECON 100A",
    course_name: "Microeconomic Analysis",
    course_units: "4",
    course_description:
      "Upper-division microeconomic analysis with mathematical rigor and advanced applications.",
    prerequisites: "ECON 3, MATH 20B",
  },
  {
    id: "23",
    course_code: "ECON 109",
    course_name: "Game Theory",
    course_units: "4",
    course_description:
      "Introduction to game theory including strategic interactions, Nash equilibrium, and applications to economics.",
    prerequisites: "ECON 3, MATH 20A",
  },
  {
    id: "24",
    course_code: "ECON 120A",
    course_name: "Econometrics",
    course_units: "4",
    course_description:
      "Introduction to econometrics including regression analysis, statistical inference, and economic modeling.",
    prerequisites: "ECON 3, MATH 20B",
  },

  // Chemistry
  {
    id: "25",
    course_code: "CHEM 6A",
    course_name: "General Chemistry I",
    course_units: "4",
    course_description:
      "Fundamental principles of chemistry including atomic structure, bonding, and chemical reactions.",
    prerequisites: "MATH 3C or MATH 4C or MATH 10A",
  },
  {
    id: "26",
    course_code: "CHEM 6B",
    course_name: "General Chemistry II",
    course_units: "4",
    course_description:
      "Continuation of CHEM 6A. Covers thermodynamics, kinetics, and equilibrium.",
    prerequisites: "CHEM 6A",
  },
  {
    id: "27",
    course_code: "CHEM 6C",
    course_name: "General Chemistry III",
    course_units: "4",
    course_description:
      "Continuation of CHEM 6B. Covers electrochemistry, nuclear chemistry, and coordination chemistry.",
    prerequisites: "CHEM 6B",
  },

  // Physics
  {
    id: "28",
    course_code: "PHYS 2A",
    course_name: "Physics-Mechanics",
    course_units: "4",
    course_description:
      "Classical mechanics including kinematics, dynamics, energy, momentum, and rotational motion.",
    prerequisites: "MATH 20A",
  },
  {
    id: "29",
    course_code: "PHYS 2B",
    course_name: "Physics-Electricity and Magnetism",
    course_units: "4",
    course_description:
      "Electricity and magnetism including electric fields, magnetic fields, and electromagnetic waves.",
    prerequisites: "PHYS 2A, MATH 20B",
  },
  {
    id: "30",
    course_code: "PHYS 2C",
    course_name: "Physics-Waves, Optics, and Modern Physics",
    course_units: "4",
    course_description:
      "Waves, optics, and modern physics including wave phenomena, geometric optics, and quantum mechanics.",
    prerequisites: "PHYS 2B, MATH 20C",
  },

  // Biology
  {
    id: "31",
    course_code: "BILD 1",
    course_name: "The Cell",
    course_units: "4",
    course_description:
      "Introduction to cell biology including cell structure, function, and molecular biology.",
    prerequisites: "None",
  },
  {
    id: "32",
    course_code: "BILD 2",
    course_name: "Multicellular Life",
    course_units: "4",
    course_description:
      "Introduction to organismal biology including genetics, evolution, and ecology.",
    prerequisites: "BILD 1",
  },
  {
    id: "33",
    course_code: "BILD 3",
    course_name: "Organismic and Evolutionary Biology",
    course_units: "4",
    course_description:
      "Organismic and evolutionary biology including biodiversity, adaptation, and evolutionary processes.",
    prerequisites: "BILD 2",
  },

  // Psychology
  {
    id: "34",
    course_code: "PSYC 1",
    course_name: "Introduction to Psychology",
    course_units: "4",
    course_description:
      "Introduction to psychology including cognitive processes, social behavior, and psychological research methods.",
    prerequisites: "None",
  },
  {
    id: "35",
    course_code: "PSYC 2",
    course_name: "Introduction to Psychology",
    course_units: "4",
    course_description:
      "Continuation of PSYC 1. Covers developmental psychology, personality, and psychological disorders.",
    prerequisites: "PSYC 1",
  },
  {
    id: "36",
    course_code: "PSYC 60",
    course_name: "Introduction to Statistics",
    course_units: "4",
    course_description:
      "Introduction to statistical methods in psychology including probability, hypothesis testing, and data analysis.",
    prerequisites: "MATH 20A",
  },

  // Cognitive Science
  {
    id: "37",
    course_code: "COGS 1",
    course_name: "Introduction to Cognitive Science",
    course_units: "4",
    course_description:
      "Introduction to cognitive science including perception, memory, language, and artificial intelligence.",
    prerequisites: "None",
  },
  {
    id: "38",
    course_code: "COGS 10",
    course_name: "Cognitive Consequences of Technology",
    course_units: "4",
    course_description:
      "Examination of how technology affects human cognition and behavior.",
    prerequisites: "None",
  },
  {
    id: "39",
    course_code: "COGS 14A",
    course_name: "Introduction to Statistical Analysis",
    course_units: "4",
    course_description:
      "Introduction to statistical analysis for cognitive science including probability, inference, and experimental design.",
    prerequisites: "MATH 20A",
  },

  // Data Science
  {
    id: "40",
    course_code: "DSC 10",
    course_name: "Principles of Data Science",
    course_units: "4",
    course_description:
      "Introduction to data science including data manipulation, visualization, and basic machine learning concepts.",
    prerequisites: "MATH 20A",
  },
  {
    id: "41",
    course_code: "DSC 20",
    course_name: "Programming for Data Science",
    course_units: "4",
    course_description:
      "Programming fundamentals for data science including Python, data structures, and algorithms.",
    prerequisites: "DSC 10",
  },
  {
    id: "42",
    course_code: "DSC 30",
    course_name: "Data Structures and Algorithms for Data Science",
    course_units: "4",
    course_description:
      "Data structures and algorithms specifically for data science applications.",
    prerequisites: "DSC 20",
  },
  {
    id: "43",
    course_code: "DSC 40A",
    course_name: "Theoretical Foundations of Data Science I",
    course_units: "4",
    course_description:
      "Mathematical foundations of data science including linear algebra, probability, and optimization.",
    prerequisites: "MATH 20C, DSC 20",
  },
  {
    id: "44",
    course_code: "DSC 80",
    course_name: "The Practice and Application of Data Science",
    course_units: "4",
    course_description:
      "Practical applications of data science including real-world projects and data analysis workflows.",
    prerequisites: "DSC 40A, DSC 30",
  },

  // Statistics
  {
    id: "45",
    course_code: "STAT 10",
    course_name: "Statistical Reasoning",
    course_units: "4",
    course_description:
      "Introduction to statistical reasoning including data analysis, probability, and statistical inference.",
    prerequisites: "MATH 20A",
  },
  {
    id: "46",
    course_code: "STAT 20",
    course_name: "Statistical Methods",
    course_units: "4",
    course_description:
      "Statistical methods including regression analysis, experimental design, and statistical computing.",
    prerequisites: "STAT 10",
  },
  {
    id: "47",
    course_code: "STAT 100A",
    course_name: "Introduction to Probability",
    course_units: "4",
    course_description:
      "Introduction to probability theory including random variables, distributions, and probability models.",
    prerequisites: "MATH 20C",
  },
  {
    id: "48",
    course_code: "STAT 100B",
    course_name: "Introduction to Mathematical Statistics",
    course_units: "4",
    course_description:
      "Mathematical statistics including estimation, hypothesis testing, and statistical inference.",
    prerequisites: "STAT 100A",
  },
  {
    id: "49",
    course_code: "STAT 101A",
    course_name: "Applied Statistical Methods",
    course_units: "4",
    course_description:
      "Applied statistical methods including regression, analysis of variance, and statistical modeling.",
    prerequisites: "STAT 20",
  },
  {
    id: "50",
    course_code: "STAT 101B",
    course_name: "Applied Statistical Methods",
    course_units: "4",
    course_description:
      "Advanced applied statistical methods including multivariate analysis and statistical computing.",
    prerequisites: "STAT 101A",
  },

  // Additional Computer Science Courses
  {
    id: "51",
    course_code: "CSE 11",
    course_name:
      "Introduction to Computer Science and Object-Oriented Programming: Java",
    course_units: "4",
    course_description:
      "Introduction to computer programming in Java with focus on object-oriented design principles.",
    prerequisites: "None",
  },
  {
    id: "52",
    course_code: "CSE 30",
    course_name: "Programming and Data Structures",
    course_units: "4",
    course_description:
      "Advanced programming concepts and data structures implementation in C and assembly.",
    prerequisites: "CSE 12",
  },
  {
    id: "53",
    course_code: "CSE 100",
    course_name: "Advanced Data Structures",
    course_units: "4",
    course_description:
      "Advanced data structures including trees, graphs, heaps, and algorithm analysis.",
    prerequisites: "CSE 12, CSE 21",
  },
  {
    id: "54",
    course_code: "CSE 101",
    course_name: "Design and Analysis of Algorithms",
    course_units: "4",
    course_description:
      "Design and analysis of efficient algorithms including dynamic programming, graph algorithms, and complexity theory.",
    prerequisites: "CSE 100, CSE 21",
  },
  {
    id: "55",
    course_code: "CSE 110",
    course_name: "Software Engineering",
    course_units: "4",
    course_description:
      "Software development methodologies, design patterns, and project management principles.",
    prerequisites: "CSE 100",
  },
  {
    id: "56",
    course_code: "CSE 120",
    course_name: "Computer Architecture",
    course_units: "4",
    course_description:
      "Computer architecture including processor design, memory systems, and parallel computing.",
    prerequisites: "CSE 30, CSE 140",
  },
  {
    id: "57",
    course_code: "CSE 130",
    course_name: "Programming Languages: Principles and Paradigms",
    course_units: "4",
    course_description:
      "Programming language design principles, paradigms, and implementation techniques.",
    prerequisites: "CSE 100",
  },
  {
    id: "58",
    course_code: "CSE 140",
    course_name: "Components and Design Techniques for Digital Systems",
    course_units: "4",
    course_description:
      "Digital system design including logic design, sequential circuits, and hardware description languages.",
    prerequisites: "CSE 20",
  },
  {
    id: "59",
    course_code: "CSE 141",
    course_name: "Introduction to Computer Architecture",
    course_units: "4",
    course_description:
      "Computer architecture fundamentals including instruction set design and processor organization.",
    prerequisites: "CSE 140",
  },
  {
    id: "60",
    course_code: "CSE 150",
    course_name: "Introduction to Computer Networks",
    course_units: "4",
    course_description:
      "Computer networking principles including protocols, routing, and network architecture.",
    prerequisites: "CSE 100",
  },

  // Additional Mathematics Courses
  {
    id: "61",
    course_code: "MATH 10A",
    course_name: "Calculus I",
    course_units: "4",
    course_description:
      "Differential calculus with applications to business and social sciences.",
    prerequisites: "MATH 4C or MATH 10A",
  },
  {
    id: "62",
    course_code: "MATH 10B",
    course_name: "Calculus II",
    course_units: "4",
    course_description:
      "Integral calculus with applications to business and social sciences.",
    prerequisites: "MATH 10A",
  },
  {
    id: "63",
    course_code: "MATH 10C",
    course_name: "Calculus III",
    course_units: "4",
    course_description:
      "Multivariable calculus with applications to business and social sciences.",
    prerequisites: "MATH 10B",
  },
  {
    id: "64",
    course_code: "MATH 31AH",
    course_name: "Honors Linear Algebra",
    course_units: "4",
    course_description:
      "Honors linear algebra including advanced topics in vector spaces and linear transformations.",
    prerequisites: "MATH 20B",
  },
  {
    id: "65",
    course_code: "MATH 31BH",
    course_name: "Honors Multivariable Calculus",
    course_units: "4",
    course_description:
      "Honors multivariable calculus including advanced topics in integration and vector calculus.",
    prerequisites: "MATH 31AH",
  },
  {
    id: "66",
    course_code: "MATH 103A",
    course_name: "Modern Algebra I",
    course_units: "4",
    course_description:
      "Abstract algebra including groups, rings, and fields with applications to cryptography.",
    prerequisites: "MATH 100A",
  },
  {
    id: "67",
    course_code: "MATH 103B",
    course_name: "Modern Algebra II",
    course_units: "4",
    course_description:
      "Advanced abstract algebra including Galois theory and applications to number theory.",
    prerequisites: "MATH 103A",
  },
  {
    id: "68",
    course_code: "MATH 140A",
    course_name: "Foundations of Analysis I",
    course_units: "4",
    course_description:
      "Real analysis including sequences, series, and continuity with rigorous mathematical proofs.",
    prerequisites: "MATH 100A",
  },
  {
    id: "69",
    course_code: "MATH 140B",
    course_name: "Foundations of Analysis II",
    course_units: "4",
    course_description:
      "Advanced real analysis including differentiation, integration, and measure theory.",
    prerequisites: "MATH 140A",
  },
  {
    id: "70",
    course_code: "MATH 142A",
    course_name: "Complex Analysis",
    course_units: "4",
    course_description:
      "Complex analysis including complex functions, contour integration, and residue theory.",
    prerequisites: "MATH 140B",
  },

  // Additional Economics Courses
  {
    id: "71",
    course_code: "ECON 5",
    course_name: "Data Analysis for Economists",
    course_units: "4",
    course_description:
      "Data analysis techniques for economists including statistical methods and econometric tools.",
    prerequisites: "ECON 1, MATH 20A",
  },
  {
    id: "72",
    course_code: "ECON 100B",
    course_name: "Macroeconomic Analysis",
    course_units: "4",
    course_description:
      "Upper-division macroeconomic analysis with mathematical rigor and advanced applications.",
    prerequisites: "ECON 4, MATH 20B",
  },
  {
    id: "73",
    course_code: "ECON 110A",
    course_name: "Industrial Organization",
    course_units: "4",
    course_description:
      "Industrial organization including market structure, competition policy, and antitrust economics.",
    prerequisites: "ECON 3",
  },
  {
    id: "74",
    course_code: "ECON 111",
    course_name: "Public Economics",
    course_units: "4",
    course_description:
      "Public economics including taxation, government spending, and public policy analysis.",
    prerequisites: "ECON 3",
  },
  {
    id: "75",
    course_code: "ECON 113",
    course_name: "Labor Economics",
    course_units: "4",
    course_description:
      "Labor economics including wage determination, employment, and labor market policies.",
    prerequisites: "ECON 3",
  },
  {
    id: "76",
    course_code: "ECON 120B",
    course_name: "Econometrics",
    course_units: "4",
    course_description:
      "Advanced econometrics including time series analysis, panel data, and causal inference.",
    prerequisites: "ECON 120A",
  },
  {
    id: "77",
    course_code: "ECON 130",
    course_name: "International Trade",
    course_units: "4",
    course_description:
      "International trade theory including comparative advantage, trade policy, and globalization.",
    prerequisites: "ECON 3",
  },
  {
    id: "78",
    course_code: "ECON 131",
    course_name: "International Finance",
    course_units: "4",
    course_description:
      "International finance including exchange rates, capital flows, and monetary policy.",
    prerequisites: "ECON 4",
  },
  {
    id: "79",
    course_code: "ECON 140",
    course_name: "Economic Development",
    course_units: "4",
    course_description:
      "Economic development including growth theory, poverty, and development policy.",
    prerequisites: "ECON 3",
  },
  {
    id: "80",
    course_code: "ECON 150",
    course_name: "Environmental Economics",
    course_units: "4",
    course_description:
      "Environmental economics including externalities, pollution control, and natural resource management.",
    prerequisites: "ECON 3",
  },

  // Additional Chemistry Courses
  {
    id: "81",
    course_code: "CHEM 7L",
    course_name: "General Chemistry Laboratory",
    course_units: "2",
    course_description:
      "Laboratory course accompanying general chemistry including experimental techniques and data analysis.",
    prerequisites: "CHEM 6A",
  },
  {
    id: "82",
    course_code: "CHEM 40A",
    course_name: "Organic Chemistry I",
    course_units: "4",
    course_description:
      "Organic chemistry including structure, bonding, and reactions of carbon compounds.",
    prerequisites: "CHEM 6C",
  },
  {
    id: "83",
    course_code: "CHEM 40B",
    course_name: "Organic Chemistry II",
    course_units: "4",
    course_description:
      "Advanced organic chemistry including synthesis, mechanisms, and spectroscopy.",
    prerequisites: "CHEM 40A",
  },
  {
    id: "84",
    course_code: "CHEM 40C",
    course_name: "Organic Chemistry III",
    course_units: "4",
    course_description:
      "Advanced organic chemistry including natural products, polymers, and bioorganic chemistry.",
    prerequisites: "CHEM 40B",
  },
  {
    id: "85",
    course_code: "CHEM 43A",
    course_name: "Organic Chemistry Laboratory",
    course_units: "2",
    course_description:
      "Laboratory course in organic chemistry including synthesis and characterization techniques.",
    prerequisites: "CHEM 40A",
  },
  {
    id: "86",
    course_code: "CHEM 100A",
    course_name: "Physical Chemistry I",
    course_units: "4",
    course_description:
      "Physical chemistry including thermodynamics, kinetics, and quantum mechanics.",
    prerequisites: "CHEM 6C, MATH 20C, PHYS 2A",
  },
  {
    id: "87",
    course_code: "CHEM 100B",
    course_name: "Physical Chemistry II",
    course_units: "4",
    course_description:
      "Advanced physical chemistry including spectroscopy, statistical mechanics, and molecular dynamics.",
    prerequisites: "CHEM 100A",
  },
  {
    id: "88",
    course_code: "CHEM 105A",
    course_name: "Inorganic Chemistry I",
    course_units: "4",
    course_description:
      "Inorganic chemistry including coordination chemistry, bonding, and molecular symmetry.",
    prerequisites: "CHEM 40C",
  },
  {
    id: "89",
    course_code: "CHEM 114A",
    course_name: "Biochemistry I",
    course_units: "4",
    course_description:
      "Biochemistry including protein structure, enzyme kinetics, and metabolic pathways.",
    prerequisites: "CHEM 40C, BILD 1",
  },
  {
    id: "90",
    course_code: "CHEM 114B",
    course_name: "Biochemistry II",
    course_units: "4",
    course_description:
      "Advanced biochemistry including nucleic acids, signal transduction, and molecular biology.",
    prerequisites: "CHEM 114A",
  },

  // Additional Physics Courses
  {
    id: "91",
    course_code: "PHYS 1A",
    course_name: "Physics-Mechanics",
    course_units: "4",
    course_description:
      "Physics for life sciences including mechanics, energy, and applications to biological systems.",
    prerequisites: "MATH 20A",
  },
  {
    id: "92",
    course_code: "PHYS 1B",
    course_name: "Physics-Electricity and Magnetism",
    course_units: "4",
    course_description:
      "Physics for life sciences including electricity, magnetism, and applications to biological systems.",
    prerequisites: "PHYS 1A, MATH 20B",
  },
  {
    id: "93",
    course_code: "PHYS 1C",
    course_name: "Physics-Waves, Optics, and Modern Physics",
    course_units: "4",
    course_description:
      "Physics for life sciences including waves, optics, and modern physics applications.",
    prerequisites: "PHYS 1B, MATH 20C",
  },
  {
    id: "94",
    course_code: "PHYS 2CL",
    course_name: "Physics Laboratory",
    course_units: "2",
    course_description:
      "Laboratory course in physics including experimental techniques and data analysis.",
    prerequisites: "PHYS 2A",
  },
  {
    id: "95",
    course_code: "PHYS 100A",
    course_name: "Classical Mechanics",
    course_units: "4",
    course_description:
      "Advanced classical mechanics including Lagrangian and Hamiltonian dynamics.",
    prerequisites: "PHYS 2C, MATH 20C",
  },
  {
    id: "96",
    course_code: "PHYS 100B",
    course_name: "Electricity and Magnetism",
    course_units: "4",
    course_description:
      "Advanced electricity and magnetism including Maxwell's equations and electromagnetic waves.",
    prerequisites: "PHYS 2C, MATH 20C",
  },
  {
    id: "97",
    course_code: "PHYS 100C",
    course_name: "Thermodynamics and Statistical Mechanics",
    course_units: "4",
    course_description:
      "Thermodynamics and statistical mechanics including entropy, phase transitions, and quantum statistics.",
    prerequisites: "PHYS 2C, MATH 20C",
  },
  {
    id: "98",
    course_code: "PHYS 110A",
    course_name: "Quantum Mechanics I",
    course_units: "4",
    course_description:
      "Quantum mechanics including wave functions, operators, and applications to atomic systems.",
    prerequisites: "PHYS 100B, MATH 20C",
  },
  {
    id: "99",
    course_code: "PHYS 110B",
    course_name: "Quantum Mechanics II",
    course_units: "4",
    course_description:
      "Advanced quantum mechanics including perturbation theory, scattering, and applications.",
    prerequisites: "PHYS 110A",
  },
  {
    id: "100",
    course_code: "PHYS 130A",
    course_name: "Solid State Physics",
    course_units: "4",
    course_description:
      "Solid state physics including crystal structure, electronic properties, and semiconductor physics.",
    prerequisites: "PHYS 110A",
  },

  // Additional Biology Courses
  {
    id: "101",
    course_code: "BILD 4",
    course_name: "Introductory Biology Laboratory",
    course_units: "2",
    course_description:
      "Laboratory course in biology including experimental techniques and scientific methodology.",
    prerequisites: "BILD 1",
  },
  {
    id: "102",
    course_code: "BILD 10",
    course_name: "Human Biology",
    course_units: "4",
    course_description:
      "Human biology including anatomy, physiology, and human evolution.",
    prerequisites: "None",
  },
  {
    id: "103",
    course_code: "BILD 20",
    course_name: "Human Genetics",
    course_units: "4",
    course_description:
      "Human genetics including inheritance patterns, genetic disorders, and molecular genetics.",
    prerequisites: "BILD 1",
  },
  {
    id: "104",
    course_code: "BILD 22",
    course_name: "Human Physiology",
    course_units: "4",
    course_description:
      "Human physiology including organ systems, homeostasis, and physiological regulation.",
    prerequisites: "BILD 1",
  },
  {
    id: "105",
    course_code: "BILD 26",
    course_name: "Human Anatomy",
    course_units: "4",
    course_description:
      "Human anatomy including structure and function of the human body systems.",
    prerequisites: "BILD 1",
  },
  {
    id: "106",
    course_code: "BILD 30",
    course_name: "Cell Biology",
    course_units: "4",
    course_description:
      "Cell biology including cell structure, function, and molecular mechanisms.",
    prerequisites: "BILD 1, CHEM 6A",
  },
  {
    id: "107",
    course_code: "BILD 36",
    course_name: "Developmental Biology",
    course_units: "4",
    course_description:
      "Developmental biology including embryology, morphogenesis, and developmental genetics.",
    prerequisites: "BILD 1",
  },
  {
    id: "108",
    course_code: "BILD 38",
    course_name: "Immunology",
    course_units: "4",
    course_description:
      "Immunology including immune system function, disease resistance, and immunological disorders.",
    prerequisites: "BILD 1, CHEM 6A",
  },
  {
    id: "109",
    course_code: "BILD 42",
    course_name: "Neurobiology",
    course_units: "4",
    course_description:
      "Neurobiology including nervous system structure, function, and neural mechanisms.",
    prerequisites: "BILD 1",
  },
  {
    id: "110",
    course_code: "BILD 44",
    course_name: "Cancer Biology",
    course_units: "4",
    course_description:
      "Cancer biology including oncogenesis, tumor progression, and cancer treatment strategies.",
    prerequisites: "BILD 1, CHEM 6A",
  },

  // Additional Psychology Courses
  {
    id: "111",
    course_code: "PSYC 3",
    course_name: "Introduction to Psychology",
    course_units: "4",
    course_description:
      "Introduction to psychology including social psychology, personality, and psychological disorders.",
    prerequisites: "PSYC 1",
  },
  {
    id: "112",
    course_code: "PSYC 7",
    course_name: "Statistics and Experimental Design",
    course_units: "4",
    course_description:
      "Statistics and experimental design for psychology including research methods and data analysis.",
    prerequisites: "MATH 20A",
  },
  {
    id: "113",
    course_code: "PSYC 70",
    course_name: "Introduction to Social Psychology",
    course_units: "4",
    course_description:
      "Social psychology including social cognition, attitudes, and group behavior.",
    prerequisites: "PSYC 1",
  },
  {
    id: "114",
    course_code: "PSYC 101",
    course_name: "Research Methods in Psychology",
    course_units: "4",
    course_description:
      "Research methods in psychology including experimental design, data collection, and analysis.",
    prerequisites: "PSYC 7",
  },
  {
    id: "115",
    course_code: "PSYC 102",
    course_name: "Statistical Methods in Psychology",
    course_units: "4",
    course_description:
      "Statistical methods in psychology including hypothesis testing, regression, and multivariate analysis.",
    prerequisites: "PSYC 7",
  },
  {
    id: "116",
    course_code: "PSYC 105",
    course_name: "Cognitive Psychology",
    course_units: "4",
    course_description:
      "Cognitive psychology including attention, memory, language, and problem solving.",
    prerequisites: "PSYC 1",
  },
  {
    id: "117",
    course_code: "PSYC 106",
    course_name: "Sensation and Perception",
    course_units: "4",
    course_description:
      "Sensation and perception including visual, auditory, and other sensory systems.",
    prerequisites: "PSYC 1",
  },
  {
    id: "118",
    course_code: "PSYC 107",
    course_name: "Learning and Motivation",
    course_units: "4",
    course_description:
      "Learning and motivation including classical conditioning, operant conditioning, and motivational systems.",
    prerequisites: "PSYC 1",
  },
  {
    id: "119",
    course_code: "PSYC 108",
    course_name: "Biological Psychology",
    course_units: "4",
    course_description:
      "Biological psychology including neural mechanisms, brain function, and behavior.",
    prerequisites: "PSYC 1",
  },
  {
    id: "120",
    course_code: "PSYC 109",
    course_name: "Developmental Psychology",
    course_units: "4",
    course_description:
      "Developmental psychology including cognitive, social, and emotional development across the lifespan.",
    prerequisites: "PSYC 1",
  },

  // Additional Cognitive Science Courses
  {
    id: "121",
    course_code: "COGS 14B",
    course_name: "Introduction to Statistical Analysis",
    course_units: "4",
    course_description:
      "Introduction to statistical analysis for cognitive science including probability, inference, and experimental design.",
    prerequisites: "MATH 20A",
  },
  {
    id: "122",
    course_code: "COGS 17",
    course_name: "Neurobiology of Cognition",
    course_units: "4",
    course_description:
      "Neurobiology of cognition including brain mechanisms underlying cognitive processes.",
    prerequisites: "COGS 1",
  },
  {
    id: "123",
    course_code: "COGS 18",
    course_name: "Mathematics for Cognitive Science",
    course_units: "4",
    course_description:
      "Mathematics for cognitive science including linear algebra, probability, and mathematical modeling.",
    prerequisites: "MATH 20A",
  },
  {
    id: "124",
    course_code: "COGS 100",
    course_name: "Cognitive Science Seminar",
    course_units: "4",
    course_description:
      "Seminar in cognitive science including current research topics and interdisciplinary approaches.",
    prerequisites: "COGS 1",
  },
  {
    id: "125",
    course_code: "COGS 101A",
    course_name: "Sensation and Perception",
    course_units: "4",
    course_description:
      "Sensation and perception including visual, auditory, and multisensory processing.",
    prerequisites: "COGS 1",
  },
  {
    id: "126",
    course_code: "COGS 101B",
    course_name: "Learning and Memory",
    course_units: "4",
    course_description:
      "Learning and memory including neural mechanisms, cognitive processes, and computational models.",
    prerequisites: "COGS 1",
  },
  {
    id: "127",
    course_code: "COGS 101C",
    course_name: "Language",
    course_units: "4",
    course_description:
      "Language including linguistics, psycholinguistics, and computational linguistics.",
    prerequisites: "COGS 1",
  },
  {
    id: "128",
    course_code: "COGS 102A",
    course_name: "Cognitive Neuroscience",
    course_units: "4",
    course_description:
      "Cognitive neuroscience including brain imaging, neural mechanisms, and cognitive processes.",
    prerequisites: "COGS 1",
  },
  {
    id: "129",
    course_code: "COGS 102B",
    course_name: "Computational Neuroscience",
    course_units: "4",
    course_description:
      "Computational neuroscience including neural modeling, brain computation, and artificial neural networks.",
    prerequisites: "COGS 1, MATH 20A",
  },
  {
    id: "130",
    course_code: "COGS 107A",
    course_name: "Neuroanatomy and Physiology",
    course_units: "4",
    course_description:
      "Neuroanatomy and physiology including brain structure, neural circuits, and physiological mechanisms.",
    prerequisites: "COGS 1",
  },

  // Additional Data Science Courses
  {
    id: "131",
    course_code: "DSC 40B",
    course_name: "Theoretical Foundations of Data Science II",
    course_units: "4",
    course_description:
      "Advanced theoretical foundations of data science including optimization, machine learning theory, and statistical inference.",
    prerequisites: "DSC 40A",
  },
  {
    id: "132",
    course_code: "DSC 90",
    course_name: "Undergraduate Seminar in Data Science",
    course_units: "1",
    course_description:
      "Seminar in data science including current research topics and applications.",
    prerequisites: "DSC 20",
  },
  {
    id: "133",
    course_code: "DSC 95",
    course_name: "Teaching Data Science",
    course_units: "4",
    course_description:
      "Teaching data science including pedagogical methods and curriculum development.",
    prerequisites: "DSC 40A",
  },
  {
    id: "134",
    course_code: "DSC 106",
    course_name: "Text Mining and Natural Language Processing",
    course_units: "4",
    course_description:
      "Text mining and natural language processing including text analysis, language models, and information extraction.",
    prerequisites: "DSC 40A, DSC 30",
  },
  {
    id: "135",
    course_code: "DSC 140A",
    course_name: "Data Mining and Predictive Analytics",
    course_units: "4",
    course_description:
      "Data mining and predictive analytics including classification, clustering, and predictive modeling.",
    prerequisites: "DSC 40A, DSC 30",
  },
  {
    id: "136",
    course_code: "DSC 140B",
    course_name: "Advanced Data Mining",
    course_units: "4",
    course_description:
      "Advanced data mining including ensemble methods, deep learning, and big data analytics.",
    prerequisites: "DSC 140A",
  },
  {
    id: "137",
    course_code: "DSC 148",
    course_name: "Data Science Capstone I",
    course_units: "4",
    course_description:
      "Capstone project in data science including real-world applications and project development.",
    prerequisites: "DSC 80, DSC 40A",
  },
  {
    id: "138",
    course_code: "DSC 149",
    course_name: "Data Science Capstone II",
    course_units: "4",
    course_description:
      "Continuation of data science capstone project including implementation and evaluation.",
    prerequisites: "DSC 148",
  },
  {
    id: "139",
    course_code: "DSC 167",
    course_name: "Data Science for Social Good",
    course_units: "4",
    course_description:
      "Data science for social good including applications to public policy, healthcare, and social justice.",
    prerequisites: "DSC 40A",
  },
  {
    id: "140",
    course_code: "DSC 180A",
    course_name: "Data Science Project",
    course_units: "4",
    course_description:
      "Independent data science project including research, implementation, and presentation.",
    prerequisites: "DSC 80, DSC 40A",
  },

  // Additional Statistics Courses
  {
    id: "141",
    course_code: "STAT 15",
    course_name: "Statistical Methods for Business and Economics",
    course_units: "4",
    course_description:
      "Statistical methods for business and economics including regression analysis and business applications.",
    prerequisites: "MATH 20A",
  },
  {
    id: "142",
    course_code: "STAT 25",
    course_name: "Probability and Statistics for Engineers",
    course_units: "4",
    course_description:
      "Probability and statistics for engineers including reliability analysis and engineering applications.",
    prerequisites: "MATH 20C",
  },
  {
    id: "143",
    course_code: "STAT 30",
    course_name: "Statistical Methods for the Life Sciences",
    course_units: "4",
    course_description:
      "Statistical methods for the life sciences including experimental design and biological applications.",
    prerequisites: "MATH 20A",
  },
  {
    id: "144",
    course_code: "STAT 40",
    course_name: "Statistical Methods for the Social Sciences",
    course_units: "4",
    course_description:
      "Statistical methods for the social sciences including survey methods and social science applications.",
    prerequisites: "MATH 20A",
  },
  {
    id: "145",
    course_code: "STAT 50",
    course_name: "Statistical Methods for the Physical Sciences",
    course_units: "4",
    course_description:
      "Statistical methods for the physical sciences including error analysis and physical science applications.",
    prerequisites: "MATH 20C",
  },
  {
    id: "146",
    course_code: "STAT 105A",
    course_name: "Probability Theory",
    course_units: "4",
    course_description:
      "Probability theory including random variables, distributions, and probability models.",
    prerequisites: "MATH 20C",
  },
  {
    id: "147",
    course_code: "STAT 105B",
    course_name: "Mathematical Statistics",
    course_units: "4",
    course_description:
      "Mathematical statistics including estimation, hypothesis testing, and statistical inference.",
    prerequisites: "STAT 105A",
  },
  {
    id: "148",
    course_code: "STAT 120A",
    course_name: "Regression Analysis",
    course_units: "4",
    course_description:
      "Regression analysis including linear regression, model diagnostics, and applications.",
    prerequisites: "STAT 20",
  },
  {
    id: "149",
    course_code: "STAT 120B",
    course_name: "Analysis of Variance",
    course_units: "4",
    course_description:
      "Analysis of variance including experimental design, factorial designs, and applications.",
    prerequisites: "STAT 20",
  },
  {
    id: "150",
    course_code: "STAT 130",
    course_name: "Design and Analysis of Experiments",
    course_units: "4",
    course_description:
      "Design and analysis of experiments including factorial designs, blocking, and response surface methodology.",
    prerequisites: "STAT 20",
  },

  // Additional Engineering Courses
  {
    id: "151",
    course_code: "MAE 3",
    course_name: "Introduction to Engineering Graphics and Design",
    course_units: "4",
    course_description: "Introduction to engineering graphics and design including CAD software, technical drawing, and design principles.",
    prerequisites: "None",
  },
  {
    id: "152",
    course_code: "MAE 8",
    course_name: "Maquette Design Studio",
    course_units: "4",
    course_description: "Design studio course focusing on physical modeling, prototyping, and design iteration in mechanical engineering.",
    prerequisites: "None",
  },
  {
    id: "153",
    course_code: "MAE 9",
    course_name: "Engineering Graphics and Computer-Aided Design",
    course_units: "4",
    course_description: "Engineering graphics and computer-aided design including 3D modeling, technical drawing, and design visualization.",
    prerequisites: "None",
  },
  {
    id: "154",
    course_code: "MAE 101A",
    course_name: "Mathematics for Mechanical Engineering",
    course_units: "4",
    course_description: "Mathematics for mechanical engineering including differential equations, linear algebra, and numerical methods.",
    prerequisites: "MATH 20C",
  },
  {
    id: "155",
    course_code: "MAE 101B",
    course_name: "Mathematics for Mechanical Engineering",
    course_units: "4",
    course_description: "Advanced mathematics for mechanical engineering including partial differential equations and complex analysis.",
    prerequisites: "MAE 101A",
  },
  {
    id: "156",
    course_code: "MAE 105",
    course_name: "Thermodynamics",
    course_units: "4",
    course_description: "Thermodynamics including energy conservation, entropy, and thermodynamic cycles for mechanical engineering applications.",
    prerequisites: "PHYS 2A, MATH 20C",
  },
  {
    id: "157",
    course_code: "MAE 107",
    course_name: "Heat Transfer",
    course_units: "4",
    course_description: "Heat transfer including conduction, convection, and radiation with engineering applications.",
    prerequisites: "MAE 105",
  },
  {
    id: "158",
    course_code: "MAE 108",
    course_name: "Fluid Mechanics",
    course_units: "4",
    course_description: "Fluid mechanics including fluid properties, flow analysis, and engineering applications.",
    prerequisites: "MAE 105",
  },
  {
    id: "159",
    course_code: "MAE 110A",
    course_name: "Dynamics",
    course_units: "4",
    course_description: "Dynamics including particle and rigid body dynamics, energy methods, and engineering applications.",
    prerequisites: "PHYS 2A, MATH 20C",
  },
  {
    id: "160",
    course_code: "MAE 110B",
    course_name: "Vibrations",
    course_units: "4",
    course_description: "Vibrations including free and forced vibrations, damping, and engineering applications.",
    prerequisites: "MAE 110A",
  },

  // Additional Electrical Engineering Courses
  {
    id: "161",
    course_code: "ECE 5",
    course_name: "Introduction to Electrical and Computer Engineering",
    course_units: "4",
    course_description: "Introduction to electrical and computer engineering including circuits, electronics, and computer systems.",
    prerequisites: "None",
  },
  {
    id: "162",
    course_code: "ECE 15",
    course_name: "Engineering Computation",
    course_units: "4",
    course_description: "Engineering computation including programming, numerical methods, and engineering problem solving.",
    prerequisites: "MATH 20A",
  },
  {
    id: "163",
    course_code: "ECE 25",
    course_name: "Introduction to Digital Design",
    course_units: "4",
    course_description: "Introduction to digital design including logic design, digital circuits, and computer architecture fundamentals.",
    prerequisites: "None",
  },
  {
    id: "164",
    course_code: "ECE 35",
    course_name: "Introduction to Analog Design",
    course_units: "4",
    course_description: "Introduction to analog design including circuit analysis, electronics, and analog system design.",
    prerequisites: "PHYS 2B, MATH 20C",
  },
  {
    id: "165",
    course_code: "ECE 45",
    course_name: "Circuits and Systems",
    course_units: "4",
    course_description: "Circuits and systems including circuit analysis, network theory, and system design.",
    prerequisites: "ECE 35",
  },
  {
    id: "166",
    course_code: "ECE 65",
    course_name: "Components and Circuits Laboratory",
    course_units: "2",
    course_description: "Laboratory course in electronic components and circuits including experimental techniques and circuit design.",
    prerequisites: "ECE 35",
  },
  {
    id: "167",
    course_code: "ECE 100",
    course_name: "Linear Electronic Systems",
    course_units: "4",
    course_description: "Linear electronic systems including amplifiers, filters, and analog signal processing.",
    prerequisites: "ECE 45",
  },
  {
    id: "168",
    course_code: "ECE 101",
    course_name: "Linear Systems Fundamentals",
    course_units: "4",
    course_description: "Linear systems fundamentals including system analysis, signal processing, and control theory.",
    prerequisites: "ECE 45, MATH 20C",
  },
  {
    id: "169",
    course_code: "ECE 102",
    course_name: "Signals and Systems",
    course_units: "4",
    course_description: "Signals and systems including signal analysis, system response, and digital signal processing.",
    prerequisites: "ECE 101",
  },
  {
    id: "170",
    course_code: "ECE 103",
    course_name: "Techniques in Engineering Design",
    course_units: "4",
    course_description: "Techniques in engineering design including design methodology, project management, and engineering ethics.",
    prerequisites: "ECE 100",
  },

  // Additional Business Courses
  {
    id: "171",
    course_code: "MGT 1",
    course_name: "Introduction to Management",
    course_units: "4",
    course_description: "Introduction to management including organizational behavior, leadership, and business strategy.",
    prerequisites: "None",
  },
  {
    id: "172",
    course_code: "MGT 2",
    course_name: "Introduction to Accounting",
    course_units: "4",
    course_description: "Introduction to accounting including financial statements, bookkeeping, and business financial analysis.",
    prerequisites: "None",
  },
  {
    id: "173",
    course_code: "MGT 3",
    course_name: "Introduction to Finance",
    course_units: "4",
    course_description: "Introduction to finance including financial markets, investment analysis, and corporate finance.",
    prerequisites: "MGT 2",
  },
  {
    id: "174",
    course_code: "MGT 4",
    course_name: "Introduction to Marketing",
    course_units: "4",
    course_description: "Introduction to marketing including market research, consumer behavior, and marketing strategy.",
    prerequisites: "None",
  },
  {
    id: "175",
    course_code: "MGT 5",
    course_name: "Introduction to Operations Management",
    course_units: "4",
    course_description: "Introduction to operations management including supply chain management, quality control, and process optimization.",
    prerequisites: "MATH 20A",
  },
  {
    id: "176",
    course_code: "MGT 16",
    course_name: "Managerial Accounting",
    course_units: "4",
    course_description: "Managerial accounting including cost analysis, budgeting, and decision-making tools for managers.",
    prerequisites: "MGT 2",
  },
  {
    id: "177",
    course_code: "MGT 18",
    course_name: "Managerial Finance",
    course_units: "4",
    course_description: "Managerial finance including capital budgeting, risk management, and financial decision making.",
    prerequisites: "MGT 3",
  },
  {
    id: "178",
    course_code: "MGT 45",
    course_name: "Principles of Accounting",
    course_units: "4",
    course_description: "Principles of accounting including financial accounting, managerial accounting, and accounting standards.",
    prerequisites: "None",
  },
  {
    id: "179",
    course_code: "MGT 103",
    course_name: "Product Development and Marketing",
    course_units: "4",
    course_description: "Product development and marketing including innovation, market research, and product launch strategies.",
    prerequisites: "MGT 4",
  },
  {
    id: "180",
    course_code: "MGT 112",
    course_name: "Global Business Strategy",
    course_units: "4",
    course_description: "Global business strategy including international markets, competitive analysis, and strategic planning.",
    prerequisites: "MGT 1",
  },

  // Additional Communication Courses
  {
    id: "181",
    course_code: "COMM 10",
    course_name: "Introduction to Communication",
    course_units: "4",
    course_description: "Introduction to communication including communication theory, media studies, and interpersonal communication.",
    prerequisites: "None",
  },
  {
    id: "182",
    course_code: "COMM 20",
    course_name: "Public Speaking",
    course_units: "4",
    course_description: "Public speaking including speech preparation, delivery techniques, and audience analysis.",
    prerequisites: "None",
  },
  {
    id: "183",
    course_code: "COMM 30",
    course_name: "Argumentation and Debate",
    course_units: "4",
    course_description: "Argumentation and debate including logical reasoning, evidence analysis, and persuasive communication.",
    prerequisites: "None",
  },
  {
    id: "184",
    course_code: "COMM 40",
    course_name: "Interpersonal Communication",
    course_units: "4",
    course_description: "Interpersonal communication including relationship dynamics, conflict resolution, and communication skills.",
    prerequisites: "None",
  },
  {
    id: "185",
    course_code: "COMM 50",
    course_name: "Mass Communication",
    course_units: "4",
    course_description: "Mass communication including media effects, journalism, and digital communication platforms.",
    prerequisites: "None",
  },
  {
    id: "186",
    course_code: "COMM 100A",
    course_name: "Communication Theory",
    course_units: "4",
    course_description: "Communication theory including theoretical frameworks, research methods, and communication models.",
    prerequisites: "COMM 10",
  },
  {
    id: "187",
    course_code: "COMM 100B",
    course_name: "Communication Research Methods",
    course_units: "4",
    course_description: "Communication research methods including quantitative and qualitative research, data analysis, and research design.",
    prerequisites: "COMM 100A",
  },
  {
    id: "188",
    course_code: "COMM 101A",
    course_name: "Media and Society",
    course_units: "4",
    course_description: "Media and society including media effects, cultural studies, and social impact of communication technologies.",
    prerequisites: "COMM 10",
  },
  {
    id: "189",
    course_code: "COMM 101B",
    course_name: "Digital Media and Culture",
    course_units: "4",
    course_description: "Digital media and culture including social media, digital platforms, and cultural implications of technology.",
    prerequisites: "COMM 10",
  },
  {
    id: "190",
    course_code: "COMM 102",
    course_name: "Organizational Communication",
    course_units: "4",
    course_description: "Organizational communication including workplace communication, leadership communication, and organizational culture.",
    prerequisites: "COMM 10",
  },

  // Additional Literature and Writing Courses
  {
    id: "191",
    course_code: "LIT 1",
    course_name: "Introduction to Literature",
    course_units: "4",
    course_description: "Introduction to literature including literary analysis, critical thinking, and interpretation of texts.",
    prerequisites: "None",
  },
  {
    id: "192",
    course_code: "LIT 2",
    course_name: "Introduction to Poetry",
    course_units: "4",
    course_description: "Introduction to poetry including poetic forms, analysis techniques, and creative writing.",
    prerequisites: "None",
  },
  {
    id: "193",
    course_code: "LIT 3",
    course_name: "Introduction to Drama",
    course_units: "4",
    course_description: "Introduction to drama including theatrical forms, dramatic analysis, and performance studies.",
    prerequisites: "None",
  },
  {
    id: "194",
    course_code: "LIT 4",
    course_name: "Introduction to Fiction",
    course_units: "4",
    course_description: "Introduction to fiction including narrative techniques, character development, and story structure.",
    prerequisites: "None",
  },
  {
    id: "195",
    course_code: "LIT 5",
    course_name: "Introduction to Creative Writing",
    course_units: "4",
    course_description: "Introduction to creative writing including poetry, fiction, and creative nonfiction writing techniques.",
    prerequisites: "None",
  },
  {
    id: "196",
    course_code: "LIT 87",
    course_name: "Freshman Seminar",
    course_units: "1",
    course_description: "Freshman seminar in literature including discussion of literary works and academic skills development.",
    prerequisites: "None",
  },
  {
    id: "197",
    course_code: "LIT 92",
    course_name: "Internship",
    course_units: "1-4",
    course_description: "Internship in literature including practical experience in publishing, writing, or literary organizations.",
    prerequisites: "Department approval",
  },
  {
    id: "198",
    course_code: "LIT 100",
    course_name: "Literary Theory",
    course_units: "4",
    course_description: "Literary theory including critical approaches, theoretical frameworks, and analytical methods.",
    prerequisites: "LIT 1",
  },
  {
    id: "199",
    course_code: "LIT 101",
    course_name: "Advanced Poetry Writing",
    course_units: "4",
    course_description: "Advanced poetry writing including advanced techniques, workshop critique, and publication preparation.",
    prerequisites: "LIT 2",
  },
  {
    id: "200",
    course_code: "LIT 102",
    course_name: "Advanced Fiction Writing",
    course_units: "4",
    course_description: "Advanced fiction writing including novel writing, short story development, and workshop critique.",
    prerequisites: "LIT 4",
  },
];
