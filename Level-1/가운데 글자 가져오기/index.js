function solution(s) {
  var answer = "";
  var mok = Math.floor([...s].length / 2);

  if (s.length % 2 === 0) {
    answer += [...s][mok - 1] += [...s][mok];
  } else {
    answer += [...s][mok];
  }

  return answer;
}
