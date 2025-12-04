from model import Submission
import traceback
import multiprocessing
from datetime import datetime
from qbank import BANK
from safety import attribute_guard, builtins, import_remover

def mark(code, name):
    question = BANK[name]
    results = run_tests(code, question.test, question.function_name)
    return Submission(**{
        "problem_name": name,
        "status": results["status"],
        "error": results.get("error"),
        "runtime": 0.0,
        "memory": 0.0,
        "language": "Python",
        "time": int(datetime.now().timestamp()),
        "code_body": code,
        "input": str(results.get("input", "")),
        "expected_output": str(results.get("expected_output", "")),
        "user_output": str(results.get("user_output", ""))
    })


def worker(q, user_code, test_cases, function_name):
    result = _run_tests(user_code, test_cases, function_name)
    q.put(result)

def run_tests(user_code, test_cases, function_name, timeout=5):
    q = multiprocessing.Queue()
    p = multiprocessing.Process(target=worker, args=(q, user_code, test_cases, function_name))
    p.start()
    p.join(timeout)
    if p.is_alive():
        p.kill()
        return {"status": "Time Limit Exceeded"}
    return q.get()


def execute_user_code(user_code: str, function_name: str):
    """
    Executes the user’s submitted Python code and returns the function.
    """
    valid, error = import_remover.check_no_imports(user_code)
    if not valid:
        return None, f"Invalid code: {error}"

    safe_globals = {
        "__builtins__": builtins.SAFE_BUILTINS
    }
    local_env = {}

    try:
        exec(user_code, safe_globals, local_env)
    except Exception as e:
        return None, f"Code execution failed:\n{traceback.format_exc()}"

    if function_name not in local_env:
        return None, f"Function '{function_name}' is not defined."

    return attribute_guard.attribute_guard(local_env[function_name]), None

def _run_tests(user_code, test_cases, function_name):
    func, error = execute_user_code(user_code, function_name)
    if not func or error:
        return {
                "status": "Runtime Error",
                "error": error
            }
    for case in test_cases:
        given = case["input"]
        expected = case["output"]

        try:
            result = func(given)
        except Exception as e:
            return {
                "status": "Runtime Error",
                "error": traceback.format_exc(),
                "input": given,
                "expected_output": expected,
                "user_output": None
            }

        if result != expected:
            return {
                "status": "Wrong Answer",
                "error": None,
                "input": given,
                "expected_output": expected,
                "user_output": result
            }

    return {
        "status": "Accepted",
        "error": None
    }
