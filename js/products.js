fetch('../data/data.json')
.then((response) => {
    return response.json()
})
.then((data) => {
    let productDisplay = document.querySelector('.products-container');
    Object.keys(data).forEach((item) => {
        if(data[item]){
            productDisplay.innerHTML += 
            
            `
            <figure class="item-container me-md-3 me-sm-0">
              <img src=${data[item].image} alt="${data[item].gameTitle}">
              <figcaption>${data[item].gameTitle}</figcaption>
    
              <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${data[item].stringId}">
      More
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="${data[item].stringId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">${data[item].gameTitle}</h1>
          </div>
          <div class="modal-body">
            <h2>Description:</h2>
            <p>${data[item].description}</p>
            <br>
            <h2>Price:</h2>
            <p>R${data[item].price}</p>
          </div>
          <div class="modal-footer d-flex justify-content-center align-content-center">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Add to Checkout</button>
          </div>
        </div>
      </div>
    </div>
              </figure>
            `
        }
    })
})