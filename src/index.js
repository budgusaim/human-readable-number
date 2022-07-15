module.exports = function toReadable (number) {
//  let number =999;
  let num = ['0','1','2','3','4','5','6','7','8','9'];
  let zero_nine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let ten_nineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let twenty_ninety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundred = 'hundred'
  let result = '';

  let numArr = number.toString(10).split('').map(int => parseInt(int, 10));
//  console.log (numArr);

  if (numArr.length === 3) {                                           //100-900
    if (numArr[1] === 0 && numArr[2] === 0) {
      for (let i=1; i<=9; i++) {
        if (i===numArr[0]) {
          result = result + zero_nine[i] +' '+ hundred;
        }
      }
    } else if (numArr.length === 3 && numArr[1] === 1) {                                       //120-999
      for (let i=0; i<=9; i++) {
        if (i===numArr[0]) {
          result = result + zero_nine[i] +' '+ hundred;
        }
      }
      for (let i=0; i<=9; i++) {
        if (i===numArr[2]) {
          result = result +' '+ ten_nineteen[i];
        }
      }
    } else if (numArr.length === 3 && numArr[1] === 0) {
      for (let i=0; i<=9; i++) {
        if (i===numArr[0]) {
          result = result + zero_nine[i] +' '+ hundred;
        }
      }
      for (let i=1; i<=9; i++) {
        if (i===numArr[2]) {
          result = result +' '+ zero_nine[i];
        }
      }
    } else if (numArr.length === 3) {
      for (let i=1; i<=9; i++) {
        if (i===numArr[0]) {
          result = result + zero_nine[i] +' '+ hundred;
        }
      }
      for (let i=0; i<=9; i++) {
        if (i===numArr[1]) {
          result = result +' '+ twenty_ninety[i-2];
        }
      }
      for (let i=1; i<=9; i++) {
        if (i===numArr[2]) {
          result = result +' '+ zero_nine[i];
        }
      }
    }
  } else if (numArr.length === 2) {
    if (numArr[0]===1) {
      for (let i=0; i<=9; i++) {
        if (i===numArr[1]) {
          result = result + ten_nineteen[i];
        }
      }
    } else {
      for (let i=0; i<=9; i++) {
        if (i===numArr[0]) {
          result = result + twenty_ninety[i-2];
        }
      }
      for (let i=1; i<=9; i++) {
        if (i===numArr[1]) {
          result = result +' '+ zero_nine[i];
        }
      }
    }
  } else if (numArr.length === 1) {
    for (let i=0; i<=9; i++) {
      if (i===numArr[0]) {
        result = result + zero_nine[i];
      }
    }
  }
//  console.log (result);
  return result;
}
