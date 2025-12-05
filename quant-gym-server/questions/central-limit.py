from model import Problem, Main, Editorial

problem_bid_ask_spread = Problem(
    main=Main(
        problem_id=201,
        name="average-bid-ask-spread-I",
        difficulty="Easy",
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
        code_body={"python": "def average_spread(bids: list[float], asks: list[float]) -> float:"}
    ),
    editorial=Editorial(
        editorial_body="""
To calculate the average bid-ask spread:

1. Subtract each bid price from the corresponding ask price.
2. Sum the differences.
3. Divide by the number of levels.

Python implementation:

    def average_spread(bids: list[float], asks: list[float]) -> float:
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

problem_bid_ask_spread_ii = Problem(
    main=Main(
        problem_id=202,
        name="average-bid-ask-spread-II",
        difficulty="Easy",
        like_count=0,
        dislike_count=0,
        description_body="""
Write a Python function that takes:

1. A list of bid tuples `(price, size)` (`bids`)
2. A list of ask tuples `(price, size)` (`asks`)

All lists have the same length, representing price levels in the order book.  

Compute the **volume-weighted average bid-ask spread**, where each spread at a level is weighted by the **average of bid and ask size at that level**.

Example:

    bids = [(100, 10), (101, 5), (102, 15)]
    asks = [(103, 5), (104, 10), (105, 5)]

    average_bid_ask_spread_ii(bids, asks)  # Output: 3.0

Explanation: spreads = [3, 3, 3], weights = [(10+5)/2, (5+10)/2, (15+5)/2] = [7.5, 7.5, 10],  
weighted average = (3*7.5 + 3*7.5 + 3*10) / (7.5+7.5+10) = 3.0
        """,
        accept_count=0,
        submission_count=0,
        acceptance_rate_count=0,
        discussion_count=0,
        related_topics=["market-microstructure", "bid-ask", "spread", "volume-weighted", "finance"],
        similar_questions=["average-bid-ask-spread"],
        solution_count=0,
        code_default_language="python",
        code_body={"python": "def average_bid_ask_spread_ii(bids: list[tuple[float, float]], asks: list[tuple[float, float]]) -> float:"}
    ),
    editorial=Editorial(
        editorial_body="""
To compute the volume-weighted average bid-ask spread:

1. Compute the spread at each level: spread = ask_price - bid_price.
2. Compute the weight at each level: weight = (bid_size + ask_size) / 2.
3. Multiply each spread by its weight, sum them up.
4. Divide by the total weight.

Python implementation:

    def average_bid_ask_spread_ii(bids, asks):
        spreads = [a[0] - b[0] for a, b in zip(asks, bids)]
        weights = [(b[1] + a[1])/2 for b, a in zip(bids, asks)]
        return sum(s * w for s, w in zip(spreads, weights)) / sum(weights)
"""
    ),
    test=[
        {"input": ([(100, 10), (101, 5), (102, 15)], [(103, 5), (104, 10), (105, 5)]), "output": 3.0},
        {"input": ([(50, 5), (52, 10), (54, 15)], [(51, 5), (55, 5), (56, 10)]), "output": 2.1},
        {"input": ([(200, 10)], [(205, 20)]), "output": 5.0},
        {"input": ([(100, 1), (100, 1), (100, 1)], [(101, 2), (101, 2), (101, 2)]), "output": 1.0},
        {"input": ([(10, 5), (20, 10), (30, 15)], [(15, 10), (25, 5), (35, 5)]), "output": 5.0},
        {"input": ([(1000, 10), (1010, 20), (1020, 30)], [(1005, 15), (1015, 15), (1025, 15)]), "output": 5.0},
        {"input": ([(99.5, 5), (100.0, 5), (101.0, 5)], [(100.5, 5), (101.0, 5), (102.0, 5)]), "output": 1.0},
        {"input": ([(0, 1), (1, 2), (2, 1)], [(1, 1), (2, 2), (3, 1)]), "output": 1.0},
        {"input": ([(50, 2), (50, 2), (50, 2), (50, 2)], [(52, 2), (52, 2), (52, 2), (52, 2)]), "output": 2.0},
        {"input": ([(10.5, 1), (20.5, 3)], [(11.5, 2), (21.5, 2)]), "output": 1.0},
    ],
    function_name="average_bid_ask_spread_ii"
)

order_book_effective_spread = Problem(
    main=Main(
        problem_id=205,
        name="order-book-effective-spread",
        difficulty="Medium",
        like_count=0,
        dislike_count=0,
        description_body="""
Write a Python function that simulates a **market order execution** on an order book 
and computes the **average effective spread** of the execution.

The function takes:

1. `bids`: list of tuples `(price, size)` in descending order of price
2. `asks`: list of tuples `(price, size)` in ascending order of price
3. `market_order_size`: the size of the market order
4. `side`: "buy" or "sell" (indicating which side the market order hits)

The function should:  

- Execute the market order sequentially against the order book levels.  
- Compute the **volume-weighted average execution price**.  
- Compute the **effective spread** as:

        Effective Spread = 2 × |average execution price - mid-price|

where mid-price = (best bid + best ask) / 2 at the time of order submission.

Return the effective spread as a float.

Example:

    bids = [(100, 10), (99, 20), (98, 30)]
    asks = [(101, 5), (102, 10), (103, 10)]
    market_order_size = 12
    side = "buy"

    order_book_effective_spread(bids, asks, market_order_size, side)
    # Output: 2.1667  (approx)
        """,
        accept_count=0,
        submission_count=0,
        acceptance_rate_count=0,
        discussion_count=0,
        related_topics=["market-microstructure", "order-book", "market-order", "execution", "effective-spread"],
        similar_questions=["average-bid-ask-spread-ii"],
        solution_count=0,
        code_default_language="python",
        code_body={"python": "def order_book_effective_spread(bids: list[tuple[float, float]], asks: list[tuple[float, float]], market_order_size: float, side: str) -> float:"}
    ),
    editorial=Editorial(
        editorial_body="""
Algorithm:

1. Compute mid-price: mid = (best bid price + best ask price) / 2
2. Initialize remaining_order = market_order_size
3. Traverse the order book on the side being hit:
    - If side == "buy", traverse asks from lowest to highest
    - If side == "sell", traverse bids from highest to lowest
    - At each level, execute min(remaining_order, available_size)
    - Accumulate total cost = sum(executed_size × price)
    - Reduce remaining_order by executed_size
    - Stop when remaining_order == 0
4. Compute volume-weighted average execution price = total_cost / market_order_size
5. Compute effective spread = 2 × |average execution price - mid-price|
6. Return effective spread

Python Implementation:

    def order_book_effective_spread(bids, asks, market_order_size, side):
        mid_price = (bids[0][0] + asks[0][0]) / 2
        remaining = market_order_size
        total_cost = 0.0

        if side == "buy":
            for price, size in asks:
                trade_size = min(remaining, size)
                total_cost += trade_size * price
                remaining -= trade_size
                if remaining <= 0:
                    break
        elif side == "sell":
            for price, size in bids:
                trade_size = min(remaining, size)
                total_cost += trade_size * price
                remaining -= trade_size
                if remaining <= 0:
                    break
        else:
            raise ValueError("side must be 'buy' or 'sell'")

        average_price = total_cost / market_order_size
        effective_spread = 2 * abs(average_price - mid_price)
        return effective_spread
"""
    ),
    test=[


    {'input': ([(77, 15), (74, 1), (72, 8), (71, 7)],
                [(82, 15), (84, 19)],
                14,
                'sell'),
    'output': 5.0},

    {'input': ([(85, 4), (84, 5), (83, 7), (80, 3)],
                [(86, 14), (87, 18), (89, 15), (92, 18), (93, 6)],
                4,
                'buy'),
    'output': 1.0},

    {'input': ([(61, 9), (60, 11)],
                [(64, 9)],
                6,
                'buy'),
    'output': 3.0},

    {'input': ([(68, 4), (65, 20)],
                [(73, 9), (74, 4), (77, 20), (79, 12)],
                12,
                'buy'),
    'output': 5.5},


    {'input': ([(88, 2)],
                [(92, 5), (95, 1), (98, 7), (101, 7), (104, 20)],
                1,
                'sell'),
    'output': 4.0},
    ],
    function_name="order_book_effective_spread"
)