function findLongestWord(str) {
  
  var words = str.split(" ");
  
  var longestWordLength = 0;
  
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWordLength) {
      longestWordLength = words[i].length;
    }
  }
  
  return longestWordLength;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 
console.log(findLongestWord("May the force be with you"));
