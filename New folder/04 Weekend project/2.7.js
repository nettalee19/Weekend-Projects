const basicOp = (ch, num1, num2) => {
  switch(ch) {
    case "+":
      sum = num1 + num2;
      break;
    case "-":
      sum = num1 - num2;
      break;
    case "*":
      sum = num1 * num2;
      break;
    case "/":
      sum = num1 / num2;
      break;
    default:
      return "no such operand"
  }

  return sum;
}



console.log(basicOp("+", 5, 7))
console.log(basicOp("-", 15, 18))
console.log(basicOp("*", 5, 5))
console.log(basicOp("/", 49, 7))
console.log(basicOp("!", 49, 7))