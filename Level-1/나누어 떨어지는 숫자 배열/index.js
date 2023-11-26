function solution(arr, divisor) {
  var answer = [];

  arr.map((index) => (index % divisor === 0 ? answer.push(index) : ""));

  answer.length > 0 ? "" : answer.push(-1);

  return answer.sort((a, b) => {
    return a - b;
  });
}
