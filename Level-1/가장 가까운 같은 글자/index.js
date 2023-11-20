function solution(s) {
  var answer = [];
  var array = [];
  const sepArray = [...s];

  for (let i = 0; i < sepArray.length; i++) {
    if (array.includes(sepArray[i])) {
      var findArray = [];
      array.push(sepArray[i]);

      array.map((j, index) => (sepArray[i] === j ? findArray.push(index) : ""));

      const filterArray = findArray.filter((num) => num !== i);
      answer.push(i - Math.max(...filterArray));
    } else {
      array.push(sepArray[i]);
      answer.push(-1);
    }
  }

  return answer;
}
