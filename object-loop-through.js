const studentInformation = {
  name: "majedul islam",
  age: "22",
  district: "pabna",
  thana: "chatmohar",
};

// using for in
for (const student in studentInformation) {
  const pair = `${student}: ${studentInformation[student]}`;
  //   console.log(pair);
}

// usng for of
const keys = Object.keys(studentInformation);
for (const key of keys) {
  const pair = `${key}: ${studentInformation[key]}`;
  //   console.log(pair);
}

// entries
const pairs = Object.entries(studentInformation);
// console.log(pairs);

for (const pair of pairs) {
  const [key, value] = pair;
  console.log(`${key}: ${value}`);
}
