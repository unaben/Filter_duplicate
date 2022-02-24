const numArray = [2, 3, 6, 7, 2, 9, 3, 7, 4];

function seprateAllDuplicates(array) {
  console.log("Inside FUNC: ", array);
  const duplicate = [];
  const single = [];

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (!single.includes(num)) {
      single.push(num);
    } else {
      duplicate.push(num);
    }
    console.log("Duplicate: ", duplicate);
  }

  return duplicate;
}
console.log(seprateAllDuplicates(numArray));



function removeDuplicate(array) {
  console.log("Array: ", array);
  return array.filter((num, index) => {
    console.log("INDEX :", index);
    const arr = array.indexOf(num);
    console.log("ARR & NUM: ", arr, num);
    return arr === index;
  });
}
console.log("FUNC:", removeDuplicate(numArray));


