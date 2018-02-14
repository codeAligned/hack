class Solution {
public:
    int numJewelsInStones(string J, string S) {
        bool chars[256]{};

        for(char& c : J) {
            chars[c] = true;
        }

        int result = 0;

        for (char& c : S) {
            if (chars[c]) {
                result++;
            }
        }

        return result;
    }
};
