const number1 = 103;
const number2 = 72;
const number3 = 189;

const getMax = (a, b, c) => {
  let max = a;
  
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  
  return max;
};

// 「最大値は○○です」と出力してください
const max = getMax(number1, number2, number3);
console.log(`最大値は${max}です`);
