from pydantic import BaseModel
from typing import List, Dict, Any


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
