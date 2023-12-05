function solution(left, right) {
  var answer = 0;
  var measure = [];

  for (let i = left; i <= right + 1; i++) {
    console.log(measure, i);
    if (measure.length > 0) {
      if (measure.length % 2 === 0) {
        answer += i - 1;
        measure = [];
      } else {
        answer -= i - 1;
        measure = [];
      }
    }
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        measure.push(j);
      }
    }
  }

  return answer;
}
