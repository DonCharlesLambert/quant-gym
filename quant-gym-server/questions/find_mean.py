from model import Problem, Main, Editorial

problem_example = Problem(
    main=Main(
        problem_id=1,
        name="Calculate Mean of List",
        difficulty="Easy",
        like_count=0,
        dislike_count=0,
        description_body=(
            "Write a function that takes a list of numbers and returns the mean (average)."
            "\n\nExample:\n\n"
            "Input: [1, 2, 3, 4]\n\n"
            "Output: 2.5"
        ),
        accept_count=0,
        submission_count=0,
        acceptance_rate_count=0,
        discussion_count=0,
        related_topics=[],
        similar_questions=[],
        solution_count=0,
        code_default_language="python",
        code_body={
            "python": "def find_mean(nums: list) -> float:"
        },
    ),
    editorial=Editorial(
        editorial_body=(
            "To compute the mean, sum all numbers in the list and divide "
            "by the number of elements."
        )
    ),
    test=[
        {"input": [1, 2, 3, 4], "output": 2.5},
        {"input": [10, 20], "output": 15},
        {"input": [5], "output": 5},
    ],
    function_name="find_mean"
)
