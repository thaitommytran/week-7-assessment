const addToZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (!(arr[i] + arr[j])) {
        return true;
      }
    }
  }

  return false;
};

console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));

// Time Complexity: O(n^2)
// Space Complexity: O(1)
