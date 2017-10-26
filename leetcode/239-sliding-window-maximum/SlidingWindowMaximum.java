import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Iterator;

public class SlidingWindowMaximum {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if (k == 0) {
            return new int[0];
        }

        int n = nums.length;

        int[] result = new int[n - k + 1];
        int current = 0;

        Deque<Integer> deque = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            while (!deque.isEmpty() && deque.peek() < i - k + 1) {
                deque.poll();
            }

            Iterator<Integer> iterator = deque.iterator();

            while (iterator.hasNext()) {
                if (nums[iterator.next()] < nums[i]) {
                    iterator.remove();
                }
            }

            deque.offer(i);

            if (i >= k - 1) { // allowing sliding window to fit in full initially
                result[current++] = nums[deque.peek()];
            }
        }

        return result;
    }
}
