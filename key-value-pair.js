const fullName = { firstName: "majedul", lastName: "islam" };
// const key = Object.keys(fullName);

// const value = Object.values(fullName);

// const pair = Object.entries(fullName);
// seal marly delete kora jabe na notun property add o kora jabe na shudu propertyer value change kora jabe
// Object.seal(fullName);
// freeze use korly kono kichui kora jabe na
Object.freeze(fullName);
fullName.lastName = "sfaa";
fullName.age = 22;
delete fullName.lastName;

console.log(fullName);
