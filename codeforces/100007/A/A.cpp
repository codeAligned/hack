#include <iostream>
#include <vector>

int main(int argc, char * argv[]) {
  std::ios_base::sync_with_stdio (false);

  int n, m, k;

  std::cin >> n >> m >> k;

  bool figure[50][50][50] = {{{false}}};

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
        if (
          figure[i - 1][j][k] &&
          figure[i + 1][j][k] &&
          figure[i][j - 1][k] &&
          figure[i][j + 1][k] &&
          figure[i][j][k - 1] &&
          figure[i][j][k + 1]
        ) {
          count++;
        }
      }
    }
  }

  std::cout << count << std::endl;
}
