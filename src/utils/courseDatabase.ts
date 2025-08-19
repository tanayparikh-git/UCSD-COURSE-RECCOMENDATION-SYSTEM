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
    course_description:
      "Introduction to engineering graphics and design including CAD software, technical drawing, and design principles.",
    prerequisites: "None",
  },
  {
    id: "152",
    course_code: "MAE 8",
    course_name: "Maquette Design Studio",
    course_units: "4",
    course_description:
      "Design studio course focusing on physical modeling, prototyping, and design iteration in mechanical engineering.",
    prerequisites: "None",
  },
  {
    id: "153",
    course_code: "MAE 9",
    course_name: "Engineering Graphics and Computer-Aided Design",
    course_units: "4",
    course_description:
      "Engineering graphics and computer-aided design including 3D modeling, technical drawing, and design visualization.",
    prerequisites: "None",
  },
  {
    id: "154",
    course_code: "MAE 101A",
    course_name: "Mathematics for Mechanical Engineering",
    course_units: "4",
    course_description:
      "Mathematics for mechanical engineering including differential equations, linear algebra, and numerical methods.",
    prerequisites: "MATH 20C",
  },
  {
    id: "155",
    course_code: "MAE 101B",
    course_name: "Mathematics for Mechanical Engineering",
    course_units: "4",
    course_description:
      "Advanced mathematics for mechanical engineering including partial differential equations and complex analysis.",
    prerequisites: "MAE 101A",
  },
  {
    id: "156",
    course_code: "MAE 105",
    course_name: "Thermodynamics",
    course_units: "4",
    course_description:
      "Thermodynamics including energy conservation, entropy, and thermodynamic cycles for mechanical engineering applications.",
    prerequisites: "PHYS 2A, MATH 20C",
  },
  {
    id: "157",
    course_code: "MAE 107",
    course_name: "Heat Transfer",
    course_units: "4",
    course_description:
      "Heat transfer including conduction, convection, and radiation with engineering applications.",
    prerequisites: "MAE 105",
  },
  {
    id: "158",
    course_code: "MAE 108",
    course_name: "Fluid Mechanics",
    course_units: "4",
    course_description:
      "Fluid mechanics including fluid properties, flow analysis, and engineering applications.",
    prerequisites: "MAE 105",
  },
  {
    id: "159",
    course_code: "MAE 110A",
    course_name: "Dynamics",
    course_units: "4",
    course_description:
      "Dynamics including particle and rigid body dynamics, energy methods, and engineering applications.",
    prerequisites: "PHYS 2A, MATH 20C",
  },
  {
    id: "160",
    course_code: "MAE 110B",
    course_name: "Vibrations",
    course_units: "4",
    course_description:
      "Vibrations including free and forced vibrations, damping, and engineering applications.",
    prerequisites: "MAE 110A",
  },

  // Additional Electrical Engineering Courses
  {
    id: "161",
    course_code: "ECE 5",
    course_name: "Introduction to Electrical and Computer Engineering",
    course_units: "4",
    course_description:
      "Introduction to electrical and computer engineering including circuits, electronics, and computer systems.",
    prerequisites: "None",
  },
  {
    id: "162",
    course_code: "ECE 15",
    course_name: "Engineering Computation",
    course_units: "4",
    course_description:
      "Engineering computation including programming, numerical methods, and engineering problem solving.",
    prerequisites: "MATH 20A",
  },
  {
    id: "163",
    course_code: "ECE 25",
    course_name: "Introduction to Digital Design",
    course_units: "4",
    course_description:
      "Introduction to digital design including logic design, digital circuits, and computer architecture fundamentals.",
    prerequisites: "None",
  },
  {
    id: "164",
    course_code: "ECE 35",
    course_name: "Introduction to Analog Design",
    course_units: "4",
    course_description:
      "Introduction to analog design including circuit analysis, electronics, and analog system design.",
    prerequisites: "PHYS 2B, MATH 20C",
  },
  {
    id: "165",
    course_code: "ECE 45",
    course_name: "Circuits and Systems",
    course_units: "4",
    course_description:
      "Circuits and systems including circuit analysis, network theory, and system design.",
    prerequisites: "ECE 35",
  },
  {
    id: "166",
    course_code: "ECE 65",
    course_name: "Components and Circuits Laboratory",
    course_units: "2",
    course_description:
      "Laboratory course in electronic components and circuits including experimental techniques and circuit design.",
    prerequisites: "ECE 35",
  },
  {
    id: "167",
    course_code: "ECE 100",
    course_name: "Linear Electronic Systems",
    course_units: "4",
    course_description:
      "Linear electronic systems including amplifiers, filters, and analog signal processing.",
    prerequisites: "ECE 45",
  },
  {
    id: "168",
    course_code: "ECE 101",
    course_name: "Linear Systems Fundamentals",
    course_units: "4",
    course_description:
      "Linear systems fundamentals including system analysis, signal processing, and control theory.",
    prerequisites: "ECE 45, MATH 20C",
  },
  {
    id: "169",
    course_code: "ECE 102",
    course_name: "Signals and Systems",
    course_units: "4",
    course_description:
      "Signals and systems including signal analysis, system response, and digital signal processing.",
    prerequisites: "ECE 101",
  },
  {
    id: "170",
    course_code: "ECE 103",
    course_name: "Techniques in Engineering Design",
    course_units: "4",
    course_description:
      "Techniques in engineering design including design methodology, project management, and engineering ethics.",
    prerequisites: "ECE 100",
  },

  // Additional Business Courses
  {
    id: "171",
    course_code: "MGT 1",
    course_name: "Introduction to Management",
    course_units: "4",
    course_description:
      "Introduction to management including organizational behavior, leadership, and business strategy.",
    prerequisites: "None",
  },
  {
    id: "172",
    course_code: "MGT 2",
    course_name: "Introduction to Accounting",
    course_units: "4",
    course_description:
      "Introduction to accounting including financial statements, bookkeeping, and business financial analysis.",
    prerequisites: "None",
  },
  {
    id: "173",
    course_code: "MGT 3",
    course_name: "Introduction to Finance",
    course_units: "4",
    course_description:
      "Introduction to finance including financial markets, investment analysis, and corporate finance.",
    prerequisites: "MGT 2",
  },
  {
    id: "174",
    course_code: "MGT 4",
    course_name: "Introduction to Marketing",
    course_units: "4",
    course_description:
      "Introduction to marketing including market research, consumer behavior, and marketing strategy.",
    prerequisites: "None",
  },
  {
    id: "175",
    course_code: "MGT 5",
    course_name: "Introduction to Operations Management",
    course_units: "4",
    course_description:
      "Introduction to operations management including supply chain management, quality control, and process optimization.",
    prerequisites: "MATH 20A",
  },
  {
    id: "176",
    course_code: "MGT 16",
    course_name: "Managerial Accounting",
    course_units: "4",
    course_description:
      "Managerial accounting including cost analysis, budgeting, and decision-making tools for managers.",
    prerequisites: "MGT 2",
  },
  {
    id: "177",
    course_code: "MGT 18",
    course_name: "Managerial Finance",
    course_units: "4",
    course_description:
      "Managerial finance including capital budgeting, risk management, and financial decision making.",
    prerequisites: "MGT 3",
  },
  {
    id: "178",
    course_code: "MGT 45",
    course_name: "Principles of Accounting",
    course_units: "4",
    course_description:
      "Principles of accounting including financial accounting, managerial accounting, and accounting standards.",
    prerequisites: "None",
  },
  {
    id: "179",
    course_code: "MGT 103",
    course_name: "Product Development and Marketing",
    course_units: "4",
    course_description:
      "Product development and marketing including innovation, market research, and product launch strategies.",
    prerequisites: "MGT 4",
  },
  {
    id: "180",
    course_code: "MGT 112",
    course_name: "Global Business Strategy",
    course_units: "4",
    course_description:
      "Global business strategy including international markets, competitive analysis, and strategic planning.",
    prerequisites: "MGT 1",
  },

  // Additional Communication Courses
  {
    id: "181",
    course_code: "COMM 10",
    course_name: "Introduction to Communication",
    course_units: "4",
    course_description:
      "Introduction to communication including communication theory, media studies, and interpersonal communication.",
    prerequisites: "None",
  },
  {
    id: "182",
    course_code: "COMM 20",
    course_name: "Public Speaking",
    course_units: "4",
    course_description:
      "Public speaking including speech preparation, delivery techniques, and audience analysis.",
    prerequisites: "None",
  },
  {
    id: "183",
    course_code: "COMM 30",
    course_name: "Argumentation and Debate",
    course_units: "4",
    course_description:
      "Argumentation and debate including logical reasoning, evidence analysis, and persuasive communication.",
    prerequisites: "None",
  },
  {
    id: "184",
    course_code: "COMM 40",
    course_name: "Interpersonal Communication",
    course_units: "4",
    course_description:
      "Interpersonal communication including relationship dynamics, conflict resolution, and communication skills.",
    prerequisites: "None",
  },
  {
    id: "185",
    course_code: "COMM 50",
    course_name: "Mass Communication",
    course_units: "4",
    course_description:
      "Mass communication including media effects, journalism, and digital communication platforms.",
    prerequisites: "None",
  },
  {
    id: "186",
    course_code: "COMM 100A",
    course_name: "Communication Theory",
    course_units: "4",
    course_description:
      "Communication theory including theoretical frameworks, research methods, and communication models.",
    prerequisites: "COMM 10",
  },
  {
    id: "187",
    course_code: "COMM 100B",
    course_name: "Communication Research Methods",
    course_units: "4",
    course_description:
      "Communication research methods including quantitative and qualitative research, data analysis, and research design.",
    prerequisites: "COMM 100A",
  },
  {
    id: "188",
    course_code: "COMM 101A",
    course_name: "Media and Society",
    course_units: "4",
    course_description:
      "Media and society including media effects, cultural studies, and social impact of communication technologies.",
    prerequisites: "COMM 10",
  },
  {
    id: "189",
    course_code: "COMM 101B",
    course_name: "Digital Media and Culture",
    course_units: "4",
    course_description:
      "Digital media and culture including social media, digital platforms, and cultural implications of technology.",
    prerequisites: "COMM 10",
  },
  {
    id: "190",
    course_code: "COMM 102",
    course_name: "Organizational Communication",
    course_units: "4",
    course_description:
      "Organizational communication including workplace communication, leadership communication, and organizational culture.",
    prerequisites: "COMM 10",
  },

  // Additional Literature and Writing Courses
  {
    id: "191",
    course_code: "LIT 1",
    course_name: "Introduction to Literature",
    course_units: "4",
    course_description:
      "Introduction to literature including literary analysis, critical thinking, and interpretation of texts.",
    prerequisites: "None",
  },
  {
    id: "192",
    course_code: "LIT 2",
    course_name: "Introduction to Poetry",
    course_units: "4",
    course_description:
      "Introduction to poetry including poetic forms, analysis techniques, and creative writing.",
    prerequisites: "None",
  },
  {
    id: "193",
    course_code: "LIT 3",
    course_name: "Introduction to Drama",
    course_units: "4",
    course_description:
      "Introduction to drama including theatrical forms, dramatic analysis, and performance studies.",
    prerequisites: "None",
  },
  {
    id: "194",
    course_code: "LIT 4",
    course_name: "Introduction to Fiction",
    course_units: "4",
    course_description:
      "Introduction to fiction including narrative techniques, character development, and story structure.",
    prerequisites: "None",
  },
  {
    id: "195",
    course_code: "LIT 5",
    course_name: "Introduction to Creative Writing",
    course_units: "4",
    course_description:
      "Introduction to creative writing including poetry, fiction, and creative nonfiction writing techniques.",
    prerequisites: "None",
  },
  {
    id: "196",
    course_code: "LIT 87",
    course_name: "Freshman Seminar",
    course_units: "1",
    course_description:
      "Freshman seminar in literature including discussion of literary works and academic skills development.",
    prerequisites: "None",
  },
  {
    id: "197",
    course_code: "LIT 92",
    course_name: "Internship",
    course_units: "1-4",
    course_description:
      "Internship in literature including practical experience in publishing, writing, or literary organizations.",
    prerequisites: "Department approval",
  },
  {
    id: "198",
    course_code: "LIT 100",
    course_name: "Literary Theory",
    course_units: "4",
    course_description:
      "Literary theory including critical approaches, theoretical frameworks, and analytical methods.",
    prerequisites: "LIT 1",
  },
  {
    id: "199",
    course_code: "LIT 101",
    course_name: "Advanced Poetry Writing",
    course_units: "4",
    course_description:
      "Advanced poetry writing including advanced techniques, workshop critique, and publication preparation.",
    prerequisites: "LIT 2",
  },
  {
    id: "200",
    course_code: "LIT 102",
    course_name: "Advanced Fiction Writing",
    course_units: "4",
    course_description:
      "Advanced fiction writing including novel writing, short story development, and workshop critique.",
    prerequisites: "LIT 4",
  },

  // Additional History Courses
  {
    id: "201",
    course_code: "HIST 1",
    course_name: "World History",
    course_units: "4",
    course_description:
      "World history including major civilizations, historical events, and global developments from ancient times to present.",
    prerequisites: "None",
  },
  {
    id: "202",
    course_code: "HIST 2",
    course_name: "United States History",
    course_units: "4",
    course_description:
      "United States history including colonial period, independence, civil war, and modern American development.",
    prerequisites: "None",
  },
  {
    id: "203",
    course_code: "HIST 3",
    course_name: "European History",
    course_units: "4",
    course_description:
      "European history including medieval period, renaissance, enlightenment, and modern European development.",
    prerequisites: "None",
  },
  {
    id: "204",
    course_code: "HIST 4",
    course_name: "Asian History",
    course_units: "4",
    course_description:
      "Asian history including Chinese, Japanese, Korean, and South Asian civilizations and developments.",
    prerequisites: "None",
  },
  {
    id: "205",
    course_code: "HIST 5",
    course_name: "Latin American History",
    course_units: "4",
    course_description:
      "Latin American history including pre-Columbian civilizations, colonial period, and modern Latin American development.",
    prerequisites: "None",
  },
  {
    id: "206",
    course_code: "HIST 100",
    course_name: "Historical Methods",
    course_units: "4",
    course_description:
      "Historical methods including research techniques, source analysis, and historical writing.",
    prerequisites: "HIST 1",
  },
  {
    id: "207",
    course_code: "HIST 101",
    course_name: "Ancient History",
    course_units: "4",
    course_description:
      "Ancient history including Egyptian, Greek, Roman, and other ancient civilizations.",
    prerequisites: "HIST 1",
  },
  {
    id: "208",
    course_code: "HIST 102",
    course_name: "Medieval History",
    course_units: "4",
    course_description:
      "Medieval history including feudalism, crusades, and medieval European society.",
    prerequisites: "HIST 1",
  },
  {
    id: "209",
    course_code: "HIST 103",
    course_name: "Modern History",
    course_units: "4",
    course_description:
      "Modern history including industrial revolution, world wars, and contemporary global developments.",
    prerequisites: "HIST 1",
  },
  {
    id: "210",
    course_code: "HIST 104",
    course_name: "Military History",
    course_units: "4",
    course_description:
      "Military history including warfare, strategy, and military technology throughout history.",
    prerequisites: "HIST 1",
  },

  // Additional Political Science Courses
  {
    id: "211",
    course_code: "POLI 1",
    course_name: "Introduction to Political Science",
    course_units: "4",
    course_description:
      "Introduction to political science including political theory, comparative politics, and international relations.",
    prerequisites: "None",
  },
  {
    id: "212",
    course_code: "POLI 2",
    course_name: "Introduction to American Politics",
    course_units: "4",
    course_description:
      "Introduction to American politics including government structure, political parties, and democratic processes.",
    prerequisites: "None",
  },
  {
    id: "213",
    course_code: "POLI 3",
    course_name: "Introduction to Comparative Politics",
    course_units: "4",
    course_description:
      "Introduction to comparative politics including political systems, institutions, and political behavior across countries.",
    prerequisites: "None",
  },
  {
    id: "214",
    course_code: "POLI 4",
    course_name: "Introduction to International Relations",
    course_units: "4",
    course_description:
      "Introduction to international relations including diplomacy, conflict, cooperation, and global governance.",
    prerequisites: "None",
  },
  {
    id: "215",
    course_code: "POLI 5",
    course_name: "Introduction to Political Theory",
    course_units: "4",
    course_description:
      "Introduction to political theory including classical and modern political thought, justice, and democracy.",
    prerequisites: "None",
  },
  {
    id: "216",
    course_code: "POLI 100",
    course_name: "Political Theory",
    course_units: "4",
    course_description:
      "Political theory including major thinkers, political ideologies, and theoretical frameworks.",
    prerequisites: "POLI 1",
  },
  {
    id: "217",
    course_code: "POLI 101",
    course_name: "American Political Institutions",
    course_units: "4",
    course_description:
      "American political institutions including Congress, presidency, judiciary, and federal bureaucracy.",
    prerequisites: "POLI 2",
  },
  {
    id: "218",
    course_code: "POLI 102",
    course_name: "Political Behavior",
    course_units: "4",
    course_description:
      "Political behavior including voting, public opinion, political participation, and political psychology.",
    prerequisites: "POLI 2",
  },
  {
    id: "219",
    course_code: "POLI 103",
    course_name: "Public Policy",
    course_units: "4",
    course_description:
      "Public policy including policy analysis, implementation, and evaluation in various policy areas.",
    prerequisites: "POLI 1",
  },
  {
    id: "220",
    course_code: "POLI 104",
    course_name: "International Security",
    course_units: "4",
    course_description:
      "International security including conflict resolution, arms control, and global security challenges.",
    prerequisites: "POLI 4",
  },

  // Additional Sociology Courses
  {
    id: "221",
    course_code: "SOC 1",
    course_name: "Introduction to Sociology",
    course_units: "4",
    course_description:
      "Introduction to sociology including social theory, social institutions, and social change.",
    prerequisites: "None",
  },
  {
    id: "222",
    course_code: "SOC 2",
    course_name: "Social Problems",
    course_units: "4",
    course_description:
      "Social problems including inequality, crime, poverty, and social justice issues.",
    prerequisites: "None",
  },
  {
    id: "223",
    course_code: "SOC 3",
    course_name: "Social Psychology",
    course_units: "4",
    course_description:
      "Social psychology including group behavior, social influence, and interpersonal relationships.",
    prerequisites: "None",
  },
  {
    id: "224",
    course_code: "SOC 4",
    course_name: "Sociology of the Family",
    course_units: "4",
    course_description:
      "Sociology of the family including family structures, relationships, and social change.",
    prerequisites: "None",
  },
  {
    id: "225",
    course_code: "SOC 5",
    course_name: "Sociology of Education",
    course_units: "4",
    course_description:
      "Sociology of education including educational inequality, school systems, and social mobility.",
    prerequisites: "None",
  },
  {
    id: "226",
    course_code: "SOC 100",
    course_name: "Classical Sociological Theory",
    course_units: "4",
    course_description:
      "Classical sociological theory including Marx, Weber, Durkheim, and other foundational theorists.",
    prerequisites: "SOC 1",
  },
  {
    id: "227",
    course_code: "SOC 101",
    course_name: "Contemporary Sociological Theory",
    course_units: "4",
    course_description:
      "Contemporary sociological theory including modern theoretical perspectives and applications.",
    prerequisites: "SOC 100",
  },
  {
    id: "228",
    course_code: "SOC 102",
    course_name: "Research Methods in Sociology",
    course_units: "4",
    course_description:
      "Research methods in sociology including quantitative and qualitative research, data analysis, and research design.",
    prerequisites: "SOC 1",
  },
  {
    id: "229",
    course_code: "SOC 103",
    course_name: "Social Inequality",
    course_units: "4",
    course_description:
      "Social inequality including class, race, gender, and other forms of social stratification.",
    prerequisites: "SOC 1",
  },
  {
    id: "230",
    course_code: "SOC 104",
    course_name: "Urban Sociology",
    course_units: "4",
    course_description:
      "Urban sociology including urban development, community studies, and urban social problems.",
    prerequisites: "SOC 1",
  },

  // Additional Anthropology Courses
  {
    id: "231",
    course_code: "ANTH 1",
    course_name: "Introduction to Anthropology",
    course_units: "4",
    course_description:
      "Introduction to anthropology including cultural anthropology, physical anthropology, archaeology, and linguistic anthropology.",
    prerequisites: "None",
  },
  {
    id: "232",
    course_code: "ANTH 2",
    course_name: "Cultural Anthropology",
    course_units: "4",
    course_description:
      "Cultural anthropology including cultural diversity, ethnography, and cross-cultural understanding.",
    prerequisites: "None",
  },
  {
    id: "233",
    course_code: "ANTH 3",
    course_name: "Physical Anthropology",
    course_units: "4",
    course_description:
      "Physical anthropology including human evolution, biological diversity, and forensic anthropology.",
    prerequisites: "None",
  },
  {
    id: "234",
    course_code: "ANTH 4",
    course_name: "Archaeology",
    course_units: "4",
    course_description:
      "Archaeology including archaeological methods, ancient civilizations, and material culture analysis.",
    prerequisites: "None",
  },
  {
    id: "235",
    course_code: "ANTH 5",
    course_name: "Linguistic Anthropology",
    course_units: "4",
    course_description:
      "Linguistic anthropology including language and culture, communication systems, and linguistic diversity.",
    prerequisites: "None",
  },
  {
    id: "236",
    course_code: "ANTH 100",
    course_name: "Anthropological Theory",
    course_units: "4",
    course_description:
      "Anthropological theory including major theoretical perspectives and their applications in anthropology.",
    prerequisites: "ANTH 1",
  },
  {
    id: "237",
    course_code: "ANTH 101",
    course_name: "Ethnographic Methods",
    course_units: "4",
    course_description:
      "Ethnographic methods including fieldwork, participant observation, and ethnographic writing.",
    prerequisites: "ANTH 2",
  },
  {
    id: "238",
    course_code: "ANTH 102",
    course_name: "Human Evolution",
    course_units: "4",
    course_description:
      "Human evolution including fossil evidence, evolutionary theory, and human biological development.",
    prerequisites: "ANTH 3",
  },
  {
    id: "239",
    course_code: "ANTH 103",
    course_name: "Archaeological Methods",
    course_units: "4",
    course_description:
      "Archaeological methods including excavation techniques, artifact analysis, and archaeological interpretation.",
    prerequisites: "ANTH 4",
  },
  {
    id: "240",
    course_code: "ANTH 104",
    course_name: "Language and Culture",
    course_units: "4",
    course_description:
      "Language and culture including linguistic relativity, language acquisition, and cultural communication patterns.",
    prerequisites: "ANTH 5",
  },

  // Additional Philosophy Courses
  {
    id: "241",
    course_code: "PHIL 1",
    course_name: "Introduction to Philosophy",
    course_units: "4",
    course_description:
      "Introduction to philosophy including logic, ethics, metaphysics, and epistemology.",
    prerequisites: "None",
  },
  {
    id: "242",
    course_code: "PHIL 2",
    course_name: "Introduction to Logic",
    course_units: "4",
    course_description:
      "Introduction to logic including formal logic, logical reasoning, and argument analysis.",
    prerequisites: "None",
  },
  {
    id: "243",
    course_code: "PHIL 3",
    course_name: "Introduction to Ethics",
    course_units: "4",
    course_description:
      "Introduction to ethics including moral theory, applied ethics, and ethical reasoning.",
    prerequisites: "None",
  },
  {
    id: "244",
    course_code: "PHIL 4",
    course_name: "Introduction to Metaphysics",
    course_units: "4",
    course_description:
      "Introduction to metaphysics including reality, existence, and fundamental questions about the nature of being.",
    prerequisites: "None",
  },
  {
    id: "245",
    course_code: "PHIL 5",
    course_name: "Introduction to Epistemology",
    course_units: "4",
    course_description:
      "Introduction to epistemology including knowledge, belief, justification, and the nature of understanding.",
    prerequisites: "None",
  },
  {
    id: "246",
    course_code: "PHIL 100",
    course_name: "Ancient Philosophy",
    course_units: "4",
    course_description:
      "Ancient philosophy including Greek and Roman philosophers, classical philosophical problems, and historical development.",
    prerequisites: "PHIL 1",
  },
  {
    id: "247",
    course_code: "PHIL 101",
    course_name: "Modern Philosophy",
    course_units: "4",
    course_description:
      "Modern philosophy including rationalism, empiricism, and major modern philosophical movements.",
    prerequisites: "PHIL 1",
  },
  {
    id: "248",
    course_code: "PHIL 102",
    course_name: "Contemporary Philosophy",
    course_units: "4",
    course_description:
      "Contemporary philosophy including analytic philosophy, continental philosophy, and current philosophical debates.",
    prerequisites: "PHIL 1",
  },
  {
    id: "249",
    course_code: "PHIL 103",
    course_name: "Philosophy of Science",
    course_units: "4",
    course_description:
      "Philosophy of science including scientific method, scientific explanation, and the nature of scientific knowledge.",
    prerequisites: "PHIL 1",
  },
  {
    id: "250",
    course_code: "PHIL 104",
    course_name: "Philosophy of Mind",
    course_units: "4",
    course_description:
      "Philosophy of mind including consciousness, mental states, and the relationship between mind and body.",
    prerequisites: "PHIL 1",
  },

  // Additional Language & Linguistics Courses
  {
    id: "251",
    course_code: "LING 1",
    course_name: "Introduction to Linguistics",
    course_units: "4",
    course_description:
      "Introduction to linguistics including language structure, phonetics, morphology, syntax, and language acquisition.",
    prerequisites: "None",
  },
  {
    id: "252",
    course_code: "LING 2",
    course_name: "Language and Society",
    course_units: "4",
    course_description:
      "Language and society including sociolinguistics, language variation, and the relationship between language and culture.",
    prerequisites: "None",
  },
  {
    id: "253",
    course_code: "LING 3",
    course_name: "Language and Mind",
    course_units: "4",
    course_description:
      "Language and mind including psycholinguistics, cognitive linguistics, and the psychology of language.",
    prerequisites: "None",
  },
  {
    id: "254",
    course_code: "LING 4",
    course_name: "Language and Technology",
    course_units: "4",
    course_description:
      "Language and technology including computational linguistics, natural language processing, and language technology applications.",
    prerequisites: "None",
  },
  {
    id: "255",
    course_code: "LING 5",
    course_name: "Language and Culture",
    course_units: "4",
    course_description:
      "Language and culture including anthropological linguistics, cultural communication, and cross-cultural language studies.",
    prerequisites: "None",
  },
  {
    id: "256",
    course_code: "LING 100",
    course_name: "Phonetics",
    course_units: "4",
    course_description:
      "Phonetics including speech sounds, phonetic transcription, and acoustic analysis of speech.",
    prerequisites: "LING 1",
  },
  {
    id: "257",
    course_code: "LING 101",
    course_name: "Phonology",
    course_units: "4",
    course_description:
      "Phonology including sound patterns, phonological rules, and theoretical approaches to sound systems.",
    prerequisites: "LING 100",
  },
  {
    id: "258",
    course_code: "LING 102",
    course_name: "Morphology",
    course_units: "4",
    course_description:
      "Morphology including word structure, morphological analysis, and theoretical approaches to word formation.",
    prerequisites: "LING 1",
  },
  {
    id: "259",
    course_code: "LING 103",
    course_name: "Syntax",
    course_units: "4",
    course_description:
      "Syntax including sentence structure, grammatical analysis, and theoretical approaches to syntax.",
    prerequisites: "LING 1",
  },
  {
    id: "260",
    course_code: "LING 104",
    course_name: "Semantics",
    course_units: "4",
    course_description:
      "Semantics including meaning, truth conditions, and theoretical approaches to linguistic meaning.",
    prerequisites: "LING 1",
  },

  // Additional Spanish Language Courses
  {
    id: "261",
    course_code: "SPAN 1",
    course_name: "Elementary Spanish I",
    course_units: "4",
    course_description:
      "Elementary Spanish I including basic grammar, vocabulary, and communication skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "262",
    course_code: "SPAN 2",
    course_name: "Elementary Spanish II",
    course_units: "4",
    course_description:
      "Elementary Spanish II including intermediate grammar, vocabulary, and communication skills.",
    prerequisites: "SPAN 1",
  },
  {
    id: "263",
    course_code: "SPAN 3",
    course_name: "Intermediate Spanish I",
    course_units: "4",
    course_description:
      "Intermediate Spanish I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "SPAN 2",
  },
  {
    id: "264",
    course_code: "SPAN 4",
    course_name: "Intermediate Spanish II",
    course_units: "4",
    course_description:
      "Intermediate Spanish II including advanced conversation, composition, and Hispanic literature.",
    prerequisites: "SPAN 3",
  },
  {
    id: "265",
    course_code: "SPAN 5",
    course_name: "Advanced Spanish",
    course_units: "4",
    course_description:
      "Advanced Spanish including advanced composition, literary analysis, and cultural studies.",
    prerequisites: "SPAN 4",
  },
  {
    id: "266",
    course_code: "SPAN 100",
    course_name: "Spanish Literature",
    course_units: "4",
    course_description:
      "Spanish literature including major works, literary analysis, and cultural context.",
    prerequisites: "SPAN 5",
  },
  {
    id: "267",
    course_code: "SPAN 101",
    course_name: "Spanish Culture",
    course_units: "4",
    course_description:
      "Spanish culture including history, art, music, and contemporary Spanish society.",
    prerequisites: "SPAN 4",
  },
  {
    id: "268",
    course_code: "SPAN 102",
    course_name: "Latin American Literature",
    course_units: "4",
    course_description:
      "Latin American literature including major works, literary movements, and cultural context.",
    prerequisites: "SPAN 5",
  },
  {
    id: "269",
    course_code: "SPAN 103",
    course_name: "Spanish Linguistics",
    course_units: "4",
    course_description:
      "Spanish linguistics including Spanish phonology, morphology, syntax, and dialectal variation.",
    prerequisites: "LING 1, SPAN 4",
  },
  {
    id: "270",
    course_code: "SPAN 104",
    course_name: "Spanish Translation",
    course_units: "4",
    course_description:
      "Spanish translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "SPAN 5",
  },

  // Additional French Language Courses
  {
    id: "271",
    course_code: "FREN 1",
    course_name: "Elementary French I",
    course_units: "4",
    course_description:
      "Elementary French I including basic grammar, vocabulary, and communication skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "272",
    course_code: "FREN 2",
    course_name: "Elementary French II",
    course_units: "4",
    course_description:
      "Elementary French II including intermediate grammar, vocabulary, and communication skills.",
    prerequisites: "FREN 1",
  },
  {
    id: "273",
    course_code: "FREN 3",
    course_name: "Intermediate French I",
    course_units: "4",
    course_description:
      "Intermediate French I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "FREN 2",
  },
  {
    id: "274",
    course_code: "FREN 4",
    course_name: "Intermediate French II",
    course_units: "4",
    course_description:
      "Intermediate French II including advanced conversation, composition, and French literature.",
    prerequisites: "FREN 3",
  },
  {
    id: "275",
    course_code: "FREN 5",
    course_name: "Advanced French",
    course_units: "4",
    course_description:
      "Advanced French including advanced composition, literary analysis, and cultural studies.",
    prerequisites: "FREN 4",
  },
  {
    id: "276",
    course_code: "FREN 100",
    course_name: "French Literature",
    course_units: "4",
    course_description:
      "French literature including major works, literary analysis, and cultural context.",
    prerequisites: "FREN 5",
  },
  {
    id: "277",
    course_code: "FREN 101",
    course_name: "French Culture",
    course_units: "4",
    course_description:
      "French culture including history, art, music, and contemporary French society.",
    prerequisites: "FREN 4",
  },
  {
    id: "278",
    course_code: "FREN 102",
    course_name: "French Cinema",
    course_units: "4",
    course_description:
      "French cinema including film analysis, French film history, and cultural context.",
    prerequisites: "FREN 4",
  },
  {
    id: "279",
    course_code: "FREN 103",
    course_name: "French Linguistics",
    course_units: "4",
    course_description:
      "French linguistics including French phonology, morphology, syntax, and dialectal variation.",
    prerequisites: "LING 1, FREN 4",
  },
  {
    id: "280",
    course_code: "FREN 104",
    course_name: "French Translation",
    course_units: "4",
    course_description:
      "French translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "FREN 5",
  },

  // Additional Music Courses
  {
    id: "281",
    course_code: "MUS 1",
    course_name: "Introduction to Music",
    course_units: "4",
    course_description:
      "Introduction to music including music theory, history, and appreciation of various musical styles.",
    prerequisites: "None",
  },
  {
    id: "282",
    course_code: "MUS 2",
    course_name: "Music Theory I",
    course_units: "4",
    course_description:
      "Music theory I including basic music notation, scales, chords, and harmonic analysis.",
    prerequisites: "None",
  },
  {
    id: "283",
    course_code: "MUS 3",
    course_name: "Music Theory II",
    course_units: "4",
    course_description:
      "Music theory II including advanced harmony, counterpoint, and musical analysis.",
    prerequisites: "MUS 2",
  },
  {
    id: "284",
    course_code: "MUS 4",
    course_name: "Music History I",
    course_units: "4",
    course_description:
      "Music history I including Western music from medieval period through classical era.",
    prerequisites: "None",
  },
  {
    id: "285",
    course_code: "MUS 5",
    course_name: "Music History II",
    course_units: "4",
    course_description:
      "Music history II including Western music from romantic period to contemporary music.",
    prerequisites: "MUS 4",
  },
  {
    id: "286",
    course_code: "MUS 6",
    course_name: "World Music",
    course_units: "4",
    course_description:
      "World music including music from various cultures, traditions, and global musical practices.",
    prerequisites: "None",
  },
  {
    id: "287",
    course_code: "MUS 7",
    course_name: "Jazz History",
    course_units: "4",
    course_description:
      "Jazz history including development of jazz, major artists, and jazz analysis.",
    prerequisites: "None",
  },
  {
    id: "288",
    course_code: "MUS 8",
    course_name: "Popular Music",
    course_units: "4",
    course_description:
      "Popular music including rock, pop, hip-hop, and contemporary popular music analysis.",
    prerequisites: "None",
  },
  {
    id: "289",
    course_code: "MUS 100",
    course_name: "Composition",
    course_units: "4",
    course_description:
      "Composition including musical composition techniques, creative writing, and musical form.",
    prerequisites: "MUS 3",
  },
  {
    id: "290",
    course_code: "MUS 101",
    course_name: "Orchestration",
    course_units: "4",
    course_description:
      "Orchestration including instrument characteristics, scoring techniques, and ensemble writing.",
    prerequisites: "MUS 3",
  },

  // Additional Visual Arts Courses
  {
    id: "291",
    course_code: "VIS 1",
    course_name: "Introduction to Visual Arts",
    course_units: "4",
    course_description:
      "Introduction to visual arts including art history, theory, and appreciation of various art forms.",
    prerequisites: "None",
  },
  {
    id: "292",
    course_code: "VIS 2",
    course_name: "Drawing I",
    course_units: "4",
    course_description:
      "Drawing I including basic drawing techniques, perspective, and observational drawing skills.",
    prerequisites: "None",
  },
  {
    id: "293",
    course_code: "VIS 3",
    course_name: "Painting I",
    course_units: "4",
    course_description:
      "Painting I including basic painting techniques, color theory, and painting fundamentals.",
    prerequisites: "VIS 2",
  },
  {
    id: "294",
    course_code: "VIS 4",
    course_name: "Sculpture I",
    course_units: "4",
    course_description:
      "Sculpture I including basic sculpting techniques, materials, and three-dimensional design.",
    prerequisites: "None",
  },
  {
    id: "295",
    course_code: "VIS 5",
    course_name: "Photography I",
    course_units: "4",
    course_description:
      "Photography I including camera techniques, composition, and digital photography fundamentals.",
    prerequisites: "None",
  },
  {
    id: "296",
    course_code: "VIS 6",
    course_name: "Digital Art",
    course_units: "4",
    course_description:
      "Digital art including digital tools, software, and creative digital media techniques.",
    prerequisites: "None",
  },
  {
    id: "297",
    course_code: "VIS 7",
    course_name: "Art History I",
    course_units: "4",
    course_description:
      "Art history I including Western art from ancient times through the Renaissance.",
    prerequisites: "None",
  },
  {
    id: "298",
    course_code: "VIS 8",
    course_name: "Art History II",
    course_units: "4",
    course_description:
      "Art history II including Western art from Baroque period to contemporary art.",
    prerequisites: "VIS 7",
  },
  {
    id: "299",
    course_code: "VIS 9",
    course_name: "Modern Art",
    course_units: "4",
    course_description:
      "Modern art including 20th century art movements, modernism, and contemporary art practices.",
    prerequisites: "VIS 7",
  },
  {
    id: "300",
    course_code: "VIS 10",
    course_name: "Contemporary Art",
    course_units: "4",
    course_description:
      "Contemporary art including current art practices, conceptual art, and contemporary art theory.",
    prerequisites: "VIS 7",
  },

  // Additional Environmental Studies Courses
  {
    id: "301",
    course_code: "ENVR 1",
    course_name: "Introduction to Environmental Studies",
    course_units: "4",
    course_description:
      "Introduction to environmental studies including environmental science, policy, and sustainability principles.",
    prerequisites: "None",
  },
  {
    id: "302",
    course_code: "ENVR 2",
    course_name: "Environmental Science",
    course_units: "4",
    course_description:
      "Environmental science including ecosystems, biodiversity, climate change, and environmental monitoring.",
    prerequisites: "None",
  },
  {
    id: "303",
    course_code: "ENVR 3",
    course_name: "Environmental Policy",
    course_units: "4",
    course_description:
      "Environmental policy including environmental law, regulations, and policy-making processes.",
    prerequisites: "None",
  },
  {
    id: "304",
    course_code: "ENVR 4",
    course_name: "Sustainability",
    course_units: "4",
    course_description:
      "Sustainability including sustainable development, renewable energy, and environmental conservation.",
    prerequisites: "None",
  },
  {
    id: "305",
    course_code: "ENVR 5",
    course_name: "Climate Change",
    course_units: "4",
    course_description:
      "Climate change including global warming, climate science, and climate change mitigation strategies.",
    prerequisites: "None",
  },
  {
    id: "306",
    course_code: "ENVR 100",
    course_name: "Environmental Ethics",
    course_units: "4",
    course_description:
      "Environmental ethics including moral philosophy, environmental values, and ethical decision-making.",
    prerequisites: "ENVR 1",
  },
  {
    id: "307",
    course_code: "ENVR 101",
    course_name: "Environmental Economics",
    course_units: "4",
    course_description:
      "Environmental economics including economic analysis of environmental issues and natural resource management.",
    prerequisites: "ECON 1",
  },
  {
    id: "308",
    course_code: "ENVR 102",
    course_name: "Environmental Justice",
    course_units: "4",
    course_description:
      "Environmental justice including social equity, environmental racism, and community environmental health.",
    prerequisites: "ENVR 1",
  },
  {
    id: "309",
    course_code: "ENVR 103",
    course_name: "Oceanography",
    course_units: "4",
    course_description:
      "Oceanography including marine science, ocean ecosystems, and ocean conservation.",
    prerequisites: "None",
  },
  {
    id: "310",
    course_code: "ENVR 104",
    course_name: "Conservation Biology",
    course_units: "4",
    course_description:
      "Conservation biology including biodiversity conservation, endangered species, and habitat protection.",
    prerequisites: "BILD 1",
  },

  // Additional Medicine & Health Courses
  {
    id: "311",
    course_code: "MED 1",
    course_name: "Introduction to Medicine",
    course_units: "4",
    course_description:
      "Introduction to medicine including medical terminology, healthcare systems, and medical ethics.",
    prerequisites: "None",
  },
  {
    id: "312",
    course_code: "MED 2",
    course_name: "Human Anatomy",
    course_units: "4",
    course_description:
      "Human anatomy including body structure, organ systems, and anatomical terminology.",
    prerequisites: "None",
  },
  {
    id: "313",
    course_code: "MED 3",
    course_name: "Human Physiology",
    course_units: "4",
    course_description:
      "Human physiology including body functions, organ systems, and physiological processes.",
    prerequisites: "MED 2",
  },
  {
    id: "314",
    course_code: "MED 4",
    course_name: "Medical Ethics",
    course_units: "4",
    course_description:
      "Medical ethics including bioethics, patient rights, and ethical decision-making in healthcare.",
    prerequisites: "None",
  },
  {
    id: "315",
    course_code: "MED 5",
    course_name: "Public Health",
    course_units: "4",
    course_description:
      "Public health including epidemiology, disease prevention, and community health promotion.",
    prerequisites: "None",
  },
  {
    id: "316",
    course_code: "MED 100",
    course_name: "Pathophysiology",
    course_units: "4",
    course_description:
      "Pathophysiology including disease mechanisms, pathology, and clinical manifestations.",
    prerequisites: "MED 3",
  },
  {
    id: "317",
    course_code: "MED 101",
    course_name: "Pharmacology",
    course_units: "4",
    course_description:
      "Pharmacology including drug mechanisms, pharmacokinetics, and therapeutic applications.",
    prerequisites: "CHEM 6A",
  },
  {
    id: "318",
    course_code: "MED 102",
    course_name: "Medical Research",
    course_units: "4",
    course_description:
      "Medical research including research methods, clinical trials, and evidence-based medicine.",
    prerequisites: "STAT 10",
  },
  {
    id: "319",
    course_code: "MED 103",
    course_name: "Global Health",
    course_units: "4",
    course_description:
      "Global health including international health issues, health disparities, and global health policy.",
    prerequisites: "MED 5",
  },
  {
    id: "320",
    course_code: "MED 104",
    course_name: "Health Psychology",
    course_units: "4",
    course_description:
      "Health psychology including psychological factors in health, illness, and healthcare.",
    prerequisites: "PSYC 1",
  },

  // Additional Education Courses
  {
    id: "321",
    course_code: "EDS 1",
    course_name: "Introduction to Education",
    course_units: "4",
    course_description:
      "Introduction to education including educational theory, teaching methods, and learning principles.",
    prerequisites: "None",
  },
  {
    id: "322",
    course_code: "EDS 2",
    course_name: "Educational Psychology",
    course_units: "4",
    course_description:
      "Educational psychology including learning theories, cognitive development, and motivation in education.",
    prerequisites: "PSYC 1",
  },
  {
    id: "323",
    course_code: "EDS 3",
    course_name: "Curriculum Development",
    course_units: "4",
    course_description:
      "Curriculum development including instructional design, assessment methods, and educational planning.",
    prerequisites: "EDS 1",
  },
  {
    id: "324",
    course_code: "EDS 4",
    course_name: "Classroom Management",
    course_units: "4",
    course_description:
      "Classroom management including behavior management, classroom organization, and student engagement.",
    prerequisites: "EDS 1",
  },
  {
    id: "325",
    course_code: "EDS 5",
    course_name: "Special Education",
    course_units: "4",
    course_description:
      "Special education including learning disabilities, inclusive education, and special needs support.",
    prerequisites: "EDS 1",
  },
  {
    id: "326",
    course_code: "EDS 100",
    course_name: "Educational Technology",
    course_units: "4",
    course_description:
      "Educational technology including digital learning tools, online education, and technology integration.",
    prerequisites: "EDS 1",
  },
  {
    id: "327",
    course_code: "EDS 101",
    course_name: "Assessment and Evaluation",
    course_units: "4",
    course_description:
      "Assessment and evaluation including testing methods, grading systems, and educational measurement.",
    prerequisites: "EDS 1",
  },
  {
    id: "328",
    course_code: "EDS 102",
    course_name: "Multicultural Education",
    course_units: "4",
    course_description:
      "Multicultural education including cultural diversity, inclusive teaching, and social justice in education.",
    prerequisites: "EDS 1",
  },
  {
    id: "329",
    course_code: "EDS 103",
    course_name: "Literacy Education",
    course_units: "4",
    course_description:
      "Literacy education including reading instruction, writing development, and language arts teaching.",
    prerequisites: "EDS 1",
  },
  {
    id: "330",
    course_code: "EDS 104",
    course_name: "Mathematics Education",
    course_units: "4",
    course_description:
      "Mathematics education including math teaching methods, mathematical thinking, and STEM education.",
    prerequisites: "MATH 10A",
  },

  // Additional Film & Media Courses
  {
    id: "331",
    course_code: "FILM 1",
    course_name: "Introduction to Film",
    course_units: "4",
    course_description:
      "Introduction to film including film history, analysis, and appreciation of cinematic art.",
    prerequisites: "None",
  },
  {
    id: "332",
    course_code: "FILM 2",
    course_name: "Film Production",
    course_units: "4",
    course_description:
      "Film production including cinematography, editing, and filmmaking techniques.",
    prerequisites: "FILM 1",
  },
  {
    id: "333",
    course_code: "FILM 3",
    course_name: "Screenwriting",
    course_units: "4",
    course_description:
      "Screenwriting including script development, storytelling, and screenplay structure.",
    prerequisites: "None",
  },
  {
    id: "334",
    course_code: "FILM 4",
    course_name: "Film History",
    course_units: "4",
    course_description:
      "Film history including major film movements, directors, and cinematic evolution.",
    prerequisites: "FILM 1",
  },
  {
    id: "335",
    course_code: "FILM 5",
    course_name: "Documentary Film",
    course_units: "4",
    course_description:
      "Documentary film including documentary production, storytelling, and social impact.",
    prerequisites: "FILM 1",
  },
  {
    id: "336",
    course_code: "FILM 100",
    course_name: "Film Theory",
    course_units: "4",
    course_description:
      "Film theory including critical analysis, film criticism, and theoretical approaches to cinema.",
    prerequisites: "FILM 1",
  },
  {
    id: "337",
    course_code: "FILM 101",
    course_name: "Digital Media",
    course_units: "4",
    course_description:
      "Digital media including digital filmmaking, multimedia production, and new media technologies.",
    prerequisites: "FILM 1",
  },
  {
    id: "338",
    course_code: "FILM 102",
    course_name: "Animation",
    course_units: "4",
    course_description:
      "Animation including animation techniques, character design, and animated storytelling.",
    prerequisites: "None",
  },
  {
    id: "339",
    course_code: "FILM 103",
    course_name: "Sound Design",
    course_units: "4",
    course_description:
      "Sound design including audio production, sound effects, and music in film.",
    prerequisites: "FILM 1",
  },
  {
    id: "340",
    course_code: "FILM 104",
    course_name: "Film Marketing",
    course_units: "4",
    course_description:
      "Film marketing including film distribution, audience analysis, and promotional strategies.",
    prerequisites: "FILM 1",
  },

  // Additional Theater & Performance Courses
  {
    id: "341",
    course_code: "TDGE 1",
    course_name: "Introduction to Theater",
    course_units: "4",
    course_description:
      "Introduction to theater including theater history, dramatic literature, and theatrical production.",
    prerequisites: "None",
  },
  {
    id: "342",
    course_code: "TDGE 2",
    course_name: "Acting I",
    course_units: "4",
    course_description:
      "Acting I including acting techniques, character development, and performance skills.",
    prerequisites: "None",
  },
  {
    id: "343",
    course_code: "TDGE 3",
    course_name: "Directing",
    course_units: "4",
    course_description:
      "Directing including stage direction, theatrical vision, and production leadership.",
    prerequisites: "TDGE 1",
  },
  {
    id: "344",
    course_code: "TDGE 4",
    course_name: "Stage Design",
    course_units: "4",
    course_description:
      "Stage design including set design, lighting design, and theatrical aesthetics.",
    prerequisites: "TDGE 1",
  },
  {
    id: "345",
    course_code: "TDGE 5",
    course_name: "Playwriting",
    course_units: "4",
    course_description:
      "Playwriting including dramatic writing, script development, and theatrical storytelling.",
    prerequisites: "None",
  },
  {
    id: "346",
    course_code: "TDGE 100",
    course_name: "Theater History",
    course_units: "4",
    course_description:
      "Theater history including dramatic traditions, theatrical movements, and cultural performance.",
    prerequisites: "TDGE 1",
  },
  {
    id: "347",
    course_code: "TDGE 101",
    course_name: "Performance Studies",
    course_units: "4",
    course_description:
      "Performance studies including performance theory, cultural performance, and embodied practice.",
    prerequisites: "TDGE 1",
  },
  {
    id: "348",
    course_code: "TDGE 102",
    course_name: "Musical Theater",
    course_units: "4",
    course_description:
      "Musical theater including musical performance, theatrical singing, and musical production.",
    prerequisites: "TDGE 1, MUS 1",
  },
  {
    id: "349",
    course_code: "TDGE 103",
    course_name: "Dance Theater",
    course_units: "4",
    course_description:
      "Dance theater including movement performance, choreography, and physical theater.",
    prerequisites: "None",
  },
  {
    id: "350",
    course_code: "TDGE 104",
    course_name: "Theater Production",
    course_units: "4",
    course_description:
      "Theater production including technical theater, stage management, and theatrical logistics.",
    prerequisites: "TDGE 1",
  },

  // Additional German Language Courses
  {
    id: "351",
    course_code: "GERM 1",
    course_name: "Elementary German I",
    course_units: "4",
    course_description:
      "Elementary German I including basic grammar, vocabulary, and communication skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "352",
    course_code: "GERM 2",
    course_name: "Elementary German II",
    course_units: "4",
    course_description:
      "Elementary German II including intermediate grammar, vocabulary, and communication skills.",
    prerequisites: "GERM 1",
  },
  {
    id: "353",
    course_code: "GERM 3",
    course_name: "Intermediate German I",
    course_units: "4",
    course_description:
      "Intermediate German I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "GERM 2",
  },
  {
    id: "354",
    course_code: "GERM 4",
    course_name: "Intermediate German II",
    course_units: "4",
    course_description:
      "Intermediate German II including advanced conversation, composition, and German literature.",
    prerequisites: "GERM 3",
  },
  {
    id: "355",
    course_code: "GERM 5",
    course_name: "Advanced German",
    course_units: "4",
    course_description:
      "Advanced German including advanced composition, literary analysis, and cultural studies.",
    prerequisites: "GERM 4",
  },
  {
    id: "356",
    course_code: "GERM 100",
    course_name: "German Literature",
    course_units: "4",
    course_description:
      "German literature including major works, literary analysis, and cultural context.",
    prerequisites: "GERM 5",
  },
  {
    id: "357",
    course_code: "GERM 101",
    course_name: "German Culture",
    course_units: "4",
    course_description:
      "German culture including history, art, music, and contemporary German society.",
    prerequisites: "GERM 4",
  },
  {
    id: "358",
    course_code: "GERM 102",
    course_name: "German Cinema",
    course_units: "4",
    course_description:
      "German cinema including film analysis, German film history, and cultural context.",
    prerequisites: "GERM 4",
  },
  {
    id: "359",
    course_code: "GERM 103",
    course_name: "German Linguistics",
    course_units: "4",
    course_description:
      "German linguistics including German phonology, morphology, syntax, and dialectal variation.",
    prerequisites: "LING 1, GERM 4",
  },
  {
    id: "360",
    course_code: "GERM 104",
    course_name: "German Translation",
    course_units: "4",
    course_description:
      "German translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "GERM 5",
  },

  // Additional Chinese Language Courses
  {
    id: "361",
    course_code: "CHIN 1",
    course_name: "Elementary Chinese I",
    course_units: "4",
    course_description:
      "Elementary Chinese I including basic grammar, vocabulary, and communication skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "362",
    course_code: "CHIN 2",
    course_name: "Elementary Chinese II",
    course_units: "4",
    course_description:
      "Elementary Chinese II including intermediate grammar, vocabulary, and communication skills.",
    prerequisites: "CHIN 1",
  },
  {
    id: "363",
    course_code: "CHIN 3",
    course_name: "Intermediate Chinese I",
    course_units: "4",
    course_description:
      "Intermediate Chinese I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "CHIN 2",
  },
  {
    id: "364",
    course_code: "CHIN 4",
    course_name: "Intermediate Chinese II",
    course_units: "4",
    course_description:
      "Intermediate Chinese II including advanced conversation, composition, and Chinese literature.",
    prerequisites: "CHIN 3",
  },
  {
    id: "365",
    course_code: "CHIN 5",
    course_name: "Advanced Chinese",
    course_units: "4",
    course_description:
      "Advanced Chinese including advanced composition, literary analysis, and cultural studies.",
    prerequisites: "CHIN 4",
  },
  {
    id: "366",
    course_code: "CHIN 100",
    course_name: "Chinese Literature",
    course_units: "4",
    course_description:
      "Chinese literature including major works, literary analysis, and cultural context.",
    prerequisites: "CHIN 5",
  },
  {
    id: "367",
    course_code: "CHIN 101",
    course_name: "Chinese Culture",
    course_units: "4",
    course_description:
      "Chinese culture including history, art, philosophy, and contemporary Chinese society.",
    prerequisites: "CHIN 4",
  },
  {
    id: "368",
    course_code: "CHIN 102",
    course_name: "Chinese Calligraphy",
    course_units: "4",
    course_description:
      "Chinese calligraphy including brush techniques, character writing, and artistic expression.",
    prerequisites: "CHIN 2",
  },
  {
    id: "369",
    course_code: "CHIN 103",
    course_name: "Chinese Linguistics",
    course_units: "4",
    course_description:
      "Chinese linguistics including Chinese phonology, morphology, syntax, and dialectal variation.",
    prerequisites: "LING 1, CHIN 4",
  },
  {
    id: "370",
    course_code: "CHIN 104",
    course_name: "Chinese Translation",
    course_units: "4",
    course_description:
      "Chinese translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "CHIN 5",
  },

  // Additional Japanese Language Courses
  {
    id: "371",
    course_code: "JAPN 1",
    course_name: "Elementary Japanese I",
    course_units: "4",
    course_description:
      "Elementary Japanese I including basic grammar, vocabulary, and communication skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "372",
    course_code: "JAPN 2",
    course_name: "Elementary Japanese II",
    course_units: "4",
    course_description:
      "Elementary Japanese II including intermediate grammar, vocabulary, and communication skills.",
    prerequisites: "JAPN 1",
  },
  {
    id: "373",
    course_code: "JAPN 3",
    course_name: "Intermediate Japanese I",
    course_units: "4",
    course_description:
      "Intermediate Japanese I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "JAPN 2",
  },
  {
    id: "374",
    course_code: "JAPN 4",
    course_name: "Intermediate Japanese II",
    course_units: "4",
    course_description:
      "Intermediate Japanese II including advanced conversation, composition, and Japanese literature.",
    prerequisites: "JAPN 3",
  },
  {
    id: "375",
    course_code: "JAPN 5",
    course_name: "Advanced Japanese",
    course_units: "4",
    course_description:
      "Advanced Japanese including advanced composition, literary analysis, and cultural studies.",
    prerequisites: "JAPN 4",
  },
  {
    id: "376",
    course_code: "JAPN 100",
    course_name: "Japanese Literature",
    course_units: "4",
    course_description:
      "Japanese literature including major works, literary analysis, and cultural context.",
    prerequisites: "JAPN 5",
  },
  {
    id: "377",
    course_code: "JAPN 101",
    course_name: "Japanese Culture",
    course_units: "4",
    course_description:
      "Japanese culture including history, art, philosophy, and contemporary Japanese society.",
    prerequisites: "JAPN 4",
  },
  {
    id: "378",
    course_code: "JAPN 102",
    course_name: "Japanese Cinema",
    course_units: "4",
    course_description:
      "Japanese cinema including film analysis, Japanese film history, and cultural context.",
    prerequisites: "JAPN 4",
  },
  {
    id: "379",
    course_code: "JAPN 103",
    course_name: "Japanese Linguistics",
    course_units: "4",
    course_description:
      "Japanese linguistics including Japanese phonology, morphology, syntax, and dialectal variation.",
    prerequisites: "LING 1, JAPN 4",
  },
  {
    id: "380",
    course_code: "JAPN 104",
    course_name: "Japanese Translation",
    course_units: "4",
    course_description:
      "Japanese translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "JAPN 5",
  },

  // Additional Korean Language Courses
  {
    id: "381",
    course_code: "KORE 1",
    course_name: "Elementary Korean I",
    course_units: "4",
    course_description:
      "Elementary Korean I including basic grammar, vocabulary, and communication skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "382",
    course_code: "KORE 2",
    course_name: "Elementary Korean II",
    course_units: "4",
    course_description:
      "Elementary Korean II including intermediate grammar, vocabulary, and communication skills.",
    prerequisites: "KORE 1",
  },
  {
    id: "383",
    course_code: "KORE 3",
    course_name: "Intermediate Korean I",
    course_units: "4",
    course_description:
      "Intermediate Korean I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "KORE 2",
  },
  {
    id: "384",
    course_code: "KORE 4",
    course_name: "Intermediate Korean II",
    course_units: "4",
    course_description:
      "Intermediate Korean II including advanced conversation, composition, and Korean literature.",
    prerequisites: "KORE 3",
  },
  {
    id: "385",
    course_code: "KORE 5",
    course_name: "Advanced Korean",
    course_units: "4",
    course_description:
      "Advanced Korean including advanced composition, literary analysis, and cultural studies.",
    prerequisites: "KORE 4",
  },
  {
    id: "386",
    course_code: "KORE 100",
    course_name: "Korean Literature",
    course_units: "4",
    course_description:
      "Korean literature including major works, literary analysis, and cultural context.",
    prerequisites: "KORE 5",
  },
  {
    id: "387",
    course_code: "KORE 101",
    course_name: "Korean Culture",
    course_units: "4",
    course_description:
      "Korean culture including history, art, music, and contemporary Korean society.",
    prerequisites: "KORE 4",
  },
  {
    id: "388",
    course_code: "KORE 102",
    course_name: "Korean Cinema",
    course_units: "4",
    course_description:
      "Korean cinema including film analysis, Korean film history, and cultural context.",
    prerequisites: "KORE 4",
  },
  {
    id: "389",
    course_code: "KORE 103",
    course_name: "Korean Linguistics",
    course_units: "4",
    course_description:
      "Korean linguistics including Korean phonology, morphology, syntax, and dialectal variation.",
    prerequisites: "LING 1, KORE 4",
  },
  {
    id: "390",
    course_code: "KORE 104",
    course_name: "Korean Translation",
    course_units: "4",
    course_description:
      "Korean translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "KORE 5",
  },

  // Additional Italian Language Courses
  {
    id: "391",
    course_code: "ITAL 1",
    course_name: "Elementary Italian I",
    course_units: "4",
    course_description:
      "Elementary Italian I including basic grammar, vocabulary, and communication skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "392",
    course_code: "ITAL 2",
    course_name: "Elementary Italian II",
    course_units: "4",
    course_description:
      "Elementary Italian II including intermediate grammar, vocabulary, and communication skills.",
    prerequisites: "ITAL 1",
  },
  {
    id: "393",
    course_code: "ITAL 3",
    course_name: "Intermediate Italian I",
    course_units: "4",
    course_description:
      "Intermediate Italian I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "ITAL 2",
  },
  {
    id: "394",
    course_code: "ITAL 4",
    course_name: "Intermediate Italian II",
    course_units: "4",
    course_description:
      "Intermediate Italian II including advanced conversation, composition, and Italian literature.",
    prerequisites: "ITAL 3",
  },
  {
    id: "395",
    course_code: "ITAL 5",
    course_name: "Advanced Italian",
    course_units: "4",
    course_description:
      "Advanced Italian including advanced composition, literary analysis, and cultural studies.",
    prerequisites: "ITAL 4",
  },
  {
    id: "396",
    course_code: "ITAL 100",
    course_name: "Italian Literature",
    course_units: "4",
    course_description:
      "Italian literature including major works, literary analysis, and cultural context.",
    prerequisites: "ITAL 5",
  },
  {
    id: "397",
    course_code: "ITAL 101",
    course_name: "Italian Culture",
    course_units: "4",
    course_description:
      "Italian culture including history, art, music, and contemporary Italian society.",
    prerequisites: "ITAL 4",
  },
  {
    id: "398",
    course_code: "ITAL 102",
    course_name: "Italian Cinema",
    course_units: "4",
    course_description:
      "Italian cinema including film analysis, Italian film history, and cultural context.",
    prerequisites: "ITAL 4",
  },
  {
    id: "399",
    course_code: "ITAL 103",
    course_name: "Italian Linguistics",
    course_units: "4",
    course_description:
      "Italian linguistics including Italian phonology, morphology, syntax, and dialectal variation.",
    prerequisites: "LING 1, ITAL 4",
  },
  {
    id: "400",
    course_code: "ITAL 104",
    course_name: "Italian Translation",
    course_units: "4",
    course_description:
      "Italian translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "ITAL 5",
  },

  // Additional Russian Language Courses
  {
    id: "401",
    course_code: "RUSS 1",
    course_name: "Elementary Russian I",
    course_units: "4",
    course_description:
      "Elementary Russian I including basic grammar, vocabulary, and communication skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "402",
    course_code: "RUSS 2",
    course_name: "Elementary Russian II",
    course_units: "4",
    course_description:
      "Elementary Russian II including intermediate grammar, vocabulary, and communication skills.",
    prerequisites: "RUSS 1",
  },
  {
    id: "403",
    course_code: "RUSS 3",
    course_name: "Intermediate Russian I",
    course_units: "4",
    course_description:
      "Intermediate Russian I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "RUSS 2",
  },
  {
    id: "404",
    course_code: "RUSS 4",
    course_name: "Intermediate Russian II",
    course_units: "4",
    course_description:
      "Intermediate Russian II including advanced conversation, composition, and Russian literature.",
    prerequisites: "RUSS 3",
  },
  {
    id: "405",
    course_code: "RUSS 5",
    course_name: "Advanced Russian",
    course_units: "4",
    course_description:
      "Advanced Russian including advanced composition, literary analysis, and cultural studies.",
    prerequisites: "RUSS 4",
  },
  {
    id: "406",
    course_code: "RUSS 100",
    course_name: "Russian Literature",
    course_units: "4",
    course_description:
      "Russian literature including major works, literary analysis, and cultural context.",
    prerequisites: "RUSS 5",
  },
  {
    id: "407",
    course_code: "RUSS 101",
    course_name: "Russian Culture",
    course_units: "4",
    course_description:
      "Russian culture including history, art, music, and contemporary Russian society.",
    prerequisites: "RUSS 4",
  },
  {
    id: "408",
    course_code: "RUSS 102",
    course_name: "Russian Cinema",
    course_units: "4",
    course_description:
      "Russian cinema including film analysis, Russian film history, and cultural context.",
    prerequisites: "RUSS 4",
  },
  {
    id: "409",
    course_code: "RUSS 103",
    course_name: "Russian Linguistics",
    course_units: "4",
    course_description:
      "Russian linguistics including Russian phonology, morphology, syntax, and dialectal variation.",
    prerequisites: "LING 1, RUSS 4",
  },
  {
    id: "410",
    course_code: "RUSS 104",
    course_name: "Russian Translation",
    course_units: "4",
    course_description:
      "Russian translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "RUSS 5",
  },

  // Additional Arabic Language Courses
  {
    id: "411",
    course_code: "ARAB 1",
    course_name: "Elementary Arabic I",
    course_units: "4",
    course_description:
      "Elementary Arabic I including basic grammar, vocabulary, and communication skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "412",
    course_code: "ARAB 2",
    course_name: "Elementary Arabic II",
    course_units: "4",
    course_description:
      "Elementary Arabic II including intermediate grammar, vocabulary, and communication skills.",
    prerequisites: "ARAB 1",
  },
  {
    id: "413",
    course_code: "ARAB 3",
    course_name: "Intermediate Arabic I",
    course_units: "4",
    course_description:
      "Intermediate Arabic I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "ARAB 2",
  },
  {
    id: "414",
    course_code: "ARAB 4",
    course_name: "Intermediate Arabic II",
    course_units: "4",
    course_description:
      "Intermediate Arabic II including advanced conversation, composition, and Arabic literature.",
    prerequisites: "ARAB 3",
  },
  {
    id: "415",
    course_code: "ARAB 5",
    course_name: "Advanced Arabic",
    course_units: "4",
    course_description:
      "Advanced Arabic including advanced composition, literary analysis, and cultural studies.",
    prerequisites: "ARAB 4",
  },
  {
    id: "416",
    course_code: "ARAB 100",
    course_name: "Arabic Literature",
    course_units: "4",
    course_description:
      "Arabic literature including major works, literary analysis, and cultural context.",
    prerequisites: "ARAB 5",
  },
  {
    id: "417",
    course_code: "ARAB 101",
    course_name: "Arabic Culture",
    course_units: "4",
    course_description:
      "Arabic culture including history, art, philosophy, and contemporary Arabic society.",
    prerequisites: "ARAB 4",
  },
  {
    id: "418",
    course_code: "ARAB 102",
    course_name: "Islamic Studies",
    course_units: "4",
    course_description:
      "Islamic studies including Islamic history, theology, and cultural practices.",
    prerequisites: "ARAB 3",
  },
  {
    id: "419",
    course_code: "ARAB 103",
    course_name: "Arabic Linguistics",
    course_units: "4",
    course_description:
      "Arabic linguistics including Arabic phonology, morphology, syntax, and dialectal variation.",
    prerequisites: "LING 1, ARAB 4",
  },
  {
    id: "420",
    course_code: "ARAB 104",
    course_name: "Arabic Translation",
    course_units: "4",
    course_description:
      "Arabic translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "ARAB 5",
  },

  // Additional Bioengineering Courses
  {
    id: "421",
    course_code: "BENG 1",
    course_name: "Introduction to Bioengineering",
    course_units: "4",
    course_description:
      "Introduction to bioengineering including biological systems, engineering principles, and biomedical applications.",
    prerequisites: "None",
  },
  {
    id: "422",
    course_code: "BENG 2",
    course_name: "Biomechanics",
    course_units: "4",
    course_description:
      "Biomechanics including mechanical properties of biological tissues, movement analysis, and medical device design.",
    prerequisites: "PHYS 2A",
  },
  {
    id: "423",
    course_code: "BENG 3",
    course_name: "Biomaterials",
    course_units: "4",
    course_description:
      "Biomaterials including material properties, biocompatibility, and medical implant design.",
    prerequisites: "CHEM 6A",
  },
  {
    id: "424",
    course_code: "BENG 4",
    course_name: "Biomedical Imaging",
    course_units: "4",
    course_description:
      "Biomedical imaging including medical imaging techniques, image processing, and diagnostic applications.",
    prerequisites: "PHYS 2A",
  },
  {
    id: "425",
    course_code: "BENG 5",
    course_name: "Tissue Engineering",
    course_units: "4",
    course_description:
      "Tissue engineering including cell culture, scaffold design, and regenerative medicine applications.",
    prerequisites: "BILD 1",
  },
  {
    id: "426",
    course_code: "BENG 100",
    course_name: "Medical Device Design",
    course_units: "4",
    course_description:
      "Medical device design including design principles, regulatory requirements, and clinical applications.",
    prerequisites: "BENG 1",
  },
  {
    id: "427",
    course_code: "BENG 101",
    course_name: "Biomedical Signal Processing",
    course_units: "4",
    course_description:
      "Biomedical signal processing including signal analysis, filtering, and physiological monitoring.",
    prerequisites: "ECE 35",
  },
  {
    id: "428",
    course_code: "BENG 102",
    course_name: "Drug Delivery Systems",
    course_units: "4",
    course_description:
      "Drug delivery systems including controlled release, targeting strategies, and pharmaceutical applications.",
    prerequisites: "CHEM 6A",
  },
  {
    id: "429",
    course_code: "BENG 103",
    course_name: "Neural Engineering",
    course_units: "4",
    course_description:
      "Neural engineering including neural interfaces, brain-computer interfaces, and neuroprosthetics.",
    prerequisites: "BENG 1",
  },
  {
    id: "430",
    course_code: "BENG 104",
    course_name: "Biomedical Ethics",
    course_units: "4",
    course_description:
      "Biomedical ethics including ethical issues in medical technology, research ethics, and patient rights.",
    prerequisites: "None",
  },

  // Additional Nanoengineering Courses
  {
    id: "431",
    course_code: "NANO 1",
    course_name: "Introduction to Nanoengineering",
    course_units: "4",
    course_description:
      "Introduction to nanoengineering including nanotechnology principles, nanoscale phenomena, and engineering applications.",
    prerequisites: "None",
  },
  {
    id: "432",
    course_code: "NANO 2",
    course_name: "Nanomaterials",
    course_units: "4",
    course_description:
      "Nanomaterials including nanoparticle synthesis, characterization, and material properties at the nanoscale.",
    prerequisites: "CHEM 6A",
  },
  {
    id: "433",
    course_code: "NANO 3",
    course_name: "Nanofabrication",
    course_units: "4",
    course_description:
      "Nanofabrication including lithography techniques, nanoscale patterning, and device fabrication.",
    prerequisites: "NANO 1",
  },
  {
    id: "434",
    course_code: "NANO 4",
    course_name: "Nanophotonics",
    course_units: "4",
    course_description:
      "Nanophotonics including light-matter interactions at the nanoscale, plasmonics, and optical devices.",
    prerequisites: "PHYS 2A",
  },
  {
    id: "435",
    course_code: "NANO 5",
    course_name: "Nanobiotechnology",
    course_units: "4",
    course_description:
      "Nanobiotechnology including biological applications of nanotechnology, biosensors, and nanomedicine.",
    prerequisites: "BILD 1",
  },
  {
    id: "436",
    course_code: "NANO 100",
    course_name: "Quantum Nanoscience",
    course_units: "4",
    course_description:
      "Quantum nanoscience including quantum effects at the nanoscale, quantum dots, and quantum computing applications.",
    prerequisites: "PHYS 2A",
  },
  {
    id: "437",
    course_code: "NANO 101",
    course_name: "Nanoelectronics",
    course_units: "4",
    course_description:
      "Nanoelectronics including nanoscale electronic devices, quantum electronics, and molecular electronics.",
    prerequisites: "ECE 35",
  },
  {
    id: "438",
    course_code: "NANO 102",
    course_name: "Nanomechanics",
    course_units: "4",
    course_description:
      "Nanomechanics including mechanical properties at the nanoscale, atomic force microscopy, and nanomechanical devices.",
    prerequisites: "MAE 3",
  },
  {
    id: "439",
    course_code: "NANO 103",
    course_name: "Nanoscale Characterization",
    course_units: "4",
    course_description:
      "Nanoscale characterization including microscopy techniques, spectroscopy, and analytical methods for nanomaterials.",
    prerequisites: "NANO 1",
  },
  {
    id: "440",
    course_code: "NANO 104",
    course_name: "Nanotechnology Applications",
    course_units: "4",
    course_description:
      "Nanotechnology applications including commercial applications, environmental nanotechnology, and energy applications.",
    prerequisites: "NANO 1",
  },

  // Additional International Relations Courses
  {
    id: "441",
    course_code: "IRGN 1",
    course_name: "Introduction to International Relations",
    course_units: "4",
    course_description:
      "Introduction to international relations including global politics, international organizations, and diplomatic relations.",
    prerequisites: "None",
  },
  {
    id: "442",
    course_code: "IRGN 2",
    course_name: "Global Politics",
    course_units: "4",
    course_description:
      "Global politics including international power dynamics, global governance, and political systems.",
    prerequisites: "IRGN 1",
  },
  {
    id: "443",
    course_code: "IRGN 3",
    course_name: "International Law",
    course_units: "4",
    course_description:
      "International law including legal frameworks, treaties, and international dispute resolution.",
    prerequisites: "IRGN 1",
  },
  {
    id: "444",
    course_code: "IRGN 4",
    course_name: "Diplomacy",
    course_units: "4",
    course_description:
      "Diplomacy including diplomatic practices, negotiation strategies, and international communication.",
    prerequisites: "IRGN 1",
  },
  {
    id: "445",
    course_code: "IRGN 5",
    course_name: "International Economics",
    course_units: "4",
    course_description:
      "International economics including global trade, international finance, and economic development.",
    prerequisites: "ECON 1",
  },
  {
    id: "446",
    course_code: "IRGN 100",
    course_name: "Conflict Resolution",
    course_units: "4",
    course_description:
      "Conflict resolution including peacebuilding, mediation techniques, and international conflict management.",
    prerequisites: "IRGN 1",
  },
  {
    id: "447",
    course_code: "IRGN 101",
    course_name: "Human Rights",
    course_units: "4",
    course_description:
      "Human rights including international human rights law, advocacy, and human rights protection.",
    prerequisites: "IRGN 1",
  },
  {
    id: "448",
    course_code: "IRGN 102",
    course_name: "Global Security",
    course_units: "4",
    course_description:
      "Global security including security threats, defense policies, and international security cooperation.",
    prerequisites: "IRGN 1",
  },
  {
    id: "449",
    course_code: "IRGN 103",
    course_name: "International Development",
    course_units: "4",
    course_description:
      "International development including development theory, aid programs, and sustainable development goals.",
    prerequisites: "IRGN 1",
  },
  {
    id: "450",
    course_code: "IRGN 104",
    course_name: "Regional Studies",
    course_units: "4",
    course_description:
      "Regional studies including area studies, regional politics, and cultural understanding of specific regions.",
    prerequisites: "IRGN 1",
  },

  // Additional Portuguese Language Courses
  {
    id: "451",
    course_code: "PORT 1",
    course_name: "Elementary Portuguese I",
    course_units: "4",
    course_description:
      "Elementary Portuguese I including basic grammar, vocabulary, and communication skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "452",
    course_code: "PORT 2",
    course_name: "Elementary Portuguese II",
    course_units: "4",
    course_description:
      "Elementary Portuguese II including intermediate grammar, vocabulary, and communication skills.",
    prerequisites: "PORT 1",
  },
  {
    id: "453",
    course_code: "PORT 3",
    course_name: "Intermediate Portuguese I",
    course_units: "4",
    course_description:
      "Intermediate Portuguese I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "PORT 2",
  },
  {
    id: "454",
    course_code: "PORT 4",
    course_name: "Intermediate Portuguese II",
    course_units: "4",
    course_description:
      "Intermediate Portuguese II including advanced conversation, composition, and Portuguese literature.",
    prerequisites: "PORT 3",
  },
  {
    id: "455",
    course_code: "PORT 5",
    course_name: "Advanced Portuguese",
    course_units: "4",
    course_description:
      "Advanced Portuguese including advanced composition, literary analysis, and cultural studies.",
    prerequisites: "PORT 4",
  },
  {
    id: "456",
    course_code: "PORT 100",
    course_name: "Portuguese Literature",
    course_units: "4",
    course_description:
      "Portuguese literature including major works, literary analysis, and cultural context.",
    prerequisites: "PORT 5",
  },
  {
    id: "457",
    course_code: "PORT 101",
    course_name: "Portuguese Culture",
    course_units: "4",
    course_description:
      "Portuguese culture including history, art, music, and contemporary Portuguese society.",
    prerequisites: "PORT 4",
  },
  {
    id: "458",
    course_code: "PORT 102",
    course_name: "Brazilian Literature",
    course_units: "4",
    course_description:
      "Brazilian literature including major works, literary analysis, and cultural context.",
    prerequisites: "PORT 5",
  },
  {
    id: "459",
    course_code: "PORT 103",
    course_name: "Portuguese Linguistics",
    course_units: "4",
    course_description:
      "Portuguese linguistics including Portuguese phonology, morphology, syntax, and dialectal variation.",
    prerequisites: "LING 1, PORT 4",
  },
  {
    id: "460",
    course_code: "PORT 104",
    course_name: "Portuguese Translation",
    course_units: "4",
    course_description:
      "Portuguese translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "PORT 5",
  },

  // Additional Hebrew Language Courses
  {
    id: "461",
    course_code: "HEBR 1",
    course_name: "Elementary Hebrew I",
    course_units: "4",
    course_description:
      "Elementary Hebrew I including basic grammar, vocabulary, and communication skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "462",
    course_code: "HEBR 2",
    course_name: "Elementary Hebrew II",
    course_units: "4",
    course_description:
      "Elementary Hebrew II including intermediate grammar, vocabulary, and communication skills.",
    prerequisites: "HEBR 1",
  },
  {
    id: "463",
    course_code: "HEBR 3",
    course_name: "Intermediate Hebrew I",
    course_units: "4",
    course_description:
      "Intermediate Hebrew I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "HEBR 2",
  },
  {
    id: "464",
    course_code: "HEBR 4",
    course_name: "Intermediate Hebrew II",
    course_units: "4",
    course_description:
      "Intermediate Hebrew II including advanced conversation, composition, and Hebrew literature.",
    prerequisites: "HEBR 3",
  },
  {
    id: "465",
    course_code: "HEBR 5",
    course_name: "Advanced Hebrew",
    course_units: "4",
    course_description:
      "Advanced Hebrew including advanced composition, literary analysis, and cultural studies.",
    prerequisites: "HEBR 4",
  },
  {
    id: "466",
    course_code: "HEBR 100",
    course_name: "Hebrew Literature",
    course_units: "4",
    course_description:
      "Hebrew literature including major works, literary analysis, and cultural context.",
    prerequisites: "HEBR 5",
  },
  {
    id: "467",
    course_code: "HEBR 101",
    course_name: "Hebrew Culture",
    course_units: "4",
    course_description:
      "Hebrew culture including history, art, music, and contemporary Hebrew society.",
    prerequisites: "HEBR 4",
  },
  {
    id: "468",
    course_code: "HEBR 102",
    course_name: "Biblical Hebrew",
    course_units: "4",
    course_description:
      "Biblical Hebrew including ancient texts, religious literature, and historical language study.",
    prerequisites: "HEBR 3",
  },
  {
    id: "469",
    course_code: "HEBR 103",
    course_name: "Hebrew Linguistics",
    course_units: "4",
    course_description:
      "Hebrew linguistics including Hebrew phonology, morphology, syntax, and dialectal variation.",
    prerequisites: "LING 1, HEBR 4",
  },
  {
    id: "470",
    course_code: "HEBR 104",
    course_name: "Hebrew Translation",
    course_units: "4",
    course_description:
      "Hebrew translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "HEBR 5",
  },

  // Additional Latin Language Courses
  {
    id: "471",
    course_code: "LATN 1",
    course_name: "Elementary Latin I",
    course_units: "4",
    course_description:
      "Elementary Latin I including basic grammar, vocabulary, and reading skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "472",
    course_code: "LATN 2",
    course_name: "Elementary Latin II",
    course_units: "4",
    course_description:
      "Elementary Latin II including intermediate grammar, vocabulary, and reading skills.",
    prerequisites: "LATN 1",
  },
  {
    id: "473",
    course_code: "LATN 3",
    course_name: "Intermediate Latin I",
    course_units: "4",
    course_description:
      "Intermediate Latin I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "LATN 2",
  },
  {
    id: "474",
    course_code: "LATN 4",
    course_name: "Intermediate Latin II",
    course_units: "4",
    course_description:
      "Intermediate Latin II including advanced reading, composition, and Latin literature.",
    prerequisites: "LATN 3",
  },
  {
    id: "475",
    course_code: "LATN 5",
    course_name: "Advanced Latin",
    course_units: "4",
    course_description:
      "Advanced Latin including advanced reading, literary analysis, and cultural studies.",
    prerequisites: "LATN 4",
  },
  {
    id: "476",
    course_code: "LATN 100",
    course_name: "Latin Literature",
    course_units: "4",
    course_description:
      "Latin literature including major works, literary analysis, and cultural context.",
    prerequisites: "LATN 5",
  },
  {
    id: "477",
    course_code: "LATN 101",
    course_name: "Roman Culture",
    course_units: "4",
    course_description:
      "Roman culture including history, art, architecture, and ancient Roman society.",
    prerequisites: "LATN 4",
  },
  {
    id: "478",
    course_code: "LATN 102",
    course_name: "Classical Latin",
    course_units: "4",
    course_description:
      "Classical Latin including classical texts, historical language study, and ancient literature.",
    prerequisites: "LATN 3",
  },
  {
    id: "479",
    course_code: "LATN 103",
    course_name: "Latin Linguistics",
    course_units: "4",
    course_description:
      "Latin linguistics including Latin phonology, morphology, syntax, and historical linguistics.",
    prerequisites: "LING 1, LATN 4",
  },
  {
    id: "480",
    course_code: "LATN 104",
    course_name: "Latin Translation",
    course_units: "4",
    course_description:
      "Latin translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "LATN 5",
  },

  // Additional Law Courses
  {
    id: "481",
    course_code: "LAW 1",
    course_name: "Introduction to Law",
    course_units: "4",
    course_description:
      "Introduction to law including legal systems, legal reasoning, and fundamental legal concepts.",
    prerequisites: "None",
  },
  {
    id: "482",
    course_code: "LAW 2",
    course_name: "Constitutional Law",
    course_units: "4",
    course_description:
      "Constitutional law including constitutional interpretation, civil rights, and government structure.",
    prerequisites: "LAW 1",
  },
  {
    id: "483",
    course_code: "LAW 3",
    course_name: "Criminal Law",
    course_units: "4",
    course_description:
      "Criminal law including criminal offenses, defenses, and criminal justice procedures.",
    prerequisites: "LAW 1",
  },
  {
    id: "484",
    course_code: "LAW 4",
    course_name: "Civil Law",
    course_units: "4",
    course_description:
      "Civil law including contracts, torts, property law, and civil litigation.",
    prerequisites: "LAW 1",
  },
  {
    id: "485",
    course_code: "LAW 5",
    course_name: "Business Law",
    course_units: "4",
    course_description:
      "Business law including corporate law, commercial transactions, and business regulations.",
    prerequisites: "LAW 1",
  },
  {
    id: "486",
    course_code: "LAW 100",
    course_name: "Legal Research",
    course_units: "4",
    course_description:
      "Legal research including legal databases, case law analysis, and legal writing.",
    prerequisites: "LAW 1",
  },
  {
    id: "487",
    course_code: "LAW 101",
    course_name: "Environmental Law",
    course_units: "4",
    course_description:
      "Environmental law including environmental regulations, natural resource law, and environmental policy.",
    prerequisites: "LAW 1",
  },
  {
    id: "488",
    course_code: "LAW 102",
    course_name: "Intellectual Property Law",
    course_units: "4",
    course_description:
      "Intellectual property law including patents, copyrights, trademarks, and trade secrets.",
    prerequisites: "LAW 1",
  },
  {
    id: "489",
    course_code: "LAW 103",
    course_name: "Family Law",
    course_units: "4",
    course_description:
      "Family law including marriage, divorce, child custody, and family legal issues.",
    prerequisites: "LAW 1",
  },
  {
    id: "490",
    course_code: "LAW 104",
    course_name: "Legal Ethics",
    course_units: "4",
    course_description:
      "Legal ethics including professional responsibility, legal ethics, and attorney conduct.",
    prerequisites: "LAW 1",
  },

  // Additional Architecture Courses
  {
    id: "491",
    course_code: "ARCH 1",
    course_name: "Introduction to Architecture",
    course_units: "4",
    course_description:
      "Introduction to architecture including architectural history, design principles, and architectural theory.",
    prerequisites: "None",
  },
  {
    id: "492",
    course_code: "ARCH 2",
    course_name: "Architectural Design I",
    course_units: "4",
    course_description:
      "Architectural design I including design fundamentals, drawing techniques, and basic design projects.",
    prerequisites: "ARCH 1",
  },
  {
    id: "493",
    course_code: "ARCH 3",
    course_name: "Architectural History",
    course_units: "4",
    course_description:
      "Architectural history including major architectural movements, styles, and historical developments.",
    prerequisites: "ARCH 1",
  },
  {
    id: "494",
    course_code: "ARCH 4",
    course_name: "Building Technology",
    course_units: "4",
    course_description:
      "Building technology including construction methods, materials, and building systems.",
    prerequisites: "ARCH 1",
  },
  {
    id: "495",
    course_code: "ARCH 5",
    course_name: "Urban Design",
    course_units: "4",
    course_description:
      "Urban design including city planning, urban development, and community design.",
    prerequisites: "ARCH 1",
  },
  {
    id: "496",
    course_code: "ARCH 100",
    course_name: "Sustainable Architecture",
    course_units: "4",
    course_description:
      "Sustainable architecture including green building design, energy efficiency, and environmental considerations.",
    prerequisites: "ARCH 1",
  },
  {
    id: "497",
    course_code: "ARCH 101",
    course_name: "Digital Design",
    course_units: "4",
    course_description:
      "Digital design including computer-aided design, 3D modeling, and digital fabrication.",
    prerequisites: "ARCH 1",
  },
  {
    id: "498",
    course_code: "ARCH 102",
    course_name: "Interior Design",
    course_units: "4",
    course_description:
      "Interior design including space planning, interior aesthetics, and furniture design.",
    prerequisites: "ARCH 1",
  },
  {
    id: "499",
    course_code: "ARCH 103",
    course_name: "Landscape Architecture",
    course_units: "4",
    course_description:
      "Landscape architecture including landscape design, site planning, and environmental design.",
    prerequisites: "ARCH 1",
  },
  {
    id: "500",
    course_code: "ARCH 104",
    course_name: "Architectural Theory",
    course_units: "4",
    course_description:
      "Architectural theory including theoretical frameworks, critical analysis, and architectural philosophy.",
    prerequisites: "ARCH 1",
  },

  // Additional Urban Planning Courses
  {
    id: "501",
    course_code: "USP 1",
    course_name: "Introduction to Urban Planning",
    course_units: "4",
    course_description:
      "Introduction to urban planning including planning theory, urban development, and planning processes.",
    prerequisites: "None",
  },
  {
    id: "502",
    course_code: "USP 2",
    course_name: "Urban Design",
    course_units: "4",
    course_description:
      "Urban design including design principles, spatial planning, and urban form analysis.",
    prerequisites: "USP 1",
  },
  {
    id: "503",
    course_code: "USP 3",
    course_name: "Land Use Planning",
    course_units: "4",
    course_description:
      "Land use planning including zoning, development regulations, and land use policy.",
    prerequisites: "USP 1",
  },
  {
    id: "504",
    course_code: "USP 4",
    course_name: "Transportation Planning",
    course_units: "4",
    course_description:
      "Transportation planning including transit systems, traffic analysis, and transportation policy.",
    prerequisites: "USP 1",
  },
  {
    id: "505",
    course_code: "USP 5",
    course_name: "Environmental Planning",
    course_units: "4",
    course_description:
      "Environmental planning including environmental impact assessment, sustainability, and natural resource planning.",
    prerequisites: "USP 1",
  },
  {
    id: "506",
    course_code: "USP 100",
    course_name: "Housing and Community Development",
    course_units: "4",
    course_description:
      "Housing and community development including affordable housing, community planning, and neighborhood development.",
    prerequisites: "USP 1",
  },
  {
    id: "507",
    course_code: "USP 101",
    course_name: "Regional Planning",
    course_units: "4",
    course_description:
      "Regional planning including metropolitan planning, regional governance, and intergovernmental coordination.",
    prerequisites: "USP 1",
  },
  {
    id: "508",
    course_code: "USP 102",
    course_name: "Planning Law and Policy",
    course_units: "4",
    course_description:
      "Planning law and policy including legal frameworks, regulatory processes, and planning policy analysis.",
    prerequisites: "USP 1",
  },
  {
    id: "509",
    course_code: "USP 103",
    course_name: "Economic Development Planning",
    course_units: "4",
    course_description:
      "Economic development planning including economic analysis, development strategies, and planning for growth.",
    prerequisites: "USP 1",
  },
  {
    id: "510",
    course_code: "USP 104",
    course_name: "Planning Methods and Analysis",
    course_units: "4",
    course_description:
      "Planning methods and analysis including research methods, data analysis, and planning evaluation.",
    prerequisites: "USP 1",
  },

  // Additional Public Policy Courses
  {
    id: "511",
    course_code: "POLI 200",
    course_name: "Introduction to Public Policy",
    course_units: "4",
    course_description:
      "Introduction to public policy including policy analysis, policy-making processes, and policy evaluation.",
    prerequisites: "None",
  },
  {
    id: "512",
    course_code: "POLI 201",
    course_name: "Policy Analysis",
    course_units: "4",
    course_description:
      "Policy analysis including analytical frameworks, policy evaluation methods, and evidence-based policymaking.",
    prerequisites: "POLI 200",
  },
  {
    id: "513",
    course_code: "POLI 202",
    course_name: "Public Administration",
    course_units: "4",
    course_description:
      "Public administration including organizational theory, public management, and administrative processes.",
    prerequisites: "POLI 200",
  },
  {
    id: "514",
    course_code: "POLI 203",
    course_name: "Policy Implementation",
    course_units: "4",
    course_description:
      "Policy implementation including implementation strategies, program management, and policy outcomes.",
    prerequisites: "POLI 200",
  },
  {
    id: "515",
    course_code: "POLI 204",
    course_name: "Public Budgeting",
    course_units: "4",
    course_description:
      "Public budgeting including budget processes, fiscal policy, and financial management in government.",
    prerequisites: "POLI 200",
  },
  {
    id: "516",
    course_code: "POLI 205",
    course_name: "Health Policy",
    course_units: "4",
    course_description:
      "Health policy including healthcare systems, health policy analysis, and public health policy.",
    prerequisites: "POLI 200",
  },
  {
    id: "517",
    course_code: "POLI 206",
    course_name: "Education Policy",
    course_units: "4",
    course_description:
      "Education policy including educational systems, education reform, and policy analysis in education.",
    prerequisites: "POLI 200",
  },
  {
    id: "518",
    course_code: "POLI 207",
    course_name: "Environmental Policy",
    course_units: "4",
    course_description:
      "Environmental policy including environmental regulations, sustainability policy, and environmental governance.",
    prerequisites: "POLI 200",
  },
  {
    id: "519",
    course_code: "POLI 208",
    course_name: "Social Policy",
    course_units: "4",
    course_description:
      "Social policy including welfare policy, social services, and policy for vulnerable populations.",
    prerequisites: "POLI 200",
  },
  {
    id: "520",
    course_code: "POLI 209",
    course_name: "Policy Research Methods",
    course_units: "4",
    course_description:
      "Policy research methods including research design, data collection, and policy evaluation methods.",
    prerequisites: "POLI 200",
  },

  // Additional Public Health Courses
  {
    id: "521",
    course_code: "FMPH 1",
    course_name: "Introduction to Public Health",
    course_units: "4",
    course_description:
      "Introduction to public health including public health principles, population health, and health systems.",
    prerequisites: "None",
  },
  {
    id: "522",
    course_code: "FMPH 2",
    course_name: "Epidemiology",
    course_units: "4",
    course_description:
      "Epidemiology including disease patterns, study design, and epidemiological methods.",
    prerequisites: "FMPH 1",
  },
  {
    id: "523",
    course_code: "FMPH 3",
    course_name: "Biostatistics",
    course_units: "4",
    course_description:
      "Biostatistics including statistical methods, data analysis, and statistical inference in public health.",
    prerequisites: "STAT 10",
  },
  {
    id: "524",
    course_code: "FMPH 4",
    course_name: "Health Behavior",
    course_units: "4",
    course_description:
      "Health behavior including behavioral theory, health promotion, and behavior change interventions.",
    prerequisites: "FMPH 1",
  },
  {
    id: "525",
    course_code: "FMPH 5",
    course_name: "Environmental Health",
    course_units: "4",
    course_description:
      "Environmental health including environmental hazards, health effects, and environmental health policy.",
    prerequisites: "FMPH 1",
  },
  {
    id: "526",
    course_code: "FMPH 100",
    course_name: "Health Policy and Management",
    course_units: "4",
    course_description:
      "Health policy and management including healthcare systems, health policy analysis, and healthcare management.",
    prerequisites: "FMPH 1",
  },
  {
    id: "527",
    course_code: "FMPH 101",
    course_name: "Global Health",
    course_units: "4",
    course_description:
      "Global health including international health issues, global health policy, and health disparities.",
    prerequisites: "FMPH 1",
  },
  {
    id: "528",
    course_code: "FMPH 102",
    course_name: "Health Communication",
    course_units: "4",
    course_description:
      "Health communication including health messaging, risk communication, and health education.",
    prerequisites: "FMPH 1",
  },
  {
    id: "529",
    course_code: "FMPH 103",
    course_name: "Community Health",
    course_units: "4",
    course_description:
      "Community health including community health assessment, community interventions, and health promotion.",
    prerequisites: "FMPH 1",
  },
  {
    id: "530",
    course_code: "FMPH 104",
    course_name: "Public Health Research",
    course_units: "4",
    course_description:
      "Public health research including research methods, program evaluation, and public health surveillance.",
    prerequisites: "FMPH 1",
  },

  // Additional Social Work Courses
  {
    id: "531",
    course_code: "SOCW 1",
    course_name: "Introduction to Social Work",
    course_units: "4",
    course_description:
      "Introduction to social work including social work values, ethics, and professional practice.",
    prerequisites: "None",
  },
  {
    id: "532",
    course_code: "SOCW 2",
    course_name: "Social Work Practice",
    course_units: "4",
    course_description:
      "Social work practice including intervention methods, case management, and direct practice skills.",
    prerequisites: "SOCW 1",
  },
  {
    id: "533",
    course_code: "SOCW 3",
    course_name: "Human Behavior",
    course_units: "4",
    course_description:
      "Human behavior including human development, social systems, and behavioral theory.",
    prerequisites: "SOCW 1",
  },
  {
    id: "534",
    course_code: "SOCW 4",
    course_name: "Social Policy",
    course_units: "4",
    course_description:
      "Social policy including welfare policy, social services, and policy advocacy.",
    prerequisites: "SOCW 1",
  },
  {
    id: "535",
    course_code: "SOCW 5",
    course_name: "Research Methods",
    course_units: "4",
    course_description:
      "Research methods including social work research, program evaluation, and evidence-based practice.",
    prerequisites: "SOCW 1",
  },
  {
    id: "536",
    course_code: "SOCW 100",
    course_name: "Child Welfare",
    course_units: "4",
    course_description:
      "Child welfare including child protection, family services, and child welfare policy.",
    prerequisites: "SOCW 1",
  },
  {
    id: "537",
    course_code: "SOCW 101",
    course_name: "Mental Health",
    course_units: "4",
    course_description:
      "Mental health including mental health assessment, treatment, and mental health policy.",
    prerequisites: "SOCW 1",
  },
  {
    id: "538",
    course_code: "SOCW 102",
    course_name: "Aging and Gerontology",
    course_units: "4",
    course_description:
      "Aging and gerontology including aging services, elder care, and gerontological social work.",
    prerequisites: "SOCW 1",
  },
  {
    id: "539",
    course_code: "SOCW 103",
    course_name: "Substance Abuse",
    course_units: "4",
    course_description:
      "Substance abuse including addiction treatment, prevention, and substance abuse policy.",
    prerequisites: "SOCW 1",
  },
  {
    id: "540",
    course_code: "SOCW 104",
    course_name: "Community Organizing",
    course_units: "4",
    course_description:
      "Community organizing including community development, advocacy, and social change.",
    prerequisites: "SOCW 1",
  },

  // Additional Information Science Courses
  {
    id: "541",
    course_code: "INFO 1",
    course_name: "Introduction to Information Science",
    course_units: "4",
    course_description:
      "Introduction to information science including information systems, data management, and information theory.",
    prerequisites: "None",
  },
  {
    id: "542",
    course_code: "INFO 2",
    course_name: "Information Systems",
    course_units: "4",
    course_description:
      "Information systems including system design, database management, and information technology.",
    prerequisites: "INFO 1",
  },
  {
    id: "543",
    course_code: "INFO 3",
    course_name: "Data Science",
    course_units: "4",
    course_description:
      "Data science including data analysis, machine learning, and statistical computing.",
    prerequisites: "INFO 1",
  },
  {
    id: "544",
    course_code: "INFO 4",
    course_name: "Information Retrieval",
    course_units: "4",
    course_description:
      "Information retrieval including search systems, information organization, and retrieval algorithms.",
    prerequisites: "INFO 1",
  },
  {
    id: "545",
    course_code: "INFO 5",
    course_name: "Human-Computer Interaction",
    course_units: "4",
    course_description:
      "Human-computer interaction including user interface design, usability, and user experience.",
    prerequisites: "INFO 1",
  },
  {
    id: "546",
    course_code: "INFO 100",
    course_name: "Information Ethics",
    course_units: "4",
    course_description:
      "Information ethics including privacy, security, and ethical issues in information technology.",
    prerequisites: "INFO 1",
  },
  {
    id: "547",
    course_code: "INFO 101",
    course_name: "Digital Libraries",
    course_units: "4",
    course_description:
      "Digital libraries including digital collections, metadata, and library information systems.",
    prerequisites: "INFO 1",
  },
  {
    id: "548",
    course_code: "INFO 102",
    course_name: "Information Policy",
    course_units: "4",
    course_description:
      "Information policy including information governance, policy analysis, and information law.",
    prerequisites: "INFO 1",
  },
  {
    id: "549",
    course_code: "INFO 103",
    course_name: "Knowledge Management",
    course_units: "4",
    course_description:
      "Knowledge management including knowledge systems, organizational learning, and knowledge sharing.",
    prerequisites: "INFO 1",
  },
  {
    id: "550",
    course_code: "INFO 104",
    course_name: "Information Visualization",
    course_units: "4",
    course_description:
      "Information visualization including data visualization, visual analytics, and information design.",
    prerequisites: "INFO 1",
  },

  // Additional Greek Language Courses
  {
    id: "551",
    course_code: "GRK 1",
    course_name: "Elementary Greek I",
    course_units: "4",
    course_description:
      "Elementary Greek I including basic grammar, vocabulary, and reading skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "552",
    course_code: "GRK 2",
    course_name: "Elementary Greek II",
    course_units: "4",
    course_description:
      "Elementary Greek II including intermediate grammar, vocabulary, and reading skills.",
    prerequisites: "GRK 1",
  },
  {
    id: "553",
    course_code: "GRK 3",
    course_name: "Intermediate Greek I",
    course_units: "4",
    course_description:
      "Intermediate Greek I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "GRK 2",
  },
  {
    id: "554",
    course_code: "GRK 4",
    course_name: "Intermediate Greek II",
    course_units: "4",
    course_description:
      "Intermediate Greek II including advanced reading, composition, and Greek literature.",
    prerequisites: "GRK 3",
  },
  {
    id: "555",
    course_code: "GRK 5",
    course_name: "Advanced Greek",
    course_units: "4",
    course_description:
      "Advanced Greek including advanced reading, literary analysis, and cultural studies.",
    prerequisites: "GRK 4",
  },
  {
    id: "556",
    course_code: "GRK 100",
    course_name: "Ancient Greek Literature",
    course_units: "4",
    course_description:
      "Ancient Greek literature including major works, literary analysis, and cultural context.",
    prerequisites: "GRK 5",
  },
  {
    id: "557",
    course_code: "GRK 101",
    course_name: "Greek Philosophy",
    course_units: "4",
    course_description:
      "Greek philosophy including philosophical texts, philosophical analysis, and cultural context.",
    prerequisites: "GRK 4",
  },
  {
    id: "558",
    course_code: "GRK 102",
    course_name: "Classical Greek",
    course_units: "4",
    course_description:
      "Classical Greek including classical texts, historical language study, and ancient literature.",
    prerequisites: "GRK 3",
  },
  {
    id: "559",
    course_code: "GRK 103",
    course_name: "Greek Linguistics",
    course_units: "4",
    course_description:
      "Greek linguistics including Greek phonology, morphology, syntax, and historical linguistics.",
    prerequisites: "LING 1, GRK 4",
  },
  {
    id: "560",
    course_code: "GRK 104",
    course_name: "Greek Translation",
    course_units: "4",
    course_description:
      "Greek translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "GRK 5",
  },

  // Additional Sanskrit Language Courses
  {
    id: "561",
    course_code: "SANS 1",
    course_name: "Elementary Sanskrit I",
    course_units: "4",
    course_description:
      "Elementary Sanskrit I including basic grammar, vocabulary, and reading skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "562",
    course_code: "SANS 2",
    course_name: "Elementary Sanskrit II",
    course_units: "4",
    course_description:
      "Elementary Sanskrit II including intermediate grammar, vocabulary, and reading skills.",
    prerequisites: "SANS 1",
  },
  {
    id: "563",
    course_code: "SANS 3",
    course_name: "Intermediate Sanskrit I",
    course_units: "4",
    course_description:
      "Intermediate Sanskrit I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "SANS 2",
  },
  {
    id: "564",
    course_code: "SANS 4",
    course_name: "Intermediate Sanskrit II",
    course_units: "4",
    course_description:
      "Intermediate Sanskrit II including advanced reading, composition, and Sanskrit literature.",
    prerequisites: "SANS 3",
  },
  {
    id: "565",
    course_code: "SANS 5",
    course_name: "Advanced Sanskrit",
    course_units: "4",
    course_description:
      "Advanced Sanskrit including advanced reading, literary analysis, and cultural studies.",
    prerequisites: "SANS 4",
  },
  {
    id: "566",
    course_code: "SANS 100",
    course_name: "Sanskrit Literature",
    course_units: "4",
    course_description:
      "Sanskrit literature including major works, literary analysis, and cultural context.",
    prerequisites: "SANS 5",
  },
  {
    id: "567",
    course_code: "SANS 101",
    course_name: "Vedic Sanskrit",
    course_units: "4",
    course_description:
      "Vedic Sanskrit including Vedic texts, religious literature, and historical language study.",
    prerequisites: "SANS 3",
  },
  {
    id: "568",
    course_code: "SANS 102",
    course_name: "Classical Sanskrit",
    course_units: "4",
    course_description:
      "Classical Sanskrit including classical texts, historical language study, and ancient literature.",
    prerequisites: "SANS 3",
  },
  {
    id: "569",
    course_code: "SANS 103",
    course_name: "Sanskrit Linguistics",
    course_units: "4",
    course_description:
      "Sanskrit linguistics including Sanskrit phonology, morphology, syntax, and historical linguistics.",
    prerequisites: "LING 1, SANS 4",
  },
  {
    id: "570",
    course_code: "SANS 104",
    course_name: "Sanskrit Translation",
    course_units: "4",
    course_description:
      "Sanskrit translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "SANS 5",
  },

  // Additional Astronomy Courses
  {
    id: "571",
    course_code: "ASTR 1",
    course_name: "Introduction to Astronomy",
    course_units: "4",
    course_description:
      "Introduction to astronomy including celestial objects, astronomical observations, and basic astrophysics.",
    prerequisites: "None",
  },
  {
    id: "572",
    course_code: "ASTR 2",
    course_name: "Solar System Astronomy",
    course_units: "4",
    course_description:
      "Solar system astronomy including planets, moons, asteroids, and solar system formation.",
    prerequisites: "ASTR 1",
  },
  {
    id: "573",
    course_code: "ASTR 3",
    course_name: "Stellar Astronomy",
    course_units: "4",
    course_description:
      "Stellar astronomy including star formation, stellar evolution, and stellar classification.",
    prerequisites: "ASTR 1",
  },
  {
    id: "574",
    course_code: "ASTR 4",
    course_name: "Galactic Astronomy",
    course_units: "4",
    course_description:
      "Galactic astronomy including galaxy structure, galaxy evolution, and galactic dynamics.",
    prerequisites: "ASTR 1",
  },
  {
    id: "575",
    course_code: "ASTR 5",
    course_name: "Cosmology",
    course_units: "4",
    course_description:
      "Cosmology including universe evolution, dark matter, dark energy, and cosmic microwave background.",
    prerequisites: "ASTR 1",
  },
  {
    id: "576",
    course_code: "ASTR 100",
    course_name: "Observational Astronomy",
    course_units: "4",
    course_description:
      "Observational astronomy including telescope use, data analysis, and astronomical imaging.",
    prerequisites: "ASTR 1",
  },
  {
    id: "577",
    course_code: "ASTR 101",
    course_name: "Astrophysics",
    course_units: "4",
    course_description:
      "Astrophysics including physical processes in astronomy, radiation mechanisms, and stellar physics.",
    prerequisites: "PHYS 2A",
  },
  {
    id: "578",
    course_code: "ASTR 102",
    course_name: "Exoplanets",
    course_units: "4",
    course_description:
      "Exoplanets including planet detection, planetary atmospheres, and habitability studies.",
    prerequisites: "ASTR 1",
  },
  {
    id: "579",
    course_code: "ASTR 103",
    course_name: "High Energy Astrophysics",
    course_units: "4",
    course_description:
      "High energy astrophysics including black holes, neutron stars, and gamma-ray astronomy.",
    prerequisites: "ASTR 1",
  },
  {
    id: "580",
    course_code: "ASTR 104",
    course_name: "Astrobiology",
    course_units: "4",
    course_description:
      "Astrobiology including life in the universe, extremophiles, and the search for extraterrestrial life.",
    prerequisites: "ASTR 1",
  },

  // Additional Geology Courses
  {
    id: "581",
    course_code: "GEOL 1",
    course_name: "Introduction to Geology",
    course_units: "4",
    course_description:
      "Introduction to geology including Earth materials, geological processes, and Earth history.",
    prerequisites: "None",
  },
  {
    id: "582",
    course_code: "GEOL 2",
    course_name: "Mineralogy",
    course_units: "4",
    course_description:
      "Mineralogy including mineral identification, crystal structure, and mineral formation.",
    prerequisites: "GEOL 1",
  },
  {
    id: "583",
    course_code: "GEOL 3",
    course_name: "Petrology",
    course_units: "4",
    course_description:
      "Petrology including rock classification, rock formation, and rock identification.",
    prerequisites: "GEOL 2",
  },
  {
    id: "584",
    course_code: "GEOL 4",
    course_name: "Structural Geology",
    course_units: "4",
    course_description:
      "Structural geology including rock deformation, faulting, folding, and tectonic processes.",
    prerequisites: "GEOL 1",
  },
  {
    id: "585",
    course_code: "GEOL 5",
    course_name: "Sedimentology",
    course_units: "4",
    course_description:
      "Sedimentology including sedimentary processes, sedimentary environments, and sedimentary rocks.",
    prerequisites: "GEOL 1",
  },
  {
    id: "586",
    course_code: "GEOL 100",
    course_name: "Paleontology",
    course_units: "4",
    course_description:
      "Paleontology including fossil identification, evolution, and Earth's biological history.",
    prerequisites: "GEOL 1",
  },
  {
    id: "587",
    course_code: "GEOL 101",
    course_name: "Geochemistry",
    course_units: "4",
    course_description:
      "Geochemistry including chemical processes in Earth systems, isotope geochemistry, and geochemical analysis.",
    prerequisites: "CHEM 6A",
  },
  {
    id: "588",
    course_code: "GEOL 102",
    course_name: "Geophysics",
    course_units: "4",
    course_description:
      "Geophysics including Earth's physical properties, seismic methods, and geophysical exploration.",
    prerequisites: "PHYS 2A",
  },
  {
    id: "589",
    course_code: "GEOL 103",
    course_name: "Volcanology",
    course_units: "4",
    course_description:
      "Volcanology including volcanic processes, volcanic hazards, and volcanic monitoring.",
    prerequisites: "GEOL 1",
  },
  {
    id: "590",
    course_code: "GEOL 104",
    course_name: "Environmental Geology",
    course_units: "4",
    course_description:
      "Environmental geology including geological hazards, environmental impacts, and geological resources.",
    prerequisites: "GEOL 1",
  },

  // Additional Dance Courses
  {
    id: "591",
    course_code: "DANC 1",
    course_name: "Introduction to Dance",
    course_units: "4",
    course_description:
      "Introduction to dance including dance history, movement fundamentals, and dance appreciation.",
    prerequisites: "None",
  },
  {
    id: "592",
    course_code: "DANC 2",
    course_name: "Ballet I",
    course_units: "4",
    course_description:
      "Ballet I including ballet technique, ballet history, and classical dance forms.",
    prerequisites: "None",
  },
  {
    id: "593",
    course_code: "DANC 3",
    course_name: "Modern Dance I",
    course_units: "4",
    course_description:
      "Modern dance I including modern dance technique, contemporary movement, and modern dance history.",
    prerequisites: "None",
  },
  {
    id: "594",
    course_code: "DANC 4",
    course_name: "Jazz Dance I",
    course_units: "4",
    course_description:
      "Jazz dance I including jazz technique, jazz history, and jazz dance styles.",
    prerequisites: "None",
  },
  {
    id: "595",
    course_code: "DANC 5",
    course_name: "Contemporary Dance",
    course_units: "4",
    course_description:
      "Contemporary dance including contemporary technique, improvisation, and contemporary choreography.",
    prerequisites: "DANC 1",
  },
  {
    id: "596",
    course_code: "DANC 100",
    course_name: "Choreography",
    course_units: "4",
    course_description:
      "Choreography including dance composition, choreographic principles, and creative movement.",
    prerequisites: "DANC 1",
  },
  {
    id: "597",
    course_code: "DANC 101",
    course_name: "Dance History",
    course_units: "4",
    course_description:
      "Dance history including historical dance forms, cultural dance traditions, and dance evolution.",
    prerequisites: "DANC 1",
  },
  {
    id: "598",
    course_code: "DANC 102",
    course_name: "Dance Theory",
    course_units: "4",
    course_description:
      "Dance theory including dance analysis, movement theory, and dance criticism.",
    prerequisites: "DANC 1",
  },
  {
    id: "599",
    course_code: "DANC 103",
    course_name: "World Dance",
    course_units: "4",
    course_description:
      "World dance including international dance forms, cultural dance traditions, and global dance practices.",
    prerequisites: "DANC 1",
  },
  {
    id: "600",
    course_code: "DANC 104",
    course_name: "Dance Performance",
    course_units: "4",
    course_description:
      "Dance performance including performance techniques, stage presence, and dance production.",
    prerequisites: "DANC 1",
  },

  // Additional Creative Writing Courses
  {
    id: "601",
    course_code: "CRWR 1",
    course_name: "Introduction to Creative Writing",
    course_units: "4",
    course_description:
      "Introduction to creative writing including writing fundamentals, creative expression, and literary forms.",
    prerequisites: "None",
  },
  {
    id: "602",
    course_code: "CRWR 2",
    course_name: "Fiction Writing",
    course_units: "4",
    course_description:
      "Fiction writing including short story writing, novel writing, and narrative techniques.",
    prerequisites: "CRWR 1",
  },
  {
    id: "603",
    course_code: "CRWR 3",
    course_name: "Poetry Writing",
    course_units: "4",
    course_description:
      "Poetry writing including poetic forms, verse techniques, and poetic expression.",
    prerequisites: "CRWR 1",
  },
  {
    id: "604",
    course_code: "CRWR 4",
    course_name: "Creative Nonfiction",
    course_units: "4",
    course_description:
      "Creative nonfiction including memoir writing, personal essays, and narrative nonfiction.",
    prerequisites: "CRWR 1",
  },
  {
    id: "605",
    course_code: "CRWR 5",
    course_name: "Screenwriting",
    course_units: "4",
    course_description:
      "Screenwriting including screenplay writing, script formatting, and film narrative.",
    prerequisites: "CRWR 1",
  },
  {
    id: "606",
    course_code: "CRWR 100",
    course_name: "Advanced Fiction",
    course_units: "4",
    course_description:
      "Advanced fiction including advanced narrative techniques, novel development, and literary fiction.",
    prerequisites: "CRWR 2",
  },
  {
    id: "607",
    course_code: "CRWR 101",
    course_name: "Advanced Poetry",
    course_units: "4",
    course_description:
      "Advanced poetry including advanced poetic forms, experimental poetry, and contemporary poetry.",
    prerequisites: "CRWR 3",
  },
  {
    id: "608",
    course_code: "CRWR 102",
    course_name: "Writing Workshop",
    course_units: "4",
    course_description:
      "Writing workshop including peer review, writing critique, and collaborative writing.",
    prerequisites: "CRWR 1",
  },
  {
    id: "609",
    course_code: "CRWR 103",
    course_name: "Literary Magazine",
    course_units: "4",
    course_description:
      "Literary magazine including publication editing, literary publishing, and editorial work.",
    prerequisites: "CRWR 1",
  },
  {
    id: "610",
    course_code: "CRWR 104",
    course_name: "Writing for Digital Media",
    course_units: "4",
    course_description:
      "Writing for digital media including digital storytelling, online writing, and multimedia writing.",
    prerequisites: "CRWR 1",
  },

  // Additional Criminal Justice Courses
  {
    id: "611",
    course_code: "CRIM 1",
    course_name: "Introduction to Criminal Justice",
    course_units: "4",
    course_description:
      "Introduction to criminal justice including justice systems, law enforcement, and criminal procedures.",
    prerequisites: "None",
  },
  {
    id: "612",
    course_code: "CRIM 2",
    course_name: "Criminology",
    course_units: "4",
    course_description:
      "Criminology including crime theories, criminal behavior, and crime prevention.",
    prerequisites: "CRIM 1",
  },
  {
    id: "613",
    course_code: "CRIM 3",
    course_name: "Law Enforcement",
    course_units: "4",
    course_description:
      "Law enforcement including police work, law enforcement procedures, and community policing.",
    prerequisites: "CRIM 1",
  },
  {
    id: "614",
    course_code: "CRIM 4",
    course_name: "Courts and Judicial Process",
    course_units: "4",
    course_description:
      "Courts and judicial process including court systems, judicial procedures, and legal processes.",
    prerequisites: "CRIM 1",
  },
  {
    id: "615",
    course_code: "CRIM 5",
    course_name: "Corrections",
    course_units: "4",
    course_description:
      "Corrections including prison systems, rehabilitation, and correctional policies.",
    prerequisites: "CRIM 1",
  },
  {
    id: "616",
    course_code: "CRIM 100",
    course_name: "Criminal Law",
    course_units: "4",
    course_description:
      "Criminal law including criminal offenses, criminal defenses, and criminal justice law.",
    prerequisites: "CRIM 1",
  },
  {
    id: "617",
    course_code: "CRIM 101",
    course_name: "Juvenile Justice",
    course_units: "4",
    course_description:
      "Juvenile justice including juvenile court systems, youth crime, and juvenile rehabilitation.",
    prerequisites: "CRIM 1",
  },
  {
    id: "618",
    course_code: "CRIM 102",
    course_name: "Victimology",
    course_units: "4",
    course_description:
      "Victimology including victim rights, victim services, and victim advocacy.",
    prerequisites: "CRIM 1",
  },
  {
    id: "619",
    course_code: "CRIM 103",
    course_name: "Forensic Science",
    course_units: "4",
    course_description:
      "Forensic science including crime scene investigation, forensic analysis, and evidence collection.",
    prerequisites: "CRIM 1",
  },
  {
    id: "620",
    course_code: "CRIM 104",
    course_name: "Criminal Justice Research",
    course_units: "4",
    course_description:
      "Criminal justice research including research methods, data analysis, and criminal justice policy.",
    prerequisites: "CRIM 1",
  },

  // Additional Gender Studies Courses
  {
    id: "621",
    course_code: "GSS 1",
    course_name: "Introduction to Gender Studies",
    course_units: "4",
    course_description:
      "Introduction to gender studies including gender theory, feminist theory, and gender analysis.",
    prerequisites: "None",
  },
  {
    id: "622",
    course_code: "GSS 2",
    course_name: "Feminist Theory",
    course_units: "4",
    course_description:
      "Feminist theory including feminist movements, feminist philosophy, and feminist analysis.",
    prerequisites: "GSS 1",
  },
  {
    id: "623",
    course_code: "GSS 3",
    course_name: "Women's History",
    course_units: "4",
    course_description:
      "Women's history including women's movements, women's rights, and women's contributions.",
    prerequisites: "GSS 1",
  },
  {
    id: "624",
    course_code: "GSS 4",
    course_name: "Masculinity Studies",
    course_units: "4",
    course_description:
      "Masculinity studies including male identity, masculinity theory, and gender roles.",
    prerequisites: "GSS 1",
  },
  {
    id: "625",
    course_code: "GSS 5",
    course_name: "Queer Studies",
    course_units: "4",
    course_description:
      "Queer studies including LGBTQ+ history, queer theory, and sexual identity.",
    prerequisites: "GSS 1",
  },
  {
    id: "626",
    course_code: "GSS 100",
    course_name: "Gender and Society",
    course_units: "4",
    course_description:
      "Gender and society including gender roles, gender inequality, and social construction of gender.",
    prerequisites: "GSS 1",
  },
  {
    id: "627",
    course_code: "GSS 101",
    course_name: "Gender and Media",
    course_units: "4",
    course_description:
      "Gender and media including media representation, gender stereotypes, and media analysis.",
    prerequisites: "GSS 1",
  },
  {
    id: "628",
    course_code: "GSS 102",
    course_name: "Gender and Politics",
    course_units: "4",
    course_description:
      "Gender and politics including women in politics, gender policy, and political representation.",
    prerequisites: "GSS 1",
  },
  {
    id: "629",
    course_code: "GSS 103",
    course_name: "Gender and Health",
    course_units: "4",
    course_description:
      "Gender and health including women's health, men's health, and gender-based health disparities.",
    prerequisites: "GSS 1",
  },
  {
    id: "630",
    course_code: "GSS 104",
    course_name: "Gender and Work",
    course_units: "4",
    course_description:
      "Gender and work including workplace gender issues, pay equity, and work-life balance.",
    prerequisites: "GSS 1",
  },

  // Additional Urban Studies Courses
  {
    id: "631",
    course_code: "USP 200",
    course_name: "Introduction to Urban Studies",
    course_units: "4",
    course_description:
      "Introduction to urban studies including urban theory, urban development, and urban analysis.",
    prerequisites: "None",
  },
  {
    id: "632",
    course_code: "USP 201",
    course_name: "Urban Sociology",
    course_units: "4",
    course_description:
      "Urban sociology including urban communities, social urban issues, and urban social theory.",
    prerequisites: "USP 200",
  },
  {
    id: "633",
    course_code: "USP 202",
    course_name: "Urban Economics",
    course_units: "4",
    course_description:
      "Urban economics including urban markets, urban development economics, and urban economic policy.",
    prerequisites: "ECON 1",
  },
  {
    id: "634",
    course_code: "USP 203",
    course_name: "Urban Geography",
    course_units: "4",
    course_description:
      "Urban geography including urban spatial patterns, urban landscapes, and geographic urban analysis.",
    prerequisites: "USP 200",
  },
  {
    id: "635",
    course_code: "USP 204",
    course_name: "Urban Politics",
    course_units: "4",
    course_description:
      "Urban politics including urban governance, urban policy, and urban political processes.",
    prerequisites: "USP 200",
  },
  {
    id: "636",
    course_code: "USP 205",
    course_name: "Urban History",
    course_units: "4",
    course_description:
      "Urban history including historical urban development, urban transformation, and urban historical analysis.",
    prerequisites: "USP 200",
  },
  {
    id: "637",
    course_code: "USP 206",
    course_name: "Urban Culture",
    course_units: "4",
    course_description:
      "Urban culture including urban cultural practices, urban identity, and cultural urban analysis.",
    prerequisites: "USP 200",
  },
  {
    id: "638",
    course_code: "USP 207",
    course_name: "Urban Environment",
    course_units: "4",
    course_description:
      "Urban environment including urban environmental issues, urban sustainability, and environmental urban planning.",
    prerequisites: "USP 200",
  },
  {
    id: "639",
    course_code: "USP 208",
    course_name: "Urban Technology",
    course_units: "4",
    course_description:
      "Urban technology including smart cities, urban innovation, and technological urban solutions.",
    prerequisites: "USP 200",
  },
  {
    id: "640",
    course_code: "USP 209",
    course_name: "Urban Research Methods",
    course_units: "4",
    course_description:
      "Urban research methods including urban data analysis, urban research design, and urban research techniques.",
    prerequisites: "USP 200",
  },

  // Additional Public Administration Courses
  {
    id: "641",
    course_code: "PA 1",
    course_name: "Introduction to Public Administration",
    course_units: "4",
    course_description:
      "Introduction to public administration including administrative theory, public management, and government administration.",
    prerequisites: "None",
  },
  {
    id: "642",
    course_code: "PA 2",
    course_name: "Public Management",
    course_units: "4",
    course_description:
      "Public management including organizational management, public sector leadership, and administrative processes.",
    prerequisites: "PA 1",
  },
  {
    id: "643",
    course_code: "PA 3",
    course_name: "Public Budgeting",
    course_units: "4",
    course_description:
      "Public budgeting including budget processes, fiscal management, and financial administration.",
    prerequisites: "PA 1",
  },
  {
    id: "644",
    course_code: "PA 4",
    course_name: "Public Personnel Management",
    course_units: "4",
    course_description:
      "Public personnel management including human resources, employee relations, and personnel administration.",
    prerequisites: "PA 1",
  },
  {
    id: "645",
    course_code: "PA 5",
    course_name: "Public Policy Analysis",
    course_units: "4",
    course_description:
      "Public policy analysis including policy evaluation, policy implementation, and policy analysis methods.",
    prerequisites: "PA 1",
  },
  {
    id: "646",
    course_code: "PA 100",
    course_name: "Nonprofit Management",
    course_units: "4",
    course_description:
      "Nonprofit management including nonprofit organizations, nonprofit leadership, and nonprofit administration.",
    prerequisites: "PA 1",
  },
  {
    id: "647",
    course_code: "PA 101",
    course_name: "Public Sector Ethics",
    course_units: "4",
    course_description:
      "Public sector ethics including administrative ethics, ethical decision-making, and public service values.",
    prerequisites: "PA 1",
  },
  {
    id: "648",
    course_code: "PA 102",
    course_name: "Public Sector Innovation",
    course_units: "4",
    course_description:
      "Public sector innovation including government innovation, administrative reform, and public sector change.",
    prerequisites: "PA 1",
  },
  {
    id: "649",
    course_code: "PA 103",
    course_name: "Intergovernmental Relations",
    course_units: "4",
    course_description:
      "Intergovernmental relations including federal-state relations, intergovernmental cooperation, and administrative coordination.",
    prerequisites: "PA 1",
  },
  {
    id: "650",
    course_code: "PA 104",
    course_name: "Public Administration Research",
    course_units: "4",
    course_description:
      "Public administration research including administrative research methods, public sector data analysis, and administrative research design.",
    prerequisites: "PA 1",
  },

  // Additional Arabic Language Courses
  {
    id: "651",
    course_code: "ARAB 1",
    course_name: "Elementary Arabic I",
    course_units: "4",
    course_description:
      "Elementary Arabic I including basic grammar, vocabulary, and reading skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "652",
    course_code: "ARAB 2",
    course_name: "Elementary Arabic II",
    course_units: "4",
    course_description:
      "Elementary Arabic II including intermediate grammar, vocabulary, and reading skills.",
    prerequisites: "ARAB 1",
  },
  {
    id: "653",
    course_code: "ARAB 3",
    course_name: "Intermediate Arabic I",
    course_units: "4",
    course_description:
      "Intermediate Arabic I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "ARAB 2",
  },
  {
    id: "654",
    course_code: "ARAB 4",
    course_name: "Intermediate Arabic II",
    course_units: "4",
    course_description:
      "Intermediate Arabic II including advanced reading, composition, and Arabic literature.",
    prerequisites: "ARAB 3",
  },
  {
    id: "655",
    course_code: "ARAB 5",
    course_name: "Advanced Arabic",
    course_units: "4",
    course_description:
      "Advanced Arabic including advanced reading, literary analysis, and cultural studies.",
    prerequisites: "ARAB 4",
  },
  {
    id: "656",
    course_code: "ARAB 100",
    course_name: "Arabic Literature",
    course_units: "4",
    course_description:
      "Arabic literature including major works, literary analysis, and cultural context.",
    prerequisites: "ARAB 5",
  },
  {
    id: "657",
    course_code: "ARAB 101",
    course_name: "Modern Arabic",
    course_units: "4",
    course_description:
      "Modern Arabic including contemporary Arabic, modern literature, and current events.",
    prerequisites: "ARAB 4",
  },
  {
    id: "658",
    course_code: "ARAB 102",
    course_name: "Classical Arabic",
    course_units: "4",
    course_description:
      "Classical Arabic including classical texts, historical language study, and ancient literature.",
    prerequisites: "ARAB 3",
  },
  {
    id: "659",
    course_code: "ARAB 103",
    course_name: "Arabic Linguistics",
    course_units: "4",
    course_description:
      "Arabic linguistics including Arabic phonology, morphology, syntax, and historical linguistics.",
    prerequisites: "LING 1, ARAB 4",
  },
  {
    id: "660",
    course_code: "ARAB 104",
    course_name: "Arabic Translation",
    course_units: "4",
    course_description:
      "Arabic translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "ARAB 5",
  },

  // Additional Oceanography Courses
  {
    id: "661",
    course_code: "OCEA 1",
    course_name: "Introduction to Oceanography",
    course_units: "4",
    course_description:
      "Introduction to oceanography including ocean systems, marine science, and oceanographic processes.",
    prerequisites: "None",
  },
  {
    id: "662",
    course_code: "OCEA 2",
    course_name: "Physical Oceanography",
    course_units: "4",
    course_description:
      "Physical oceanography including ocean currents, waves, tides, and ocean dynamics.",
    prerequisites: "OCEA 1",
  },
  {
    id: "663",
    course_code: "OCEA 3",
    course_name: "Chemical Oceanography",
    course_units: "4",
    course_description:
      "Chemical oceanography including ocean chemistry, biogeochemical cycles, and marine chemistry.",
    prerequisites: "OCEA 1",
  },
  {
    id: "664",
    course_code: "OCEA 4",
    course_name: "Biological Oceanography",
    course_units: "4",
    course_description:
      "Biological oceanography including marine biology, ocean ecosystems, and marine organisms.",
    prerequisites: "OCEA 1",
  },
  {
    id: "665",
    course_code: "OCEA 5",
    course_name: "Geological Oceanography",
    course_units: "4",
    course_description:
      "Geological oceanography including seafloor geology, marine sediments, and ocean basin formation.",
    prerequisites: "OCEA 1",
  },
  {
    id: "666",
    course_code: "OCEA 100",
    course_name: "Marine Ecology",
    course_units: "4",
    course_description:
      "Marine ecology including marine ecosystems, species interactions, and ecological processes.",
    prerequisites: "OCEA 1",
  },
  {
    id: "667",
    course_code: "OCEA 101",
    course_name: "Ocean Climate",
    course_units: "4",
    course_description:
      "Ocean climate including ocean-atmosphere interactions, climate change, and ocean circulation.",
    prerequisites: "OCEA 1",
  },
  {
    id: "668",
    course_code: "OCEA 102",
    course_name: "Marine Conservation",
    course_units: "4",
    course_description:
      "Marine conservation including marine protected areas, conservation biology, and marine policy.",
    prerequisites: "OCEA 1",
  },
  {
    id: "669",
    course_code: "OCEA 103",
    course_name: "Ocean Technology",
    course_units: "4",
    course_description:
      "Ocean technology including oceanographic instruments, remote sensing, and marine technology.",
    prerequisites: "OCEA 1",
  },
  {
    id: "670",
    course_code: "OCEA 104",
    course_name: "Ocean Research Methods",
    course_units: "4",
    course_description:
      "Ocean research methods including field methods, data analysis, and oceanographic research.",
    prerequisites: "OCEA 1",
  },

  // Additional Meteorology Courses
  {
    id: "671",
    course_code: "METR 1",
    course_name: "Introduction to Meteorology",
    course_units: "4",
    course_description:
      "Introduction to meteorology including weather systems, atmospheric science, and meteorological processes.",
    prerequisites: "None",
  },
  {
    id: "672",
    course_code: "METR 2",
    course_name: "Atmospheric Physics",
    course_units: "4",
    course_description:
      "Atmospheric physics including atmospheric dynamics, thermodynamics, and physical processes.",
    prerequisites: "METR 1",
  },
  {
    id: "673",
    course_code: "METR 3",
    course_name: "Weather Analysis",
    course_units: "4",
    course_description:
      "Weather analysis including weather patterns, forecasting techniques, and meteorological data.",
    prerequisites: "METR 1",
  },
  {
    id: "674",
    course_code: "METR 4",
    course_name: "Climate Science",
    course_units: "4",
    course_description:
      "Climate science including climate systems, climate change, and climate modeling.",
    prerequisites: "METR 1",
  },
  {
    id: "675",
    course_code: "METR 5",
    course_name: "Atmospheric Chemistry",
    course_units: "4",
    course_description:
      "Atmospheric chemistry including air quality, atmospheric composition, and chemical processes.",
    prerequisites: "METR 1",
  },
  {
    id: "676",
    course_code: "METR 100",
    course_name: "Weather Forecasting",
    course_units: "4",
    course_description:
      "Weather forecasting including forecast methods, numerical modeling, and prediction techniques.",
    prerequisites: "METR 1",
  },
  {
    id: "677",
    course_code: "METR 101",
    course_name: "Severe Weather",
    course_units: "4",
    course_description:
      "Severe weather including thunderstorms, tornadoes, hurricanes, and extreme weather events.",
    prerequisites: "METR 1",
  },
  {
    id: "678",
    course_code: "METR 102",
    course_name: "Atmospheric Dynamics",
    course_units: "4",
    course_description:
      "Atmospheric dynamics including fluid dynamics, atmospheric circulation, and dynamic processes.",
    prerequisites: "METR 1",
  },
  {
    id: "679",
    course_code: "METR 103",
    course_name: "Meteorological Instruments",
    course_units: "4",
    course_description:
      "Meteorological instruments including weather instruments, measurement techniques, and data collection.",
    prerequisites: "METR 1",
  },
  {
    id: "680",
    course_code: "METR 104",
    course_name: "Meteorological Research",
    course_units: "4",
    course_description:
      "Meteorological research including research methods, data analysis, and meteorological research.",
    prerequisites: "METR 1",
  },

  // Additional Photography Courses
  {
    id: "681",
    course_code: "PHOT 1",
    course_name: "Introduction to Photography",
    course_units: "4",
    course_description:
      "Introduction to photography including camera operation, composition, and photographic techniques.",
    prerequisites: "None",
  },
  {
    id: "682",
    course_code: "PHOT 2",
    course_name: "Digital Photography",
    course_units: "4",
    course_description:
      "Digital photography including digital cameras, image processing, and digital techniques.",
    prerequisites: "PHOT 1",
  },
  {
    id: "683",
    course_code: "PHOT 3",
    course_name: "Black and White Photography",
    course_units: "4",
    course_description:
      "Black and white photography including film photography, darkroom techniques, and monochrome aesthetics.",
    prerequisites: "PHOT 1",
  },
  {
    id: "684",
    course_code: "PHOT 4",
    course_name: "Portrait Photography",
    course_units: "4",
    course_description:
      "Portrait photography including lighting, posing, and portrait techniques.",
    prerequisites: "PHOT 1",
  },
  {
    id: "685",
    course_code: "PHOT 5",
    course_name: "Documentary Photography",
    course_units: "4",
    course_description:
      "Documentary photography including photojournalism, storytelling, and documentary techniques.",
    prerequisites: "PHOT 1",
  },
  {
    id: "686",
    course_code: "PHOT 100",
    course_name: "Advanced Photography",
    course_units: "4",
    course_description:
      "Advanced photography including advanced techniques, creative expression, and photographic art.",
    prerequisites: "PHOT 1",
  },
  {
    id: "687",
    course_code: "PHOT 101",
    course_name: "Photojournalism",
    course_units: "4",
    course_description:
      "Photojournalism including news photography, editorial photography, and journalistic techniques.",
    prerequisites: "PHOT 1",
  },
  {
    id: "688",
    course_code: "PHOT 102",
    course_name: "Commercial Photography",
    course_units: "4",
    course_description:
      "Commercial photography including advertising photography, product photography, and commercial techniques.",
    prerequisites: "PHOT 1",
  },
  {
    id: "689",
    course_code: "PHOT 103",
    course_name: "Photographic History",
    course_units: "4",
    course_description:
      "Photographic history including historical photography, photographic movements, and photographic evolution.",
    prerequisites: "PHOT 1",
  },
  {
    id: "690",
    course_code: "PHOT 104",
    course_name: "Photographic Theory",
    course_units: "4",
    course_description:
      "Photographic theory including photographic criticism, theoretical approaches, and photographic analysis.",
    prerequisites: "PHOT 1",
  },

  // Additional Sculpture Courses
  {
    id: "691",
    course_code: "SCUL 1",
    course_name: "Introduction to Sculpture",
    course_units: "4",
    course_description:
      "Introduction to sculpture including three-dimensional art, sculptural techniques, and material exploration.",
    prerequisites: "None",
  },
  {
    id: "692",
    course_code: "SCUL 2",
    course_name: "Clay Sculpture",
    course_units: "4",
    course_description:
      "Clay sculpture including ceramic techniques, clay modeling, and ceramic sculpture.",
    prerequisites: "SCUL 1",
  },
  {
    id: "693",
    course_code: "SCUL 3",
    course_name: "Metal Sculpture",
    course_units: "4",
    course_description:
      "Metal sculpture including metalworking, welding, and metal fabrication techniques.",
    prerequisites: "SCUL 1",
  },
  {
    id: "694",
    course_code: "SCUL 4",
    course_name: "Wood Sculpture",
    course_units: "4",
    course_description:
      "Wood sculpture including woodworking, carving, and wood fabrication techniques.",
    prerequisites: "SCUL 1",
  },
  {
    id: "695",
    course_code: "SCUL 5",
    course_name: "Mixed Media Sculpture",
    course_units: "4",
    course_description:
      "Mixed media sculpture including combined materials, installation art, and contemporary sculpture.",
    prerequisites: "SCUL 1",
  },
  {
    id: "696",
    course_code: "SCUL 100",
    course_name: "Advanced Sculpture",
    course_units: "4",
    course_description:
      "Advanced sculpture including advanced techniques, conceptual sculpture, and sculptural art.",
    prerequisites: "SCUL 1",
  },
  {
    id: "697",
    course_code: "SCUL 101",
    course_name: "Installation Art",
    course_units: "4",
    course_description:
      "Installation art including site-specific art, environmental art, and installation techniques.",
    prerequisites: "SCUL 1",
  },
  {
    id: "698",
    course_code: "SCUL 102",
    course_name: "Public Art",
    course_units: "4",
    course_description:
      "Public art including public sculpture, community art, and public art projects.",
    prerequisites: "SCUL 1",
  },
  {
    id: "699",
    course_code: "SCUL 103",
    course_name: "Sculptural History",
    course_units: "4",
    course_description:
      "Sculptural history including historical sculpture, sculptural movements, and sculptural evolution.",
    prerequisites: "SCUL 1",
  },
  {
    id: "700",
    course_code: "SCUL 104",
    course_name: "Sculptural Theory",
    course_units: "4",
    course_description:
      "Sculptural theory including sculptural criticism, theoretical approaches, and sculptural analysis.",
    prerequisites: "SCUL 1",
  },

  // Additional Education Courses
  {
    id: "701",
    course_code: "EDS 1",
    course_name: "Introduction to Education",
    course_units: "4",
    course_description:
      "Introduction to education including educational theory, teaching methods, and educational systems.",
    prerequisites: "None",
  },
  {
    id: "702",
    course_code: "EDS 2",
    course_name: "Educational Psychology",
    course_units: "4",
    course_description:
      "Educational psychology including learning theory, cognitive development, and psychological processes.",
    prerequisites: "EDS 1",
  },
  {
    id: "703",
    course_code: "EDS 3",
    course_name: "Curriculum Development",
    course_units: "4",
    course_description:
      "Curriculum development including curriculum design, instructional planning, and educational content.",
    prerequisites: "EDS 1",
  },
  {
    id: "704",
    course_code: "EDS 4",
    course_name: "Teaching Methods",
    course_units: "4",
    course_description:
      "Teaching methods including instructional strategies, classroom management, and teaching techniques.",
    prerequisites: "EDS 1",
  },
  {
    id: "705",
    course_code: "EDS 5",
    course_name: "Educational Assessment",
    course_units: "4",
    course_description:
      "Educational assessment including testing, evaluation, and assessment methods.",
    prerequisites: "EDS 1",
  },
  {
    id: "706",
    course_code: "EDS 100",
    course_name: "Special Education",
    course_units: "4",
    course_description:
      "Special education including learning disabilities, special needs, and inclusive education.",
    prerequisites: "EDS 1",
  },
  {
    id: "707",
    course_code: "EDS 101",
    course_name: "Educational Technology",
    course_units: "4",
    course_description:
      "Educational technology including digital learning, educational software, and technology integration.",
    prerequisites: "EDS 1",
  },
  {
    id: "708",
    course_code: "EDS 102",
    course_name: "Educational Leadership",
    course_units: "4",
    course_description:
      "Educational leadership including school administration, educational policy, and leadership development.",
    prerequisites: "EDS 1",
  },
  {
    id: "709",
    course_code: "EDS 103",
    course_name: "Educational Research",
    course_units: "4",
    course_description:
      "Educational research including research methods, data analysis, and educational research design.",
    prerequisites: "EDS 1",
  },
  {
    id: "710",
    course_code: "EDS 104",
    course_name: "Educational Policy",
    course_units: "4",
    course_description:
      "Educational policy including policy analysis, educational reform, and policy development.",
    prerequisites: "EDS 1",
  },

  // Additional Nursing Courses
  {
    id: "711",
    course_code: "NURS 1",
    course_name: "Introduction to Nursing",
    course_units: "4",
    course_description:
      "Introduction to nursing including nursing theory, nursing practice, and healthcare systems.",
    prerequisites: "None",
  },
  {
    id: "712",
    course_code: "NURS 2",
    course_name: "Nursing Fundamentals",
    course_units: "4",
    course_description:
      "Nursing fundamentals including basic nursing skills, patient care, and nursing procedures.",
    prerequisites: "NURS 1",
  },
  {
    id: "713",
    course_code: "NURS 3",
    course_name: "Health Assessment",
    course_units: "4",
    course_description:
      "Health assessment including physical assessment, health history, and assessment techniques.",
    prerequisites: "NURS 1",
  },
  {
    id: "714",
    course_code: "NURS 4",
    course_name: "Nursing Pharmacology",
    course_units: "4",
    course_description:
      "Nursing pharmacology including medication administration, drug interactions, and pharmacological principles.",
    prerequisites: "NURS 1",
  },
  {
    id: "715",
    course_code: "NURS 5",
    course_name: "Medical-Surgical Nursing",
    course_units: "4",
    course_description:
      "Medical-surgical nursing including adult health, surgical nursing, and medical nursing care.",
    prerequisites: "NURS 1",
  },
  {
    id: "716",
    course_code: "NURS 100",
    course_name: "Pediatric Nursing",
    course_units: "4",
    course_description:
      "Pediatric nursing including child health, pediatric care, and family-centered care.",
    prerequisites: "NURS 1",
  },
  {
    id: "717",
    course_code: "NURS 101",
    course_name: "Mental Health Nursing",
    course_units: "4",
    course_description:
      "Mental health nursing including psychiatric nursing, mental health care, and therapeutic communication.",
    prerequisites: "NURS 1",
  },
  {
    id: "718",
    course_code: "NURS 102",
    course_name: "Community Health Nursing",
    course_units: "4",
    course_description:
      "Community health nursing including public health, community care, and population health.",
    prerequisites: "NURS 1",
  },
  {
    id: "719",
    course_code: "NURS 103",
    course_name: "Nursing Research",
    course_units: "4",
    course_description:
      "Nursing research including research methods, evidence-based practice, and nursing research design.",
    prerequisites: "NURS 1",
  },
  {
    id: "720",
    course_code: "NURS 104",
    course_name: "Nursing Leadership",
    course_units: "4",
    course_description:
      "Nursing leadership including nursing management, healthcare leadership, and nursing administration.",
    prerequisites: "NURS 1",
  },

  // Additional Nutrition Courses
  {
    id: "721",
    course_code: "NUTR 1",
    course_name: "Introduction to Nutrition",
    course_units: "4",
    course_description:
      "Introduction to nutrition including nutritional science, dietary principles, and nutritional health.",
    prerequisites: "None",
  },
  {
    id: "722",
    course_code: "NUTR 2",
    course_name: "Human Nutrition",
    course_units: "4",
    course_description:
      "Human nutrition including nutrient metabolism, dietary requirements, and nutritional physiology.",
    prerequisites: "NUTR 1",
  },
  {
    id: "723",
    course_code: "NUTR 3",
    course_name: "Clinical Nutrition",
    course_units: "4",
    course_description:
      "Clinical nutrition including medical nutrition therapy, therapeutic diets, and clinical applications.",
    prerequisites: "NUTR 1",
  },
  {
    id: "724",
    course_code: "NUTR 4",
    course_name: "Community Nutrition",
    course_units: "4",
    course_description:
      "Community nutrition including public health nutrition, nutrition programs, and community health.",
    prerequisites: "NUTR 1",
  },
  {
    id: "725",
    course_code: "NUTR 5",
    course_name: "Sports Nutrition",
    course_units: "4",
    course_description:
      "Sports nutrition including athletic nutrition, performance nutrition, and exercise nutrition.",
    prerequisites: "NUTR 1",
  },
  {
    id: "726",
    course_code: "NUTR 100",
    course_name: "Nutritional Biochemistry",
    course_units: "4",
    course_description:
      "Nutritional biochemistry including nutrient biochemistry, metabolic pathways, and biochemical processes.",
    prerequisites: "NUTR 1",
  },
  {
    id: "727",
    course_code: "NUTR 101",
    course_name: "Food Science",
    course_units: "4",
    course_description:
      "Food science including food chemistry, food processing, and food technology.",
    prerequisites: "NUTR 1",
  },
  {
    id: "728",
    course_code: "NUTR 102",
    course_name: "Nutritional Epidemiology",
    course_units: "4",
    course_description:
      "Nutritional epidemiology including nutrition research, dietary assessment, and nutritional studies.",
    prerequisites: "NUTR 1",
  },
  {
    id: "729",
    course_code: "NUTR 103",
    course_name: "Nutritional Counseling",
    course_units: "4",
    course_description:
      "Nutritional counseling including dietary counseling, behavior change, and nutritional guidance.",
    prerequisites: "NUTR 1",
  },
  {
    id: "730",
    course_code: "NUTR 104",
    course_name: "Nutritional Policy",
    course_units: "4",
    course_description:
      "Nutritional policy including food policy, nutrition programs, and policy development.",
    prerequisites: "NUTR 1",
  },

  // Additional Kinesiology Courses
  {
    id: "731",
    course_code: "KINE 1",
    course_name: "Introduction to Kinesiology",
    course_units: "4",
    course_description:
      "Introduction to kinesiology including human movement, exercise science, and physical activity.",
    prerequisites: "None",
  },
  {
    id: "732",
    course_code: "KINE 2",
    course_name: "Exercise Physiology",
    course_units: "4",
    course_description:
      "Exercise physiology including physiological responses to exercise, fitness, and exercise science.",
    prerequisites: "KINE 1",
  },
  {
    id: "733",
    course_code: "KINE 3",
    course_name: "Biomechanics",
    course_units: "4",
    course_description:
      "Biomechanics including movement mechanics, mechanical principles, and biomechanical analysis.",
    prerequisites: "KINE 1",
  },
  {
    id: "734",
    course_code: "KINE 4",
    course_name: "Motor Learning",
    course_units: "4",
    course_description:
      "Motor learning including skill acquisition, motor development, and learning principles.",
    prerequisites: "KINE 1",
  },
  {
    id: "735",
    course_code: "KINE 5",
    course_name: "Sports Psychology",
    course_units: "4",
    course_description:
      "Sports psychology including psychological aspects of sports, motivation, and performance psychology.",
    prerequisites: "KINE 1",
  },
  {
    id: "736",
    course_code: "KINE 100",
    course_name: "Physical Education",
    course_units: "4",
    course_description:
      "Physical education including teaching physical education, curriculum development, and physical activity.",
    prerequisites: "KINE 1",
  },
  {
    id: "737",
    course_code: "KINE 101",
    course_name: "Athletic Training",
    course_units: "4",
    course_description:
      "Athletic training including sports medicine, injury prevention, and athletic care.",
    prerequisites: "KINE 1",
  },
  {
    id: "738",
    course_code: "KINE 102",
    course_name: "Fitness and Wellness",
    course_units: "4",
    course_description:
      "Fitness and wellness including personal fitness, wellness programs, and health promotion.",
    prerequisites: "KINE 1",
  },
  {
    id: "739",
    course_code: "KINE 103",
    course_name: "Adapted Physical Education",
    course_units: "4",
    course_description:
      "Adapted physical education including special populations, adaptive sports, and inclusive physical activity.",
    prerequisites: "KINE 1",
  },
  {
    id: "740",
    course_code: "KINE 104",
    course_name: "Kinesiology Research",
    course_units: "4",
    course_description:
      "Kinesiology research including research methods, data analysis, and kinesiology research design.",
    prerequisites: "KINE 1",
  },

  // Additional Environmental Science Courses
  {
    id: "741",
    course_code: "ENVS 1",
    course_name: "Introduction to Environmental Science",
    course_units: "4",
    course_description:
      "Introduction to environmental science including environmental systems, ecological principles, and environmental issues.",
    prerequisites: "None",
  },
  {
    id: "742",
    course_code: "ENVS 2",
    course_name: "Environmental Chemistry",
    course_units: "4",
    course_description:
      "Environmental chemistry including environmental pollutants, chemical processes, and environmental analysis.",
    prerequisites: "ENVS 1",
  },
  {
    id: "743",
    course_code: "ENVS 3",
    course_name: "Environmental Biology",
    course_units: "4",
    course_description:
      "Environmental biology including ecological systems, biodiversity, and environmental biology.",
    prerequisites: "ENVS 1",
  },
  {
    id: "744",
    course_code: "ENVS 4",
    course_name: "Environmental Policy",
    course_units: "4",
    course_description:
      "Environmental policy including environmental regulations, policy analysis, and environmental governance.",
    prerequisites: "ENVS 1",
  },
  {
    id: "745",
    course_code: "ENVS 5",
    course_name: "Environmental Economics",
    course_units: "4",
    course_description:
      "Environmental economics including economic analysis of environmental issues, cost-benefit analysis, and environmental markets.",
    prerequisites: "ENVS 1",
  },
  {
    id: "746",
    course_code: "ENVS 100",
    course_name: "Climate Change",
    course_units: "4",
    course_description:
      "Climate change including climate science, climate impacts, and climate policy.",
    prerequisites: "ENVS 1",
  },
  {
    id: "747",
    course_code: "ENVS 101",
    course_name: "Sustainability",
    course_units: "4",
    course_description:
      "Sustainability including sustainable development, sustainable practices, and sustainability science.",
    prerequisites: "ENVS 1",
  },
  {
    id: "748",
    course_code: "ENVS 102",
    course_name: "Environmental Toxicology",
    course_units: "4",
    course_description:
      "Environmental toxicology including environmental contaminants, toxic effects, and risk assessment.",
    prerequisites: "ENVS 1",
  },
  {
    id: "749",
    course_code: "ENVS 103",
    course_name: "Environmental Monitoring",
    course_units: "4",
    course_description:
      "Environmental monitoring including environmental assessment, monitoring techniques, and environmental data.",
    prerequisites: "ENVS 1",
  },
  {
    id: "750",
    course_code: "ENVS 104",
    course_name: "Environmental Research",
    course_units: "4",
    course_description:
      "Environmental research including research methods, environmental analysis, and environmental research design.",
    prerequisites: "ENVS 1",
  },

  // Additional Turkish Language Courses
  {
    id: "751",
    course_code: "TURK 1",
    course_name: "Elementary Turkish I",
    course_units: "4",
    course_description:
      "Elementary Turkish I including basic grammar, vocabulary, and reading skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "752",
    course_code: "TURK 2",
    course_name: "Elementary Turkish II",
    course_units: "4",
    course_description:
      "Elementary Turkish II including intermediate grammar, vocabulary, and reading skills.",
    prerequisites: "TURK 1",
  },
  {
    id: "753",
    course_code: "TURK 3",
    course_name: "Intermediate Turkish I",
    course_units: "4",
    course_description:
      "Intermediate Turkish I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "TURK 2",
  },
  {
    id: "754",
    course_code: "TURK 4",
    course_name: "Intermediate Turkish II",
    course_units: "4",
    course_description:
      "Intermediate Turkish II including advanced reading, composition, and Turkish literature.",
    prerequisites: "TURK 3",
  },
  {
    id: "755",
    course_code: "TURK 5",
    course_name: "Advanced Turkish",
    course_units: "4",
    course_description:
      "Advanced Turkish including advanced reading, literary analysis, and cultural studies.",
    prerequisites: "TURK 4",
  },
  {
    id: "756",
    course_code: "TURK 100",
    course_name: "Turkish Literature",
    course_units: "4",
    course_description:
      "Turkish literature including major works, literary analysis, and cultural context.",
    prerequisites: "TURK 5",
  },
  {
    id: "757",
    course_code: "TURK 101",
    course_name: "Modern Turkish",
    course_units: "4",
    course_description:
      "Modern Turkish including contemporary Turkish, modern literature, and current events.",
    prerequisites: "TURK 4",
  },
  {
    id: "758",
    course_code: "TURK 102",
    course_name: "Ottoman Turkish",
    course_units: "4",
    course_description:
      "Ottoman Turkish including historical Turkish, classical texts, and historical language study.",
    prerequisites: "TURK 3",
  },
  {
    id: "759",
    course_code: "TURK 103",
    course_name: "Turkish Linguistics",
    course_units: "4",
    course_description:
      "Turkish linguistics including Turkish phonology, morphology, syntax, and historical linguistics.",
    prerequisites: "LING 1, TURK 4",
  },
  {
    id: "760",
    course_code: "TURK 104",
    course_name: "Turkish Translation",
    course_units: "4",
    course_description:
      "Turkish translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "TURK 5",
  },

  // Additional Hindi Language Courses
  {
    id: "761",
    course_code: "HIND 1",
    course_name: "Elementary Hindi I",
    course_units: "4",
    course_description:
      "Elementary Hindi I including basic grammar, vocabulary, and reading skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "762",
    course_code: "HIND 2",
    course_name: "Elementary Hindi II",
    course_units: "4",
    course_description:
      "Elementary Hindi II including intermediate grammar, vocabulary, and reading skills.",
    prerequisites: "HIND 1",
  },
  {
    id: "763",
    course_code: "HIND 3",
    course_name: "Intermediate Hindi I",
    course_units: "4",
    course_description:
      "Intermediate Hindi I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "HIND 2",
  },
  {
    id: "764",
    course_code: "HIND 4",
    course_name: "Intermediate Hindi II",
    course_units: "4",
    course_description:
      "Intermediate Hindi II including advanced reading, composition, and Hindi literature.",
    prerequisites: "HIND 3",
  },
  {
    id: "765",
    course_code: "HIND 5",
    course_name: "Advanced Hindi",
    course_units: "4",
    course_description:
      "Advanced Hindi including advanced reading, literary analysis, and cultural studies.",
    prerequisites: "HIND 4",
  },
  {
    id: "766",
    course_code: "HIND 100",
    course_name: "Hindi Literature",
    course_units: "4",
    course_description:
      "Hindi literature including major works, literary analysis, and cultural context.",
    prerequisites: "HIND 5",
  },
  {
    id: "767",
    course_code: "HIND 101",
    course_name: "Modern Hindi",
    course_units: "4",
    course_description:
      "Modern Hindi including contemporary Hindi, modern literature, and current events.",
    prerequisites: "HIND 4",
  },
  {
    id: "768",
    course_code: "HIND 102",
    course_name: "Classical Hindi",
    course_units: "4",
    course_description:
      "Classical Hindi including classical texts, historical language study, and ancient literature.",
    prerequisites: "HIND 3",
  },
  {
    id: "769",
    course_code: "HIND 103",
    course_name: "Hindi Linguistics",
    course_units: "4",
    course_description:
      "Hindi linguistics including Hindi phonology, morphology, syntax, and historical linguistics.",
    prerequisites: "LING 1, HIND 4",
  },
  {
    id: "770",
    course_code: "HIND 104",
    course_name: "Hindi Translation",
    course_units: "4",
    course_description:
      "Hindi translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "HIND 5",
  },

  // Additional Botany Courses
  {
    id: "771",
    course_code: "BOT 1",
    course_name: "Introduction to Botany",
    course_units: "4",
    course_description:
      "Introduction to botany including plant biology, plant structure, and plant diversity.",
    prerequisites: "None",
  },
  {
    id: "772",
    course_code: "BOT 2",
    course_name: "Plant Anatomy",
    course_units: "4",
    course_description:
      "Plant anatomy including plant structure, tissue organization, and anatomical features.",
    prerequisites: "BOT 1",
  },
  {
    id: "773",
    course_code: "BOT 3",
    course_name: "Plant Physiology",
    course_units: "4",
    course_description:
      "Plant physiology including plant metabolism, growth processes, and physiological functions.",
    prerequisites: "BOT 1",
  },
  {
    id: "774",
    course_code: "BOT 4",
    course_name: "Plant Taxonomy",
    course_units: "4",
    course_description:
      "Plant taxonomy including plant classification, identification, and systematic botany.",
    prerequisites: "BOT 1",
  },
  {
    id: "775",
    course_code: "BOT 5",
    course_name: "Plant Ecology",
    course_units: "4",
    course_description:
      "Plant ecology including plant-environment interactions, ecological processes, and plant communities.",
    prerequisites: "BOT 1",
  },
  {
    id: "776",
    course_code: "BOT 100",
    course_name: "Plant Genetics",
    course_units: "4",
    course_description:
      "Plant genetics including plant breeding, genetic variation, and molecular genetics.",
    prerequisites: "BOT 1",
  },
  {
    id: "777",
    course_code: "BOT 101",
    course_name: "Plant Pathology",
    course_units: "4",
    course_description:
      "Plant pathology including plant diseases, disease management, and plant health.",
    prerequisites: "BOT 1",
  },
  {
    id: "778",
    course_code: "BOT 102",
    course_name: "Plant Evolution",
    course_units: "4",
    course_description:
      "Plant evolution including evolutionary processes, plant phylogeny, and evolutionary history.",
    prerequisites: "BOT 1",
  },
  {
    id: "779",
    course_code: "BOT 103",
    course_name: "Plant Biotechnology",
    course_units: "4",
    course_description:
      "Plant biotechnology including genetic engineering, biotechnological applications, and plant improvement.",
    prerequisites: "BOT 1",
  },
  {
    id: "780",
    course_code: "BOT 104",
    course_name: "Plant Conservation",
    course_units: "4",
    course_description:
      "Plant conservation including conservation biology, endangered species, and conservation strategies.",
    prerequisites: "BOT 1",
  },

  // Additional Zoology Courses
  {
    id: "781",
    course_code: "ZOOL 1",
    course_name: "Introduction to Zoology",
    course_units: "4",
    course_description:
      "Introduction to zoology including animal biology, animal diversity, and animal structure.",
    prerequisites: "None",
  },
  {
    id: "782",
    course_code: "ZOOL 2",
    course_name: "Animal Anatomy",
    course_units: "4",
    course_description:
      "Animal anatomy including animal structure, tissue organization, and anatomical features.",
    prerequisites: "ZOOL 1",
  },
  {
    id: "783",
    course_code: "ZOOL 3",
    course_name: "Animal Physiology",
    course_units: "4",
    course_description:
      "Animal physiology including animal metabolism, physiological processes, and organ systems.",
    prerequisites: "ZOOL 1",
  },
  {
    id: "784",
    course_code: "ZOOL 4",
    course_name: "Animal Taxonomy",
    course_units: "4",
    course_description:
      "Animal taxonomy including animal classification, identification, and systematic zoology.",
    prerequisites: "ZOOL 1",
  },
  {
    id: "785",
    course_code: "ZOOL 5",
    course_name: "Animal Ecology",
    course_units: "4",
    course_description:
      "Animal ecology including animal-environment interactions, ecological processes, and animal communities.",
    prerequisites: "ZOOL 1",
  },
  {
    id: "786",
    course_code: "ZOOL 100",
    course_name: "Animal Behavior",
    course_units: "4",
    course_description:
      "Animal behavior including behavioral ecology, ethology, and behavioral patterns.",
    prerequisites: "ZOOL 1",
  },
  {
    id: "787",
    course_code: "ZOOL 101",
    course_name: "Animal Genetics",
    course_units: "4",
    course_description:
      "Animal genetics including genetic variation, breeding, and molecular genetics.",
    prerequisites: "ZOOL 1",
  },
  {
    id: "788",
    course_code: "ZOOL 102",
    course_name: "Animal Evolution",
    course_units: "4",
    course_description:
      "Animal evolution including evolutionary processes, phylogeny, and evolutionary history.",
    prerequisites: "ZOOL 1",
  },
  {
    id: "789",
    course_code: "ZOOL 103",
    course_name: "Animal Conservation",
    course_units: "4",
    course_description:
      "Animal conservation including conservation biology, endangered species, and conservation strategies.",
    prerequisites: "ZOOL 1",
  },
  {
    id: "790",
    course_code: "ZOOL 104",
    course_name: "Animal Research",
    course_units: "4",
    course_description:
      "Animal research including research methods, experimental design, and zoological research.",
    prerequisites: "ZOOL 1",
  },

  // Additional Graphic Design Courses
  {
    id: "791",
    course_code: "DESN 1",
    course_name: "Introduction to Graphic Design",
    course_units: "4",
    course_description:
      "Introduction to graphic design including design principles, visual communication, and design fundamentals.",
    prerequisites: "None",
  },
  {
    id: "792",
    course_code: "DESN 2",
    course_name: "Typography",
    course_units: "4",
    course_description:
      "Typography including type design, letterforms, and typographic principles.",
    prerequisites: "DESN 1",
  },
  {
    id: "793",
    course_code: "DESN 3",
    course_name: "Digital Design",
    course_units: "4",
    course_description:
      "Digital design including digital tools, software applications, and digital design techniques.",
    prerequisites: "DESN 1",
  },
  {
    id: "794",
    course_code: "DESN 4",
    course_name: "Brand Design",
    course_units: "4",
    course_description:
      "Brand design including brand identity, logo design, and brand development.",
    prerequisites: "DESN 1",
  },
  {
    id: "795",
    course_code: "DESN 5",
    course_name: "Web Design",
    course_units: "4",
    course_description:
      "Web design including web layout, user interface design, and web development.",
    prerequisites: "DESN 1",
  },
  {
    id: "796",
    course_code: "DESN 100",
    course_name: "Advanced Graphic Design",
    course_units: "4",
    course_description:
      "Advanced graphic design including advanced techniques, creative expression, and design projects.",
    prerequisites: "DESN 1",
  },
  {
    id: "797",
    course_code: "DESN 101",
    course_name: "Design History",
    course_units: "4",
    course_description:
      "Design history including historical design movements, design evolution, and design theory.",
    prerequisites: "DESN 1",
  },
  {
    id: "798",
    course_code: "DESN 102",
    course_name: "Design Theory",
    course_units: "4",
    course_description:
      "Design theory including design principles, theoretical approaches, and design analysis.",
    prerequisites: "DESN 1",
  },
  {
    id: "799",
    course_code: "DESN 103",
    course_name: "Design Portfolio",
    course_units: "4",
    course_description:
      "Design portfolio including portfolio development, presentation skills, and professional preparation.",
    prerequisites: "DESN 1",
  },
  {
    id: "800",
    course_code: "DESN 104",
    course_name: "Design Research",
    course_units: "4",
    course_description:
      "Design research including research methods, design analysis, and design research projects.",
    prerequisites: "DESN 1",
  },

  // Additional Animation Courses
  {
    id: "801",
    course_code: "ANIM 1",
    course_name: "Introduction to Animation",
    course_units: "4",
    course_description:
      "Introduction to animation including animation principles, motion, and animation fundamentals.",
    prerequisites: "None",
  },
  {
    id: "802",
    course_code: "ANIM 2",
    course_name: "2D Animation",
    course_units: "4",
    course_description:
      "2D animation including traditional animation, digital 2D, and 2D techniques.",
    prerequisites: "ANIM 1",
  },
  {
    id: "803",
    course_code: "ANIM 3",
    course_name: "3D Animation",
    course_units: "4",
    course_description:
      "3D animation including 3D modeling, 3D animation software, and 3D techniques.",
    prerequisites: "ANIM 1",
  },
  {
    id: "804",
    course_code: "ANIM 4",
    course_name: "Character Animation",
    course_units: "4",
    course_description:
      "Character animation including character design, character movement, and character development.",
    prerequisites: "ANIM 1",
  },
  {
    id: "805",
    course_code: "ANIM 5",
    course_name: "Storyboarding",
    course_units: "4",
    course_description:
      "Storyboarding including visual storytelling, storyboard development, and narrative design.",
    prerequisites: "ANIM 1",
  },
  {
    id: "806",
    course_code: "ANIM 100",
    course_name: "Advanced Animation",
    course_units: "4",
    course_description:
      "Advanced animation including advanced techniques, complex animation, and animation projects.",
    prerequisites: "ANIM 1",
  },
  {
    id: "807",
    course_code: "ANIM 101",
    course_name: "Animation History",
    course_units: "4",
    course_description:
      "Animation history including historical animation, animation evolution, and animation theory.",
    prerequisites: "ANIM 1",
  },
  {
    id: "808",
    course_code: "ANIM 102",
    course_name: "Animation Theory",
    course_units: "4",
    course_description:
      "Animation theory including animation principles, theoretical approaches, and animation analysis.",
    prerequisites: "ANIM 1",
  },
  {
    id: "809",
    course_code: "ANIM 103",
    course_name: "Animation Production",
    course_units: "4",
    course_description:
      "Animation production including production pipeline, project management, and animation workflow.",
    prerequisites: "ANIM 1",
  },
  {
    id: "810",
    course_code: "ANIM 104",
    course_name: "Animation Portfolio",
    course_units: "4",
    course_description:
      "Animation portfolio including portfolio development, demo reel creation, and professional preparation.",
    prerequisites: "ANIM 1",
  },

  // Additional Journalism Courses
  {
    id: "811",
    course_code: "JOUR 1",
    course_name: "Introduction to Journalism",
    course_units: "4",
    course_description:
      "Introduction to journalism including news writing, journalistic principles, and media ethics.",
    prerequisites: "None",
  },
  {
    id: "812",
    course_code: "JOUR 2",
    course_name: "News Writing",
    course_units: "4",
    course_description:
      "News writing including news stories, journalistic writing, and news reporting.",
    prerequisites: "JOUR 1",
  },
  {
    id: "813",
    course_code: "JOUR 3",
    course_name: "Feature Writing",
    course_units: "4",
    course_description:
      "Feature writing including feature stories, long-form journalism, and narrative writing.",
    prerequisites: "JOUR 1",
  },
  {
    id: "814",
    course_code: "JOUR 4",
    course_name: "Investigative Journalism",
    course_units: "4",
    course_description:
      "Investigative journalism including investigative reporting, research methods, and in-depth journalism.",
    prerequisites: "JOUR 1",
  },
  {
    id: "815",
    course_code: "JOUR 5",
    course_name: "Digital Journalism",
    course_units: "4",
    course_description:
      "Digital journalism including online journalism, multimedia journalism, and digital media.",
    prerequisites: "JOUR 1",
  },
  {
    id: "816",
    course_code: "JOUR 100",
    course_name: "Broadcast Journalism",
    course_units: "4",
    course_description:
      "Broadcast journalism including television journalism, radio journalism, and broadcast reporting.",
    prerequisites: "JOUR 1",
  },
  {
    id: "817",
    course_code: "JOUR 101",
    course_name: "Photojournalism",
    course_units: "4",
    course_description:
      "Photojournalism including news photography, documentary photography, and visual journalism.",
    prerequisites: "JOUR 1",
  },
  {
    id: "818",
    course_code: "JOUR 102",
    course_name: "Media Law",
    course_units: "4",
    course_description:
      "Media law including legal issues, media regulations, and journalistic law.",
    prerequisites: "JOUR 1",
  },
  {
    id: "819",
    course_code: "JOUR 103",
    course_name: "Journalism Ethics",
    course_units: "4",
    course_description:
      "Journalism ethics including ethical principles, media ethics, and journalistic standards.",
    prerequisites: "JOUR 1",
  },
  {
    id: "820",
    course_code: "JOUR 104",
    course_name: "Journalism Research",
    course_units: "4",
    course_description:
      "Journalism research including research methods, media research, and journalistic research.",
    prerequisites: "JOUR 1",
  },

  // Additional Hospitality Management Courses
  {
    id: "821",
    course_code: "HOSP 1",
    course_name: "Introduction to Hospitality Management",
    course_units: "4",
    course_description:
      "Introduction to hospitality management including hospitality industry, service management, and hospitality operations.",
    prerequisites: "None",
  },
  {
    id: "822",
    course_code: "HOSP 2",
    course_name: "Hotel Management",
    course_units: "4",
    course_description:
      "Hotel management including hotel operations, guest services, and hotel administration.",
    prerequisites: "HOSP 1",
  },
  {
    id: "823",
    course_code: "HOSP 3",
    course_name: "Restaurant Management",
    course_units: "4",
    course_description:
      "Restaurant management including food service operations, restaurant administration, and culinary management.",
    prerequisites: "HOSP 1",
  },
  {
    id: "824",
    course_code: "HOSP 4",
    course_name: "Event Management",
    course_units: "4",
    course_description:
      "Event management including event planning, event coordination, and event production.",
    prerequisites: "HOSP 1",
  },
  {
    id: "825",
    course_code: "HOSP 5",
    course_name: "Tourism Management",
    course_units: "4",
    course_description:
      "Tourism management including tourism industry, travel management, and tourism operations.",
    prerequisites: "HOSP 1",
  },
  {
    id: "826",
    course_code: "HOSP 100",
    course_name: "Hospitality Marketing",
    course_units: "4",
    course_description:
      "Hospitality marketing including marketing strategies, customer relations, and hospitality promotion.",
    prerequisites: "HOSP 1",
  },
  {
    id: "827",
    course_code: "HOSP 101",
    course_name: "Hospitality Finance",
    course_units: "4",
    course_description:
      "Hospitality finance including financial management, budgeting, and hospitality accounting.",
    prerequisites: "HOSP 1",
  },
  {
    id: "828",
    course_code: "HOSP 102",
    course_name: "Hospitality Law",
    course_units: "4",
    course_description:
      "Hospitality law including legal issues, regulations, and hospitality legal matters.",
    prerequisites: "HOSP 1",
  },
  {
    id: "829",
    course_code: "HOSP 103",
    course_name: "Customer Service",
    course_units: "4",
    course_description:
      "Customer service including service quality, customer relations, and service management.",
    prerequisites: "HOSP 1",
  },
  {
    id: "830",
    course_code: "HOSP 104",
    course_name: "Hospitality Technology",
    course_units: "4",
    course_description:
      "Hospitality technology including technology applications, digital systems, and hospitality innovation.",
    prerequisites: "HOSP 1",
  },

  // Additional Fashion Design Courses
  {
    id: "831",
    course_code: "FASH 1",
    course_name: "Introduction to Fashion Design",
    course_units: "4",
    course_description:
      "Introduction to fashion design including design principles, fashion fundamentals, and design process.",
    prerequisites: "None",
  },
  {
    id: "832",
    course_code: "FASH 2",
    course_name: "Fashion Drawing",
    course_units: "4",
    course_description:
      "Fashion drawing including fashion illustration, design sketching, and visual communication.",
    prerequisites: "FASH 1",
  },
  {
    id: "833",
    course_code: "FASH 3",
    course_name: "Pattern Making",
    course_units: "4",
    course_description:
      "Pattern making including pattern development, garment construction, and technical design.",
    prerequisites: "FASH 1",
  },
  {
    id: "834",
    course_code: "FASH 4",
    course_name: "Fashion History",
    course_units: "4",
    course_description:
      "Fashion history including historical fashion, fashion evolution, and cultural fashion.",
    prerequisites: "FASH 1",
  },
  {
    id: "835",
    course_code: "FASH 5",
    course_name: "Textile Design",
    course_units: "4",
    course_description:
      "Textile design including fabric design, textile technology, and material development.",
    prerequisites: "FASH 1",
  },
  {
    id: "836",
    course_code: "FASH 100",
    course_name: "Advanced Fashion Design",
    course_units: "4",
    course_description:
      "Advanced fashion design including advanced techniques, creative expression, and design projects.",
    prerequisites: "FASH 1",
  },
  {
    id: "837",
    course_code: "FASH 101",
    course_name: "Fashion Marketing",
    course_units: "4",
    course_description:
      "Fashion marketing including marketing strategies, brand development, and fashion promotion.",
    prerequisites: "FASH 1",
  },
  {
    id: "838",
    course_code: "FASH 102",
    course_name: "Fashion Merchandising",
    course_units: "4",
    course_description:
      "Fashion merchandising including retail management, product development, and fashion business.",
    prerequisites: "FASH 1",
  },
  {
    id: "839",
    course_code: "FASH 103",
    course_name: "Sustainable Fashion",
    course_units: "4",
    course_description:
      "Sustainable fashion including eco-friendly design, sustainable practices, and ethical fashion.",
    prerequisites: "FASH 1",
  },
  {
    id: "840",
    course_code: "FASH 104",
    course_name: "Fashion Portfolio",
    course_units: "4",
    course_description:
      "Fashion portfolio including portfolio development, presentation skills, and professional preparation.",
    prerequisites: "FASH 1",
  },

  // Additional Interior Design Courses
  {
    id: "841",
    course_code: "INTD 1",
    course_name: "Introduction to Interior Design",
    course_units: "4",
    course_description:
      "Introduction to interior design including design principles, space planning, and design fundamentals.",
    prerequisites: "None",
  },
  {
    id: "842",
    course_code: "INTD 2",
    course_name: "Space Planning",
    course_units: "4",
    course_description:
      "Space planning including layout design, spatial organization, and functional planning.",
    prerequisites: "INTD 1",
  },
  {
    id: "843",
    course_code: "INTD 3",
    course_name: "Interior Materials",
    course_units: "4",
    course_description:
      "Interior materials including material selection, finishes, and material applications.",
    prerequisites: "INTD 1",
  },
  {
    id: "844",
    course_code: "INTD 4",
    course_name: "Interior Lighting",
    course_units: "4",
    course_description:
      "Interior lighting including lighting design, lighting systems, and lighting applications.",
    prerequisites: "INTD 1",
  },
  {
    id: "845",
    course_code: "INTD 5",
    course_name: "Furniture Design",
    course_units: "4",
    course_description:
      "Furniture design including furniture selection, custom furniture, and furniture arrangement.",
    prerequisites: "INTD 1",
  },
  {
    id: "846",
    course_code: "INTD 100",
    course_name: "Advanced Interior Design",
    course_units: "4",
    course_description:
      "Advanced interior design including advanced techniques, creative expression, and design projects.",
    prerequisites: "INTD 1",
  },
  {
    id: "847",
    course_code: "INTD 101",
    course_name: "Interior Design History",
    course_units: "4",
    course_description:
      "Interior design history including historical design, design evolution, and cultural design.",
    prerequisites: "INTD 1",
  },
  {
    id: "848",
    course_code: "INTD 102",
    course_name: "Sustainable Design",
    course_units: "4",
    course_description:
      "Sustainable design including eco-friendly design, sustainable practices, and green design.",
    prerequisites: "INTD 1",
  },
  {
    id: "849",
    course_code: "INTD 103",
    course_name: "Commercial Design",
    course_units: "4",
    course_description:
      "Commercial design including commercial spaces, retail design, and workplace design.",
    prerequisites: "INTD 1",
  },
  {
    id: "850",
    course_code: "INTD 104",
    course_name: "Interior Design Portfolio",
    course_units: "4",
    course_description:
      "Interior design portfolio including portfolio development, presentation skills, and professional preparation.",
    prerequisites: "INTD 1",
  },

  // Additional Swedish Language Courses
  {
    id: "851",
    course_code: "SWED 1",
    course_name: "Elementary Swedish I",
    course_units: "4",
    course_description:
      "Elementary Swedish I including basic grammar, vocabulary, and reading skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "852",
    course_code: "SWED 2",
    course_name: "Elementary Swedish II",
    course_units: "4",
    course_description:
      "Elementary Swedish II including intermediate grammar, vocabulary, and reading skills.",
    prerequisites: "SWED 1",
  },
  {
    id: "853",
    course_code: "SWED 3",
    course_name: "Intermediate Swedish I",
    course_units: "4",
    course_description:
      "Intermediate Swedish I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "SWED 2",
  },
  {
    id: "854",
    course_code: "SWED 4",
    course_name: "Intermediate Swedish II",
    course_units: "4",
    course_description:
      "Intermediate Swedish II including advanced reading, composition, and Swedish literature.",
    prerequisites: "SWED 3",
  },
  {
    id: "855",
    course_code: "SWED 5",
    course_name: "Advanced Swedish",
    course_units: "4",
    course_description:
      "Advanced Swedish including advanced reading, literary analysis, and cultural studies.",
    prerequisites: "SWED 4",
  },
  {
    id: "856",
    course_code: "SWED 100",
    course_name: "Swedish Literature",
    course_units: "4",
    course_description:
      "Swedish literature including major works, literary analysis, and cultural context.",
    prerequisites: "SWED 5",
  },
  {
    id: "857",
    course_code: "SWED 101",
    course_name: "Modern Swedish",
    course_units: "4",
    course_description:
      "Modern Swedish including contemporary Swedish, modern literature, and current events.",
    prerequisites: "SWED 4",
  },
  {
    id: "858",
    course_code: "SWED 102",
    course_name: "Swedish Linguistics",
    course_units: "4",
    course_description:
      "Swedish linguistics including Swedish phonology, morphology, syntax, and historical linguistics.",
    prerequisites: "LING 1, SWED 4",
  },
  {
    id: "859",
    course_code: "SWED 103",
    course_name: "Swedish Translation",
    course_units: "4",
    course_description:
      "Swedish translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "SWED 5",
  },
  {
    id: "860",
    course_code: "SWED 104",
    course_name: "Swedish Culture",
    course_units: "4",
    course_description:
      "Swedish culture including cultural studies, traditions, and contemporary Swedish society.",
    prerequisites: "SWED 3",
  },

  // Additional Dutch Language Courses
  {
    id: "861",
    course_code: "DUTCH 1",
    course_name: "Elementary Dutch I",
    course_units: "4",
    course_description:
      "Elementary Dutch I including basic grammar, vocabulary, and reading skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "862",
    course_code: "DUTCH 2",
    course_name: "Elementary Dutch II",
    course_units: "4",
    course_description:
      "Elementary Dutch II including intermediate grammar, vocabulary, and reading skills.",
    prerequisites: "DUTCH 1",
  },
  {
    id: "863",
    course_code: "DUTCH 3",
    course_name: "Intermediate Dutch I",
    course_units: "4",
    course_description:
      "Intermediate Dutch I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "DUTCH 2",
  },
  {
    id: "864",
    course_code: "DUTCH 4",
    course_name: "Intermediate Dutch II",
    course_units: "4",
    course_description:
      "Intermediate Dutch II including advanced reading, composition, and Dutch literature.",
    prerequisites: "DUTCH 3",
  },
  {
    id: "865",
    course_code: "DUTCH 5",
    course_name: "Advanced Dutch",
    course_units: "4",
    course_description:
      "Advanced Dutch including advanced reading, literary analysis, and cultural studies.",
    prerequisites: "DUTCH 4",
  },
  {
    id: "866",
    course_code: "DUTCH 100",
    course_name: "Dutch Literature",
    course_units: "4",
    course_description:
      "Dutch literature including major works, literary analysis, and cultural context.",
    prerequisites: "DUTCH 5",
  },
  {
    id: "867",
    course_code: "DUTCH 101",
    course_name: "Modern Dutch",
    course_units: "4",
    course_description:
      "Modern Dutch including contemporary Dutch, modern literature, and current events.",
    prerequisites: "DUTCH 4",
  },
  {
    id: "868",
    course_code: "DUTCH 102",
    course_name: "Dutch Linguistics",
    course_units: "4",
    course_description:
      "Dutch linguistics including Dutch phonology, morphology, syntax, and historical linguistics.",
    prerequisites: "LING 1, DUTCH 4",
  },
  {
    id: "869",
    course_code: "DUTCH 103",
    course_name: "Dutch Translation",
    course_units: "4",
    course_description:
      "Dutch translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "DUTCH 5",
  },
  {
    id: "870",
    course_code: "DUTCH 104",
    course_name: "Dutch Culture",
    course_units: "4",
    course_description:
      "Dutch culture including cultural studies, traditions, and contemporary Dutch society.",
    prerequisites: "DUTCH 3",
  },

  // Additional Microbiology Courses
  {
    id: "871",
    course_code: "MICR 1",
    course_name: "Introduction to Microbiology",
    course_units: "4",
    course_description:
      "Introduction to microbiology including microbial diversity, microbial structure, and microbial function.",
    prerequisites: "None",
  },
  {
    id: "872",
    course_code: "MICR 2",
    course_name: "Bacterial Physiology",
    course_units: "4",
    course_description:
      "Bacterial physiology including bacterial metabolism, growth, and physiological processes.",
    prerequisites: "MICR 1",
  },
  {
    id: "873",
    course_code: "MICR 3",
    course_name: "Microbial Genetics",
    course_units: "4",
    course_description:
      "Microbial genetics including genetic mechanisms, gene transfer, and genetic engineering.",
    prerequisites: "MICR 1",
  },
  {
    id: "874",
    course_code: "MICR 4",
    course_name: "Microbial Ecology",
    course_units: "4",
    course_description:
      "Microbial ecology including microbial communities, environmental microbiology, and microbial interactions.",
    prerequisites: "MICR 1",
  },
  {
    id: "875",
    course_code: "MICR 5",
    course_name: "Medical Microbiology",
    course_units: "4",
    course_description:
      "Medical microbiology including pathogenic microorganisms, infectious diseases, and host-microbe interactions.",
    prerequisites: "MICR 1",
  },
  {
    id: "876",
    course_code: "MICR 100",
    course_name: "Virology",
    course_units: "4",
    course_description:
      "Virology including virus structure, viral replication, and viral pathogenesis.",
    prerequisites: "MICR 1",
  },
  {
    id: "877",
    course_code: "MICR 101",
    course_name: "Immunology",
    course_units: "4",
    course_description:
      "Immunology including immune system function, immune responses, and immunological disorders.",
    prerequisites: "MICR 1",
  },
  {
    id: "878",
    course_code: "MICR 102",
    course_name: "Microbial Biotechnology",
    course_units: "4",
    course_description:
      "Microbial biotechnology including biotechnological applications, industrial microbiology, and microbial products.",
    prerequisites: "MICR 1",
  },
  {
    id: "879",
    course_code: "MICR 103",
    course_name: "Microbial Evolution",
    course_units: "4",
    course_description:
      "Microbial evolution including evolutionary processes, microbial phylogeny, and evolutionary history.",
    prerequisites: "MICR 1",
  },
  {
    id: "880",
    course_code: "MICR 104",
    course_name: "Microbial Research",
    course_units: "4",
    course_description:
      "Microbial research including research methods, experimental design, and microbiological research.",
    prerequisites: "MICR 1",
  },

  // Additional Immunology Courses
  {
    id: "881",
    course_code: "IMMU 1",
    course_name: "Introduction to Immunology",
    course_units: "4",
    course_description:
      "Introduction to immunology including immune system components, immune responses, and immunological principles.",
    prerequisites: "None",
  },
  {
    id: "882",
    course_code: "IMMU 2",
    course_name: "Cellular Immunology",
    course_units: "4",
    course_description:
      "Cellular immunology including immune cell function, cell interactions, and cellular immune responses.",
    prerequisites: "IMMU 1",
  },
  {
    id: "883",
    course_code: "IMMU 3",
    course_name: "Molecular Immunology",
    course_units: "4",
    course_description:
      "Molecular immunology including molecular mechanisms, immune signaling, and molecular immune processes.",
    prerequisites: "IMMU 1",
  },
  {
    id: "884",
    course_code: "IMMU 4",
    course_name: "Clinical Immunology",
    course_units: "4",
    course_description:
      "Clinical immunology including immunological disorders, clinical applications, and therapeutic approaches.",
    prerequisites: "IMMU 1",
  },
  {
    id: "885",
    course_code: "IMMU 5",
    course_name: "Immunopathology",
    course_units: "4",
    course_description:
      "Immunopathology including immune-mediated diseases, pathological processes, and disease mechanisms.",
    prerequisites: "IMMU 1",
  },
  {
    id: "886",
    course_code: "IMMU 100",
    course_name: "Immunotherapy",
    course_units: "4",
    course_description:
      "Immunotherapy including therapeutic approaches, treatment strategies, and clinical applications.",
    prerequisites: "IMMU 1",
  },
  {
    id: "887",
    course_code: "IMMU 101",
    course_name: "Vaccine Immunology",
    course_units: "4",
    course_description:
      "Vaccine immunology including vaccine development, immune responses to vaccines, and vaccination strategies.",
    prerequisites: "IMMU 1",
  },
  {
    id: "888",
    course_code: "IMMU 102",
    course_name: "Autoimmunity",
    course_units: "4",
    course_description:
      "Autoimmunity including autoimmune diseases, self-tolerance, and autoimmune mechanisms.",
    prerequisites: "IMMU 1",
  },
  {
    id: "889",
    course_code: "IMMU 103",
    course_name: "Immunogenetics",
    course_units: "4",
    course_description:
      "Immunogenetics including genetic basis of immunity, immune gene regulation, and genetic immune disorders.",
    prerequisites: "IMMU 1",
  },
  {
    id: "890",
    course_code: "IMMU 104",
    course_name: "Immunological Research",
    course_units: "4",
    course_description:
      "Immunological research including research methods, experimental design, and immunological research.",
    prerequisites: "IMMU 1",
  },

  // Additional Game Design Courses
  {
    id: "891",
    course_code: "GAME 1",
    course_name: "Introduction to Game Design",
    course_units: "4",
    course_description:
      "Introduction to game design including game mechanics, game theory, and design fundamentals.",
    prerequisites: "None",
  },
  {
    id: "892",
    course_code: "GAME 2",
    course_name: "Game Mechanics",
    course_units: "4",
    course_description:
      "Game mechanics including core mechanics, gameplay systems, and mechanical design.",
    prerequisites: "GAME 1",
  },
  {
    id: "893",
    course_code: "GAME 3",
    course_name: "Level Design",
    course_units: "4",
    course_description:
      "Level design including spatial design, environmental storytelling, and level creation.",
    prerequisites: "GAME 1",
  },
  {
    id: "894",
    course_code: "GAME 4",
    course_name: "Game Programming",
    course_units: "4",
    course_description:
      "Game programming including game development, programming languages, and software development.",
    prerequisites: "GAME 1",
  },
  {
    id: "895",
    course_code: "GAME 5",
    course_name: "Game Art",
    course_units: "4",
    course_description:
      "Game art including visual design, character design, and artistic development.",
    prerequisites: "GAME 1",
  },
  {
    id: "896",
    course_code: "GAME 100",
    course_name: "Advanced Game Design",
    course_units: "4",
    course_description:
      "Advanced game design including advanced techniques, complex systems, and design projects.",
    prerequisites: "GAME 1",
  },
  {
    id: "897",
    course_code: "GAME 101",
    course_name: "Game Production",
    course_units: "4",
    course_description:
      "Game production including production pipeline, project management, and development workflow.",
    prerequisites: "GAME 1",
  },
  {
    id: "898",
    course_code: "GAME 102",
    course_name: "Game History",
    course_units: "4",
    course_description:
      "Game history including historical development, game evolution, and industry history.",
    prerequisites: "GAME 1",
  },
  {
    id: "899",
    course_code: "GAME 103",
    course_name: "Game Theory",
    course_units: "4",
    course_description:
      "Game theory including theoretical approaches, analytical methods, and game analysis.",
    prerequisites: "GAME 1",
  },
  {
    id: "900",
    course_code: "GAME 104",
    course_name: "Game Portfolio",
    course_units: "4",
    course_description:
      "Game portfolio including portfolio development, project presentation, and professional preparation.",
    prerequisites: "GAME 1",
  },

  // Additional Industrial Design Courses
  {
    id: "901",
    course_code: "INDD 1",
    course_name: "Introduction to Industrial Design",
    course_units: "4",
    course_description:
      "Introduction to industrial design including design principles, product design, and design process.",
    prerequisites: "None",
  },
  {
    id: "902",
    course_code: "INDD 2",
    course_name: "Product Design",
    course_units: "4",
    course_description:
      "Product design including product development, design thinking, and product innovation.",
    prerequisites: "INDD 1",
  },
  {
    id: "903",
    course_code: "INDD 3",
    course_name: "Design Materials",
    course_units: "4",
    course_description:
      "Design materials including material selection, material properties, and material applications.",
    prerequisites: "INDD 1",
  },
  {
    id: "904",
    course_code: "INDD 4",
    course_name: "Manufacturing Processes",
    course_units: "4",
    course_description:
      "Manufacturing processes including production methods, manufacturing techniques, and process design.",
    prerequisites: "INDD 1",
  },
  {
    id: "905",
    course_code: "INDD 5",
    course_name: "Design Technology",
    course_units: "4",
    course_description:
      "Design technology including digital tools, software applications, and technological innovation.",
    prerequisites: "INDD 1",
  },
  {
    id: "906",
    course_code: "INDD 100",
    course_name: "Advanced Industrial Design",
    course_units: "4",
    course_description:
      "Advanced industrial design including advanced techniques, complex projects, and design innovation.",
    prerequisites: "INDD 1",
  },
  {
    id: "907",
    course_code: "INDD 101",
    course_name: "Design Research",
    course_units: "4",
    course_description:
      "Design research including research methods, user research, and design analysis.",
    prerequisites: "INDD 1",
  },
  {
    id: "908",
    course_code: "INDD 102",
    course_name: "Sustainable Design",
    course_units: "4",
    course_description:
      "Sustainable design including eco-friendly design, sustainable practices, and environmental considerations.",
    prerequisites: "INDD 1",
  },
  {
    id: "909",
    course_code: "INDD 103",
    course_name: "Design Management",
    course_units: "4",
    course_description:
      "Design management including project management, team leadership, and design strategy.",
    prerequisites: "INDD 1",
  },
  {
    id: "910",
    course_code: "INDD 104",
    course_name: "Design Portfolio",
    course_units: "4",
    course_description:
      "Design portfolio including portfolio development, presentation skills, and professional preparation.",
    prerequisites: "INDD 1",
  },

  // Additional Real Estate Courses
  {
    id: "911",
    course_code: "REAL 1",
    course_name: "Introduction to Real Estate",
    course_units: "4",
    course_description:
      "Introduction to real estate including real estate principles, market analysis, and industry fundamentals.",
    prerequisites: "None",
  },
  {
    id: "912",
    course_code: "REAL 2",
    course_name: "Real Estate Finance",
    course_units: "4",
    course_description:
      "Real estate finance including financing methods, investment analysis, and financial management.",
    prerequisites: "REAL 1",
  },
  {
    id: "913",
    course_code: "REAL 3",
    course_name: "Real Estate Law",
    course_units: "4",
    course_description:
      "Real estate law including legal principles, property rights, and regulatory compliance.",
    prerequisites: "REAL 1",
  },
  {
    id: "914",
    course_code: "REAL 4",
    course_name: "Real Estate Marketing",
    course_units: "4",
    course_description:
      "Real estate marketing including marketing strategies, market research, and promotional techniques.",
    prerequisites: "REAL 1",
  },
  {
    id: "915",
    course_code: "REAL 5",
    course_name: "Property Management",
    course_units: "4",
    course_description:
      "Property management including property operations, tenant relations, and maintenance management.",
    prerequisites: "REAL 1",
  },
  {
    id: "916",
    course_code: "REAL 100",
    course_name: "Real Estate Investment",
    course_units: "4",
    course_description:
      "Real estate investment including investment strategies, portfolio management, and risk analysis.",
    prerequisites: "REAL 1",
  },
  {
    id: "917",
    course_code: "REAL 101",
    course_name: "Real Estate Development",
    course_units: "4",
    course_description:
      "Real estate development including development process, project management, and construction oversight.",
    prerequisites: "REAL 1",
  },
  {
    id: "918",
    course_code: "REAL 102",
    course_name: "Real Estate Appraisal",
    course_units: "4",
    course_description:
      "Real estate appraisal including valuation methods, market analysis, and appraisal techniques.",
    prerequisites: "REAL 1",
  },
  {
    id: "919",
    course_code: "REAL 103",
    course_name: "Real Estate Economics",
    course_units: "4",
    course_description:
      "Real estate economics including economic principles, market dynamics, and economic analysis.",
    prerequisites: "REAL 1",
  },
  {
    id: "920",
    course_code: "REAL 104",
    course_name: "Real Estate Ethics",
    course_units: "4",
    course_description:
      "Real estate ethics including ethical principles, professional standards, and ethical decision-making.",
    prerequisites: "REAL 1",
  },

  // Additional Aviation Courses
  {
    id: "921",
    course_code: "AVIA 1",
    course_name: "Introduction to Aviation",
    course_units: "4",
    course_description:
      "Introduction to aviation including aviation principles, flight fundamentals, and industry overview.",
    prerequisites: "None",
  },
  {
    id: "922",
    course_code: "AVIA 2",
    course_name: "Aircraft Systems",
    course_units: "4",
    course_description:
      "Aircraft systems including aircraft components, system operation, and technical systems.",
    prerequisites: "AVIA 1",
  },
  {
    id: "923",
    course_code: "AVIA 3",
    course_name: "Flight Operations",
    course_units: "4",
    course_description:
      "Flight operations including flight planning, navigation, and operational procedures.",
    prerequisites: "AVIA 1",
  },
  {
    id: "924",
    course_code: "AVIA 4",
    course_name: "Aviation Safety",
    course_units: "4",
    course_description:
      "Aviation safety including safety principles, risk management, and safety procedures.",
    prerequisites: "AVIA 1",
  },
  {
    id: "925",
    course_code: "AVIA 5",
    course_name: "Aviation Weather",
    course_units: "4",
    course_description:
      "Aviation weather including weather analysis, meteorological principles, and weather effects on flight.",
    prerequisites: "AVIA 1",
  },
  {
    id: "926",
    course_code: "AVIA 100",
    course_name: "Aviation Management",
    course_units: "4",
    course_description:
      "Aviation management including management principles, operational management, and administrative functions.",
    prerequisites: "AVIA 1",
  },
  {
    id: "927",
    course_code: "AVIA 101",
    course_name: "Air Traffic Control",
    course_units: "4",
    course_description:
      "Air traffic control including control procedures, communication systems, and traffic management.",
    prerequisites: "AVIA 1",
  },
  {
    id: "928",
    course_code: "AVIA 102",
    course_name: "Aviation Law",
    course_units: "4",
    course_description:
      "Aviation law including legal principles, regulatory compliance, and aviation regulations.",
    prerequisites: "AVIA 1",
  },
  {
    id: "929",
    course_code: "AVIA 103",
    course_name: "Aviation Technology",
    course_units: "4",
    course_description:
      "Aviation technology including technological innovation, advanced systems, and technological applications.",
    prerequisites: "AVIA 1",
  },
  {
    id: "930",
    course_code: "AVIA 104",
    course_name: "Aviation Research",
    course_units: "4",
    course_description:
      "Aviation research including research methods, experimental design, and aviation research projects.",
    prerequisites: "AVIA 1",
  },

  // Additional Marine Biology Courses
  {
    id: "931",
    course_code: "MARB 1",
    course_name: "Introduction to Marine Biology",
    course_units: "4",
    course_description:
      "Introduction to marine biology including marine ecosystems, marine organisms, and ocean science.",
    prerequisites: "None",
  },
  {
    id: "932",
    course_code: "MARB 2",
    course_name: "Marine Ecology",
    course_units: "4",
    course_description:
      "Marine ecology including marine ecosystems, ecological processes, and marine communities.",
    prerequisites: "MARB 1",
  },
  {
    id: "933",
    course_code: "MARB 3",
    course_name: "Marine Physiology",
    course_units: "4",
    course_description:
      "Marine physiology including physiological adaptations, marine organism function, and physiological processes.",
    prerequisites: "MARB 1",
  },
  {
    id: "934",
    course_code: "MARB 4",
    course_name: "Marine Conservation",
    course_units: "4",
    course_description:
      "Marine conservation including conservation biology, marine protected areas, and conservation strategies.",
    prerequisites: "MARB 1",
  },
  {
    id: "935",
    course_code: "MARB 5",
    course_name: "Marine Biotechnology",
    course_units: "4",
    course_description:
      "Marine biotechnology including biotechnological applications, marine products, and technological innovation.",
    prerequisites: "MARB 1",
  },
  {
    id: "936",
    course_code: "MARB 100",
    course_name: "Marine Microbiology",
    course_units: "4",
    course_description:
      "Marine microbiology including marine microorganisms, microbial ecology, and microbial processes.",
    prerequisites: "MARB 1",
  },
  {
    id: "937",
    course_code: "MARB 101",
    course_name: "Marine Genetics",
    course_units: "4",
    course_description:
      "Marine genetics including genetic diversity, evolutionary processes, and genetic research.",
    prerequisites: "MARB 1",
  },
  {
    id: "938",
    course_code: "MARB 102",
    course_name: "Marine Evolution",
    course_units: "4",
    course_description:
      "Marine evolution including evolutionary processes, marine phylogeny, and evolutionary history.",
    prerequisites: "MARB 1",
  },
  {
    id: "939",
    course_code: "MARB 103",
    course_name: "Marine Research",
    course_units: "4",
    course_description:
      "Marine research including research methods, field techniques, and marine research projects.",
    prerequisites: "MARB 1",
  },
  {
    id: "940",
    course_code: "MARB 104",
    course_name: "Marine Policy",
    course_units: "4",
    course_description:
      "Marine policy including policy development, regulatory frameworks, and marine governance.",
    prerequisites: "MARB 1",
  },

  // Additional Forensic Science Courses
  {
    id: "941",
    course_code: "FORS 1",
    course_name: "Introduction to Forensic Science",
    course_units: "4",
    course_description:
      "Introduction to forensic science including forensic principles, scientific methods, and forensic applications.",
    prerequisites: "None",
  },
  {
    id: "942",
    course_code: "FORS 2",
    course_name: "Forensic Biology",
    course_units: "4",
    course_description:
      "Forensic biology including biological evidence, DNA analysis, and biological forensic techniques.",
    prerequisites: "FORS 1",
  },
  {
    id: "943",
    course_code: "FORS 3",
    course_name: "Forensic Chemistry",
    course_units: "4",
    course_description:
      "Forensic chemistry including chemical analysis, toxicology, and chemical forensic techniques.",
    prerequisites: "FORS 1",
  },
  {
    id: "944",
    course_code: "FORS 4",
    course_name: "Forensic Anthropology",
    course_units: "4",
    course_description:
      "Forensic anthropology including human remains analysis, skeletal identification, and anthropological techniques.",
    prerequisites: "FORS 1",
  },
  {
    id: "945",
    course_code: "FORS 5",
    course_name: "Forensic Psychology",
    course_units: "4",
    course_description:
      "Forensic psychology including psychological assessment, criminal profiling, and behavioral analysis.",
    prerequisites: "FORS 1",
  },
  {
    id: "946",
    course_code: "FORS 100",
    course_name: "Forensic Toxicology",
    course_units: "4",
    course_description:
      "Forensic toxicology including drug analysis, poison detection, and toxicological testing.",
    prerequisites: "FORS 1",
  },
  {
    id: "947",
    course_code: "FORS 101",
    course_name: "Forensic Entomology",
    course_units: "4",
    course_description:
      "Forensic entomology including insect analysis, decomposition studies, and entomological evidence.",
    prerequisites: "FORS 1",
  },
  {
    id: "948",
    course_code: "FORS 102",
    course_name: "Forensic Pathology",
    course_units: "4",
    course_description:
      "Forensic pathology including death investigation, autopsy procedures, and pathological analysis.",
    prerequisites: "FORS 1",
  },
  {
    id: "949",
    course_code: "FORS 103",
    course_name: "Forensic Technology",
    course_units: "4",
    course_description:
      "Forensic technology including technological applications, digital forensics, and technological innovation.",
    prerequisites: "FORS 1",
  },
  {
    id: "950",
    course_code: "FORS 104",
    course_name: "Forensic Research",
    course_units: "4",
    course_description:
      "Forensic research including research methods, experimental design, and forensic research projects.",
    prerequisites: "FORS 1",
  },

  // Additional Norwegian Language Courses
  {
    id: "951",
    course_code: "NORW 1",
    course_name: "Elementary Norwegian I",
    course_units: "4",
    course_description:
      "Elementary Norwegian I including basic grammar, vocabulary, and reading skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "952",
    course_code: "NORW 2",
    course_name: "Elementary Norwegian II",
    course_units: "4",
    course_description:
      "Elementary Norwegian II including intermediate grammar, vocabulary, and reading skills.",
    prerequisites: "NORW 1",
  },
  {
    id: "953",
    course_code: "NORW 3",
    course_name: "Intermediate Norwegian I",
    course_units: "4",
    course_description:
      "Intermediate Norwegian I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "NORW 2",
  },
  {
    id: "954",
    course_code: "NORW 4",
    course_name: "Intermediate Norwegian II",
    course_units: "4",
    course_description:
      "Intermediate Norwegian II including advanced reading, composition, and Norwegian literature.",
    prerequisites: "NORW 3",
  },
  {
    id: "955",
    course_code: "NORW 5",
    course_name: "Advanced Norwegian",
    course_units: "4",
    course_description:
      "Advanced Norwegian including advanced reading, literary analysis, and cultural studies.",
    prerequisites: "NORW 4",
  },
  {
    id: "956",
    course_code: "NORW 100",
    course_name: "Norwegian Literature",
    course_units: "4",
    course_description:
      "Norwegian literature including major works, literary analysis, and cultural context.",
    prerequisites: "NORW 5",
  },
  {
    id: "957",
    course_code: "NORW 101",
    course_name: "Modern Norwegian",
    course_units: "4",
    course_description:
      "Modern Norwegian including contemporary Norwegian, modern literature, and current events.",
    prerequisites: "NORW 4",
  },
  {
    id: "958",
    course_code: "NORW 102",
    course_name: "Norwegian Linguistics",
    course_units: "4",
    course_description:
      "Norwegian linguistics including Norwegian phonology, morphology, syntax, and historical linguistics.",
    prerequisites: "LING 1, NORW 4",
  },
  {
    id: "959",
    course_code: "NORW 103",
    course_name: "Norwegian Translation",
    course_units: "4",
    course_description:
      "Norwegian translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "NORW 5",
  },
  {
    id: "960",
    course_code: "NORW 104",
    course_name: "Norwegian Culture",
    course_units: "4",
    course_description:
      "Norwegian culture including cultural studies, traditions, and contemporary Norwegian society.",
    prerequisites: "NORW 3",
  },

  // Additional Danish Language Courses
  {
    id: "961",
    course_code: "DAN 1",
    course_name: "Elementary Danish I",
    course_units: "4",
    course_description:
      "Elementary Danish I including basic grammar, vocabulary, and reading skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "962",
    course_code: "DAN 2",
    course_name: "Elementary Danish II",
    course_units: "4",
    course_description:
      "Elementary Danish II including intermediate grammar, vocabulary, and reading skills.",
    prerequisites: "DAN 1",
  },
  {
    id: "963",
    course_code: "DAN 3",
    course_name: "Intermediate Danish I",
    course_units: "4",
    course_description:
      "Intermediate Danish I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "DAN 2",
  },
  {
    id: "964",
    course_code: "DAN 4",
    course_name: "Intermediate Danish II",
    course_units: "4",
    course_description:
      "Intermediate Danish II including advanced reading, composition, and Danish literature.",
    prerequisites: "DAN 3",
  },
  {
    id: "965",
    course_code: "DAN 5",
    course_name: "Advanced Danish",
    course_units: "4",
    course_description:
      "Advanced Danish including advanced reading, literary analysis, and cultural studies.",
    prerequisites: "DAN 4",
  },
  {
    id: "966",
    course_code: "DAN 100",
    course_name: "Danish Literature",
    course_units: "4",
    course_description:
      "Danish literature including major works, literary analysis, and cultural context.",
    prerequisites: "DAN 5",
  },
  {
    id: "967",
    course_code: "DAN 101",
    course_name: "Modern Danish",
    course_units: "4",
    course_description:
      "Modern Danish including contemporary Danish, modern literature, and current events.",
    prerequisites: "DAN 4",
  },
  {
    id: "968",
    course_code: "DAN 102",
    course_name: "Danish Linguistics",
    course_units: "4",
    course_description:
      "Danish linguistics including Danish phonology, morphology, syntax, and historical linguistics.",
    prerequisites: "LING 1, DAN 4",
  },
  {
    id: "969",
    course_code: "DAN 103",
    course_name: "Danish Translation",
    course_units: "4",
    course_description:
      "Danish translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "DAN 5",
  },
  {
    id: "970",
    course_code: "DAN 104",
    course_name: "Danish Culture",
    course_units: "4",
    course_description:
      "Danish culture including cultural studies, traditions, and contemporary Danish society.",
    prerequisites: "DAN 3",
  },

  // Additional Pharmacology Courses
  {
    id: "971",
    course_code: "PHAR 1",
    course_name: "Introduction to Pharmacology",
    course_units: "4",
    course_description:
      "Introduction to pharmacology including drug principles, drug mechanisms, and pharmacological fundamentals.",
    prerequisites: "None",
  },
  {
    id: "972",
    course_code: "PHAR 2",
    course_name: "Drug Metabolism",
    course_units: "4",
    course_description:
      "Drug metabolism including metabolic pathways, drug transformation, and pharmacokinetics.",
    prerequisites: "PHAR 1",
  },
  {
    id: "973",
    course_code: "PHAR 3",
    course_name: "Clinical Pharmacology",
    course_units: "4",
    course_description:
      "Clinical pharmacology including therapeutic applications, drug interactions, and clinical drug use.",
    prerequisites: "PHAR 1",
  },
  {
    id: "974",
    course_code: "PHAR 4",
    course_name: "Toxicology",
    course_units: "4",
    course_description:
      "Toxicology including toxic effects, poison mechanisms, and toxicological assessment.",
    prerequisites: "PHAR 1",
  },
  {
    id: "975",
    course_code: "PHAR 5",
    course_name: "Drug Development",
    course_units: "4",
    course_description:
      "Drug development including drug discovery, development process, and regulatory requirements.",
    prerequisites: "PHAR 1",
  },
  {
    id: "976",
    course_code: "PHAR 100",
    course_name: "Molecular Pharmacology",
    course_units: "4",
    course_description:
      "Molecular pharmacology including molecular mechanisms, drug targets, and molecular drug action.",
    prerequisites: "PHAR 1",
  },
  {
    id: "977",
    course_code: "PHAR 101",
    course_name: "Neuropharmacology",
    course_units: "4",
    course_description:
      "Neuropharmacology including nervous system drugs, brain pharmacology, and neurological drug effects.",
    prerequisites: "PHAR 1",
  },
  {
    id: "978",
    course_code: "PHAR 102",
    course_name: "Cardiovascular Pharmacology",
    course_units: "4",
    course_description:
      "Cardiovascular pharmacology including heart drugs, vascular pharmacology, and cardiovascular drug effects.",
    prerequisites: "PHAR 1",
  },
  {
    id: "979",
    course_code: "PHAR 103",
    course_name: "Cancer Pharmacology",
    course_units: "4",
    course_description:
      "Cancer pharmacology including anticancer drugs, chemotherapy, and cancer drug mechanisms.",
    prerequisites: "PHAR 1",
  },
  {
    id: "980",
    course_code: "PHAR 104",
    course_name: "Pharmacological Research",
    course_units: "4",
    course_description:
      "Pharmacological research including research methods, experimental design, and pharmacological research.",
    prerequisites: "PHAR 1",
  },

  // Additional Epidemiology Courses
  {
    id: "981",
    course_code: "EPID 1",
    course_name: "Introduction to Epidemiology",
    course_units: "4",
    course_description:
      "Introduction to epidemiology including disease patterns, population health, and epidemiological methods.",
    prerequisites: "None",
  },
  {
    id: "982",
    course_code: "EPID 2",
    course_name: "Epidemiological Methods",
    course_units: "4",
    course_description:
      "Epidemiological methods including study design, data collection, and statistical analysis.",
    prerequisites: "EPID 1",
  },
  {
    id: "983",
    course_code: "EPID 3",
    course_name: "Infectious Disease Epidemiology",
    course_units: "4",
    course_description:
      "Infectious disease epidemiology including disease transmission, outbreak investigation, and infection control.",
    prerequisites: "EPID 1",
  },
  {
    id: "984",
    course_code: "EPID 4",
    course_name: "Chronic Disease Epidemiology",
    course_units: "4",
    course_description:
      "Chronic disease epidemiology including chronic conditions, risk factors, and disease prevention.",
    prerequisites: "EPID 1",
  },
  {
    id: "985",
    course_code: "EPID 5",
    course_name: "Environmental Epidemiology",
    course_units: "4",
    course_description:
      "Environmental epidemiology including environmental health, exposure assessment, and environmental risks.",
    prerequisites: "EPID 1",
  },
  {
    id: "986",
    course_code: "EPID 100",
    course_name: "Clinical Epidemiology",
    course_units: "4",
    course_description:
      "Clinical epidemiology including clinical research, evidence-based medicine, and clinical applications.",
    prerequisites: "EPID 1",
  },
  {
    id: "987",
    course_code: "EPID 101",
    course_name: "Genetic Epidemiology",
    course_units: "4",
    course_description:
      "Genetic epidemiology including genetic factors, gene-environment interactions, and genetic disease patterns.",
    prerequisites: "EPID 1",
  },
  {
    id: "988",
    course_code: "EPID 102",
    course_name: "Social Epidemiology",
    course_units: "4",
    course_description:
      "Social epidemiology including social determinants, health disparities, and social health factors.",
    prerequisites: "EPID 1",
  },
  {
    id: "989",
    course_code: "EPID 103",
    course_name: "Global Epidemiology",
    course_units: "4",
    course_description:
      "Global epidemiology including global health, international health, and worldwide disease patterns.",
    prerequisites: "EPID 1",
  },
  {
    id: "990",
    course_code: "EPID 104",
    course_name: "Epidemiological Research",
    course_units: "4",
    course_description:
      "Epidemiological research including research methods, study design, and epidemiological research projects.",
    prerequisites: "EPID 1",
  },

  // Additional Cybersecurity Courses
  {
    id: "991",
    course_code: "CYBR 1",
    course_name: "Introduction to Cybersecurity",
    course_units: "4",
    course_description:
      "Introduction to cybersecurity including security principles, threat analysis, and security fundamentals.",
    prerequisites: "None",
  },
  {
    id: "992",
    course_code: "CYBR 2",
    course_name: "Network Security",
    course_units: "4",
    course_description:
      "Network security including network protection, security protocols, and network defense.",
    prerequisites: "CYBR 1",
  },
  {
    id: "993",
    course_code: "CYBR 3",
    course_name: "Cryptography",
    course_units: "4",
    course_description:
      "Cryptography including encryption methods, cryptographic algorithms, and secure communication.",
    prerequisites: "CYBR 1",
  },
  {
    id: "994",
    course_code: "CYBR 4",
    course_name: "Digital Forensics",
    course_units: "4",
    course_description:
      "Digital forensics including forensic analysis, evidence collection, and digital investigation.",
    prerequisites: "CYBR 1",
  },
  {
    id: "995",
    course_code: "CYBR 5",
    course_name: "Ethical Hacking",
    course_units: "4",
    course_description:
      "Ethical hacking including penetration testing, vulnerability assessment, and security testing.",
    prerequisites: "CYBR 1",
  },
  {
    id: "996",
    course_code: "CYBR 100",
    course_name: "Advanced Cybersecurity",
    course_units: "4",
    course_description:
      "Advanced cybersecurity including advanced techniques, complex threats, and security strategies.",
    prerequisites: "CYBR 1",
  },
  {
    id: "997",
    course_code: "CYBR 101",
    course_name: "Security Management",
    course_units: "4",
    course_description:
      "Security management including security policies, risk management, and security administration.",
    prerequisites: "CYBR 1",
  },
  {
    id: "998",
    course_code: "CYBR 102",
    course_name: "Incident Response",
    course_units: "4",
    course_description:
      "Incident response including security incidents, response procedures, and incident management.",
    prerequisites: "CYBR 1",
  },
  {
    id: "999",
    course_code: "CYBR 103",
    course_name: "Security Architecture",
    course_units: "4",
    course_description:
      "Security architecture including security design, system architecture, and architectural security.",
    prerequisites: "CYBR 1",
  },
  {
    id: "1000",
    course_code: "CYBR 104",
    course_name: "Cybersecurity Research",
    course_units: "4",
    course_description:
      "Cybersecurity research including research methods, security research, and cybersecurity projects.",
    prerequisites: "CYBR 1",
  },

  // Additional Data Science Courses
  {
    id: "1001",
    course_code: "DATA 1",
    course_name: "Introduction to Data Science",
    course_units: "4",
    course_description:
      "Introduction to data science including data analysis, statistical methods, and data science fundamentals.",
    prerequisites: "None",
  },
  {
    id: "1002",
    course_code: "DATA 2",
    course_name: "Data Analysis",
    course_units: "4",
    course_description:
      "Data analysis including analytical techniques, data processing, and statistical analysis.",
    prerequisites: "DATA 1",
  },
  {
    id: "1003",
    course_code: "DATA 3",
    course_name: "Machine Learning",
    course_units: "4",
    course_description:
      "Machine learning including algorithms, predictive modeling, and automated learning systems.",
    prerequisites: "DATA 1",
  },
  {
    id: "1004",
    course_code: "DATA 4",
    course_name: "Data Visualization",
    course_units: "4",
    course_description:
      "Data visualization including visual representation, chart design, and data presentation.",
    prerequisites: "DATA 1",
  },
  {
    id: "1005",
    course_code: "DATA 5",
    course_name: "Big Data",
    course_units: "4",
    course_description:
      "Big data including large-scale data processing, distributed systems, and big data technologies.",
    prerequisites: "DATA 1",
  },
  {
    id: "1006",
    course_code: "DATA 100",
    course_name: "Advanced Data Science",
    course_units: "4",
    course_description:
      "Advanced data science including advanced techniques, complex analysis, and data science projects.",
    prerequisites: "DATA 1",
  },
  {
    id: "1007",
    course_code: "DATA 101",
    course_name: "Deep Learning",
    course_units: "4",
    course_description:
      "Deep learning including neural networks, artificial intelligence, and advanced machine learning.",
    prerequisites: "DATA 1",
  },
  {
    id: "1008",
    course_code: "DATA 102",
    course_name: "Data Engineering",
    course_units: "4",
    course_description:
      "Data engineering including data pipelines, data infrastructure, and data system design.",
    prerequisites: "DATA 1",
  },
  {
    id: "1009",
    course_code: "DATA 103",
    course_name: "Data Ethics",
    course_units: "4",
    course_description:
      "Data ethics including ethical considerations, privacy protection, and responsible data use.",
    prerequisites: "DATA 1",
  },
  {
    id: "1010",
    course_code: "DATA 104",
    course_name: "Data Science Research",
    course_units: "4",
    course_description:
      "Data science research including research methods, experimental design, and data science projects.",
    prerequisites: "DATA 1",
  },

  // Additional Robotics Courses
  {
    id: "1011",
    course_code: "ROBO 1",
    course_name: "Introduction to Robotics",
    course_units: "4",
    course_description:
      "Introduction to robotics including robot principles, mechanical systems, and robotic fundamentals.",
    prerequisites: "None",
  },
  {
    id: "1012",
    course_code: "ROBO 2",
    course_name: "Robot Mechanics",
    course_units: "4",
    course_description:
      "Robot mechanics including mechanical design, kinematics, and robotic movement.",
    prerequisites: "ROBO 1",
  },
  {
    id: "1013",
    course_code: "ROBO 3",
    course_name: "Robot Control",
    course_units: "4",
    course_description:
      "Robot control including control systems, feedback mechanisms, and robotic control algorithms.",
    prerequisites: "ROBO 1",
  },
  {
    id: "1014",
    course_code: "ROBO 4",
    course_name: "Robot Programming",
    course_units: "4",
    course_description:
      "Robot programming including programming languages, software development, and robotic applications.",
    prerequisites: "ROBO 1",
  },
  {
    id: "1015",
    course_code: "ROBO 5",
    course_name: "Robot Sensors",
    course_units: "4",
    course_description:
      "Robot sensors including sensor technology, perception systems, and environmental sensing.",
    prerequisites: "ROBO 1",
  },
  {
    id: "1016",
    course_code: "ROBO 100",
    course_name: "Advanced Robotics",
    course_units: "4",
    course_description:
      "Advanced robotics including advanced techniques, complex systems, and robotic innovation.",
    prerequisites: "ROBO 1",
  },
  {
    id: "1017",
    course_code: "ROBO 101",
    course_name: "Autonomous Robots",
    course_units: "4",
    course_description:
      "Autonomous robots including autonomous systems, decision-making, and independent operation.",
    prerequisites: "ROBO 1",
  },
  {
    id: "1018",
    course_code: "ROBO 102",
    course_name: "Robot Vision",
    course_units: "4",
    course_description:
      "Robot vision including computer vision, image processing, and visual perception.",
    prerequisites: "ROBO 1",
  },
  {
    id: "1019",
    course_code: "ROBO 103",
    course_name: "Robot Learning",
    course_units: "4",
    course_description:
      "Robot learning including machine learning, adaptive systems, and learning algorithms.",
    prerequisites: "ROBO 1",
  },
  {
    id: "1020",
    course_code: "ROBO 104",
    course_name: "Robotics Research",
    course_units: "4",
    course_description:
      "Robotics research including research methods, experimental design, and robotics research projects.",
    prerequisites: "ROBO 1",
  },

  // Additional Quantum Computing Courses
  {
    id: "1021",
    course_code: "QUAN 1",
    course_name: "Introduction to Quantum Computing",
    course_units: "4",
    course_description:
      "Introduction to quantum computing including quantum principles, quantum mechanics, and quantum fundamentals.",
    prerequisites: "None",
  },
  {
    id: "1022",
    course_code: "QUAN 2",
    course_name: "Quantum Mechanics",
    course_units: "4",
    course_description:
      "Quantum mechanics including quantum theory, wave functions, and quantum phenomena.",
    prerequisites: "QUAN 1",
  },
  {
    id: "1023",
    course_code: "QUAN 3",
    course_name: "Quantum Algorithms",
    course_units: "4",
    course_description:
      "Quantum algorithms including quantum programming, algorithm design, and quantum computation.",
    prerequisites: "QUAN 1",
  },
  {
    id: "1024",
    course_code: "QUAN 4",
    course_name: "Quantum Information",
    course_units: "4",
    course_description:
      "Quantum information including information theory, quantum bits, and quantum information processing.",
    prerequisites: "QUAN 1",
  },
  {
    id: "1025",
    course_code: "QUAN 5",
    course_name: "Quantum Cryptography",
    course_units: "4",
    course_description:
      "Quantum cryptography including quantum security, encryption methods, and quantum communication.",
    prerequisites: "QUAN 1",
  },
  {
    id: "1026",
    course_code: "QUAN 100",
    course_name: "Advanced Quantum Computing",
    course_units: "4",
    course_description:
      "Advanced quantum computing including advanced techniques, complex systems, and quantum innovation.",
    prerequisites: "QUAN 1",
  },
  {
    id: "1027",
    course_code: "QUAN 101",
    course_name: "Quantum Error Correction",
    course_units: "4",
    course_description:
      "Quantum error correction including error detection, correction methods, and fault tolerance.",
    prerequisites: "QUAN 1",
  },
  {
    id: "1028",
    course_code: "QUAN 102",
    course_name: "Quantum Machine Learning",
    course_units: "4",
    course_description:
      "Quantum machine learning including quantum algorithms, machine learning, and quantum AI.",
    prerequisites: "QUAN 1",
  },
  {
    id: "1029",
    course_code: "QUAN 103",
    course_name: "Quantum Hardware",
    course_units: "4",
    course_description:
      "Quantum hardware including quantum devices, physical implementation, and quantum technology.",
    prerequisites: "QUAN 1",
  },
  {
    id: "1030",
    course_code: "QUAN 104",
    course_name: "Quantum Research",
    course_units: "4",
    course_description:
      "Quantum research including research methods, experimental design, and quantum research projects.",
    prerequisites: "QUAN 1",
  },

  // Additional Blockchain Courses
  {
    id: "1031",
    course_code: "BLOC 1",
    course_name: "Introduction to Blockchain",
    course_units: "4",
    course_description:
      "Introduction to blockchain including blockchain principles, distributed systems, and blockchain fundamentals.",
    prerequisites: "None",
  },
  {
    id: "1032",
    course_code: "BLOC 2",
    course_name: "Cryptocurrency",
    course_units: "4",
    course_description:
      "Cryptocurrency including digital currencies, cryptocurrency systems, and digital finance.",
    prerequisites: "BLOC 1",
  },
  {
    id: "1033",
    course_code: "BLOC 3",
    course_name: "Smart Contracts",
    course_units: "4",
    course_description:
      "Smart contracts including contract programming, automated agreements, and decentralized applications.",
    prerequisites: "BLOC 1",
  },
  {
    id: "1034",
    course_code: "BLOC 4",
    course_name: "Blockchain Security",
    course_units: "4",
    course_description:
      "Blockchain security including security principles, vulnerability assessment, and blockchain protection.",
    prerequisites: "BLOC 1",
  },
  {
    id: "1035",
    course_code: "BLOC 5",
    course_name: "Decentralized Finance",
    course_units: "4",
    course_description:
      "Decentralized finance including DeFi protocols, financial applications, and decentralized systems.",
    prerequisites: "BLOC 1",
  },
  {
    id: "1036",
    course_code: "BLOC 100",
    course_name: "Advanced Blockchain",
    course_units: "4",
    course_description:
      "Advanced blockchain including advanced techniques, complex systems, and blockchain innovation.",
    prerequisites: "BLOC 1",
  },
  {
    id: "1037",
    course_code: "BLOC 101",
    course_name: "Blockchain Development",
    course_units: "4",
    course_description:
      "Blockchain development including development tools, programming languages, and blockchain applications.",
    prerequisites: "BLOC 1",
  },
  {
    id: "1038",
    course_code: "BLOC 102",
    course_name: "Blockchain Economics",
    course_units: "4",
    course_description:
      "Blockchain economics including economic models, token economics, and blockchain business models.",
    prerequisites: "BLOC 1",
  },
  {
    id: "1039",
    course_code: "BLOC 103",
    course_name: "Blockchain Governance",
    course_units: "4",
    course_description:
      "Blockchain governance including governance models, decision-making, and blockchain regulation.",
    prerequisites: "BLOC 1",
  },
  {
    id: "1040",
    course_code: "BLOC 104",
    course_name: "Blockchain Research",
    course_units: "4",
    course_description:
      "Blockchain research including research methods, experimental design, and blockchain research projects.",
    prerequisites: "BLOC 1",
  },

  // Additional Artificial Intelligence Courses
  {
    id: "1041",
    course_code: "AINT 1",
    course_name: "Introduction to Artificial Intelligence",
    course_units: "4",
    course_description:
      "Introduction to artificial intelligence including AI principles, intelligent systems, and AI fundamentals.",
    prerequisites: "None",
  },
  {
    id: "1042",
    course_code: "AINT 2",
    course_name: "Machine Learning",
    course_units: "4",
    course_description:
      "Machine learning including learning algorithms, pattern recognition, and automated learning.",
    prerequisites: "AINT 1",
  },
  {
    id: "1043",
    course_code: "AINT 3",
    course_name: "Natural Language Processing",
    course_units: "4",
    course_description:
      "Natural language processing including language understanding, text analysis, and computational linguistics.",
    prerequisites: "AINT 1",
  },
  {
    id: "1044",
    course_code: "AINT 4",
    course_name: "Computer Vision",
    course_units: "4",
    course_description:
      "Computer vision including image processing, visual recognition, and visual intelligence.",
    prerequisites: "AINT 1",
  },
  {
    id: "1045",
    course_code: "AINT 5",
    course_name: "Expert Systems",
    course_units: "4",
    course_description:
      "Expert systems including knowledge representation, reasoning systems, and expert knowledge.",
    prerequisites: "AINT 1",
  },
  {
    id: "1046",
    course_code: "AINT 100",
    course_name: "Advanced Artificial Intelligence",
    course_units: "4",
    course_description:
      "Advanced artificial intelligence including advanced techniques, complex systems, and AI innovation.",
    prerequisites: "AINT 1",
  },
  {
    id: "1047",
    course_code: "AINT 101",
    course_name: "Neural Networks",
    course_units: "4",
    course_description:
      "Neural networks including network architecture, learning algorithms, and neural computation.",
    prerequisites: "AINT 1",
  },
  {
    id: "1048",
    course_code: "AINT 102",
    course_name: "AI Ethics",
    course_units: "4",
    course_description:
      "AI ethics including ethical considerations, responsible AI, and artificial intelligence ethics.",
    prerequisites: "AINT 1",
  },
  {
    id: "1049",
    course_code: "AINT 103",
    course_name: "AI Applications",
    course_units: "4",
    course_description:
      "AI applications including practical applications, real-world systems, and AI implementation.",
    prerequisites: "AINT 1",
  },
  {
    id: "1050",
    course_code: "AINT 104",
    course_name: "AI Research",
    course_units: "4",
    course_description:
      "AI research including research methods, experimental design, and artificial intelligence research.",
    prerequisites: "AINT 1",
  },

  // Additional Finnish Language Courses
  {
    id: "1051",
    course_code: "FINN 1",
    course_name: "Elementary Finnish I",
    course_units: "4",
    course_description:
      "Elementary Finnish I including basic grammar, vocabulary, and reading skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "1052",
    course_code: "FINN 2",
    course_name: "Elementary Finnish II",
    course_units: "4",
    course_description:
      "Elementary Finnish II including intermediate grammar, vocabulary, and reading skills.",
    prerequisites: "FINN 1",
  },
  {
    id: "1053",
    course_code: "FINN 3",
    course_name: "Intermediate Finnish I",
    course_units: "4",
    course_description:
      "Intermediate Finnish I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "FINN 2",
  },
  {
    id: "1054",
    course_code: "FINN 4",
    course_name: "Intermediate Finnish II",
    course_units: "4",
    course_description:
      "Intermediate Finnish II including advanced reading, composition, and Finnish literature.",
    prerequisites: "FINN 3",
  },
  {
    id: "1055",
    course_code: "FINN 5",
    course_name: "Advanced Finnish",
    course_units: "4",
    course_description:
      "Advanced Finnish including advanced reading, literary analysis, and cultural studies.",
    prerequisites: "FINN 4",
  },
  {
    id: "1056",
    course_code: "FINN 100",
    course_name: "Finnish Literature",
    course_units: "4",
    course_description:
      "Finnish literature including major works, literary analysis, and cultural context.",
    prerequisites: "FINN 5",
  },
  {
    id: "1057",
    course_code: "FINN 101",
    course_name: "Modern Finnish",
    course_units: "4",
    course_description:
      "Modern Finnish including contemporary Finnish, modern literature, and current events.",
    prerequisites: "FINN 4",
  },
  {
    id: "1058",
    course_code: "FINN 102",
    course_name: "Finnish Linguistics",
    course_units: "4",
    course_description:
      "Finnish linguistics including Finnish phonology, morphology, syntax, and historical linguistics.",
    prerequisites: "LING 1, FINN 4",
  },
  {
    id: "1059",
    course_code: "FINN 103",
    course_name: "Finnish Translation",
    course_units: "4",
    course_description:
      "Finnish translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "FINN 5",
  },
  {
    id: "1060",
    course_code: "FINN 104",
    course_name: "Finnish Culture",
    course_units: "4",
    course_description:
      "Finnish culture including cultural studies, traditions, and contemporary Finnish society.",
    prerequisites: "FINN 3",
  },

  // Additional Polish Language Courses
  {
    id: "1061",
    course_code: "POL 1",
    course_name: "Elementary Polish I",
    course_units: "4",
    course_description:
      "Elementary Polish I including basic grammar, vocabulary, and reading skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "1062",
    course_code: "POL 2",
    course_name: "Elementary Polish II",
    course_units: "4",
    course_description:
      "Elementary Polish II including intermediate grammar, vocabulary, and reading skills.",
    prerequisites: "POL 1",
  },
  {
    id: "1063",
    course_code: "POL 3",
    course_name: "Intermediate Polish I",
    course_units: "4",
    course_description:
      "Intermediate Polish I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "POL 2",
  },
  {
    id: "1064",
    course_code: "POL 4",
    course_name: "Intermediate Polish II",
    course_units: "4",
    course_description:
      "Intermediate Polish II including advanced reading, composition, and Polish literature.",
    prerequisites: "POL 3",
  },
  {
    id: "1065",
    course_code: "POL 5",
    course_name: "Advanced Polish",
    course_units: "4",
    course_description:
      "Advanced Polish including advanced reading, literary analysis, and cultural studies.",
    prerequisites: "POL 4",
  },
  {
    id: "1066",
    course_code: "POL 100",
    course_name: "Polish Literature",
    course_units: "4",
    course_description:
      "Polish literature including major works, literary analysis, and cultural context.",
    prerequisites: "POL 5",
  },
  {
    id: "1067",
    course_code: "POL 101",
    course_name: "Modern Polish",
    course_units: "4",
    course_description:
      "Modern Polish including contemporary Polish, modern literature, and current events.",
    prerequisites: "POL 4",
  },
  {
    id: "1068",
    course_code: "POL 102",
    course_name: "Polish Linguistics",
    course_units: "4",
    course_description:
      "Polish linguistics including Polish phonology, morphology, syntax, and historical linguistics.",
    prerequisites: "LING 1, POL 4",
  },
  {
    id: "1069",
    course_code: "POL 103",
    course_name: "Polish Translation",
    course_units: "4",
    course_description:
      "Polish translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "POL 5",
  },
  {
    id: "1070",
    course_code: "POL 104",
    course_name: "Polish Culture",
    course_units: "4",
    course_description:
      "Polish culture including cultural studies, traditions, and contemporary Polish society.",
    prerequisites: "POL 3",
  },

  // Additional Biochemistry Courses
  {
    id: "1071",
    course_code: "BIOC 1",
    course_name: "Introduction to Biochemistry",
    course_units: "4",
    course_description:
      "Introduction to biochemistry including biomolecules, cellular processes, and biochemical principles.",
    prerequisites: "None",
  },
  {
    id: "1072",
    course_code: "BIOC 2",
    course_name: "Metabolic Biochemistry",
    course_units: "4",
    course_description:
      "Metabolic biochemistry including metabolic pathways, energy metabolism, and cellular respiration.",
    prerequisites: "BIOC 1",
  },
  {
    id: "1073",
    course_code: "BIOC 3",
    course_name: "Molecular Biochemistry",
    course_units: "4",
    course_description:
      "Molecular biochemistry including molecular mechanisms, protein structure, and enzymatic reactions.",
    prerequisites: "BIOC 1",
  },
  {
    id: "1074",
    course_code: "BIOC 4",
    course_name: "Cellular Biochemistry",
    course_units: "4",
    course_description:
      "Cellular biochemistry including cellular processes, signal transduction, and cellular regulation.",
    prerequisites: "BIOC 1",
  },
  {
    id: "1075",
    course_code: "BIOC 5",
    course_name: "Clinical Biochemistry",
    course_units: "4",
    course_description:
      "Clinical biochemistry including clinical applications, diagnostic methods, and biochemical analysis.",
    prerequisites: "BIOC 1",
  },
  {
    id: "1076",
    course_code: "BIOC 100",
    course_name: "Advanced Biochemistry",
    course_units: "4",
    course_description:
      "Advanced biochemistry including advanced techniques, complex systems, and biochemical research.",
    prerequisites: "BIOC 1",
  },
  {
    id: "1077",
    course_code: "BIOC 101",
    course_name: "Biochemical Techniques",
    course_units: "4",
    course_description:
      "Biochemical techniques including laboratory methods, analytical techniques, and experimental procedures.",
    prerequisites: "BIOC 1",
  },
  {
    id: "1078",
    course_code: "BIOC 102",
    course_name: "Biochemical Genetics",
    course_units: "4",
    course_description:
      "Biochemical genetics including genetic mechanisms, gene expression, and molecular genetics.",
    prerequisites: "BIOC 1",
  },
  {
    id: "1079",
    course_code: "BIOC 103",
    course_name: "Biochemical Evolution",
    course_units: "4",
    course_description:
      "Biochemical evolution including evolutionary processes, molecular evolution, and biochemical adaptation.",
    prerequisites: "BIOC 1",
  },
  {
    id: "1080",
    course_code: "BIOC 104",
    course_name: "Biochemical Research",
    course_units: "4",
    course_description:
      "Biochemical research including research methods, experimental design, and biochemical research projects.",
    prerequisites: "BIOC 1",
  },

  // Additional Molecular Biology Courses
  {
    id: "1081",
    course_code: "MOLB 1",
    course_name: "Introduction to Molecular Biology",
    course_units: "4",
    course_description:
      "Introduction to molecular biology including molecular mechanisms, gene expression, and cellular processes.",
    prerequisites: "None",
  },
  {
    id: "1082",
    course_code: "MOLB 2",
    course_name: "Gene Expression",
    course_units: "4",
    course_description:
      "Gene expression including transcription, translation, and gene regulation mechanisms.",
    prerequisites: "MOLB 1",
  },
  {
    id: "1083",
    course_code: "MOLB 3",
    course_name: "DNA Replication",
    course_units: "4",
    course_description:
      "DNA replication including replication mechanisms, DNA repair, and genome maintenance.",
    prerequisites: "MOLB 1",
  },
  {
    id: "1084",
    course_code: "MOLB 4",
    course_name: "Protein Synthesis",
    course_units: "4",
    course_description:
      "Protein synthesis including translation mechanisms, protein folding, and post-translational modifications.",
    prerequisites: "MOLB 1",
  },
  {
    id: "1085",
    course_code: "MOLB 5",
    course_name: "Molecular Genetics",
    course_units: "4",
    course_description:
      "Molecular genetics including genetic mechanisms, mutation, and genetic variation.",
    prerequisites: "MOLB 1",
  },
  {
    id: "1086",
    course_code: "MOLB 100",
    course_name: "Advanced Molecular Biology",
    course_units: "4",
    course_description:
      "Advanced molecular biology including advanced techniques, complex systems, and molecular research.",
    prerequisites: "MOLB 1",
  },
  {
    id: "1087",
    course_code: "MOLB 101",
    course_name: "Molecular Techniques",
    course_units: "4",
    course_description:
      "Molecular techniques including laboratory methods, molecular tools, and experimental procedures.",
    prerequisites: "MOLB 1",
  },
  {
    id: "1088",
    course_code: "MOLB 102",
    course_name: "Molecular Evolution",
    course_units: "4",
    course_description:
      "Molecular evolution including evolutionary processes, molecular phylogeny, and evolutionary mechanisms.",
    prerequisites: "MOLB 1",
  },
  {
    id: "1089",
    course_code: "MOLB 103",
    course_name: "Molecular Medicine",
    course_units: "4",
    course_description:
      "Molecular medicine including medical applications, disease mechanisms, and therapeutic approaches.",
    prerequisites: "MOLB 1",
  },
  {
    id: "1090",
    course_code: "MOLB 104",
    course_name: "Molecular Research",
    course_units: "4",
    course_description:
      "Molecular research including research methods, experimental design, and molecular research projects.",
    prerequisites: "MOLB 1",
  },

  // Additional Digital Arts Courses
  {
    id: "1091",
    course_code: "DIGA 1",
    course_name: "Introduction to Digital Arts",
    course_units: "4",
    course_description:
      "Introduction to digital arts including digital tools, creative expression, and digital media fundamentals.",
    prerequisites: "None",
  },
  {
    id: "1092",
    course_code: "DIGA 2",
    course_name: "Digital Painting",
    course_units: "4",
    course_description:
      "Digital painting including digital painting techniques, color theory, and artistic expression.",
    prerequisites: "DIGA 1",
  },
  {
    id: "1093",
    course_code: "DIGA 3",
    course_name: "Digital Sculpture",
    course_units: "4",
    course_description:
      "Digital sculpture including 3D modeling, digital sculpting, and three-dimensional art.",
    prerequisites: "DIGA 1",
  },
  {
    id: "1094",
    course_code: "DIGA 4",
    course_name: "Digital Animation",
    course_units: "4",
    course_description:
      "Digital animation including animation principles, digital animation tools, and motion graphics.",
    prerequisites: "DIGA 1",
  },
  {
    id: "1095",
    course_code: "DIGA 5",
    course_name: "Digital Photography",
    course_units: "4",
    course_description:
      "Digital photography including digital camera techniques, image editing, and photographic composition.",
    prerequisites: "DIGA 1",
  },
  {
    id: "1096",
    course_code: "DIGA 100",
    course_name: "Advanced Digital Arts",
    course_units: "4",
    course_description:
      "Advanced digital arts including advanced techniques, complex projects, and digital art innovation.",
    prerequisites: "DIGA 1",
  },
  {
    id: "1097",
    course_code: "DIGA 101",
    course_name: "Digital Art History",
    course_units: "4",
    course_description:
      "Digital art history including historical development, digital art evolution, and artistic movements.",
    prerequisites: "DIGA 1",
  },
  {
    id: "1098",
    course_code: "DIGA 102",
    course_name: "Digital Art Theory",
    course_units: "4",
    course_description:
      "Digital art theory including theoretical approaches, critical analysis, and digital art philosophy.",
    prerequisites: "DIGA 1",
  },
  {
    id: "1099",
    course_code: "DIGA 103",
    course_name: "Digital Art Portfolio",
    course_units: "4",
    course_description:
      "Digital art portfolio including portfolio development, presentation skills, and professional preparation.",
    prerequisites: "DIGA 1",
  },
  {
    id: "1100",
    course_name: "Digital Art Research",
    course_code: "DIGA 104",
    course_units: "4",
    course_description:
      "Digital art research including research methods, experimental design, and digital art research projects.",
    prerequisites: "DIGA 1",
  },

  // Additional Media Arts Courses
  {
    id: "1101",
    course_code: "MEDA 1",
    course_name: "Introduction to Media Arts",
    course_units: "4",
    course_description:
      "Introduction to media arts including media principles, creative expression, and media fundamentals.",
    prerequisites: "None",
  },
  {
    id: "1102",
    course_code: "MEDA 2",
    course_name: "Video Production",
    course_units: "4",
    course_description:
      "Video production including video techniques, editing, and visual storytelling.",
    prerequisites: "MEDA 1",
  },
  {
    id: "1103",
    course_code: "MEDA 3",
    course_name: "Audio Production",
    course_units: "4",
    course_description:
      "Audio production including audio techniques, sound design, and audio editing.",
    prerequisites: "MEDA 1",
  },
  {
    id: "1104",
    course_code: "MEDA 4",
    course_name: "Interactive Media",
    course_units: "4",
    course_description:
      "Interactive media including interactive design, user experience, and interactive applications.",
    prerequisites: "MEDA 1",
  },
  {
    id: "1105",
    course_code: "MEDA 5",
    course_name: "Digital Storytelling",
    course_units: "4",
    course_description:
      "Digital storytelling including narrative techniques, digital narratives, and storytelling platforms.",
    prerequisites: "MEDA 1",
  },
  {
    id: "1106",
    course_code: "MEDA 100",
    course_name: "Advanced Media Arts",
    course_units: "4",
    course_description:
      "Advanced media arts including advanced techniques, complex projects, and media art innovation.",
    prerequisites: "MEDA 1",
  },
  {
    id: "1107",
    course_code: "MEDA 101",
    course_name: "Media Art History",
    course_units: "4",
    course_description:
      "Media art history including historical development, media art evolution, and artistic movements.",
    prerequisites: "MEDA 1",
  },
  {
    id: "1108",
    course_code: "MEDA 102",
    course_name: "Media Art Theory",
    course_units: "4",
    course_description:
      "Media art theory including theoretical approaches, critical analysis, and media art philosophy.",
    prerequisites: "MEDA 1",
  },
  {
    id: "1109",
    course_code: "MEDA 103",
    course_name: "Media Art Portfolio",
    course_units: "4",
    course_description:
      "Media art portfolio including portfolio development, presentation skills, and professional preparation.",
    prerequisites: "MEDA 1",
  },
  {
    id: "1110",
    course_code: "MEDA 104",
    course_name: "Media Art Research",
    course_units: "4",
    course_description:
      "Media art research including research methods, experimental design, and media art research projects.",
    prerequisites: "MEDA 1",
  },

  // Additional Sports Management Courses
  {
    id: "1111",
    course_code: "SPMG 1",
    course_name: "Introduction to Sports Management",
    course_units: "4",
    course_description:
      "Introduction to sports management including management principles, sports industry, and organizational leadership.",
    prerequisites: "None",
  },
  {
    id: "1112",
    course_code: "SPMG 2",
    course_name: "Sports Marketing",
    course_units: "4",
    course_description:
      "Sports marketing including marketing strategies, brand development, and promotional techniques.",
    prerequisites: "SPMG 1",
  },
  {
    id: "1113",
    course_code: "SPMG 3",
    course_name: "Sports Finance",
    course_units: "4",
    course_description:
      "Sports finance including financial management, budgeting, and financial analysis.",
    prerequisites: "SPMG 1",
  },
  {
    id: "1114",
    course_code: "SPMG 4",
    course_name: "Sports Law",
    course_units: "4",
    course_description:
      "Sports law including legal principles, regulations, and legal compliance.",
    prerequisites: "SPMG 1",
  },
  {
    id: "1115",
    course_code: "SPMG 5",
    course_name: "Sports Operations",
    course_units: "4",
    course_description:
      "Sports operations including operational management, facility management, and event operations.",
    prerequisites: "SPMG 1",
  },
  {
    id: "1116",
    course_code: "SPMG 100",
    course_name: "Advanced Sports Management",
    course_units: "4",
    course_description:
      "Advanced sports management including advanced techniques, complex systems, and management innovation.",
    prerequisites: "SPMG 1",
  },
  {
    id: "1117",
    course_code: "SPMG 101",
    course_name: "Sports Analytics",
    course_units: "4",
    course_description:
      "Sports analytics including data analysis, performance metrics, and analytical techniques.",
    prerequisites: "SPMG 1",
  },
  {
    id: "1118",
    course_code: "SPMG 102",
    course_name: "Sports Psychology",
    course_units: "4",
    course_description:
      "Sports psychology including psychological principles, performance psychology, and mental training.",
    prerequisites: "SPMG 1",
  },
  {
    id: "1119",
    course_code: "SPMG 103",
    course_name: "Sports Technology",
    course_units: "4",
    course_description:
      "Sports technology including technological innovation, sports equipment, and technological applications.",
    prerequisites: "SPMG 1",
  },
  {
    id: "1120",
    course_code: "SPMG 104",
    course_name: "Sports Research",
    course_units: "4",
    course_description:
      "Sports research including research methods, experimental design, and sports research projects.",
    prerequisites: "SPMG 1",
  },

  // Additional Event Planning Courses
  {
    id: "1121",
    course_code: "EVNT 1",
    course_name: "Introduction to Event Planning",
    course_units: "4",
    course_description:
      "Introduction to event planning including planning principles, event coordination, and organizational skills.",
    prerequisites: "None",
  },
  {
    id: "1122",
    course_code: "EVNT 2",
    course_name: "Event Coordination",
    course_units: "4",
    course_description:
      "Event coordination including coordination techniques, logistics management, and event execution.",
    prerequisites: "EVNT 1",
  },
  {
    id: "1123",
    course_code: "EVNT 3",
    course_name: "Event Marketing",
    course_units: "4",
    course_description:
      "Event marketing including marketing strategies, promotional techniques, and audience engagement.",
    prerequisites: "EVNT 1",
  },
  {
    id: "1124",
    course_code: "EVNT 4",
    course_name: "Event Budgeting",
    course_units: "4",
    course_description:
      "Event budgeting including financial planning, cost management, and budget analysis.",
    prerequisites: "EVNT 1",
  },
  {
    id: "1125",
    course_code: "EVNT 5",
    course_name: "Event Technology",
    course_units: "4",
    course_description:
      "Event technology including technological applications, digital tools, and technological innovation.",
    prerequisites: "EVNT 1",
  },
  {
    id: "1126",
    course_code: "EVNT 100",
    course_name: "Advanced Event Planning",
    course_units: "4",
    course_description:
      "Advanced event planning including advanced techniques, complex events, and planning innovation.",
    prerequisites: "EVNT 1",
  },
  {
    id: "1127",
    course_code: "EVNT 101",
    course_name: "Event Design",
    course_units: "4",
    course_description:
      "Event design including design principles, creative concepts, and visual design.",
    prerequisites: "EVNT 1",
  },
  {
    id: "1128",
    course_code: "EVNT 102",
    course_name: "Event Production",
    course_units: "4",
    course_description:
      "Event production including production management, technical production, and production coordination.",
    prerequisites: "EVNT 1",
  },
  {
    id: "1129",
    course_code: "EVNT 103",
    course_name: "Event Management",
    course_units: "4",
    course_description:
      "Event management including management principles, team leadership, and organizational management.",
    prerequisites: "EVNT 1",
  },
  {
    id: "1130",
    course_code: "EVNT 104",
    course_name: "Event Research",
    course_units: "4",
    course_description:
      "Event research including research methods, experimental design, and event research projects.",
    prerequisites: "EVNT 1",
  },

  // Additional Cloud Computing Courses
  {
    id: "1131",
    course_code: "CLOU 1",
    course_name: "Introduction to Cloud Computing",
    course_units: "4",
    course_description:
      "Introduction to cloud computing including cloud principles, cloud services, and cloud fundamentals.",
    prerequisites: "None",
  },
  {
    id: "1132",
    course_code: "CLOU 2",
    course_name: "Cloud Architecture",
    course_units: "4",
    course_description:
      "Cloud architecture including architectural design, system architecture, and cloud infrastructure.",
    prerequisites: "CLOU 1",
  },
  {
    id: "1133",
    course_code: "CLOU 3",
    course_name: "Cloud Security",
    course_units: "4",
    course_description:
      "Cloud security including security principles, threat protection, and security compliance.",
    prerequisites: "CLOU 1",
  },
  {
    id: "1134",
    course_code: "CLOU 4",
    course_name: "Cloud Development",
    course_units: "4",
    course_description:
      "Cloud development including development tools, cloud applications, and software development.",
    prerequisites: "CLOU 1",
  },
  {
    id: "1135",
    course_code: "CLOU 5",
    course_name: "Cloud Operations",
    course_units: "4",
    course_description:
      "Cloud operations including operational management, service management, and operational procedures.",
    prerequisites: "CLOU 1",
  },
  {
    id: "1136",
    course_code: "CLOU 100",
    course_name: "Advanced Cloud Computing",
    course_units: "4",
    course_description:
      "Advanced cloud computing including advanced techniques, complex systems, and cloud innovation.",
    prerequisites: "CLOU 1",
  },
  {
    id: "1137",
    course_code: "CLOU 101",
    course_name: "Cloud Analytics",
    course_units: "4",
    course_description:
      "Cloud analytics including data analysis, analytical tools, and analytical techniques.",
    prerequisites: "CLOU 1",
  },
  {
    id: "1138",
    course_code: "CLOU 102",
    course_name: "Cloud Migration",
    course_units: "4",
    course_description:
      "Cloud migration including migration strategies, migration planning, and migration execution.",
    prerequisites: "CLOU 1",
  },
  {
    id: "1139",
    course_code: "CLOU 103",
    course_name: "Cloud Management",
    course_units: "4",
    course_description:
      "Cloud management including management principles, resource management, and service management.",
    prerequisites: "CLOU 1",
  },
  {
    id: "1140",
    course_code: "CLOU 104",
    course_name: "Cloud Research",
    course_units: "4",
    course_description:
      "Cloud research including research methods, experimental design, and cloud research projects.",
    prerequisites: "CLOU 1",
  },

  // Additional Internet of Things Courses
  {
    id: "1141",
    course_code: "IOT 1",
    course_name: "Introduction to Internet of Things",
    course_units: "4",
    course_description:
      "Introduction to Internet of Things including IoT principles, connected devices, and IoT fundamentals.",
    prerequisites: "None",
  },
  {
    id: "1142",
    course_code: "IOT 2",
    course_name: "IoT Architecture",
    course_units: "4",
    course_description:
      "IoT architecture including architectural design, system architecture, and IoT infrastructure.",
    prerequisites: "IOT 1",
  },
  {
    id: "1143",
    course_code: "IOT 3",
    course_name: "IoT Security",
    course_units: "4",
    course_description:
      "IoT security including security principles, threat protection, and security compliance.",
    prerequisites: "IOT 1",
  },
  {
    id: "1144",
    course_code: "IOT 4",
    course_name: "IoT Development",
    course_units: "4",
    course_description:
      "IoT development including development tools, IoT applications, and software development.",
    prerequisites: "IOT 1",
  },
  {
    id: "1145",
    course_code: "IOT 5",
    course_name: "IoT Analytics",
    course_units: "4",
    course_description:
      "IoT analytics including data analysis, analytical tools, and analytical techniques.",
    prerequisites: "IOT 1",
  },
  {
    id: "1146",
    course_code: "IOT 100",
    course_name: "Advanced Internet of Things",
    course_units: "4",
    course_description:
      "Advanced Internet of Things including advanced techniques, complex systems, and IoT innovation.",
    prerequisites: "IOT 1",
  },
  {
    id: "1147",
    course_code: "IOT 101",
    course_name: "IoT Networks",
    course_units: "4",
    course_description:
      "IoT networks including network design, communication protocols, and network management.",
    prerequisites: "IOT 1",
  },
  {
    id: "1148",
    course_code: "IOT 102",
    course_name: "IoT Sensors",
    course_units: "4",
    course_description:
      "IoT sensors including sensor technology, sensor networks, and sensor applications.",
    prerequisites: "IOT 1",
  },
  {
    id: "1149",
    course_code: "IOT 103",
    course_name: "IoT Applications",
    course_units: "4",
    course_description:
      "IoT applications including application development, use cases, and practical applications.",
    prerequisites: "IOT 1",
  },
  {
    id: "1150",
    course_name: "IoT Research",
    course_code: "IOT 104",
    course_units: "4",
    course_description:
      "IoT research including research methods, experimental design, and IoT research projects.",
    prerequisites: "IOT 1",
  },

  // Additional Hungarian Language Courses
  {
    id: "1151",
    course_code: "HUNG 1",
    course_name: "Elementary Hungarian I",
    course_units: "4",
    course_description:
      "Elementary Hungarian I including basic grammar, vocabulary, and reading skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "1152",
    course_code: "HUNG 2",
    course_name: "Elementary Hungarian II",
    course_units: "4",
    course_description:
      "Elementary Hungarian II including intermediate grammar, vocabulary, and reading skills.",
    prerequisites: "HUNG 1",
  },
  {
    id: "1153",
    course_code: "HUNG 3",
    course_name: "Intermediate Hungarian I",
    course_units: "4",
    course_description:
      "Intermediate Hungarian I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "HUNG 2",
  },
  {
    id: "1154",
    course_code: "HUNG 4",
    course_name: "Intermediate Hungarian II",
    course_units: "4",
    course_description:
      "Intermediate Hungarian II including advanced reading, composition, and Hungarian literature.",
    prerequisites: "HUNG 3",
  },
  {
    id: "1155",
    course_code: "HUNG 5",
    course_name: "Advanced Hungarian",
    course_units: "4",
    course_description:
      "Advanced Hungarian including advanced reading, literary analysis, and cultural studies.",
    prerequisites: "HUNG 4",
  },
  {
    id: "1156",
    course_code: "HUNG 100",
    course_name: "Hungarian Literature",
    course_units: "4",
    course_description:
      "Hungarian literature including major works, literary analysis, and cultural context.",
    prerequisites: "HUNG 5",
  },
  {
    id: "1157",
    course_code: "HUNG 101",
    course_name: "Modern Hungarian",
    course_units: "4",
    course_description:
      "Modern Hungarian including contemporary Hungarian, modern literature, and current events.",
    prerequisites: "HUNG 4",
  },
  {
    id: "1158",
    course_code: "HUNG 102",
    course_name: "Hungarian Linguistics",
    course_units: "4",
    course_description:
      "Hungarian linguistics including Hungarian phonology, morphology, syntax, and historical linguistics.",
    prerequisites: "LING 1, HUNG 4",
  },
  {
    id: "1159",
    course_code: "HUNG 103",
    course_name: "Hungarian Translation",
    course_units: "4",
    course_description:
      "Hungarian translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "HUNG 5",
  },
  {
    id: "1160",
    course_code: "HUNG 104",
    course_name: "Hungarian Culture",
    course_units: "4",
    course_description:
      "Hungarian culture including cultural studies, traditions, and contemporary Hungarian society.",
    prerequisites: "HUNG 3",
  },

  // Additional Czech Language Courses
  {
    id: "1161",
    course_code: "CZEC 1",
    course_name: "Elementary Czech I",
    course_units: "4",
    course_description:
      "Elementary Czech I including basic grammar, vocabulary, and reading skills for beginners.",
    prerequisites: "None",
  },
  {
    id: "1162",
    course_code: "CZEC 2",
    course_name: "Elementary Czech II",
    course_units: "4",
    course_description:
      "Elementary Czech II including intermediate grammar, vocabulary, and reading skills.",
    prerequisites: "CZEC 1",
  },
  {
    id: "1163",
    course_code: "CZEC 3",
    course_name: "Intermediate Czech I",
    course_units: "4",
    course_description:
      "Intermediate Czech I including advanced grammar, reading comprehension, and cultural studies.",
    prerequisites: "CZEC 2",
  },
  {
    id: "1164",
    course_code: "CZEC 4",
    course_name: "Intermediate Czech II",
    course_units: "4",
    course_description:
      "Intermediate Czech II including advanced reading, composition, and Czech literature.",
    prerequisites: "CZEC 3",
  },
  {
    id: "1165",
    course_code: "CZEC 5",
    course_name: "Advanced Czech",
    course_units: "4",
    course_description:
      "Advanced Czech including advanced reading, literary analysis, and cultural studies.",
    prerequisites: "CZEC 4",
  },
  {
    id: "1166",
    course_code: "CZEC 100",
    course_name: "Czech Literature",
    course_units: "4",
    course_description:
      "Czech literature including major works, literary analysis, and cultural context.",
    prerequisites: "CZEC 5",
  },
  {
    id: "1167",
    course_code: "CZEC 101",
    course_name: "Modern Czech",
    course_units: "4",
    course_description:
      "Modern Czech including contemporary Czech, modern literature, and current events.",
    prerequisites: "CZEC 4",
  },
  {
    id: "1168",
    course_code: "CZEC 102",
    course_name: "Czech Linguistics",
    course_units: "4",
    course_description:
      "Czech linguistics including Czech phonology, morphology, syntax, and historical linguistics.",
    prerequisites: "LING 1, CZEC 4",
  },
  {
    id: "1169",
    course_code: "CZEC 103",
    course_name: "Czech Translation",
    course_units: "4",
    course_description:
      "Czech translation including translation theory, techniques, and practical translation exercises.",
    prerequisites: "CZEC 5",
  },
  {
    id: "1170",
    course_code: "CZEC 104",
    course_name: "Czech Culture",
    course_units: "4",
    course_description:
      "Czech culture including cultural studies, traditions, and contemporary Czech society.",
    prerequisites: "CZEC 3",
  },

  // Additional Bioinformatics Courses
  {
    id: "1171",
    course_code: "BINF 1",
    course_name: "Introduction to Bioinformatics",
    course_units: "4",
    course_description:
      "Introduction to bioinformatics including computational biology, sequence analysis, and biological data processing.",
    prerequisites: "None",
  },
  {
    id: "1172",
    course_code: "BINF 2",
    course_name: "Sequence Analysis",
    course_units: "4",
    course_description:
      "Sequence analysis including DNA sequence analysis, protein sequence analysis, and alignment algorithms.",
    prerequisites: "BINF 1",
  },
  {
    id: "1173",
    course_code: "BINF 3",
    course_name: "Genomics",
    course_units: "4",
    course_description:
      "Genomics including genome analysis, comparative genomics, and functional genomics.",
    prerequisites: "BINF 1",
  },
  {
    id: "1174",
    course_code: "BINF 4",
    course_name: "Proteomics",
    course_units: "4",
    course_description:
      "Proteomics including protein structure prediction, protein-protein interactions, and mass spectrometry.",
    prerequisites: "BINF 1",
  },
  {
    id: "1175",
    course_code: "BINF 5",
    course_name: "Systems Biology",
    course_units: "4",
    course_description:
      "Systems biology including biological networks, metabolic pathways, and computational modeling.",
    prerequisites: "BINF 1",
  },
  {
    id: "1176",
    course_code: "BINF 100",
    course_name: "Advanced Bioinformatics",
    course_units: "4",
    course_description:
      "Advanced bioinformatics including advanced algorithms, machine learning in biology, and research applications.",
    prerequisites: "BINF 1",
  },
  {
    id: "1177",
    course_code: "BINF 101",
    course_name: "Bioinformatics Tools",
    course_units: "4",
    course_description:
      "Bioinformatics tools including software development, database design, and computational tools for biology.",
    prerequisites: "BINF 1",
  },
  {
    id: "1178",
    course_code: "BINF 102",
    course_name: "Computational Biology",
    course_units: "4",
    course_description:
      "Computational biology including mathematical modeling, simulation, and computational approaches to biological problems.",
    prerequisites: "BINF 1",
  },
  {
    id: "1179",
    course_code: "BINF 103",
    course_name: "Bioinformatics Research",
    course_units: "4",
    course_description:
      "Bioinformatics research including research methods, experimental design, and bioinformatics research projects.",
    prerequisites: "BINF 1",
  },
  {
    id: "1180",
    course_code: "BINF 104",
    course_name: "Bioinformatics Applications",
    course_units: "4",
    course_description:
      "Bioinformatics applications including medical applications, drug discovery, and personalized medicine.",
    prerequisites: "BINF 1",
  },

  // Additional Nanotechnology Courses
  {
    id: "1181",
    course_code: "NANO 1",
    course_name: "Introduction to Nanotechnology",
    course_units: "4",
    course_description:
      "Introduction to nanotechnology including nanoscale science, nanomaterials, and nanofabrication techniques.",
    prerequisites: "None",
  },
  {
    id: "1182",
    course_code: "NANO 2",
    course_name: "Nanomaterials",
    course_units: "4",
    course_description:
      "Nanomaterials including nanoparticle synthesis, characterization, and applications in various fields.",
    prerequisites: "NANO 1",
  },
  {
    id: "1183",
    course_code: "NANO 3",
    course_name: "Nanofabrication",
    course_units: "4",
    course_description:
      "Nanofabrication including lithography techniques, self-assembly, and nanoscale manufacturing processes.",
    prerequisites: "NANO 1",
  },
  {
    id: "1184",
    course_code: "NANO 4",
    course_name: "Nanoelectronics",
    course_units: "4",
    course_description:
      "Nanoelectronics including quantum electronics, molecular electronics, and nanoscale electronic devices.",
    prerequisites: "NANO 1",
  },
  {
    id: "1185",
    course_code: "NANO 5",
    course_name: "Nanomedicine",
    course_units: "4",
    course_description:
      "Nanomedicine including drug delivery systems, diagnostic tools, and therapeutic applications of nanotechnology.",
    prerequisites: "NANO 1",
  },
  {
    id: "1186",
    course_code: "NANO 100",
    course_name: "Advanced Nanotechnology",
    course_units: "4",
    course_description:
      "Advanced nanotechnology including cutting-edge research, emerging applications, and future directions.",
    prerequisites: "NANO 1",
  },
  {
    id: "1187",
    course_code: "NANO 101",
    course_name: "Nanotechnology Tools",
    course_units: "4",
    course_description:
      "Nanotechnology tools including microscopy techniques, spectroscopy, and characterization methods.",
    prerequisites: "NANO 1",
  },
  {
    id: "1188",
    course_code: "NANO 102",
    course_name: "Nanotechnology Safety",
    course_units: "4",
    course_description:
      "Nanotechnology safety including risk assessment, safety protocols, and environmental considerations.",
    prerequisites: "NANO 1",
  },
  {
    id: "1189",
    course_code: "NANO 103",
    course_name: "Nanotechnology Ethics",
    course_units: "4",
    course_description:
      "Nanotechnology ethics including ethical considerations, societal impacts, and responsible development.",
    prerequisites: "NANO 1",
  },
  {
    id: "1190",
    course_code: "NANO 104",
    course_name: "Nanotechnology Research",
    course_units: "4",
    course_description:
      "Nanotechnology research including research methods, experimental design, and nanotechnology research projects.",
    prerequisites: "NANO 1",
  },

  // Additional Renewable Energy Courses
  {
    id: "1191",
    course_code: "RENE 1",
    course_name: "Introduction to Renewable Energy",
    course_units: "4",
    course_description:
      "Introduction to renewable energy including solar, wind, hydroelectric, and geothermal energy systems.",
    prerequisites: "None",
  },
  {
    id: "1192",
    course_code: "RENE 2",
    course_name: "Solar Energy",
    course_units: "4",
    course_description:
      "Solar energy including photovoltaic systems, solar thermal systems, and solar energy applications.",
    prerequisites: "RENE 1",
  },
  {
    id: "1193",
    course_code: "RENE 3",
    course_name: "Wind Energy",
    course_units: "4",
    course_description:
      "Wind energy including wind turbine technology, wind farm design, and wind energy integration.",
    prerequisites: "RENE 1",
  },
  {
    id: "1194",
    course_code: "RENE 4",
    course_name: "Hydroelectric Energy",
    course_units: "4",
    course_description:
      "Hydroelectric energy including dam design, turbine technology, and hydroelectric power generation.",
    prerequisites: "RENE 1",
  },
  {
    id: "1195",
    course_code: "RENE 5",
    course_name: "Geothermal Energy",
    course_units: "4",
    course_description:
      "Geothermal energy including geothermal systems, heat pumps, and geothermal power generation.",
    prerequisites: "RENE 1",
  },
  {
    id: "1196",
    course_code: "RENE 100",
    course_name: "Advanced Renewable Energy",
    course_units: "4",
    course_description:
      "Advanced renewable energy including emerging technologies, energy storage, and grid integration.",
    prerequisites: "RENE 1",
  },
  {
    id: "1197",
    course_code: "RENE 101",
    course_name: "Energy Policy",
    course_units: "4",
    course_description:
      "Energy policy including renewable energy policies, regulations, and sustainable energy planning.",
    prerequisites: "RENE 1",
  },
  {
    id: "1198",
    course_code: "RENE 102",
    course_name: "Energy Economics",
    course_units: "4",
    course_description:
      "Energy economics including cost analysis, market dynamics, and economic feasibility of renewable energy.",
    prerequisites: "RENE 1",
  },
  {
    id: "1199",
    course_code: "RENE 103",
    course_name: "Energy Storage",
    course_units: "4",
    course_description:
      "Energy storage including battery technology, energy storage systems, and grid-scale storage solutions.",
    prerequisites: "RENE 1",
  },
  {
    id: "1200",
    course_code: "RENE 104",
    course_name: "Energy Research",
    course_units: "4",
    course_description:
      "Energy research including research methods, experimental design, and renewable energy research projects.",
    prerequisites: "RENE 1",
  },

  // Additional Digital Marketing Courses
  {
    id: "1201",
    course_code: "DMKT 1",
    course_name: "Introduction to Digital Marketing",
    course_units: "4",
    course_description:
      "Introduction to digital marketing including online marketing strategies, digital platforms, and marketing fundamentals.",
    prerequisites: "None",
  },
  {
    id: "1202",
    course_code: "DMKT 2",
    course_name: "Social Media Marketing",
    course_units: "4",
    course_description:
      "Social media marketing including platform strategies, content creation, and social media campaigns.",
    prerequisites: "DMKT 1",
  },
  {
    id: "1203",
    course_code: "DMKT 3",
    course_name: "Search Engine Optimization",
    course_units: "4",
    course_description:
      "Search engine optimization including SEO strategies, keyword research, and website optimization techniques.",
    prerequisites: "DMKT 1",
  },
  {
    id: "1204",
    course_code: "DMKT 4",
    course_name: "Email Marketing",
    course_units: "4",
    course_description:
      "Email marketing including email campaigns, automation, and email marketing analytics.",
    prerequisites: "DMKT 1",
  },
  {
    id: "1205",
    course_code: "DMKT 5",
    course_name: "Content Marketing",
    course_units: "4",
    course_description:
      "Content marketing including content strategy, content creation, and content distribution.",
    prerequisites: "DMKT 1",
  },
  {
    id: "1206",
    course_code: "DMKT 100",
    course_name: "Advanced Digital Marketing",
    course_units: "4",
    course_description:
      "Advanced digital marketing including advanced strategies, analytics, and digital marketing innovation.",
    prerequisites: "DMKT 1",
  },
  {
    id: "1207",
    course_code: "DMKT 101",
    course_name: "Marketing Analytics",
    course_units: "4",
    course_description:
      "Marketing analytics including data analysis, performance metrics, and marketing measurement.",
    prerequisites: "DMKT 1",
  },
  {
    id: "1208",
    course_code: "DMKT 102",
    course_name: "Digital Advertising",
    course_units: "4",
    course_description:
      "Digital advertising including online advertising platforms, ad creation, and advertising campaigns.",
    prerequisites: "DMKT 1",
  },
  {
    id: "1209",
    course_code: "DMKT 103",
    course_name: "Marketing Automation",
    course_units: "4",
    course_description:
      "Marketing automation including automation tools, workflow design, and automated marketing campaigns.",
    prerequisites: "DMKT 1",
  },
  {
    id: "1210",
    course_code: "DMKT 104",
    course_name: "Digital Marketing Research",
    course_units: "4",
    course_description:
      "Digital marketing research including research methods, market research, and digital marketing research projects.",
    prerequisites: "DMKT 1",
  },

  // Additional Supply Chain Management Courses
  {
    id: "1211",
    course_code: "SCM 1",
    course_name: "Introduction to Supply Chain Management",
    course_units: "4",
    course_description:
      "Introduction to supply chain management including logistics, operations, and supply chain fundamentals.",
    prerequisites: "None",
  },
  {
    id: "1212",
    course_code: "SCM 2",
    course_name: "Logistics Management",
    course_units: "4",
    course_description:
      "Logistics management including transportation, warehousing, and distribution systems.",
    prerequisites: "SCM 1",
  },
  {
    id: "1213",
    course_code: "SCM 3",
    course_name: "Inventory Management",
    course_units: "4",
    course_description:
      "Inventory management including inventory control, demand forecasting, and inventory optimization.",
    prerequisites: "SCM 1",
  },
  {
    id: "1214",
    course_code: "SCM 4",
    course_name: "Procurement",
    course_units: "4",
    course_description:
      "Procurement including supplier management, purchasing strategies, and procurement processes.",
    prerequisites: "SCM 1",
  },
  {
    id: "1215",
    course_code: "SCM 5",
    course_name: "Supply Chain Analytics",
    course_units: "4",
    course_description:
      "Supply chain analytics including data analysis, performance metrics, and analytical tools for supply chains.",
    prerequisites: "SCM 1",
  },
  {
    id: "1216",
    course_code: "SCM 100",
    course_name: "Advanced Supply Chain Management",
    course_units: "4",
    course_description:
      "Advanced supply chain management including advanced strategies, global supply chains, and supply chain innovation.",
    prerequisites: "SCM 1",
  },
  {
    id: "1217",
    course_code: "SCM 101",
    course_name: "Global Supply Chains",
    course_units: "4",
    course_description:
      "Global supply chains including international logistics, global sourcing, and cross-border operations.",
    prerequisites: "SCM 1",
  },
  {
    id: "1218",
    course_code: "SCM 102",
    course_name: "Supply Chain Technology",
    course_units: "4",
    course_description:
      "Supply chain technology including digital technologies, automation, and technological innovation in supply chains.",
    prerequisites: "SCM 1",
  },
  {
    id: "1219",
    course_code: "SCM 103",
    course_name: "Supply Chain Sustainability",
    course_units: "4",
    course_description:
      "Supply chain sustainability including sustainable practices, environmental impact, and social responsibility.",
    prerequisites: "SCM 1",
  },
  {
    id: "1220",
    course_code: "SCM 104",
    course_name: "Supply Chain Research",
    course_units: "4",
    course_description:
      "Supply chain research including research methods, experimental design, and supply chain research projects.",
    prerequisites: "SCM 1",
  },

  // Additional Data Engineering Courses
  {
    id: "1221",
    course_code: "DENG 1",
    course_name: "Introduction to Data Engineering",
    course_units: "4",
    course_description:
      "Introduction to data engineering including data pipelines, data infrastructure, and data processing fundamentals.",
    prerequisites: "None",
  },
  {
    id: "1222",
    course_code: "DENG 2",
    course_name: "Data Pipeline Design",
    course_units: "4",
    course_description:
      "Data pipeline design including ETL processes, data flow design, and pipeline architecture.",
    prerequisites: "DENG 1",
  },
  {
    id: "1223",
    course_code: "DENG 3",
    course_name: "Big Data Processing",
    course_units: "4",
    course_description:
      "Big data processing including distributed computing, Hadoop, Spark, and large-scale data processing.",
    prerequisites: "DENG 1",
  },
  {
    id: "1224",
    course_code: "DENG 4",
    course_name: "Data Warehousing",
    course_units: "4",
    course_description:
      "Data warehousing including warehouse design, data modeling, and data storage optimization.",
    prerequisites: "DENG 1",
  },
  {
    id: "1225",
    course_code: "DENG 5",
    course_name: "Data Quality",
    course_units: "4",
    course_description:
      "Data quality including data validation, data cleaning, and data quality management.",
    prerequisites: "DENG 1",
  },
  {
    id: "1226",
    course_code: "DENG 100",
    course_name: "Advanced Data Engineering",
    course_units: "4",
    course_description:
      "Advanced data engineering including advanced techniques, real-time processing, and data engineering innovation.",
    prerequisites: "DENG 1",
  },
  {
    id: "1227",
    course_code: "DENG 101",
    course_name: "Stream Processing",
    course_units: "4",
    course_description:
      "Stream processing including real-time data processing, stream analytics, and event-driven architectures.",
    prerequisites: "DENG 1",
  },
  {
    id: "1228",
    course_code: "DENG 102",
    course_name: "Data Infrastructure",
    course_units: "4",
    course_description:
      "Data infrastructure including cloud data platforms, data architecture, and infrastructure management.",
    prerequisites: "DENG 1",
  },
  {
    id: "1229",
    course_code: "DENG 103",
    course_name: "Data Governance",
    course_units: "4",
    course_description:
      "Data governance including data policies, data security, and data management frameworks.",
    prerequisites: "DENG 1",
  },
  {
    id: "1230",
    course_code: "DENG 104",
    course_name: "Data Engineering Research",
    course_units: "4",
    course_description:
      "Data engineering research including research methods, experimental design, and data engineering research projects.",
    prerequisites: "DENG 1",
  },

  // Additional Human-Computer Interaction Courses
  {
    id: "1231",
    course_code: "HCI 1",
    course_name: "Introduction to Human-Computer Interaction",
    course_units: "4",
    course_description:
      "Introduction to human-computer interaction including user interface design, usability, and interaction design principles.",
    prerequisites: "None",
  },
  {
    id: "1232",
    course_code: "HCI 2",
    course_name: "User Interface Design",
    course_units: "4",
    course_description:
      "User interface design including design principles, visual design, and interface prototyping.",
    prerequisites: "HCI 1",
  },
  {
    id: "1233",
    course_code: "HCI 3",
    course_name: "Usability Testing",
    course_units: "4",
    course_description:
      "Usability testing including user research, testing methods, and usability evaluation techniques.",
    prerequisites: "HCI 1",
  },
  {
    id: "1234",
    course_code: "HCI 4",
    course_name: "Interaction Design",
    course_units: "4",
    course_description:
      "Interaction design including interaction patterns, user experience design, and interactive systems.",
    prerequisites: "HCI 1",
  },
  {
    id: "1235",
    course_code: "HCI 5",
    course_name: "User Experience Design",
    course_units: "4",
    course_description:
      "User experience design including UX principles, user research, and experience design methodologies.",
    prerequisites: "HCI 1",
  },
  {
    id: "1236",
    course_code: "HCI 100",
    course_name: "Advanced Human-Computer Interaction",
    course_units: "4",
    course_description:
      "Advanced human-computer interaction including advanced techniques, emerging technologies, and HCI innovation.",
    prerequisites: "HCI 1",
  },
  {
    id: "1237",
    course_code: "HCI 101",
    course_name: "Mobile Interface Design",
    course_units: "4",
    course_description:
      "Mobile interface design including mobile design principles, responsive design, and mobile user experience.",
    prerequisites: "HCI 1",
  },
  {
    id: "1238",
    course_code: "HCI 102",
    course_name: "Accessibility Design",
    course_units: "4",
    course_description:
      "Accessibility design including inclusive design, assistive technologies, and universal design principles.",
    prerequisites: "HCI 1",
  },
  {
    id: "1239",
    course_code: "HCI 103",
    course_name: "Virtual Reality Interfaces",
    course_units: "4",
    course_description:
      "Virtual reality interfaces including VR design, immersive experiences, and virtual environment design.",
    prerequisites: "HCI 1",
  },
  {
    id: "1240",
    course_code: "HCI 104",
    course_name: "HCI Research",
    course_units: "4",
    course_description:
      "HCI research including research methods, experimental design, and human-computer interaction research projects.",
    prerequisites: "HCI 1",
  },

  // Additional Environmental Engineering Courses
  {
    id: "1241",
    course_code: "ENVE 1",
    course_name: "Introduction to Environmental Engineering",
    course_units: "4",
    course_description:
      "Introduction to environmental engineering including environmental systems, pollution control, and sustainable engineering.",
    prerequisites: "None",
  },
  {
    id: "1242",
    course_code: "ENVE 2",
    course_name: "Water Treatment",
    course_units: "4",
    course_description:
      "Water treatment including water purification, wastewater treatment, and water quality management.",
    prerequisites: "ENVE 1",
  },
  {
    id: "1243",
    course_code: "ENVE 3",
    course_name: "Air Pollution Control",
    course_units: "4",
    course_description:
      "Air pollution control including air quality management, emission control, and atmospheric monitoring.",
    prerequisites: "ENVE 1",
  },
  {
    id: "1244",
    course_code: "ENVE 4",
    course_name: "Waste Management",
    course_units: "4",
    course_description:
      "Waste management including solid waste treatment, recycling systems, and waste reduction strategies.",
    prerequisites: "ENVE 1",
  },
  {
    id: "1245",
    course_code: "ENVE 5",
    course_name: "Environmental Impact Assessment",
    course_units: "4",
    course_description:
      "Environmental impact assessment including impact analysis, environmental planning, and regulatory compliance.",
    prerequisites: "ENVE 1",
  },
  {
    id: "1246",
    course_code: "ENVE 100",
    course_name: "Advanced Environmental Engineering",
    course_units: "4",
    course_description:
      "Advanced environmental engineering including advanced techniques, emerging technologies, and environmental innovation.",
    prerequisites: "ENVE 1",
  },
  {
    id: "1247",
    course_code: "ENVE 101",
    course_name: "Sustainable Engineering",
    course_units: "4",
    course_description:
      "Sustainable engineering including sustainable design, green technologies, and environmental sustainability.",
    prerequisites: "ENVE 1",
  },
  {
    id: "1248",
    course_code: "ENVE 102",
    course_name: "Environmental Modeling",
    course_units: "4",
    course_description:
      "Environmental modeling including mathematical modeling, simulation, and environmental system analysis.",
    prerequisites: "ENVE 1",
  },
  {
    id: "1249",
    course_code: "ENVE 103",
    course_name: "Environmental Policy",
    course_units: "4",
    course_description:
      "Environmental policy including environmental regulations, policy analysis, and environmental governance.",
    prerequisites: "ENVE 1",
  },
  {
    id: "1250",
    course_code: "ENVE 104",
    course_name: "Environmental Research",
    course_units: "4",
    course_description:
      "Environmental research including research methods, experimental design, and environmental engineering research projects.",
    prerequisites: "ENVE 1",
  },

  // Additional Business Administration Courses
  {
    id: "1251",
    course_code: "BUS 1",
    course_name: "Introduction to Business",
    course_units: "4",
    course_description:
      "Introduction to business including business fundamentals, organizational structures, and business environment.",
    prerequisites: "None",
  },
  {
    id: "1252",
    course_code: "BUS 2",
    course_name: "Business Ethics",
    course_units: "4",
    course_description:
      "Business ethics including ethical decision making, corporate social responsibility, and ethical business practices.",
    prerequisites: "BUS 1",
  },
  {
    id: "1253",
    course_code: "BUS 3",
    course_name: "Business Communication",
    course_units: "4",
    course_description:
      "Business communication including professional writing, presentations, and interpersonal communication skills.",
    prerequisites: "BUS 1",
  },
  {
    id: "1254",
    course_code: "BUS 4",
    course_name: "Business Law",
    course_units: "4",
    course_description:
      "Business law including contract law, corporate law, and legal aspects of business operations.",
    prerequisites: "BUS 1",
  },
  {
    id: "1255",
    course_code: "BUS 5",
    course_name: "Business Strategy",
    course_units: "4",
    course_description:
      "Business strategy including strategic planning, competitive analysis, and strategic management.",
    prerequisites: "BUS 1",
  },
  {
    id: "1256",
    course_code: "BUS 100",
    course_name: "Advanced Business Management",
    course_units: "4",
    course_description:
      "Advanced business management including leadership, organizational behavior, and management principles.",
    prerequisites: "BUS 1",
  },
  {
    id: "1257",
    course_code: "BUS 101",
    course_name: "International Business",
    course_units: "4",
    course_description:
      "International business including global markets, international trade, and cross-cultural business.",
    prerequisites: "BUS 1",
  },
  {
    id: "1258",
    course_code: "BUS 102",
    course_name: "Entrepreneurship",
    course_units: "4",
    course_description:
      "Entrepreneurship including business planning, startup strategies, and entrepreneurial skills.",
    prerequisites: "BUS 1",
  },
  {
    id: "1259",
    course_code: "BUS 103",
    course_name: "Business Analytics",
    course_units: "4",
    course_description:
      "Business analytics including data analysis, business intelligence, and analytical decision making.",
    prerequisites: "BUS 1",
  },
  {
    id: "1260",
    course_code: "BUS 104",
    course_name: "Business Research",
    course_units: "4",
    course_description:
      "Business research including research methods, market research, and business research projects.",
    prerequisites: "BUS 1",
  },

  // Additional Computer Science Courses
  {
    id: "1261",
    course_code: "CSE 20",
    course_name: "Discrete Mathematics",
    course_units: "4",
    course_description:
      "Discrete mathematics including logic, set theory, combinatorics, and mathematical foundations for computer science.",
    prerequisites: "MATH 10A or MATH 20A",
  },
  {
    id: "1262",
    course_code: "CSE 21",
    course_name: "Mathematics for Algorithms and Systems",
    course_units: "4",
    course_description:
      "Mathematics for algorithms and systems including mathematical reasoning, proofs, and algorithmic thinking.",
    prerequisites: "CSE 20",
  },
  {
    id: "1263",
    course_code: "CSE 30",
    course_name: "Computer Organization and Systems Programming",
    course_units: "4",
    course_description:
      "Computer organization and systems programming including assembly language, computer architecture, and systems programming.",
    prerequisites: "CSE 12",
  },
  {
    id: "1264",
    course_code: "CSE 100",
    course_name: "Advanced Data Structures",
    course_units: "4",
    course_description:
      "Advanced data structures including complex data structures, algorithm analysis, and efficient data organization.",
    prerequisites: "CSE 12",
  },
  {
    id: "1265",
    course_code: "CSE 101",
    course_name: "Design and Analysis of Algorithms",
    course_units: "4",
    course_description:
      "Design and analysis of algorithms including algorithm design techniques, complexity analysis, and algorithmic problem solving.",
    prerequisites: "CSE 100",
  },
  {
    id: "1266",
    course_code: "CSE 110",
    course_name: "Software Engineering",
    course_units: "4",
    course_description:
      "Software engineering including software development methodologies, project management, and software design principles.",
    prerequisites: "CSE 12",
  },
  {
    id: "1267",
    course_code: "CSE 120",
    course_name: "Computer Architecture",
    course_units: "4",
    course_description:
      "Computer architecture including processor design, memory systems, and computer hardware organization.",
    prerequisites: "CSE 30",
  },
  {
    id: "1268",
    course_code: "CSE 130",
    course_name: "Programming Languages",
    course_units: "4",
    course_description:
      "Programming languages including language design, compilers, and programming language theory.",
    prerequisites: "CSE 12",
  },
  {
    id: "1269",
    course_code: "CSE 140",
    course_name: "Digital Systems",
    course_units: "4",
    course_description:
      "Digital systems including digital logic, circuit design, and digital system implementation.",
    prerequisites: "CSE 20",
  },
  {
    id: "1270",
    course_code: "CSE 150",
    course_name: "Computer Networks",
    course_units: "4",
    course_description:
      "Computer networks including network protocols, network architecture, and distributed systems.",
    prerequisites: "CSE 12",
  },

  // Additional Engineering Courses
  {
    id: "1271",
    course_code: "ENG 1",
    course_name: "Introduction to Engineering",
    course_units: "4",
    course_description:
      "Introduction to engineering including engineering principles, design process, and engineering disciplines.",
    prerequisites: "None",
  },
  {
    id: "1272",
    course_code: "ENG 2",
    course_name: "Engineering Design",
    course_units: "4",
    course_description:
      "Engineering design including design methodology, prototyping, and engineering project development.",
    prerequisites: "ENG 1",
  },
  {
    id: "1273",
    course_code: "ENG 3",
    course_name: "Engineering Materials",
    course_units: "4",
    course_description:
      "Engineering materials including material properties, material selection, and material science fundamentals.",
    prerequisites: "ENG 1",
  },
  {
    id: "1274",
    course_code: "ENG 4",
    course_name: "Engineering Mechanics",
    course_units: "4",
    course_description:
      "Engineering mechanics including statics, dynamics, and mechanical principles for engineering applications.",
    prerequisites: "ENG 1",
  },
  {
    id: "1275",
    course_code: "ENG 5",
    course_name: "Engineering Thermodynamics",
    course_units: "4",
    course_description:
      "Engineering thermodynamics including energy systems, heat transfer, and thermodynamic principles.",
    prerequisites: "ENG 1",
  },
  {
    id: "1276",
    course_code: "ENG 100",
    course_name: "Advanced Engineering Analysis",
    course_units: "4",
    course_description:
      "Advanced engineering analysis including mathematical modeling, simulation, and engineering problem solving.",
    prerequisites: "ENG 1",
  },
  {
    id: "1277",
    course_code: "ENG 101",
    course_name: "Engineering Economics",
    course_units: "4",
    course_description:
      "Engineering economics including cost analysis, economic decision making, and project evaluation.",
    prerequisites: "ENG 1",
  },
  {
    id: "1278",
    course_code: "ENG 102",
    course_name: "Engineering Ethics",
    course_units: "4",
    course_description:
      "Engineering ethics including professional responsibility, ethical decision making, and engineering standards.",
    prerequisites: "ENG 1",
  },
  {
    id: "1279",
    course_code: "ENG 103",
    course_name: "Engineering Project Management",
    course_units: "4",
    course_description:
      "Engineering project management including project planning, resource management, and project execution.",
    prerequisites: "ENG 1",
  },
  {
    id: "1280",
    course_code: "ENG 104",
    course_name: "Engineering Research",
    course_units: "4",
    course_description:
      "Engineering research including research methods, experimental design, and engineering research projects.",
    prerequisites: "ENG 1",
  },

  // Additional Health Sciences Courses
  {
    id: "1281",
    course_code: "HSCI 1",
    course_name: "Introduction to Health Sciences",
    course_units: "4",
    course_description:
      "Introduction to health sciences including healthcare systems, public health, and health science fundamentals.",
    prerequisites: "None",
  },
  {
    id: "1282",
    course_code: "HSCI 2",
    course_name: "Human Anatomy",
    course_units: "4",
    course_description:
      "Human anatomy including anatomical structures, body systems, and anatomical relationships.",
    prerequisites: "HSCI 1",
  },
  {
    id: "1283",
    course_code: "HSCI 3",
    course_name: "Human Physiology",
    course_units: "4",
    course_description:
      "Human physiology including physiological processes, organ function, and body system integration.",
    prerequisites: "HSCI 2",
  },
  {
    id: "1284",
    course_code: "HSCI 4",
    course_name: "Medical Terminology",
    course_units: "4",
    course_description:
      "Medical terminology including medical vocabulary, terminology systems, and healthcare communication.",
    prerequisites: "HSCI 1",
  },
  {
    id: "1285",
    course_code: "HSCI 5",
    course_name: "Health Assessment",
    course_units: "4",
    course_description:
      "Health assessment including patient assessment, diagnostic techniques, and health evaluation methods.",
    prerequisites: "HSCI 3",
  },
  {
    id: "1286",
    course_code: "HSCI 100",
    course_name: "Advanced Health Sciences",
    course_units: "4",
    course_description:
      "Advanced health sciences including advanced concepts, specialized areas, and health science innovation.",
    prerequisites: "HSCI 1",
  },
  {
    id: "1287",
    course_code: "HSCI 101",
    course_name: "Clinical Skills",
    course_units: "4",
    course_description:
      "Clinical skills including clinical procedures, patient care, and healthcare practice.",
    prerequisites: "HSCI 5",
  },
  {
    id: "1288",
    course_code: "HSCI 102",
    course_name: "Health Policy",
    course_units: "4",
    course_description:
      "Health policy including healthcare policy, health regulations, and health system management.",
    prerequisites: "HSCI 1",
  },
  {
    id: "1289",
    course_code: "HSCI 103",
    course_name: "Health Informatics",
    course_units: "4",
    course_description:
      "Health informatics including health information systems, electronic health records, and health data management.",
    prerequisites: "HSCI 1",
  },
  {
    id: "1290",
    course_code: "HSCI 104",
    course_name: "Health Research",
    course_units: "4",
    course_description:
      "Health research including research methods, clinical research, and health science research projects.",
    prerequisites: "HSCI 1",
  },

  // Additional Psychology Courses
  {
    id: "1291",
    course_code: "PSYC 10",
    course_name: "Introduction to Psychology",
    course_units: "4",
    course_description:
      "Introduction to psychology including psychological principles, research methods, and major psychological theories.",
    prerequisites: "None",
  },
  {
    id: "1292",
    course_code: "PSYC 20",
    course_name: "Developmental Psychology",
    course_units: "4",
    course_description:
      "Developmental psychology including human development, lifespan psychology, and developmental theories.",
    prerequisites: "PSYC 10",
  },
  {
    id: "1293",
    course_code: "PSYC 30",
    course_name: "Social Psychology",
    course_units: "4",
    course_description:
      "Social psychology including social behavior, group dynamics, and social influence.",
    prerequisites: "PSYC 10",
  },
  {
    id: "1294",
    course_code: "PSYC 40",
    course_name: "Cognitive Psychology",
    course_units: "4",
    course_description:
      "Cognitive psychology including mental processes, memory, attention, and cognitive development.",
    prerequisites: "PSYC 10",
  },
  {
    id: "1295",
    course_code: "PSYC 50",
    course_name: "Abnormal Psychology",
    course_units: "4",
    course_description:
      "Abnormal psychology including psychological disorders, mental health, and clinical psychology.",
    prerequisites: "PSYC 10",
  },
  {
    id: "1296",
    course_code: "PSYC 100",
    course_name: "Advanced Psychology",
    course_units: "4",
    course_description:
      "Advanced psychology including advanced theories, research methods, and specialized psychological topics.",
    prerequisites: "PSYC 10",
  },
  {
    id: "1297",
    course_code: "PSYC 101",
    course_name: "Research Methods in Psychology",
    course_units: "4",
    course_description:
      "Research methods in psychology including experimental design, statistical analysis, and psychological research.",
    prerequisites: "PSYC 10",
  },
  {
    id: "1298",
    course_code: "PSYC 102",
    course_name: "Biological Psychology",
    course_units: "4",
    course_description:
      "Biological psychology including brain function, neural mechanisms, and biological basis of behavior.",
    prerequisites: "PSYC 10",
  },
  {
    id: "1299",
    course_code: "PSYC 103",
    course_name: "Personality Psychology",
    course_units: "4",
    course_description:
      "Personality psychology including personality theories, individual differences, and personality assessment.",
    prerequisites: "PSYC 10",
  },
  {
    id: "1300",
    course_code: "PSYC 104",
    course_name: "Psychology Research",
    course_units: "4",
    course_description:
      "Psychology research including research projects, experimental design, and psychological research methods.",
    prerequisites: "PSYC 10",
  },

  // Additional Economics Courses
  {
    id: "1301",
    course_code: "ECON 10",
    course_name: "Principles of Economics",
    course_units: "4",
    course_description:
      "Principles of economics including microeconomics, macroeconomics, and fundamental economic concepts.",
    prerequisites: "None",
  },
  {
    id: "1302",
    course_code: "ECON 20",
    course_name: "Microeconomic Theory",
    course_units: "4",
    course_description:
      "Microeconomic theory including consumer behavior, producer theory, and market equilibrium.",
    prerequisites: "ECON 10",
  },
  {
    id: "1303",
    course_code: "ECON 30",
    course_name: "Macroeconomic Theory",
    course_units: "4",
    course_description:
      "Macroeconomic theory including national income, economic growth, and macroeconomic policy.",
    prerequisites: "ECON 10",
  },
  {
    id: "1304",
    course_code: "ECON 40",
    course_name: "Econometrics",
    course_units: "4",
    course_description:
      "Econometrics including statistical methods, economic modeling, and empirical analysis.",
    prerequisites: "ECON 10, MATH 20A",
  },
  {
    id: "1305",
    course_code: "ECON 50",
    course_name: "International Economics",
    course_units: "4",
    course_description:
      "International economics including international trade, exchange rates, and global economic issues.",
    prerequisites: "ECON 10",
  },
  {
    id: "1306",
    course_code: "ECON 100",
    course_name: "Advanced Microeconomics",
    course_units: "4",
    course_description:
      "Advanced microeconomics including advanced theory, mathematical economics, and microeconomic analysis.",
    prerequisites: "ECON 20",
  },
  {
    id: "1307",
    course_code: "ECON 101",
    course_name: "Advanced Macroeconomics",
    course_units: "4",
    course_description:
      "Advanced macroeconomics including advanced theory, economic modeling, and macroeconomic analysis.",
    prerequisites: "ECON 30",
  },
  {
    id: "1308",
    course_code: "ECON 102",
    course_name: "Labor Economics",
    course_units: "4",
    course_description:
      "Labor economics including labor markets, wage determination, and employment economics.",
    prerequisites: "ECON 20",
  },
  {
    id: "1309",
    course_code: "ECON 103",
    course_name: "Public Economics",
    course_units: "4",
    course_description:
      "Public economics including government spending, taxation, and public policy analysis.",
    prerequisites: "ECON 20",
  },
  {
    id: "1310",
    course_code: "ECON 104",
    course_name: "Economics Research",
    course_units: "4",
    course_description:
      "Economics research including research methods, economic analysis, and economics research projects.",
    prerequisites: "ECON 40",
  },

  // Additional Mathematics Courses
  {
    id: "1311",
    course_code: "MATH 10A",
    course_name: "Calculus I",
    course_units: "4",
    course_description:
      "Calculus I including limits, derivatives, and applications of differentiation.",
    prerequisites: "MATH 3C or MATH 4C",
  },
  {
    id: "1312",
    course_code: "MATH 10B",
    course_name: "Calculus II",
    course_units: "4",
    course_description:
      "Calculus II including integration, applications of integration, and infinite series.",
    prerequisites: "MATH 10A",
  },
  {
    id: "1313",
    course_code: "MATH 10C",
    course_name: "Calculus III",
    course_units: "4",
    course_description:
      "Calculus III including multivariable calculus, partial derivatives, and multiple integrals.",
    prerequisites: "MATH 10B",
  },
  {
    id: "1314",
    course_code: "MATH 20A",
    course_name: "Calculus for Science and Engineering",
    course_units: "4",
    course_description:
      "Calculus for science and engineering including calculus with applications to scientific and engineering problems.",
    prerequisites: "MATH 3C or MATH 4C",
  },
  {
    id: "1315",
    course_code: "MATH 20B",
    course_name: "Calculus for Science and Engineering II",
    course_units: "4",
    course_description:
      "Calculus for science and engineering II including advanced calculus with scientific and engineering applications.",
    prerequisites: "MATH 20A",
  },
  {
    id: "1316",
    course_code: "MATH 100",
    course_name: "Linear Algebra",
    course_units: "4",
    course_description:
      "Linear algebra including vector spaces, linear transformations, and matrix theory.",
    prerequisites: "MATH 10B or MATH 20B",
  },
  {
    id: "1317",
    course_code: "MATH 101",
    course_name: "Differential Equations",
    course_units: "4",
    course_description:
      "Differential equations including ordinary differential equations, systems of equations, and applications.",
    prerequisites: "MATH 10B or MATH 20B",
  },
  {
    id: "1318",
    course_code: "MATH 102",
    course_name: "Numerical Analysis",
    course_units: "4",
    course_description:
      "Numerical analysis including numerical methods, computational mathematics, and mathematical algorithms.",
    prerequisites: "MATH 10B or MATH 20B",
  },
  {
    id: "1319",
    course_code: "MATH 103",
    course_name: "Real Analysis",
    course_units: "4",
    course_description:
      "Real analysis including mathematical analysis, rigorous calculus, and mathematical proofs.",
    prerequisites: "MATH 100",
  },
  {
    id: "1320",
    course_code: "MATH 104",
    course_name: "Mathematics Research",
    course_units: "4",
    course_description:
      "Mathematics research including research methods, mathematical proofs, and mathematics research projects.",
    prerequisites: "MATH 100",
  },

  // Additional Chemistry Courses
  {
    id: "1321",
    course_code: "CHEM 6A",
    course_name: "General Chemistry I",
    course_units: "4",
    course_description:
      "General chemistry I including atomic structure, chemical bonding, and fundamental chemical principles.",
    prerequisites: "MATH 3C or MATH 4C",
  },
  {
    id: "1322",
    course_code: "CHEM 6B",
    course_name: "General Chemistry II",
    course_units: "4",
    course_description:
      "General chemistry II including thermodynamics, kinetics, and chemical equilibrium.",
    prerequisites: "CHEM 6A",
  },
  {
    id: "1323",
    course_code: "CHEM 6C",
    course_name: "General Chemistry III",
    course_units: "4",
    course_description:
      "General chemistry III including electrochemistry, nuclear chemistry, and advanced chemical concepts.",
    prerequisites: "CHEM 6B",
  },
  {
    id: "1324",
    course_code: "CHEM 40A",
    course_name: "Organic Chemistry I",
    course_units: "4",
    course_description:
      "Organic chemistry I including organic compounds, reaction mechanisms, and organic synthesis.",
    prerequisites: "CHEM 6C",
  },
  {
    id: "1325",
    course_code: "CHEM 40B",
    course_name: "Organic Chemistry II",
    course_units: "4",
    course_description:
      "Organic chemistry II including advanced organic reactions, spectroscopy, and organic chemistry applications.",
    prerequisites: "CHEM 40A",
  },
  {
    id: "1326",
    course_code: "CHEM 100",
    course_name: "Physical Chemistry",
    course_units: "4",
    course_description:
      "Physical chemistry including thermodynamics, quantum mechanics, and physical chemistry principles.",
    prerequisites: "CHEM 6C, MATH 20B",
  },
  {
    id: "1327",
    course_code: "CHEM 101",
    course_name: "Analytical Chemistry",
    course_units: "4",
    course_description:
      "Analytical chemistry including chemical analysis, instrumental methods, and analytical techniques.",
    prerequisites: "CHEM 6C",
  },
  {
    id: "1328",
    course_code: "CHEM 102",
    course_name: "Inorganic Chemistry",
    course_units: "4",
    course_description:
      "Inorganic chemistry including coordination chemistry, organometallic chemistry, and inorganic synthesis.",
    prerequisites: "CHEM 6C",
  },
  {
    id: "1329",
    course_code: "CHEM 103",
    course_name: "Biochemistry",
    course_units: "4",
    course_description:
      "Biochemistry including biomolecules, metabolic pathways, and biochemical processes.",
    prerequisites: "CHEM 40B",
  },
  {
    id: "1330",
    course_code: "CHEM 104",
    course_name: "Chemistry Research",
    course_units: "4",
    course_description:
      "Chemistry research including research methods, laboratory techniques, and chemistry research projects.",
    prerequisites: "CHEM 6C",
  },

  // Additional Physics Courses
  {
    id: "1331",
    course_code: "PHYS 1A",
    course_name: "Mechanics",
    course_units: "4",
    course_description:
      "Mechanics including Newton's laws, energy, momentum, and classical mechanics principles.",
    prerequisites: "MATH 10A or MATH 20A",
  },
  {
    id: "1332",
    course_code: "PHYS 1B",
    course_name: "Electricity and Magnetism",
    course_units: "4",
    course_description:
      "Electricity and magnetism including electric fields, magnetic fields, and electromagnetic phenomena.",
    prerequisites: "PHYS 1A",
  },
  {
    id: "1333",
    course_code: "PHYS 1C",
    course_name: "Waves, Optics, and Modern Physics",
    course_units: "4",
    course_description:
      "Waves, optics, and modern physics including wave phenomena, optical systems, and quantum physics.",
    prerequisites: "PHYS 1B",
  },
  {
    id: "1334",
    course_code: "PHYS 2A",
    course_name: "Physics for Scientists and Engineers I",
    course_units: "4",
    course_description:
      "Physics for scientists and engineers I including mechanics with calculus-based approach.",
    prerequisites: "MATH 20A",
  },
  {
    id: "1335",
    course_code: "PHYS 2B",
    course_name: "Physics for Scientists and Engineers II",
    course_units: "4",
    course_description:
      "Physics for scientists and engineers II including electricity and magnetism with calculus-based approach.",
    prerequisites: "PHYS 2A",
  },
  {
    id: "1336",
    course_code: "PHYS 100",
    course_name: "Classical Mechanics",
    course_units: "4",
    course_description:
      "Classical mechanics including Lagrangian and Hamiltonian mechanics, and advanced classical physics.",
    prerequisites: "PHYS 2B",
  },
  {
    id: "1337",
    course_code: "PHYS 101",
    course_name: "Quantum Mechanics",
    course_units: "4",
    course_description:
      "Quantum mechanics including wave functions, quantum theory, and quantum physics applications.",
    prerequisites: "PHYS 2B",
  },
  {
    id: "1338",
    course_code: "PHYS 102",
    course_name: "Electromagnetism",
    course_units: "4",
    course_description:
      "Electromagnetism including Maxwell's equations, electromagnetic theory, and electromagnetic applications.",
    prerequisites: "PHYS 2B",
  },
  {
    id: "1339",
    course_code: "PHYS 103",
    course_name: "Thermodynamics",
    course_units: "4",
    course_description:
      "Thermodynamics including thermodynamic laws, statistical mechanics, and thermal physics.",
    prerequisites: "PHYS 2B",
  },
  {
    id: "1340",
    course_code: "PHYS 104",
    course_name: "Physics Research",
    course_units: "4",
    course_description:
      "Physics research including research methods, experimental physics, and physics research projects.",
    prerequisites: "PHYS 2B",
  },

  // Additional Biology Courses
  {
    id: "1341",
    course_code: "BIOL 10",
    course_name: "Introduction to Biology",
    course_units: "4",
    course_description:
      "Introduction to biology including cell biology, genetics, and fundamental biological principles.",
    prerequisites: "None",
  },
  {
    id: "1342",
    course_code: "BIOL 20",
    course_name: "Cell Biology",
    course_units: "4",
    course_description:
      "Cell biology including cell structure, cell function, and cellular processes.",
    prerequisites: "BIOL 10",
  },
  {
    id: "1343",
    course_code: "BIOL 30",
    course_name: "Genetics",
    course_units: "4",
    course_description:
      "Genetics including inheritance, gene expression, and genetic mechanisms.",
    prerequisites: "BIOL 10",
  },
  {
    id: "1344",
    course_code: "BIOL 40",
    course_name: "Ecology",
    course_units: "4",
    course_description:
      "Ecology including population ecology, community ecology, and ecosystem dynamics.",
    prerequisites: "BIOL 10",
  },
  {
    id: "1345",
    course_code: "BIOL 50",
    course_name: "Evolution",
    course_units: "4",
    course_description:
      "Evolution including evolutionary theory, natural selection, and evolutionary processes.",
    prerequisites: "BIOL 10",
  },
  {
    id: "1346",
    course_code: "BIOL 100",
    course_name: "Advanced Biology",
    course_units: "4",
    course_description:
      "Advanced biology including advanced concepts, specialized areas, and biological research.",
    prerequisites: "BIOL 10",
  },
  {
    id: "1347",
    course_code: "BIOL 101",
    course_name: "Molecular Biology",
    course_units: "4",
    course_description:
      "Molecular biology including molecular mechanisms, gene regulation, and molecular techniques.",
    prerequisites: "BIOL 20",
  },
  {
    id: "1348",
    course_code: "BIOL 102",
    course_name: "Microbiology",
    course_units: "4",
    course_description:
      "Microbiology including microbial diversity, microbial physiology, and microbial applications.",
    prerequisites: "BIOL 10",
  },
  {
    id: "1349",
    course_code: "BIOL 103",
    course_name: "Physiology",
    course_units: "4",
    course_description:
      "Physiology including organ systems, physiological processes, and human physiology.",
    prerequisites: "BIOL 20",
  },
  {
    id: "1350",
    course_code: "BIOL 104",
    course_name: "Biology Research",
    course_units: "4",
    course_description:
      "Biology research including research methods, experimental biology, and biology research projects.",
    prerequisites: "BIOL 10",
  },

  // Additional Communication Studies Courses
  {
    id: "1351",
    course_code: "COMM 1",
    course_name: "Introduction to Communication",
    course_units: "4",
    course_description:
      "Introduction to communication including communication theory, interpersonal communication, and communication principles.",
    prerequisites: "None",
  },
  {
    id: "1352",
    course_code: "COMM 2",
    course_name: "Public Speaking",
    course_units: "4",
    course_description:
      "Public speaking including speech preparation, delivery techniques, and effective communication strategies.",
    prerequisites: "COMM 1",
  },
  {
    id: "1353",
    course_code: "COMM 3",
    course_name: "Interpersonal Communication",
    course_units: "4",
    course_description:
      "Interpersonal communication including relationship communication, conflict resolution, and communication skills.",
    prerequisites: "COMM 1",
  },
  {
    id: "1354",
    course_code: "COMM 4",
    course_name: "Mass Communication",
    course_units: "4",
    course_description:
      "Mass communication including media theory, media effects, and mass communication processes.",
    prerequisites: "COMM 1",
  },
  {
    id: "1355",
    course_code: "COMM 5",
    course_name: "Organizational Communication",
    course_units: "4",
    course_description:
      "Organizational communication including workplace communication, organizational culture, and communication management.",
    prerequisites: "COMM 1",
  },
  {
    id: "1356",
    course_code: "COMM 100",
    course_name: "Advanced Communication Theory",
    course_units: "4",
    course_description:
      "Advanced communication theory including theoretical frameworks, research methods, and communication analysis.",
    prerequisites: "COMM 1",
  },
  {
    id: "1357",
    course_code: "COMM 101",
    course_name: "Digital Communication",
    course_units: "4",
    course_description:
      "Digital communication including online communication, social media, and digital communication strategies.",
    prerequisites: "COMM 1",
  },
  {
    id: "1358",
    course_code: "COMM 102",
    course_name: "Intercultural Communication",
    course_units: "4",
    course_description:
      "Intercultural communication including cross-cultural communication, cultural sensitivity, and global communication.",
    prerequisites: "COMM 1",
  },
  {
    id: "1359",
    course_code: "COMM 103",
    course_name: "Communication Research",
    course_units: "4",
    course_description:
      "Communication research including research methods, communication analysis, and communication research projects.",
    prerequisites: "COMM 1",
  },
  {
    id: "1360",
    course_code: "COMM 104",
    course_name: "Communication Ethics",
    course_units: "4",
    course_description:
      "Communication ethics including ethical communication, media ethics, and communication responsibility.",
    prerequisites: "COMM 1",
  },

  // Additional Political Science Courses
  {
    id: "1361",
    course_code: "POLI 10",
    course_name: "Introduction to Political Science",
    course_units: "4",
    course_description:
      "Introduction to political science including political theory, government systems, and political analysis.",
    prerequisites: "None",
  },
  {
    id: "1362",
    course_code: "POLI 20",
    course_name: "American Politics",
    course_units: "4",
    course_description:
      "American politics including U.S. government, political institutions, and American political processes.",
    prerequisites: "POLI 10",
  },
  {
    id: "1363",
    course_code: "POLI 30",
    course_name: "Comparative Politics",
    course_units: "4",
    course_description:
      "Comparative politics including political systems, comparative analysis, and global political structures.",
    prerequisites: "POLI 10",
  },
  {
    id: "1364",
    course_code: "POLI 40",
    course_name: "International Relations",
    course_units: "4",
    course_description:
      "International relations including global politics, international cooperation, and international conflict.",
    prerequisites: "POLI 10",
  },
  {
    id: "1365",
    course_code: "POLI 50",
    course_name: "Political Theory",
    course_units: "4",
    course_description:
      "Political theory including political philosophy, theoretical frameworks, and political thought.",
    prerequisites: "POLI 10",
  },
  {
    id: "1366",
    course_code: "POLI 100",
    course_name: "Advanced Political Science",
    course_units: "4",
    course_description:
      "Advanced political science including advanced theory, research methods, and political analysis.",
    prerequisites: "POLI 10",
  },
  {
    id: "1367",
    course_code: "POLI 101",
    course_name: "Public Policy",
    course_units: "4",
    course_description:
      "Public policy including policy analysis, policy development, and policy implementation.",
    prerequisites: "POLI 10",
  },
  {
    id: "1368",
    course_code: "POLI 102",
    course_name: "Political Economy",
    course_units: "4",
    course_description:
      "Political economy including economic policy, political-economic systems, and policy analysis.",
    prerequisites: "POLI 10",
  },
  {
    id: "1369",
    course_code: "POLI 103",
    course_name: "Political Research",
    course_units: "4",
    course_description:
      "Political research including research methods, political analysis, and political research projects.",
    prerequisites: "POLI 10",
  },
  {
    id: "1370",
    course_code: "POLI 104",
    course_name: "Political Communication",
    course_units: "4",
    course_description:
      "Political communication including political messaging, campaign communication, and political media.",
    prerequisites: "POLI 10",
  },

  // Additional Sociology Courses
  {
    id: "1371",
    course_code: "SOC 10",
    course_name: "Introduction to Sociology",
    course_units: "4",
    course_description:
      "Introduction to sociology including sociological theory, social structures, and sociological analysis.",
    prerequisites: "None",
  },
  {
    id: "1372",
    course_code: "SOC 20",
    course_name: "Social Theory",
    course_units: "4",
    course_description:
      "Social theory including classical and contemporary sociological theories and theoretical frameworks.",
    prerequisites: "SOC 10",
  },
  {
    id: "1373",
    course_code: "SOC 30",
    course_name: "Social Research Methods",
    course_units: "4",
    course_description:
      "Social research methods including research design, data collection, and sociological research.",
    prerequisites: "SOC 10",
  },
  {
    id: "1374",
    course_code: "SOC 40",
    course_name: "Social Inequality",
    course_units: "4",
    course_description:
      "Social inequality including class, race, gender inequality, and social stratification.",
    prerequisites: "SOC 10",
  },
  {
    id: "1375",
    course_code: "SOC 50",
    course_name: "Social Institutions",
    course_units: "4",
    course_description:
      "Social institutions including family, education, religion, and institutional analysis.",
    prerequisites: "SOC 10",
  },
  {
    id: "1376",
    course_code: "SOC 100",
    course_name: "Advanced Sociology",
    course_units: "4",
    course_description:
      "Advanced sociology including advanced theory, specialized areas, and sociological research.",
    prerequisites: "SOC 10",
  },
  {
    id: "1377",
    course_code: "SOC 101",
    course_name: "Urban Sociology",
    course_units: "4",
    course_description:
      "Urban sociology including urban development, urban communities, and urban social processes.",
    prerequisites: "SOC 10",
  },
  {
    id: "1378",
    course_code: "SOC 102",
    course_name: "Criminology",
    course_units: "4",
    course_description:
      "Criminology including crime theory, criminal behavior, and criminal justice systems.",
    prerequisites: "SOC 10",
  },
  {
    id: "1379",
    course_code: "SOC 103",
    course_name: "Medical Sociology",
    course_units: "4",
    course_description:
      "Medical sociology including health and society, medical institutions, and health behavior.",
    prerequisites: "SOC 10",
  },
  {
    id: "1380",
    course_code: "SOC 104",
    course_name: "Sociology Research",
    course_units: "4",
    course_description:
      "Sociology research including research projects, sociological analysis, and sociological research methods.",
    prerequisites: "SOC 10",
  },

  // Additional Anthropology Courses
  {
    id: "1381",
    course_code: "ANTH 10",
    course_name: "Introduction to Anthropology",
    course_units: "4",
    course_description:
      "Introduction to anthropology including cultural anthropology, physical anthropology, and anthropological methods.",
    prerequisites: "None",
  },
  {
    id: "1382",
    course_code: "ANTH 20",
    course_name: "Cultural Anthropology",
    course_units: "4",
    course_description:
      "Cultural anthropology including cultural diversity, cultural analysis, and ethnographic methods.",
    prerequisites: "ANTH 10",
  },
  {
    id: "1383",
    course_code: "ANTH 30",
    course_name: "Physical Anthropology",
    course_units: "4",
    course_description:
      "Physical anthropology including human evolution, biological anthropology, and human variation.",
    prerequisites: "ANTH 10",
  },
  {
    id: "1384",
    course_code: "ANTH 40",
    course_name: "Archaeology",
    course_units: "4",
    course_description:
      "Archaeology including archaeological methods, cultural heritage, and archaeological analysis.",
    prerequisites: "ANTH 10",
  },
  {
    id: "1385",
    course_code: "ANTH 50",
    course_name: "Linguistic Anthropology",
    course_units: "4",
    course_description:
      "Linguistic anthropology including language and culture, linguistic analysis, and communication systems.",
    prerequisites: "ANTH 10",
  },
  {
    id: "1386",
    course_code: "ANTH 100",
    course_name: "Advanced Anthropology",
    course_units: "4",
    course_description:
      "Advanced anthropology including advanced theory, specialized areas, and anthropological research.",
    prerequisites: "ANTH 10",
  },
  {
    id: "1387",
    course_code: "ANTH 101",
    course_name: "Medical Anthropology",
    course_units: "4",
    course_description:
      "Medical anthropology including health and culture, medical systems, and cross-cultural health.",
    prerequisites: "ANTH 10",
  },
  {
    id: "1388",
    course_code: "ANTH 102",
    course_name: "Economic Anthropology",
    course_units: "4",
    course_description:
      "Economic anthropology including economic systems, cultural economics, and economic behavior.",
    prerequisites: "ANTH 10",
  },
  {
    id: "1389",
    course_code: "ANTH 103",
    course_name: "Political Anthropology",
    course_units: "4",
    course_description:
      "Political anthropology including political systems, power structures, and political organization.",
    prerequisites: "ANTH 10",
  },
  {
    id: "1390",
    course_code: "ANTH 104",
    course_name: "Anthropology Research",
    course_units: "4",
    course_description:
      "Anthropology research including research methods, ethnographic research, and anthropological analysis.",
    prerequisites: "ANTH 10",
  },

  // Additional Philosophy Courses
  {
    id: "1391",
    course_code: "PHIL 10",
    course_name: "Introduction to Philosophy",
    course_units: "4",
    course_description:
      "Introduction to philosophy including philosophical methods, major philosophical questions, and critical thinking.",
    prerequisites: "None",
  },
  {
    id: "1392",
    course_code: "PHIL 20",
    course_name: "Ethics",
    course_units: "4",
    course_description:
      "Ethics including moral theory, ethical reasoning, and applied ethics.",
    prerequisites: "PHIL 10",
  },
  {
    id: "1393",
    course_code: "PHIL 30",
    course_name: "Logic",
    course_units: "4",
    course_description:
      "Logic including formal logic, logical reasoning, and argument analysis.",
    prerequisites: "PHIL 10",
  },
  {
    id: "1394",
    course_code: "PHIL 40",
    course_name: "Metaphysics",
    course_units: "4",
    course_description:
      "Metaphysics including fundamental reality, existence, and metaphysical theories.",
    prerequisites: "PHIL 10",
  },
  {
    id: "1395",
    course_code: "PHIL 50",
    course_name: "Epistemology",
    course_units: "4",
    course_description:
      "Epistemology including knowledge theory, belief, and understanding.",
    prerequisites: "PHIL 10",
  },
  {
    id: "1396",
    course_code: "PHIL 100",
    course_name: "Advanced Philosophy",
    course_units: "4",
    course_description:
      "Advanced philosophy including advanced theory, specialized areas, and philosophical research.",
    prerequisites: "PHIL 10",
  },
  {
    id: "1397",
    course_code: "PHIL 101",
    course_name: "Philosophy of Science",
    course_units: "4",
    course_description:
      "Philosophy of science including scientific method, scientific knowledge, and scientific reasoning.",
    prerequisites: "PHIL 10",
  },
  {
    id: "1398",
    course_code: "PHIL 102",
    course_name: "Philosophy of Mind",
    course_units: "4",
    course_description:
      "Philosophy of mind including consciousness, mental states, and cognitive philosophy.",
    prerequisites: "PHIL 10",
  },
  {
    id: "1399",
    course_code: "PHIL 103",
    course_name: "Political Philosophy",
    course_units: "4",
    course_description:
      "Political philosophy including political theory, justice, and political values.",
    prerequisites: "PHIL 10",
  },
  {
    id: "1400",
    course_code: "PHIL 104",
    course_name: "Philosophy Research",
    course_units: "4",
    course_description:
      "Philosophy research including research methods, philosophical analysis, and philosophical research projects.",
    prerequisites: "PHIL 10",
  },

  // Additional History Courses
  {
    id: "1401",
    course_code: "HIST 10",
    course_name: "Introduction to History",
    course_units: "4",
    course_description:
      "Introduction to history including historical methods, historical analysis, and historical thinking.",
    prerequisites: "None",
  },
  {
    id: "1402",
    course_code: "HIST 20",
    course_name: "World History",
    course_units: "4",
    course_description:
      "World history including global historical developments, cross-cultural interactions, and world civilizations.",
    prerequisites: "HIST 10",
  },
  {
    id: "1403",
    course_code: "HIST 30",
    course_name: "American History",
    course_units: "4",
    course_description:
      "American history including U.S. historical development, American society, and American institutions.",
    prerequisites: "HIST 10",
  },
  {
    id: "1404",
    course_code: "HIST 40",
    course_name: "European History",
    course_units: "4",
    course_description:
      "European history including European historical developments, European society, and European culture.",
    prerequisites: "HIST 10",
  },
  {
    id: "1405",
    course_code: "HIST 50",
    course_name: "Asian History",
    course_units: "4",
    course_description:
      "Asian history including Asian historical developments, Asian societies, and Asian cultures.",
    prerequisites: "HIST 10",
  },
  {
    id: "1406",
    course_code: "HIST 100",
    course_name: "Advanced History",
    course_units: "4",
    course_description:
      "Advanced history including advanced historical analysis, specialized areas, and historical research.",
    prerequisites: "HIST 10",
  },
  {
    id: "1407",
    course_code: "HIST 101",
    course_name: "Military History",
    course_units: "4",
    course_description:
      "Military history including warfare, military strategy, and military developments.",
    prerequisites: "HIST 10",
  },
  {
    id: "1408",
    course_code: "HIST 102",
    course_name: "Social History",
    course_units: "4",
    course_description:
      "Social history including social movements, social change, and social developments.",
    prerequisites: "HIST 10",
  },
  {
    id: "1409",
    course_code: "HIST 103",
    course_name: "Economic History",
    course_units: "4",
    course_description:
      "Economic history including economic developments, economic systems, and economic change.",
    prerequisites: "HIST 10",
  },
  {
    id: "1410",
    course_code: "HIST 104",
    course_name: "History Research",
    course_units: "4",
    course_description:
      "History research including research methods, historical analysis, and historical research projects.",
    prerequisites: "HIST 10",
  },

  // Additional Literature Courses
  {
    id: "1411",
    course_code: "LIT 10",
    course_name: "Introduction to Literature",
    course_units: "4",
    course_description:
      "Introduction to literature including literary analysis, literary forms, and literary interpretation.",
    prerequisites: "None",
  },
  {
    id: "1412",
    course_code: "LIT 20",
    course_name: "World Literature",
    course_units: "4",
    course_description:
      "World literature including global literary traditions, cross-cultural literature, and world literary works.",
    prerequisites: "LIT 10",
  },
  {
    id: "1413",
    course_code: "LIT 30",
    course_name: "American Literature",
    course_units: "4",
    course_description:
      "American literature including American literary traditions, American authors, and American literary works.",
    prerequisites: "LIT 10",
  },
  {
    id: "1414",
    course_code: "LIT 40",
    course_name: "British Literature",
    course_units: "4",
    course_description:
      "British literature including British literary traditions, British authors, and British literary works.",
    prerequisites: "LIT 10",
  },
  {
    id: "1415",
    course_code: "LIT 50",
    course_name: "Poetry",
    course_units: "4",
    course_description:
      "Poetry including poetic forms, poetic analysis, and poetic interpretation.",
    prerequisites: "LIT 10",
  },
  {
    id: "1416",
    course_code: "LIT 100",
    course_name: "Advanced Literature",
    course_units: "4",
    course_description:
      "Advanced literature including advanced literary analysis, specialized areas, and literary research.",
    prerequisites: "LIT 10",
  },
  {
    id: "1417",
    course_code: "LIT 101",
    course_name: "Drama",
    course_units: "4",
    course_description:
      "Drama including dramatic forms, dramatic analysis, and dramatic interpretation.",
    prerequisites: "LIT 10",
  },
  {
    id: "1418",
    course_code: "LIT 102",
    course_name: "Fiction",
    course_units: "4",
    course_description:
      "Fiction including fictional forms, fictional analysis, and fictional interpretation.",
    prerequisites: "LIT 10",
  },
  {
    id: "1419",
    course_code: "LIT 103",
    course_name: "Literary Theory",
    course_units: "4",
    course_description:
      "Literary theory including theoretical frameworks, critical approaches, and literary criticism.",
    prerequisites: "LIT 10",
  },
  {
    id: "1420",
    course_code: "LIT 104",
    course_name: "Literature Research",
    course_units: "4",
    course_description:
      "Literature research including research methods, literary analysis, and literary research projects.",
    prerequisites: "LIT 10",
  },

  // Additional Music Courses
  {
    id: "1421",
    course_code: "MUS 10",
    course_name: "Introduction to Music",
    course_units: "4",
    course_description:
      "Introduction to music including music fundamentals, music appreciation, and musical concepts.",
    prerequisites: "None",
  },
  {
    id: "1422",
    course_code: "MUS 20",
    course_name: "Music Theory",
    course_units: "4",
    course_description:
      "Music theory including musical notation, harmonic analysis, and theoretical concepts.",
    prerequisites: "MUS 10",
  },
  {
    id: "1423",
    course_code: "MUS 30",
    course_name: "Music History",
    course_units: "4",
    course_description:
      "Music history including historical developments, musical periods, and musical traditions.",
    prerequisites: "MUS 10",
  },
  {
    id: "1424",
    course_code: "MUS 40",
    course_name: "Music Performance",
    course_units: "4",
    course_description:
      "Music performance including instrumental performance, vocal performance, and performance techniques.",
    prerequisites: "MUS 10",
  },
  {
    id: "1425",
    course_code: "MUS 50",
    course_name: "Music Composition",
    course_units: "4",
    course_description:
      "Music composition including compositional techniques, creative processes, and musical creation.",
    prerequisites: "MUS 20",
  },
  {
    id: "1426",
    course_code: "MUS 100",
    course_name: "Advanced Music",
    course_units: "4",
    course_description:
      "Advanced music including advanced theory, specialized areas, and musical research.",
    prerequisites: "MUS 10",
  },
  {
    id: "1427",
    course_code: "MUS 101",
    course_name: "Jazz Studies",
    course_units: "4",
    course_description:
      "Jazz studies including jazz theory, jazz history, and jazz performance.",
    prerequisites: "MUS 10",
  },
  {
    id: "1428",
    course_code: "MUS 102",
    course_name: "World Music",
    course_units: "4",
    course_description:
      "World music including global musical traditions, cross-cultural music, and world musical forms.",
    prerequisites: "MUS 10",
  },
  {
    id: "1429",
    course_code: "MUS 103",
    course_name: "Music Technology",
    course_units: "4",
    course_description:
      "Music technology including digital music, recording technology, and music production.",
    prerequisites: "MUS 10",
  },
  {
    id: "1430",
    course_code: "MUS 104",
    course_name: "Music Research",
    course_units: "4",
    course_description:
      "Music research including research methods, musical analysis, and music research projects.",
    prerequisites: "MUS 10",
  },

  // Additional Visual Arts Courses
  {
    id: "1431",
    course_code: "VIS 10",
    course_name: "Introduction to Visual Arts",
    course_units: "4",
    course_description:
      "Introduction to visual arts including art fundamentals, art appreciation, and artistic concepts.",
    prerequisites: "None",
  },
  {
    id: "1432",
    course_code: "VIS 20",
    course_name: "Drawing",
    course_units: "4",
    course_description:
      "Drawing including drawing techniques, observational drawing, and drawing fundamentals.",
    prerequisites: "VIS 10",
  },
  {
    id: "1433",
    course_code: "VIS 30",
    course_name: "Painting",
    course_units: "4",
    course_description:
      "Painting including painting techniques, color theory, and painting fundamentals.",
    prerequisites: "VIS 10",
  },
  {
    id: "1434",
    course_code: "VIS 40",
    course_name: "Sculpture",
    course_units: "4",
    course_description:
      "Sculpture including sculptural techniques, three-dimensional design, and sculptural fundamentals.",
    prerequisites: "VIS 10",
  },
  {
    id: "1435",
    course_code: "VIS 50",
    course_name: "Digital Art",
    course_units: "4",
    course_description:
      "Digital art including digital techniques, computer graphics, and digital art fundamentals.",
    prerequisites: "VIS 10",
  },
  {
    id: "1436",
    course_code: "VIS 100",
    course_name: "Advanced Visual Arts",
    course_units: "4",
    course_description:
      "Advanced visual arts including advanced techniques, specialized areas, and artistic research.",
    prerequisites: "VIS 10",
  },
  {
    id: "1437",
    course_code: "VIS 101",
    course_name: "Art History",
    course_units: "4",
    course_description:
      "Art history including historical developments, artistic periods, and artistic traditions.",
    prerequisites: "VIS 10",
  },
  {
    id: "1438",
    course_code: "VIS 102",
    course_name: "Photography",
    course_units: "4",
    course_description:
      "Photography including photographic techniques, visual storytelling, and photographic fundamentals.",
    prerequisites: "VIS 10",
  },
  {
    id: "1439",
    course_code: "VIS 103",
    course_name: "Printmaking",
    course_units: "4",
    course_description:
      "Printmaking including printmaking techniques, print processes, and printmaking fundamentals.",
    prerequisites: "VIS 10",
  },
  {
    id: "1440",
    course_code: "VIS 104",
    course_name: "Visual Arts Research",
    course_units: "4",
    course_description:
      "Visual arts research including research methods, artistic analysis, and visual arts research projects.",
    prerequisites: "VIS 10",
  },

  // Additional Theater Courses
  {
    id: "1441",
    course_code: "TDGE 10",
    course_name: "Introduction to Theater",
    course_units: "4",
    course_description:
      "Introduction to theater including theater fundamentals, theater appreciation, and theatrical concepts.",
    prerequisites: "None",
  },
  {
    id: "1442",
    course_code: "TDGE 20",
    course_name: "Acting",
    course_units: "4",
    course_description:
      "Acting including acting techniques, performance skills, and acting fundamentals.",
    prerequisites: "TDGE 10",
  },
  {
    id: "1443",
    course_code: "TDGE 30",
    course_name: "Directing",
    course_units: "4",
    course_description:
      "Directing including directing techniques, production management, and directing fundamentals.",
    prerequisites: "TDGE 10",
  },
  {
    id: "1444",
    course_code: "TDGE 40",
    course_name: "Stage Design",
    course_units: "4",
    course_description:
      "Stage design including set design, lighting design, and design fundamentals.",
    prerequisites: "TDGE 10",
  },
  {
    id: "1445",
    course_code: "TDGE 50",
    course_name: "Playwriting",
    course_units: "4",
    course_description:
      "Playwriting including dramatic writing, script development, and playwriting fundamentals.",
    prerequisites: "TDGE 10",
  },
  {
    id: "1446",
    course_code: "TDGE 100",
    course_name: "Advanced Theater",
    course_units: "4",
    course_description:
      "Advanced theater including advanced techniques, specialized areas, and theatrical research.",
    prerequisites: "TDGE 10",
  },
  {
    id: "1447",
    course_code: "TDGE 101",
    course_name: "Theater History",
    course_units: "4",
    course_description:
      "Theater history including historical developments, theatrical periods, and theatrical traditions.",
    prerequisites: "TDGE 10",
  },
  {
    id: "1448",
    course_code: "TDGE 102",
    course_name: "Musical Theater",
    course_units: "4",
    course_description:
      "Musical theater including musical performance, theatrical music, and musical theater fundamentals.",
    prerequisites: "TDGE 10",
  },
  {
    id: "1449",
    course_code: "TDGE 103",
    course_name: "Theater Production",
    course_units: "4",
    course_description:
      "Theater production including production management, technical theater, and production fundamentals.",
    prerequisites: "TDGE 10",
  },
  {
    id: "1450",
    course_code: "TDGE 104",
    course_name: "Theater Research",
    course_units: "4",
    course_description:
      "Theater research including research methods, theatrical analysis, and theater research projects.",
    prerequisites: "TDGE 10",
  },
];
