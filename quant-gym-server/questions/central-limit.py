from model import Problem, Main, Editorial

problem_bid_ask_spread = Problem(
    main=Main(
        problem_id=201,
        name="average-bid-ask-spread",
        difficulty="Medium",
        like_count=0,
        dislike_count=0,
        description_body="""
Write a Python function that takes a **list of bid prices** and a **list of ask prices** 
of equal length, and returns the **average bid-ask spread**. 
The spread at each level is calculated as `ask - bid`. 

Example:

    bids = [100, 101, 102]
    asks = [105, 104, 106]
    average_spread(bids, asks)  # Output: 3.0

Here, the spreads are [5, 3, 4], so the average is 3.0.
        """,
        accept_count=0,
        submission_count=0,
        acceptance_rate_count=0,
        discussion_count=0,
        related_topics=["market-microstructure", "bid-ask", "spread", "finance"],
        similar_questions=[],
        solution_count=0,
        code_default_language="python",
        code_body={"python": "def average_spread(bids: List[float], asks: List[float]) -> float:"}
    ),
    editorial=Editorial(
        editorial_body="""
To calculate the average bid-ask spread:

1. Subtract each bid price from the corresponding ask price.
2. Sum the differences.
3. Divide by the number of levels.

Python implementation:

    def average_spread(bids: List[float], asks: List[float]) -> float:
        spreads = [ask - bid for bid, ask in zip(bids, asks)]
        return sum(spreads) / len(spreads)
"""
    ),
    test=[
        {"input": ([100, 101, 102], [103, 104, 105]), "output": 3.0},
        {"input": ([50, 52, 54], [51, 55, 56]), "output": 2.0},
        {"input": ([200], [205]), "output": 5.0},
        {"input": ([100, 100, 100], [101, 101, 101]), "output": 1.0},
        {"input": ([10, 20, 30], [15, 25, 35]), "output": 5.0},
        {"input": ([1000, 1010, 1020], [1005, 1015, 1025]), "output": 5.0},
        {"input": ([99.5, 100.0, 101.0], [100.5, 101.0, 102.0]), "output": 1.0},
        {"input": ([0, 1, 2], [1, 2, 3]), "output": 1.0},
        {"input": ([50, 50, 50, 50], [52, 52, 52, 52]), "output": 2.0},
        {"input": ([10.5, 20.5], [11.5, 21.5]), "output": 1.0},
    ],
    function_name="average_spread"
)