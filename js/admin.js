fetch('../data/data.json')
.then((response) => {
    return response.json()
})
.then((data) => {
    localStorage.setItem('myDataStore', JSON.stringify(data));
    
})

let tableContent = document.querySelector('tbody');
    let myData = JSON.parse(localStorage.getItem('myDataStore'));
    Object.keys(myData).forEach((item) => {
        if(myData[item]){
            tableContent.innerHTML += 
            `
            <tr>
                <td>${myData[item].id}</td>
                <td>${myData[item].gameTitle}</td>
                <td>R${myData[item].price}</td>
                <td><button id="editBtn" class="btn btn-success">Edit</button></td>
                <td><button id="deleteBtn" class="btn btn-danger">Del</button></td>
            </tr>
            `
        }
    })
    
    let edit = document.querySelectorAll('.btn-success');
    console.log(edit)
    Object.keys(edit).forEach((item) => {
        edit[item].addEventListener('click', (e) => {
            console.log(item)
        })
    })