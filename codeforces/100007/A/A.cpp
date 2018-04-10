#include <iostream>
#include <vector>

#define MAX_GRID_SIZE 50

bool figure[MAX_GRID_SIZE][MAX_GRID_SIZE][MAX_GRID_SIZE] = {{{false}}};

int scanSquares(int x, int y, int z) {
  for (int size = 0; size < MAX_GRID_SIZE; size++) {
    for (int k = z; k < z + size - 1; k++) {
      for (int i = x; i < x + size; i++) {
        if (!figure[i][y + size - 1][k]) {
          return size - 1;
        }
      }

      for (int j = y; j < y + size; j++) {
        if (!figure[x + size - 1][j][k]) {
          return size - 1;
        }
      }
    }

    for (int i = x; i < x + size; i++) {
      for (int j = y; j < y + size; j++) {
        if (!figure[i][j][z + size - 1]) {
          return size - 1;
        }
      }
    }
  }

  return -1;
}

bool checkSquare(int x, int y, int z, int size) {
  if (
    x == 0 || y == 0 || z == 0 ||
    (x + size == MAX_GRID_SIZE) ||
    (y + size == MAX_GRID_SIZE) ||
    (z + size == MAX_GRID_SIZE)
  ) {
    return false;
  }

  for (int i = x; i < x + size; i++) {
    for (int j = y; j < y + size; j++) {
      if (!figure[i][j][z - 1] || !figure[i][j][z + size]) {
        return false;
      }
    }
  }

  for (int i = x; i < x + size; i++) {
    for (int k = z; k < z + size; k++) {
      if (!figure[i][y - 1][k] || !figure[i][y + size][k]) {
        return false;
      }
    }
  }

  for (int j = y; j < y + size; j++) {
    for (int k = z; k < z + size; k++) {
      if (!figure[x - 1][j][k] || !figure[x + size][j][k]) {
        return false;
      }
    }
  }

  std::cout << "x = " << x << " y = " << y << " z = " << z << " size = " << size << std::endl;

  return true;
}

int main(int argc, char * argv[]) {
  std::ios_base::sync_with_stdio (false);

  int n, m, k;

  std::cin >> n >> m >> k;

  for (int i = 0; i < k; i++) {
    for (int j = 0; j < n; j++) {
      for (int k = 0; k < m; k++) {
        bool current;
        std::cin >> current;
        figure[i][j][k] = current;
      }
    }
  }

  int count = 0;
  for (int i = 1; i < k - 1; i++) {
    for (int j = 1; j < n - 1; j++) {
      for (int k = 1; k < m - 1; k++) {
        if (figure[i][j][k]) {
          int size = scanSquares(i, j, k);

          for (int curSize = 1; curSize <= size; curSize++) {
            if (checkSquare(i, j, k, curSize)) {
              count++;
            } else {
              break;
            }
          }
        }
      }
    }
  }

  std::cout << count << std::endl;
}
