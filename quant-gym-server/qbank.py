import questions
import pkgutil
import importlib

BANK = {}
import importlib
import pkgutil
import inspect
import questions

BANK = {}

# Iterate all submodules of the `questions` package
for loader, module_name, is_pkg in pkgutil.iter_modules(questions.__path__):
    module = importlib.import_module(f"questions.{module_name}")
    
    # Iterate over all attributes in the module
    for name, obj in inspect.getmembers(module):
        # Check if the attribute is an instance of Problem
        if inspect.isclass(obj):
            continue  # skip classes
        if hasattr(obj, "main") and hasattr(obj.main, "name"):
            BANK[obj.main.name] = obj

print("Loaded questions:", list(BANK.keys()))
