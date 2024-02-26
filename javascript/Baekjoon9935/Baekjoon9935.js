const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');
let totalString = input[0].trim();
let explosionString = input[1].trim();

solution(totalString, explosionString);

function solution(totalString, explosionString) {
  const stack = [];

  for (let char of totalString) {
    stack.push(char);

    if (isExplosion(stack, explosionString)) {
      for (let i = 0; i < explosionString.length; i++) {
        stack.pop();
      }
    }
  }

  const result = stack.join('');

  if (result === '') {
    console.log('FRULA');
  } else {
    console.log(result);
  }
}

function isExplosion(stack, explosionString) {
  if (stack.length < explosionString.length) {
    return false;
  }

  for (let i = 0; i < explosionString.length; i++) {
    if (stack[stack.length - 1 - i] !== explosionString[explosionString.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
