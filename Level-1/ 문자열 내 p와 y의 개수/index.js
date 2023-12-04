function solution(s) {
  var answer = true;
  var pCount = 0;
  var yCount = 0;

  for (let i = 0; i < [...s].length; i++) {
    if ([...s][i] === "p" || [...s][i] === "P") {
      pCount++;
    } else if ([...s][i] === "y" || [...s][i] === "Y") {
      yCount++;
    }
  }

  if (pCount > yCount || yCount > pCount) {
    answer = false;
  } else if (pCount === yCount) {
    answer = true;
  } else if (pCount === 0 && yCount === 0) {
    answer = true;
  }

  return answer;
}
