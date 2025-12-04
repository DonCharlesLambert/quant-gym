from model import Problem, Main, Editorial

import numpy as np  # just for type hints in code_body

# ------------------------------
# Easy
# ------------------------------

# 1. Array Sum
question_la1 = Problem(
    main=Main(
        problem_id=101,
        name="array-sum",
        difficulty="Easy",
        like_count=0,
        dislike_count=0,
        description_body="""
Write a Python function that takes a **1-dimensional NumPy array** of numbers and returns the **sum of all its elements**.

        arr1 = np.array([1, 2, 3, 4])
        array_sum(arr1)  # Output: 10

Here, the result is 10 which is 1 + 2 + 3 + 4.
        """,
        accept_count=0,
        submission_count=0,
        acceptance_rate_count=0,
        discussion_count=0,
        related_topics=["numpy", "arrays", "sum"],
        similar_questions=[],
        solution_count=0,
        code_default_language="python",
        code_body={"python": "def array_sum(arr: np.ndarray) -> float:"}
    ),
    editorial=Editorial(
        editorial_body="""
Use numpy.sum(arr) to compute the sum of all elements.

    def array_sum(arr: np.ndarray) -> float:
        return arr.sum()
"""
    ),
    test=[
        {"input": np.array([1, 2, 3]), "output": 6},
        {"input": np.array([0, 0, 0]), "output": 0},
        {"input": np.array([-1, 5, 2]), "output": 6},
        {"input": np.array([10, 20, 30, 40]), "output": 100},
        {"input": np.array([-5, -10, -15]), "output": -30},
        {"input": np.array([1]), "output": 1},
        {"input": np.array([0]), "output": 0},
        {"input": np.array([100, -50, 25]), "output": 75},
        {"input": np.array([0.5, 1.5, 2.0]), "output": 4.0},
        {"input": np.array([-1, 0, 1]), "output": 0},
        {"input": np.array([7, 14, 21, 28, 35]), "output": 105},
        {"input": np.array([-2, 4, -6, 8]), "output": 4},
        {"input": np.array([999, 1, -500, -500]), "output": 0},
        {"input": np.array([1, 1, 1, 1, 1, 1, 1]), "output": 7},
        {"input": np.array([-3, -2, -1, 0, 1, 2, 3]), "output": 0},
        {"input": np.array([0.1, 0.2, 0.3, 0.4]), "output": 1.0},
        {"input": np.array([-0.5, 0.5, -1.5, 1.5]), "output": 0.0},
        {"input": np.array([50, 25, 25]), "output": 100},
        {"input": np.array([123, 456, 789]), "output": 1368},
        {"input": np.array([-100, 200, -50, 25]), "output": 75},
    ],
    function_name="array_sum"
)

