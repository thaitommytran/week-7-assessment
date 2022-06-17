const isPangram = (str) => {
  let abcStr = "abcdefghijklmnopqrstuvwxyz";
  let newStr = str.toLowerCase();

  for (let i = 0; i < abcStr.length; i++) {
    if (!newStr.includes(abcStr[i])) {
      return false;
    }
  }

  return true;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));

// Time Complexity: O(1)
// Space Complexity: O(1)
