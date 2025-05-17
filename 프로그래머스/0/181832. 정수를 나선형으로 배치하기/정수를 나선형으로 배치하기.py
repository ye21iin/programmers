def solution(n):
    # n x n 배열 초기화
    matrix = [[0] * n for _ in range(n)]
    
    # 방향: 오른쪽, 아래, 왼쪽, 위 (우→하→좌→상)
    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]
    
    x, y, direction = 0, 0, 0  # 시작 위치와 방향
    for i in range(1, n * n + 1):
        matrix[x][y] = i
        # 다음 위치 계산
        nx, ny = x + dx[direction], y + dy[direction]
        
        # 다음 위치가 범위를 벗어나거나 이미 방문한 경우 방향 전환
        if 0 <= nx < n and 0 <= ny < n and matrix[nx][ny] == 0:
            x, y = nx, ny
        else:
            direction = (direction + 1) % 4
            x += dx[direction]
            y += dy[direction]
    return matrix
