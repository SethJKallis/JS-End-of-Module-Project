fetch("../data/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    localStorage.setItem(`myDataStore`, JSON.stringify(data));
  });
let myData = JSON.parse(localStorage.getItem(`myDataStore`));
console.log(myData);
let checkout = [];
localStorage.setItem("myCheckoutStore", JSON.stringify(checkout));
