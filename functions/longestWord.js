const findLongestWord = (arrOfWords) => {
  let currLongest = arrOfWords[0].length;

  arrOfWords.forEach((elem) => {
    if (elem.length > currLongest) {
      currLongest = elem.length;
    }
  });

  return currLongest;
};

console.log(findLongestWord(["hi", "hello"]));

// Time Complexity: O(n)
// Space Complexity: O(1)
