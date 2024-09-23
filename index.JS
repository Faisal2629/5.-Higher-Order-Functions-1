//1. UniqueString Function using .reduce()
const strings = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "pear",
    "apple",
  ];
  
  function uniqueString(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
  }
  
  // Test case
  console.log(uniqueString(strings));

  //2. ProductOfMultipleOfThreeOrFive using .reduce()
  const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];

  function productOfMultipleOfThreeOrFive(arr) {
    return arr.reduce((acc, num) => {
      if (num % 3 === 0 || num % 5 === 0) {
        return acc + num;
      }
      return acc;
    }, 0);
  }
  
  // Test case
  console.log(productOfMultipleOfThreeOrFive(numbers));

  //3. palindromesString using .filter()
  const words = [
    "racecar",
    "hello",
    "deified",
    "world",
    "level",
    "programming",
    "radar",
    "civic",
    "javascript",
  ];
  
  function palindromesString(arr) {
    return arr.filter(word => word === word.split('').reverse().join(''));
  }
  
  // Test case
  console.log(palindromesString(words));

  //4. findImage using .filter()
  const filePaths = [
    "/images/pic1.jpg",
    "/images/pic2.png",
    "/assets/img/background.jpg",
    "/assets/img/logo.png",
    "/downloads/document.pdf",
    "/downloads/image.png",
    "/downloads/image.jpg",
  ];
  
  function findImage(arr) {
    return arr.filter(path => path.endsWith('.jpg') || path.endsWith('.png'));
  }
  
  // Test case
  console.log(findImage(filePaths));
 

  //5. swapStrings using .map()
  const stringsToSwap = [
    "Hello",
    "world",
    "this",
    "is",
    "an",
    "example",
    "array",
    "of",
    "strings",
  ];
  
  function swapStrings(arr) {
    return arr.map(str => {
      if (str.length > 1) {
        return str[str.length - 1] + str.slice(1, -1) + str[0];
      }
      return str;
    });
  }
  
  // Test case
  console.log(swapStrings(stringsToSwap));

  //6. countWords using .forEach()
  const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "I have a dream that one day this nation will rise up.",
    "To be or not to be, that is the question.",
    "In the beginning, God created the heavens and the earth.",
  ];
  
  function countWords(arr) {
    arr.forEach((sentence, index) => {
      const wordCount = sentence.split(' ').length;
      console.log(`Sentence ${index + 1} contains ${wordCount} words.`);
    });
  }
  
  // Test case
  countWords(sentences);
 
    
  //7. sumOfSquaresOfOddNumbers using .map(), .filter(), .reduce()
  const numberArray = [1, 2, 3, 4, 5, 7];

  function sumOfSquaresOfOddNumbers(arr) {
    return arr
      .filter(num => num % 2 !== 0)  // Filter out odd numbers
      .map(num => num ** 2)           // Square each number
      .reduce((acc, curr) => acc + curr, 0);  // Sum them up
  }
  
  // Test case
  console.log(sumOfSquaresOfOddNumbers(numberArray));
  