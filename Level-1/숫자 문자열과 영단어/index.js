function solution(s) {
  let answer = "";
  let isStr = "";
  const sepArray = [...s];

  const numArray = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < sepArray.length; i++) {
    if (!isNaN(sepArray[i])) {
      if (isStr.length > 0) {
        answer += numArray.findIndex((str) => str === isStr) + sepArray[i];
        isStr = "";
      } else {
        answer += sepArray[i];
      }
    } else if (numArray.includes(isStr)) {
      answer += numArray.findIndex((str) => str === isStr);
      isStr = "";
    } else {
      isStr += sepArray[i];
    }
    console.log("sex", i, isStr);
  }

  return Number(answer);
}
