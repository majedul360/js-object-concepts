const student = {
  name: "majedul islam",
  age: 22,
  money: 5000,
  major: "mathmatics",
  subjects: ["math", "calculas", "economic", "english"],
  friends: { name: "shofiq", major: "mathmatics" },
  exam: function () {
    // console.log(this.name, "taking exam");
  },
  treat: function (expense, tips) {
    this.money = this.money - expense - tips;
    console.log(this.money);
  },
};

// student.exam();
student.treat(500, 50);
