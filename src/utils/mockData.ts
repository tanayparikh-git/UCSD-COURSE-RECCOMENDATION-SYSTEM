export interface MockCourse {
  id: number;
  code: string;
  name: string;
  units: number;
  description: string;
  prerequisites: string;
}

export const mockCourses: MockCourse[] = [
  {
    id: 1,
    code: "CSE 8A",
    name: "Introduction to Computer Science: Java (I)",
    units: 4,
    description:
      "Introduction to computer programming in Java. Covers fundamental programming concepts including variables, control structures, methods, and arrays.",
    prerequisites: "None",
  },
  {
    id: 2,
    code: "CSE 8B",
    name: "Introduction to Computer Science: Java (II)",
    units: 4,
    description:
      "Continuation of CSE 8A. Covers object-oriented programming, inheritance, polymorphism, and basic data structures.",
    prerequisites: "CSE 8A",
  },
  {
    id: 3,
    code: "MATH 20A",
    name: "Calculus for Science and Engineering",
    units: 4,
    description:
      "Differential calculus of functions of one variable. Applications to science and engineering.",
    prerequisites: "MATH 4C or MATH 10A or MATH 20A",
  },
  {
    id: 4,
    code: "MATH 20B",
    name: "Calculus for Science and Engineering",
    units: 4,
    description:
      "Integral calculus of functions of one variable. Applications to science and engineering.",
    prerequisites: "MATH 20A",
  },
  {
    id: 5,
    code: "CHEM 6A",
    name: "General Chemistry I",
    units: 4,
    description:
      "Fundamental principles of chemistry including atomic structure, bonding, and chemical reactions.",
    prerequisites: "MATH 3C or MATH 4C or MATH 10A",
  },
  {
    id: 6,
    code: "PHYS 2A",
    name: "Physics-Mechanics",
    units: 4,
    description:
      "Classical mechanics including kinematics, dynamics, energy, momentum, and rotational motion.",
    prerequisites: "MATH 20A",
  },
  {
    id: 7,
    code: "BILD 1",
    name: "The Cell",
    units: 4,
    description:
      "Introduction to cell biology including cell structure, function, and molecular biology.",
    prerequisites: "None",
  },
  {
    id: 8,
    code: "BILD 2",
    name: "Multicellular Life",
    units: 4,
    description:
      "Introduction to organismal biology including genetics, evolution, and ecology.",
    prerequisites: "BILD 1",
  },
];
