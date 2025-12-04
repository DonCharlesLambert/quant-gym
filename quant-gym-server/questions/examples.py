from model import Problem, Main, Editorial

# 1. Calculate mean of list
question1 = Problem(
    main=Main(
        problem_id=1,
        name="calculate-mean-of-list",
        difficulty="Easy",
        like_count=0,
        dislike_count=0,
        description_body="Write a function that takes a list of numbers and returns the mean (average).",
        accept_count=0,
        submission_count=0,
        acceptance_rate_count=0,
        discussion_count=0,
        related_topics=["math", "list", "average"],
        similar_questions=[],
        solution_count=0,
        code_default_language="python",
        code_body={"python": "def find_mean(nums: list) -> float:"}
    ),
    editorial=Editorial(
        editorial_body="Sum all numbers in the list and divide by the number of elements."
    ),
    test=[
        {"input": [1, 2, 3, 4], "output": 2.5},
        {"input": [10, 20], "output": 15},
        {"input": [5], "output": 5},
    ],
    function_name="find_mean"
)

# 2. Calculate factorial
question2 = Problem(
    main=Main(
        problem_id=2,
        name="factorial-of-number",
        difficulty="Easy",
        like_count=0,
        dislike_count=0,
        description_body="Write a function that returns the factorial of a non-negative integer n.",
        accept_count=0,
        submission_count=0,
        acceptance_rate_count=0,
        discussion_count=0,
        related_topics=["math", "recursion"],
        similar_questions=[],
        solution_count=0,
        code_default_language="python",
        code_body={"python": "def factorial(n: int) -> int:"}
    ),
    editorial=Editorial(
        editorial_body="Factorial of n is the product of all integers from 1 to n. Use a loop or recursion."
    ),
    test=[
        {"input": 5, "output": 120},
        {"input": 0, "output": 1},
        {"input": 3, "output": 6},
    ],
    function_name="factorial"
)

# 3. Check palindrome
question3 = Problem(
    main=Main(
        problem_id=3,
        name="is-palindrome",
        difficulty="Easy",
        like_count=0,
        dislike_count=0,
        description_body="Write a function that checks if a string is a palindrome.",
        accept_count=0,
        submission_count=0,
        acceptance_rate_count=0,
        discussion_count=0,
        related_topics=["strings", "palindrome"],
        similar_questions=[],
        solution_count=0,
        code_default_language="python",
        code_body={"python": "def is_palindrome(s: str) -> bool:"}
    ),
    editorial=Editorial(
        editorial_body="Compare the string with its reverse. If they match, it's a palindrome."
    ),
    test=[
        {"input": "racecar", "output": True},
        {"input": "hello", "output": False},
        {"input": "madam", "output": True},
    ],
    function_name="is_palindrome"
)

# 4. Find maximum in list
question4 = Problem(
    main=Main(
        problem_id=4,
        name="max-of-list",
        difficulty="Easy",
        like_count=0,
        dislike_count=0,
        description_body="Write a function that returns the maximum value in a list of numbers.",
        accept_count=0,
        submission_count=0,
        acceptance_rate_count=0,
        discussion_count=0,
        related_topics=["list", "math", "max"],
        similar_questions=[],
        solution_count=0,
        code_default_language="python",
        code_body={"python": "def find_max(nums: list) -> float:"}
    ),
    editorial=Editorial(
        editorial_body="Iterate through the list and keep track of the largest value seen."
    ),
    test=[
        {"input": [1, 5, 3, 9], "output": 9},
        {"input": [-10, -5, -2], "output": -2},
        {"input": [7], "output": 7},
    ],
    function_name="find_max"
)

# 5. Sum of digits
question5 = Problem(
    main=Main(
        problem_id=5,
        name="sum-of-digits",
        difficulty="Easy",
        like_count=0,
        dislike_count=0,
        description_body="Write a function that returns the sum of digits of a non-negative integer.",
        accept_count=0,
        submission_count=0,
        acceptance_rate_count=0,
        discussion_count=0,
        related_topics=["math", "digits"],
        similar_questions=[],
        solution_count=0,
        code_default_language="python",
        code_body={"python": "def sum_digits(n: int) -> int:"}
    ),
    editorial=Editorial(
        editorial_body="Convert the number to string or repeatedly take modulo 10 to sum digits."
    ),
    test=[
        {"input": 123, "output": 6},
        {"input": 0, "output": 0},
        {"input": 4567, "output": 22},
    ],
    function_name="sum_digits"
)
