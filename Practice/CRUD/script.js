const formDiv = document.querySelector('.form');
const createBtn = document.querySelector('.createBtn');
const closeBtn = document.querySelector('.close');
const form = document.querySelector('form');
const products = document.querySelector('.products');

let editIndex = null;
let oldImg = null;

createBtn.addEventListener('click', () => {
    formDiv.style.display = 'flex'
})

closeBtn.addEventListener('click', () => {
    formDiv.style.display = 'none'
})


const productsArr = JSON.parse(localStorage.getItem('products') || '[]') || [];



const renderUi = () => {
    products.innerHTML = '';

    productsArr.forEach((product, index) => {
        products.innerHTML += `
        <div class="product-card">
        <img src="${product.imgUrl}"
        alt="">
        <div class="content">
        <h5>${product.productName}</h5>
        <p>${product.discription}</p>
        </div>
        <div class="uty">
        <button onClick="handleEdit('${index}')">Edit</button>
        <button onClick="handleDelete('${index}')">Delete</button>
        </div>
        </div>`

    })

    formDiv.style.display = 'none'
}
renderUi();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let productName = e.target[0].value.trim();
    let discription = e.target[1].value.trim();
    let file = e.target[2].files[0];

    if (productName === "" || discription === "") {
        alert('Enter all the Details');
        return;
    }

    let imgUrl = oldImg;

    if (file) {
        imgUrl = URL.createObjectURL(file);
    }

    const product = {
        productName,
        discription,
        imgUrl
    }

    if (editIndex !== null) {
        productsArr[editIndex] = product;
        editIndex = null;
    } else {
        productsArr.push(product);
    }

    localStorage.setItem('products', JSON.stringify(productsArr));

    renderUi();
    form.reset();
})


handleEdit = (index) => {
    const product = productsArr[index];
    editIndex = index;

    form.elements[0].value = product.productName;
    form.elements[1].value = product.discription;
    oldImg = product.imgUrl;

    formDiv.style.display = 'flex';
}

handleDelete = (index) => {
    productsArr.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(productsArr));
    renderUi();
}