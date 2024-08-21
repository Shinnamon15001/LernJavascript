function lengthOfLongestSubstring(s) {
    let setString = new Set();
    let left = 0;
    let maxLen = 0;
    let longestSubstring = "";

    for (let right = 0; right < s.length; right++) {
        while (setString.has(s[right])) {
            setString.delete(s[left]);
            left++;
        }
        setString.add(s[right]);
    }
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));   