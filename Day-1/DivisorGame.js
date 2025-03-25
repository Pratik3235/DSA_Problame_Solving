//Description
/*
Alice and Bob take turns playing a game, with Alice starting first. 
Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of: 
Choosing anyxwith 0<x<n and n% x == 0. 
Replacing the number n on the chalkboard with n-x. 
Also, if a player cannot make a move, they lose the game. 
Return true if and only if Alice wins the game, assuming both players play optimally.
input format
2
2
3

line 1 => test cases
line 2 and below n

output :
true
false

*/

//solution

function runProgram(input) {
  input = input.split("\n").map(Number);
  let tc = input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = input[line++];
    console.log(solve(n));
  }
}
function solve(n) {
  return n % 2 == 0;
}

// runProgram("2\n2\n3");