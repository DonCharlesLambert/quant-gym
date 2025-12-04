from pydantic import BaseModel
from typing import List, Optional, Dict, Literal, Any
from datetime import datetime


class Main(BaseModel):
    problem_id: int
    name: str
    difficulty: str
    like_count: int
    dislike_count: int
    description_body: str
    accept_count: int
    submission_count: int
    acceptance_rate_count: int
    discussion_count: int
    related_topics: List[Any]
    similar_questions: List[Any]
    solution_count: int
    code_default_language: str
    code_body: Dict[str, Any]


class Editorial(BaseModel):
    editorial_body: str


class Problem(BaseModel):
    main: Main
    editorial: Editorial
    test: List[Any]
    function_name: str

class Submission(BaseModel):
    problem_name: str
    status: Literal[
        "Accepted",
        "Runtime Error",
        "Wrong Answer",
        "Time Limit Exceeded"
    ]
    error: Optional[str] = None
    runtime: float
    memory: float
    language: Literal["Python"]
    time: int
    code_body: str
    input: Optional[str] = None
    expected_output: Optional[str] = None
    user_output: Optional[str] = None