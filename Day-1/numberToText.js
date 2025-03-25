//Description
/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not 
map to any letters. 
1 
2 abc 
3 def 
4 ghi 
5 jkl 
6 mno 
7 pqrs 
8 tuv 
9 wxyz 
+* 
0_
#


sample input :
1
23

input description 
line 1 :testcases
line 2 and below n 
digits[i] is a digit in the range ['2','9'];

sample output
ad ae af bd be bf cd ce cf


*/

//solution 
function runProgram(input) {
    // Write code here
    input=input.split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0;i<tc;i++)
    {
      let info=input[line++];
      console.log(solve(info).join(" "));
    }
}
  function solve(digits) {
    if (digits.length === 0) return [];
  
    const phoneMap = {
      2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno',
      7: 'pqrs', 8: 'tuv', 9: 'wxyz'
    };
  
    let queue = [""];
  
    for (let digit of digits) {
      if (!phoneMap[digit]) continue;
  
      let letters = phoneMap[digit];
      let newQueue = [];
  
      for (let combination of queue) {
        for (let letter of letters) {
          newQueue.push(combination + letter);
        }
      }
  
      queue = newQueue;
    }
  
    return queue;
}

runProgram('1\n23')