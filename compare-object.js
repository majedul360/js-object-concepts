const first = { a: 1, b: 2 };
const second = { b: 2, a: 1 };
/* 
// these system is not correct for comparing objects
if (first === second) {
  console.log("they are smae");
} else {
  console.log("thet are not same");
} */

// these formula is not 100% correct for comparing objects
if (JSON.stringify(first) === JSON.stringify(second)) {
  //   console.log("they are same");
} else {
  //   console.log("they are not same");
}

// using function
function compareObject(first, second) {
  if (Object.keys(first).length !== Object.keys(second).length) {
    return false;
  } else {
    for (const prop in first) {
      if (first[prop] !== second[prop]) {
        return false;
      }
    }
    return true;
  }
}

const checkEqual = compareObject(first, second);
console.log(checkEqual);
