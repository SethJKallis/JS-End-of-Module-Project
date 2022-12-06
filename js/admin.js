fetch('../data/data.json')
.then((response) => {
    return response.json()
})
.then((data) => {
    let tableContent = document.querySelector('tbody');
    Object.keys(data).forEach((item) => {
        if(data[item]){
            tableContent.innerHTML += 
            `
            <tr>
                <td>${data[item].id}</td>
                <td>${data[item].gameTitle}</td>
                <td>R${data[item].price}</td>
                <td><button id="editBtn" class="btn btn-success">Edit</button></td>
                <td><button id="deleteBtn" class="btn btn-danger">Del</button></td>
            </tr>
            `
        }
    })
})