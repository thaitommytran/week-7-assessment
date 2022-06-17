const hasUniqueChars = (word) => {
  let checker = {};

  for (let i = 0; i < word.length; i++) {
    if (!checker[word[i]]) {
      checker[word[i]] = 1;
    } else {
      return false;
    }
  }

  return true;
};

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));

// Time Complexity: O(Log n)
// Space Complexity: O(1)
