
import sys
import time
import os
import psutil
import traceback
import multiprocessing
import numpy as np
from model import Submission
from datetime import datetime
from qbank import BANK
from safety import attribute_guard, builtins, import_remover

multiprocessing.set_executable(sys.executable)

def mark(code, name):
    question = BANK[name]
    results = run_tests(code, question.test, question.function_name)
    return Submission(**{
        "problem_name": name,
        "status": results["status"],
        "error": results.get("error"),
        "runtime": results.get("runtime"),
        "memory": results.get("memory"),
        "language": "Python",
        "time": int(datetime.now().timestamp() * 1000),
        "code_body": code,
        "input": str(results.get("input", "")),
        "expected_output": str(results.get("expected_output", "")),
        "user_output": str(results.get("user_output", ""))
    })


def worker(q, user_code, test_cases, function_name):
    proc = psutil.Process(os.getpid())
    start_time = time.perf_counter()
    result = _run_tests(user_code, test_cases, function_name)
    end_time = time.perf_counter()
    runtime_ms = (end_time - start_time)
    try:
        mem_mb = proc.memory_info().peak_wset / (1024 * 1024)
    except AttributeError:
        mem_mb = proc.memory_info().rss / (1024 * 1024)

    result["runtime"] = runtime_ms
    result["memory"] = mem_mb

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
        "__builtins__": builtins.SAFE_BUILTINS,
        "__name__": "__main__",
        "__package__": None,
        "np": np
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
        if (result != expected if type(expected) != np.ndarray else not np.array_equal(result, expected)):
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
