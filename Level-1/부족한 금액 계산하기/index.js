function solution(price, money, count) {
  var answer = 0;
  var sum = 0;

  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }

  if (sum >= money) {
    answer = sum - money;
  } else if (sum <= money) {
    answer = 0;
  }

  return answer;
}
