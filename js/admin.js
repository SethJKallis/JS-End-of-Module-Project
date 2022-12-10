let tableContent = document.querySelector("tbody");
let myData = JSON.parse(localStorage.getItem("myDataStore"));

let displayTableContent = () => {
  tableContent.innerHTML = "";
  Object.keys(myData).forEach((item) => {
    if (myData[item]) {
      tableContent.innerHTML += `
          <tr id="itemRowDisplay">
              <td id='gameIdDisplay'>${myData[item].id}</td>
              <td id='gameTitleDisplay'>${myData[item].gameTitle}</td>
              <td id='gamePriceDisplay'>R${myData[item].price}</td>
              <td><!-- Button trigger modal -->
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${
                myData[item].stringId
              }">
                Edit
              </button>
              
              <!-- Modal -->
              <div class="modal fade" id="${
                myData[item].stringId
              }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Edit This Product</h1>
                    </div>
                    <div class="modal-body d-flex flex-column justify-content-center align-content-center">

                    <input type="number" name="gameId" placeholder="Game ID: ${
                      parseInt(item) + 1
                    }" class="form-control mb-2 w-50 align-self-center text-center" disabled>

                    <input type="text" name="gameTitle"  id="gameTitle" placeholder="Game Title" class="form-control mb-2 w-50 align-self-center text-center" required>
                    
                    <input type="text" name="gameImageUrl"  id="gameImageUrlInput" placeholder="Game Image  URL" class="form-control mb-2 w-50 align-self-center text-center" required>
                    
                    <div class="input-group mb-3 mx-auto w-50">
                      <span class="input-group-text">R</span>
                      <input id="gamePriceInp" type="number" class="form-control text-center" aria-label="Amount (to the nearest rand)" placeholder="Price" min=0>
                      <span class="input-group-text">.00</span>
                    </div>

                    </div>
                    <div class="modal-footer d-flex justify-content-between align-content-center">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button id=saveChange type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
              <button id="${
                myData[item].id
              }" class="btn btn-danger deletebtn">Del</button></td>
              </td>
          </tr>
          `;
    }
  });
};
displayTableContent();
let edit = document.querySelectorAll("#saveChange");
let gameTitleDisplay = document.querySelectorAll("#gameTitleDisplay");
let gamePriceDisplay = document.querySelectorAll("#gamePriceDisplay");
let trItemDisplay = document.querySelectorAll("#itemRowDisplay");
Object.keys(edit).forEach((item) => {
  edit[item].addEventListener("click", (e) => {
    let gameTitleInput = [...document.querySelectorAll(`#gameTitle`)];
    let gamePriceInput = [...document.querySelectorAll("#gamePriceInp")];
    let gameImageUrlInput = [
      ...document.querySelectorAll("#gameImageUrlInput"),
    ];
    if (
      gamePriceInput[item].value == "" ||
      gamePriceInput.value == "" ||
      gameImageUrlInput == ""
    ) {
      alert("Please fill in every... last... detail...");
    } else {
      myData[item].price = gamePriceInput[item].value;
      gamePriceInput[item].value = "";
      gamePriceDisplay[item].textContent = `R${myData[item].price}`;
      myData[item].gameTitle = gameTitleInput[item].value;
      gameTitleInput[item].value = "";
      gameTitleDisplay[item].textContent = `${myData[item].gameTitle}`;
      myData[item].image = gameImageUrlInput[item].value;
      gameImageUrlInput[item].value = "";
      localStorage.setItem("myDataStore", JSON.stringify(myData));
      myData = JSON.parse(localStorage.getItem("myDataStore"));
    }
  });
});
let del = document.querySelectorAll(".btn-danger");
Object.keys(del).forEach((item) => {
  del[item].addEventListener("click", (e) => {
    let index = item;
    if (del[item].id == myData[item].id) {
      myData.splice(index, 1);
      localStorage.setItem("myDataStore", JSON.stringify(myData));
      location.reload();
    } else {
      return alert("Not Found");
    }
  });
});
let newItemCreated = function (id, gameTitle, price, image) {
  this.id = id;
  this.gameTitle = gameTitle;
  this.price = price;
  this.image = image;
};
let addProduct = document.querySelector("#createBtn");
addProduct.addEventListener("click", (e) => {
  let newGameTitle = document.querySelector("#createTitleInput");
  let newGamePrice = document.querySelector("#createPriceInput");
  let newGameImage = document.querySelector("#createImageInput");
  console.log("clicked");
  if (newGameTitle.value == "" || newGamePrice == "" || newGameImage == "") {
    return alert("Please fill in every input to proceed...");
  } else {
    myData.push({
      ...new newItemCreated(
        myData[myData.length - 1].id + 1,
        newGameTitle.value,
        newGamePrice.value,
        newGameImage.value
      ),
    });
    localStorage.setItem("myDataStore", JSON.stringify(myData));
    location.reload();
  }
});
