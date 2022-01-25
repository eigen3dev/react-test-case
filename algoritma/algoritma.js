// 1.
const reverseString = (str) => {
  let res = "";
  let num = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] != 1) {
      res += str[i];
    } else {
      num += str[i];
    }
  }
  return res + num;
};
// console.log(reverseString("NEGIE1"));

//2.
const longest = (sentence) => {
  let max = 0;
  let arr = sentence.split(" ");
  let longest = arr.map((e) => {
    if (e.length > max) {
      max = e.length;
    }
  });
  let result = arr.filter((e) => {
    return e.length === max;
  });
  return `${result[0]}: ${max} character`;
};
// console.log(longest("Saya sangat senang mengerjakan soal algoritma"));

//3.
const stringCounter = (input, query) => {
  let output = [];
  query.map((e) => {
    let counter = 0;
    input.map((f) => {
      if (e === f) {
        counter += 1;
      }
    });
    output.push(counter);
  });
  return output;
};
// console.log(stringCounter(["xc", "dz", "bbb", "dz"], ["bbb", "ac", "dz"]));

//4.
const nxn = (arr) => {
  let count = 0;
  let count2 = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) {
        count += arr[i][j];
      }
    }
  }
  let diagonalReverse = arr.map((e) => {
    return e.reverse();
  });
  for (let i = 0; i < diagonalReverse.length; i++) {
    for (let j = 0; j < diagonalReverse[i].length; j++) {
      if (i === j) {
        count2 += diagonalReverse[i][j];
      }
    }
  }
  return count - count2;
};
// console.log(
//   nxn([
//     [1, 2, 0],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
