let checkoutProducts = JSON.parse(localStorage.getItem("myCheckoutStore"));
let checkoutDisplay = document.querySelector("#checkoutDisplay");
console.log(checkoutProducts);
Object.keys(checkoutProducts).forEach((item) => {
  if (checkoutProducts[item]) {
    checkoutDisplay.innerHTML += `
        <tr>
            <td>${checkoutProducts[item].gameTitle}</td>
            <td>R${checkoutProducts[item].price}</td>
            <td><button id="${checkoutProducts[item].id}" class="btn btn-danger">Remove</button></td>
        </tr>
        `;
  }
});
let totalDisplay = document.querySelector("#total-display");
function total() {
  let totalPrice = checkoutProducts.reduce((a, b) => {
    return a + b.price;
  }, 0);
  totalDisplay.innerHTML = `
    <th>Total Price: R${totalPrice}</th>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    `;
}
total();
let remove = [...document.querySelectorAll(".btn-danger")];
Object.keys(remove).forEach((item) => {
  remove[item].addEventListener("click", (e) => {
    let index = item;
    console.log(remove[item].id);
    console.log(checkoutProducts[item]);
    if (remove[item].id == checkoutProducts[item].id) {
      checkoutProducts.splice(index, 1);
      localStorage.setItem("myCheckoutStore", JSON.stringify(checkoutProducts));
      location.reload();
    } else {
      return alert("Not Found");
    }
  });
});
