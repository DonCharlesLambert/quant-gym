export function getQuizData(subject) {
  const quizDatabase = {
    'stochastic-calculus': {
      title: 'Stochastic Calculus 101',
      questions: [
        {
          id: 1,
          question: "If W(t) is a standard Wiener process, what is the expected value of E[W(t)²] at time t?",
          options: ["Zero", "t", "t²", "√(t)"],
          correctAnswer: 1,
          explanation: "By definition of the Wiener process, the variance Var(W(t)) = E[W(t)²] - (E[W(t)])². Since E[W(t)] = 0, it follows that E[W(t)²] = Var(W(t)) = t.",
          tip: "Remember: W(t) ~ N(0, t)",
          difficulty: "Advanced",
          xp: 50
        },
        {
          id: 2,
          question: "What is the key property that distinguishes a Wiener process from other stochastic processes?",
          options: ["Independent increments", "Stationary increments", "Continuous paths", "All of the above"],
          correctAnswer: 3,
          explanation: "A Wiener process has independent increments, stationary increments, and continuous paths with probability 1.",
          tip: "Wiener processes are the building blocks of stochastic calculus",
          difficulty: "Intermediate",
          xp: 40
        },
        {
          id: 4,
          question: "What is Itô's lemma used for?",
          options: ["Computing integrals", "Finding derivatives of stochastic processes", "Solving differential equations", "Matrix operations"],
          correctAnswer: 1,
          explanation: "Itô's lemma is the chain rule for stochastic calculus, allowing us to find derivatives of functions of stochastic processes.",
          tip: "Itô's lemma is essential for pricing derivatives",
          difficulty: "Advanced",
          xp: 55
        },
        {
          id: 5,
          question: "If dX = μdt + σdW, what type of process is X?",
          options: ["Wiener process", "Itô process", "Poisson process", "Deterministic process"],
          correctAnswer: 1,
          explanation: "An Itô process is defined by the stochastic differential equation dX = μdt + σdW.",
          tip: "Most financial models use Itô processes",
          difficulty: "Intermediate",
          xp: 45
        }
      ]
    },
    'linear-algebra': {
      title: 'Linear Algebra Fundamentals',
      questions: [
        {
          id: 1,
          question: "What is the rank of a matrix equal to?",
          options: ["Number of non-zero rows", "Dimension of column space", "Dimension of row space", "All of the above"],
          correctAnswer: 3,
          explanation: "The rank of a matrix is the dimension of its column space, which equals the dimension of its row space.",
          tip: "Rank is a fundamental concept in linear algebra",
          difficulty: "Intermediate",
          xp: 35
        },
        {
          id: 3,
          question: "What is the determinant of a matrix equal to?",
          options: ["Sum of diagonal elements", "Product of eigenvalues", "Volume scaling factor", "All of the above"],
          correctAnswer: 3,
          explanation: "The determinant has multiple interpretations: it's the product of eigenvalues, the volume scaling factor for linear transformations, and equals the sum of diagonal elements only for diagonal matrices.",
          tip: "Det(A) = 0 means A is singular (not invertible)",
          difficulty: "Intermediate",
          xp: 40
        },
        {
          id: 4,
          question: "What is the null space of a matrix A?",
          options: ["Set of vectors x where Ax = 0", "Set of vectors x where Ax = b", "Column space of A", "Row space of A"],
          correctAnswer: 0,
          explanation: "The null space (kernel) of A consists of all vectors x such that Ax = 0.",
          tip: "The dimension of the null space plus rank equals the number of columns",
          difficulty: "Intermediate",
          xp: 35
        }
      ]
    },
    'python-mastery': {
      title: 'Python Mastery',
      questions: [
        {
          id: 1,
          question: "What is the output of: print([x for x in range(5) if x % 2 == 0])",
          options: ["[0, 2, 4]", "[1, 3]", "[0, 1, 2, 3, 4]", "Error"],
          correctAnswer: 0,
          explanation: "List comprehensions create lists by filtering and transforming elements from an iterable.",
          tip: "List comprehensions are Python's way of creating lists concisely",
          difficulty: "Beginner",
          xp: 25
        },
        {
          id: 3,
          question: "What is the difference between a list and a tuple in Python?",
          options: ["Lists are mutable, tuples are immutable", "Lists use [], tuples use ()", "Lists are faster", "All of the above"],
          correctAnswer: 3,
          explanation: "Lists are mutable and use square brackets, while tuples are immutable and use parentheses. Tuples are generally faster for read operations.",
          tip: "Use tuples for data that shouldn't change",
          difficulty: "Beginner",
          xp: 30
        },
        {
          id: 4,
          question: "What does the *args parameter do in a Python function?",
          options: ["Passes arguments as a list", "Allows variable number of arguments", "Unpacks iterables", "Both B and C"],
          correctAnswer: 3,
          explanation: "*args allows functions to accept a variable number of positional arguments, and can also unpack iterables when calling functions.",
          tip: "*args is a tuple, **kwargs is a dictionary",
          difficulty: "Intermediate",
          xp: 40
        }
      ]
    },
    'data-structures': {
      title: 'Data Structures & Algorithms',
      questions: [
        {
          id: 1,
          question: "What is the time complexity of inserting an element into a balanced binary search tree?",
          options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
          correctAnswer: 1,
          explanation: "Balanced BSTs maintain logarithmic height, making insertions O(log n).",
          tip: "AVL trees and red-black trees are examples of balanced BSTs",
          difficulty: "Intermediate",
          xp: 40
        },
        {
          id: 3,
          question: "What is the time complexity of searching in a hash table (average case)?",
          options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
          correctAnswer: 0,
          explanation: "Hash tables provide average O(1) time complexity for search operations due to direct indexing via hash functions.",
          tip: "Hash collisions can degrade performance to O(n) in worst case",
          difficulty: "Intermediate",
          xp: 35
        },
        {
          id: 4,
          question: "Which sorting algorithm has the best worst-case time complexity?",
          options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"],
          correctAnswer: 1,
          explanation: "Merge Sort has O(n log n) worst-case time complexity, while Quick Sort can degrade to O(n²) in worst case.",
          tip: "Merge Sort is stable and predictable",
          difficulty: "Intermediate",
          xp: 40
        }
      ]
    }
  };

  return quizDatabase[subject] || {
    title: 'General Quiz',
    questions: []
  };
}

export function getQuizSubjects() {
  return Object.keys({
    'stochastic-calculus': 'Stochastic Calculus 101',
    'linear-algebra': 'Linear Algebra Fundamentals',
    'python-mastery': 'Python Mastery',
    'data-structures': 'Data Structures & Algorithms'
  });
}