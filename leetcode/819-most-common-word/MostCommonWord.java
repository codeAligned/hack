class Solution {
  class TrieNode {
    public boolean isWord = false;
    public TrieNode[] chars = new TrieNode[26];
  }

  public String mostCommonWord(String paragraph, String[] banned) {
    TrieNode rootBanned = new TrieNode();

    for (String banWord : banned) {
      TrieNode node = rootBanned;

      for (int i = 0; i < banWord.length(); i++) {
        if (node.chars[banWord.charAt(i) - 'a'] == null) {
          node.chars[banWord.charAt(i) - 'a'] = new TrieNode();
        }
        node = node.chars[banWord.charAt(i) - 'a'];
      }

      node.isWord = true;
    }


    Map<String, Integer> map = new HashMap<>();

    int size = paragraph.length();

    for (int i = 0; i < size; i++) {
      StringBuffer sb = new StringBuffer();

      char c = paragraph.charAt(i);

      while (((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) && i < size) {
        if (c >= 'A') { // flip case yeah
          c = Character.toLowerCase(c);
        }

        sb.append(c);

        if (i++ < size - 1) {
          c = paragraph.charAt(i);
        }
      }

      if (sb.length() > 0) {
        String word = sb.toString();

        TrieNode node = rootBanned;

        for (int j = 0; node != null && j < word.length(); j++) {
          node = node.chars[word.charAt(j) - 'a'];
        }

        if (node == null || !node.isWord) {
          map.merge(word, 1, Integer::sum);
        }
      }
    }

    return Collections.max(map.entrySet(), Map.Entry.comparingByValue()).getKey();
  }
}
