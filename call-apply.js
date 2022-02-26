const kibria = {
  id: 101,
  name: "kibria",
  money: 5000,
  treatDey: function (expense, tips, tax) {
    this.money = this.money - expense - tips - tax;
    console.log(this);
    return this.money;
  },
};

const rahim = {
  id: 102,
  name: "rahim",
  money: 6000,
};

const karim = {
  id: 103,
  name: "karim",
  money: 2000,
};

//   using call
/* kibria.treatDey.call(rahim, 500, 50, 50);
kibria.treatDey.call(rahim, 1000, 50, 50);
 */

// using apply
kibria.treatDey.apply(karim, [500, 50, 50]);
kibria.treatDey.apply(karim, [1000, 100, 100]);
