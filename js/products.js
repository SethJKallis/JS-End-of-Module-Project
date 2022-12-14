let productDisplay = document.querySelector(".products-container");
let myData = JSON.parse(localStorage.getItem("myDataStore"));

let productsDisplay = () => {
  Object.keys(myData).forEach((item) => {
    if (myData[item]) {
      productDisplay.innerHTML += `
            <figure class="item-container me-md-3 me-sm-0">
            <img src=${myData[item].image} alt="${myData[item].gameTitle}">
              <figcaption>${myData[item].gameTitle}</figcaption>
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${myData[item].stringId}">
              More
    </button>
    <!-- Modal -->
    <div class="modal fade" id="${myData[item].stringId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">${myData[item].gameTitle}</h1>
            </div>
          <div class="modal-body">
          <h2>Price:</h2>
            <p>R${myData[item].price}</p>
          </div>
          <div class="modal-footer d-flex justify-content-center align-content-center">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button id='addCheckoutBtn' type="button" class="btn btn-primary" data-bs-dismiss="modal">Add to Checkout</button>
          </div>
          </div>
          </div>
          </div>
          </figure>
          `;
    }
  });
};
productsDisplay();
let sorting = [...document.querySelectorAll("#sort")];
Object.keys(sorting).forEach((item) => {
  sorting[item].addEventListener("click", (e) => {
    let filteredProducts = myData.filter((f) => {
      if (f.platform == sorting[item].innerText) {
        return f;
      }
    });
    productDisplay.innerHTML = "";
    Object.keys(filteredProducts).forEach((item) => {
      productDisplay.innerHTML += `
         <figure class="item-container me-md-3 me-sm-0">
              <img src=${filteredProducts[item].image} alt="${filteredProducts[item].gameTitle}">
                <figcaption>${filteredProducts[item].gameTitle}</figcaption>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${filteredProducts[item].stringId}">
                More
      </button>
      <!-- Modal -->
      <div class="modal fade" id="${filteredProducts[item].stringId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header">
              <h1 class="modal-title" id="exampleModalLabel">${filteredProducts[item].gameTitle}</h1>
              </div>
            <div class="modal-body">
            <h2>Price:</h2>
            <p>R${filteredProducts[item].price}</p>
            </div>
            <div class="modal-footer d-flex justify-content-center align-content-center">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button id='addCheckoutBtn' type="button" class="btn btn-primary" data-bs-dismiss="modal">Add to Checkout</button>
            </div>
            </div>
            </div>
            </div>
            </figure>
         `;
    });
  });
});
let addCheckoutBtns = [...document.querySelectorAll("#addCheckoutBtn")];
let checkout = JSON.parse(localStorage.getItem("myCheckoutStore"));
Object.keys(addCheckoutBtns).forEach((item) => {
  addCheckoutBtns[item].addEventListener("click", (e) => {
    if (checkout.includes(myData[item])) {
      alert("Already in Checkout!");
    } else {
      checkout.push(myData[item]);
      addCheckoutBtns[item].innerText = "Already in Checkout";
      localStorage.setItem("myCheckoutStore", JSON.stringify(checkout));
    }
  });
});
