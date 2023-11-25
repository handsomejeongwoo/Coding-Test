function solution(n) {
  var answer = 0;

  String(n)
    .split("")
    .map((index) => (answer += Number(index)));

  return answer;
}
