const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');

solution(input);

function solution(input) {
  const [N, M] = input[0].split(' ').map(x => +x);
  let knower = input[1].split(' ').map(Number).slice(1);
  let partyList = [];
  let answer = 0;

  for (let i = 2; i < M + 2; i++) {
    partyList.push(new Set(input[i].split(' ').map(Number).slice(1)));
  }

  knower = updateKnower(partyList, knower);
  answer = checkParty(knower, partyList);

  console.log(answer);
}

function updateKnower(partyList, knower) {  
  for(let i = 0; i < partyList.length; i++){
    for (let party of partyList) {
      if ([...knower].some(x => party.has(x))) {
        knower = [...new Set([...knower, ...party])];
      }
    }
  }
  return knower;
}

function checkParty(knower, partyList) {
  let count = 0;

  for (let party of partyList) {
    if (![...knower].some(x => party.has(x))) {
      count++;
    }
  }

  return count;
}