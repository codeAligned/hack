class Solution {
  public int maxArea(int[] height) {
      int width = height.length;

      int result = 0;

      int left = 0;
      int right = height.length - 1;

      while (left < right) {
          result = Math.max(
              result,
              (right - left) * (
                  height[left] < height[right] ? height[left++] : height[right--]
              )
          );
      }

      return result;
  }
}
