function stringTransform(str) {
    const length = str.length;
  
    if (length % 3 === 0) {
      // Reverse the string if length is divisible by 3
      return str.split('').reverse().join('');
    } else if (length % 5 === 0) {
      // Uppercase every other character if length is divisible by 5
      return str.split('').map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char)).join('');
    } else if (length % 15 === 0) {
      // Combine reverse and uppercase logic for length divisible by 15
      return str.split('')
        .reverse()
        .join('')
        .split('')
        .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char))
        .join('');
    } else {
      // Return the original string for other lengths
      return str;
    }
  }
  
  // Example Usage
  const inputStr = "Hamburger";
  const transformedStr = stringTransform(inputStr);
  console.log(transformedStr); // regrubmaH (Correct output)