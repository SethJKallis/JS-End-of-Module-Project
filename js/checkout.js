let checkoutProducts = JSON.parse(localStorage.getItem('myCheckoutStore'));
let checkoutDisplay = document.querySelector('#checkoutDisplay')

console.log(checkoutProducts)

Object.keys(checkoutProducts).forEach((item) => {
    if(checkoutProducts[item]){
        checkoutDisplay.innerHTML += 
        `
        <tr>
            <td>${checkoutProducts[item].gameTitle}</td>
            <td>1</td>
            <td>R${checkoutProducts[item].price}</td>
            <td><button class="btn btn-danger">Remove</button></td>
        </tr>
        `
    }
})