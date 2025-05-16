def solution(myString: str) -> str:
    return ''.join(['l' if ch < 'l' else ch for ch in myString])