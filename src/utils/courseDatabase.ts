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
];
