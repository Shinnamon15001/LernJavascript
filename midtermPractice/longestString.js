function lengthOfLongestSubstring(s) {
    let setString = new Set();
    let left = 0;
    let right = 0;

    for (let string of s) {
        right++;
        if (string != setString) {
            setString.add(string);
        }
        if (string != setString[left]) {
            setString.delete(s[right]);
            left++;
        }
    }
    console.log(setString);
    console.log("-----------------------------------------");
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));