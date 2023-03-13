var obj1 = {
  address: "Mumbai,India",
  getAddress: function () {
    console.log(this.address);
  },
};

var getAddress = obj1.getAddress;
var obj2 = { address: "akshay", getAddress: getAddress };
// obj2.getAddress();
console.log(obj2.name);
