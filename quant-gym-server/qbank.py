
import importlib
import pkgutil
import inspect
import questions

BANK = {}

for loader, module_name, is_pkg in pkgutil.iter_modules(questions.__path__):
    module = importlib.import_module(f"questions.{module_name}")
    
    for name, obj in inspect.getmembers(module):
        if inspect.isclass(obj):
            continue
        if hasattr(obj, "main") and hasattr(obj.main, "name"):
            BANK[obj.main.name] = obj

print("Loaded questions:", list(BANK.keys()))
