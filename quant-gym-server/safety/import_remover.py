import ast

ALLOWED_IMPORTS = {"math", "numpy", "collections"}

def check_no_imports(user_code: str):
    try:
        tree = ast.parse(user_code)
    except SyntaxError as e:
        return False, e

    for node in ast.walk(tree):
        if isinstance(node, ast.Import):
            for alias in node.names:
                module = alias.name.split('.')[0]
                if module not in ALLOWED_IMPORTS:
                    return False, f"Importing '{module}' is not allowed."
        
        if isinstance(node, ast.ImportFrom):
            module = (node.module or "").split('.')[0]
            if module not in ALLOWED_IMPORTS:
                return False, f"Importing from '{module}' is not allowed."

        if isinstance(node, ast.Call) and getattr(node.func, "id", None) == "__import__":
            return False, "Use of __import__() is not allowed."

    return True, None
