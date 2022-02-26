const kibria = {
  id: 101,
  name: "kibria",
  money: 5000,
  treatDey: function (expense) {
    this.money = this.money - expense;
    console.log(this);
    return this.money;
  },
};

kibria.treatDey(400);

const rahim = {
  id: 102,
  name: "rahim",
  money: 6000,
};
const rahimTreatDey = kibria.treatDey.bind(rahim);
rahimTreatDey(1000);

const karim = {
  id: 103,
  name: "karim",
  money: 2000,
};

const karimTreatDey = kibria.treatDey.bind(karim);
karimTreatDey(100);
