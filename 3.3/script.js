let products = [
    { id: 1, name: 'Samsung Galaxy' },
    { id: 2, name: 'Oppo A71' },
    { id: 3, name: 'Apple Ip 6S' },
    { id: 4, name: 'Nokia 5' },
    { id: 5, name: 'Sony Xperia' },
];


function displayProducts() {
    const tableBody = document.getElementById('product-table-body');
    tableBody.innerHTML = '';

    for (const product of products) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>
                <button onclick="editProduct(${product.id})">Sửa</button>
                <button onclick="deleteProduct(${product.id})">Xóa</button>
            </td>
        `;
        tableBody.appendChild(row);
    }
}


function addProduct(productName) {
    const newProduct = {
        id: products.length + 1,
        name: productName
    };
    products.push(newProduct);
    displayProducts();
}


function editProduct(productId) {
    const newName = prompt('Nhập tên mới cho sản phẩm:');
    const productIndex = products.findIndex(product => product.id === productId);

    if (productIndex !== -1 && newName !== null) {
        products[productIndex].name = newName;
        displayProducts();
    }
}


function deleteProduct(productId) {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');

    if (confirmDelete) {
        products = products.filter(product => product.id !== productId);
        displayProducts();
    }
}


const addProductForm = document.getElementById('add-product-form');
addProductForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const productName = document.getElementById('productName').value;
    addProduct(productName);
    addProductForm.reset();
});


displayProducts();