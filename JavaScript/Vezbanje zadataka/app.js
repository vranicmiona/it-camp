// 1. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

function firstE(arr, n) {
  let noviNiz = [];
  for (i = 0; i < arr.length; i++) {
    if (n > arr.length) {
      return arr;
    } else {
      noviNiz = arr.slice(0, n);
    }
  }
  return noviNiz;
}

console.log(firstE([7, 9, 0, -2], 3));
console.log(firstE([7, 9, 0, -2], 10));
console.log(firstE([7, 9, 0, -2], 1));

// 2. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

const lastEl = (arr, n) => {
  let noviNiz = [];
  if (n > arr.length) {
    return arr;
  } else {
    noviNiz = arr.slice(Math.max(arr.length - n, 0));
  }

  return noviNiz;
};
console.log(lastEl([7, 9, 0, -2], 1));
console.log(lastEl([7, 9, 0, -2], 3));
console.log(lastEl([7, 9, 0, -2], 10));

// 3. Write a JavaScript function to create a specified number of elements with pre-filled string value array.
