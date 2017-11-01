public class ValidPalindromeII {
    private boolean isPalindrome(String s, int i, int j, boolean first) {
        while (++i < --j) {
            if (s.charAt(i) != s.charAt(j)) {
                if (first) {
                    return isPalindrome(s, i, j + 1, false) || isPalindrome(s, i - 1, j, false);
                }

                return false;
            }
        }

        return true;
    }

    public boolean validPalindrome(String s) {
        int i = -1;
        int j = s.length();

        return isPalindrome(s, i, j, true);
    }
}
