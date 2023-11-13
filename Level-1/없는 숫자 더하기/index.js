function solution(numbers) {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sum = 0;
  //ex) numbers = [1,2,3,4,6,7,8,0]
  let answer = array.filter((i) => !numbers.includes(i));
  answer.map((i) => (sum += i));
  return sum;
}