"""
# 2. Element-wise Multiplication
question_la2 = Problem(
    main=Main(
        problem_id=102,
        name="element-wise-mul",
        difficulty="Easy",
        like_count=0,
        dislike_count=0,
        description_body="Given two arrays of the same shape, return a new array containing their element-wise product.",
        accept_count=0,
        submission_count=0,
        acceptance_rate_count=0,
        discussion_count=0,
        related_topics=["numpy", "arrays", "multiplication"],
        similar_questions=[],
        solution_count=0,
        code_default_language="python",
        code_body={"python": "def elementwise_mul(a: np.ndarray, b: np.ndarray) -> np.ndarray:"}
    ),
    editorial=Editorial(
        editorial_body="Use the * operator or numpy.multiply(a, b) for element-wise multiplication."
    ),
    test=[
        {"input": (np.array([1,2]), np.array([3,4])), "output": np.array([3,8])},
        {"input": (np.array([0,1]), np.array([2,3])), "output": np.array([0,3])},
    ],
    function_name="elementwise_mul"
)

# 3. Transpose a Matrix
question_la3 = Problem(
    main=Main(
        problem_id=103,
        name="transpose-matrix",
        difficulty="Easy",
        like_count=0,
        dislike_count=0,
        description_body="Write a function that takes a 2D NumPy array and returns its transpose.",
        accept_count=0,
        submission_count=0,
        acceptance_rate_count=0,
        discussion_count=0,
        related_topics=["numpy", "matrix", "transpose"],
        similar_questions=[],
        solution_count=0,
        code_default_language="python",
        code_body={"python": "def transpose_matrix(mat: np.ndarray) -> np.ndarray:"}
    ),
    editorial=Editorial(
        editorial_body="Use mat.T or numpy.transpose(mat) to get the transpose."
    ),
    test=[
        {"input": np.array([[1,2],[3,4]]), "output": np.array([[1,3],[2,4]])},
    ],
    function_name="transpose_matrix"
)

# ------------------------------
# Medium
# ------------------------------

# 4. Matrix-Vector Multiplication
question_la4 = Problem(
    main=Main(
        problem_id=104,
        name="matrix-vector-mul",
        difficulty="Medium",
        like_count=0,
        dislike_count=0,
        description_body="Given a 2D NumPy array A and 1D array v, compute the product A @ v.",
        accept_count=0,
        submission_count=0,
        acceptance_rate_count=0,
        discussion_count=0,
        related_topics=["numpy", "matrix", "vector"],
        similar_questions=[],
        solution_count=0,
        code_default_language="python",
        code_body={"python": "def matrix_vector_mul(A: np.ndarray, v: np.ndarray) -> np.ndarray:"}
    ),
    editorial=Editorial(
        editorial_body="Use the @ operator or numpy.dot(A, v) for matrix-vector multiplication."
    ),
    test=[
        {"input": (np.array([[1,2],[3,4]]), np.array([1,1])), "output": np.array([3,7])},
    ],
    function_name="matrix_vector_mul"
)

# 5. Row-wise Mean
question_la5 = Problem(
    main=Main(
        problem_id=105,
        name="row-wise-mean",
        difficulty="Medium",
        like_count=0,
        dislike_count=0,
        description_body="Implement a function that computes the mean of each row in a 2D NumPy array.",
        accept_count=0,
        submission_count=0,
        acceptance_rate_count=0,
        discussion_count=0,
        related_topics=["numpy", "matrix", "mean"],
        similar_questions=[],
        solution_count=0,
        code_default_language="python",
        code_body={"python": "def row_mean(mat: np.ndarray) -> np.ndarray:"}
    ),
    editorial=Editorial(
        editorial_body="Use numpy.mean(mat, axis=1) to compute the mean across rows."
    ),
    test=[
        {"input": np.array([[1,2],[3,4]]), "output": np.array([1.5,3.5])},
    ],
    function_name="row_mean"
)

# 6. Diagonal Extraction
question_la6 = Problem(
    main=Main(
        problem_id=106,
        name="diagonal-extraction",
        difficulty="Medium",
        like_count=0,
        dislike_count=0,
        description_body="Write a function that returns the main diagonal elements of a square NumPy matrix.",
        accept_count=0,
        submission_count=0,
        acceptance_rate_count=0,
        discussion_count=0,
        related_topics=["numpy", "matrix", "diagonal"],
        similar_questions=[],
        solution_count=0,
        code_default_language="python",
        code_body={"python": "def extract_diagonal(mat: np.ndarray) -> np.ndarray:"}
    ),
    editorial=Editorial(
        editorial_body="Use numpy.diagonal(mat) to get the main diagonal."
    ),
    test=[
        {"input": np.array([[1,2],[3,4]]), "output": np.array([1,4])},
    ],
    function_name="extract_diagonal"
)

# ------------------------------
# Hard
# ------------------------------

# 7. Matrix Determinant
question_la7 = Problem(
    main=Main(
        problem_id=107,
        name="matrix-determinant",
        difficulty="Hard",
        like_count=0,
        dislike_count=0,
        description_body="Compute the determinant of a square NumPy array without using any explicit loops.",
        accept_count=0,
        submission_count=0,
        acceptance_rate_count=0,
        discussion_count=0,
        related_topics=["numpy", "matrix", "determinant"],
        similar_questions=[],
        solution_count=0,
        code_default_language="python",
        code_body={"python": "def matrix_determinant(mat: np.ndarray) -> float:"}
    ),
    editorial=Editorial(
        editorial_body="Use numpy.linalg.det(mat) to compute the determinant."
    ),
    test=[
        {"input": np.array([[1,2],[3,4]]), "output": -2.0},
    ],
    function_name="matrix_determinant"
)

# 8. Solve Linear System
question_la8 = Problem(
    main=Main(
        problem_id=108,
        name="solve-linear-system",
        difficulty="Hard",
        like_count=0,
        dislike_count=0,
        description_body="Given a square matrix A and vector b, solve for x in Ax = b using NumPy.",
        accept_count=0,
        submission_count=0,
        acceptance_rate_count=0,
        discussion_count=0,
        related_topics=["numpy", "linear algebra", "solve"],
        similar_questions=[],
        solution_count=0,
        code_default_language="python",
        code_body={"python": "def solve_linear_system(A: np.ndarray, b: np.ndarray) -> np.ndarray:"}
    ),
    editorial=Editorial(
        editorial_body="Use numpy.linalg.solve(A, b) to find the solution vector."
    ),
    test=[
        {"input": (np.array([[3,1],[1,2]]), np.array([9,8])), "output": np.array([2,3])},
    ],
    function_name="solve_linear_system"
)

# 9. Eigenvalues and Eigenvectors
question_la9 = Problem(
    main=Main(
        problem_id=109,
        name="eigenvalues-eigenvectors",
        difficulty="Hard",
        like_count=0,
        dislike_count=0,
        description_body="Write a function that computes all eigenvalues and eigenvectors of a given square matrix.",
        accept_count=0,
        submission_count=0,
        acceptance_rate_count=0,
        discussion_count=0,
        related_topics=["numpy", "linear algebra", "eigen"],
        similar_questions=[],
        solution_count=0,
        code_default_language="python",
        code_body={"python": "def eigen_decomposition(mat: np.ndarray) -> tuple:"}
    ),
    editorial=Editorial(
        editorial_body="Use numpy.linalg.eig(mat) to obtain eigenvalues and eigenvectors."
    ),
    test=[
        {"input": np.array([[1,0],[0,2]]), "output": (np.array([1,2]), np.array([[1,0],[0,1]]))},
    ],
    function_name="eigen_decomposition"
)

# 10. PCA Implementation
question_la10 = Problem(
    main=Main(
        problem_id=110,
        name="pca-implementation",
        difficulty="Extreme",
        like_count=0,
        dislike_count=0,
        description_body="Given a 2D NumPy array representing data samples, perform principal component analysis (PCA) to reduce the data to k dimensions.",
        accept_count=0,
        submission_count=0,
        acceptance_rate_count=0,
        discussion_count=0,
        related_topics=["numpy", "linear algebra", "PCA", "dimensionality reduction"],
        similar_questions=[],
        solution_count=0,
        code_default_language="python",
        code_body={"python": "def pca(X: np.ndarray, k: int) -> np.ndarray:"}
    ),
    editorial=Editorial(
        editorial_body="Center the data, compute the covariance matrix, extract eigenvectors corresponding to top k eigenvalues, and transform the data."
    ),
    test=[
        {"input": (np.array([[1,2],[3,4],[5,6]]), 1), "output": np.array([[]])},
    ],
    function_name="pca"
)
"""