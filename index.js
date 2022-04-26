function isPalindrome(word) {
  // Write your algorithm here: Iterating through the word letters from the start to the middle
  for (let i = 0; i < word.length / 2; i++) {
    //compare each letter to the matching letter from the end of the word
    const j = word.length - 1 - i;
    //return false if no letters match
    if (word[i] !== word[j]) return false;
    //return true is there's a match
    return true;
  }
}
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
