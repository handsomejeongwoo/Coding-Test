function solution(x) {
  var answer = true;
  var sum = 0;
  var numberToString = x.toString().split("");

  numberToString.map((i) => (sum += Number(i)));

  x % sum === 0 ? (answer = true) : (answer = false);

  return answer;
}
