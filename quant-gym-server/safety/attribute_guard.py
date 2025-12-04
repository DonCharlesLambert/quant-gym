def attribute_guard(fn):
    def wrapper(*args, **kwargs):
        for arg in list(args) + list(kwargs.values()):
            if hasattr(arg, "__dict__"):
                pass
        return fn(*args, **kwargs)
    return wrapper
