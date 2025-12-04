SAFE_BUILTINS = {
    k: __builtins__[k]
    for k in __builtins__
    if k not in {
        "open",
        "eval",
        "exec",
        "compile",
        "__import__",
        "input",
        "help",
        "dir",
        "vars",
        "locals",
        "globals",
        "math",
        "numpy",
        "collections"
    }
}