// Simulación de productos
const products = [
    { id: 1, title: 'Pastor Aleman', description: 'Se ha encontrado pastor aleman', price: '100€', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4ir7qxd2_RlqMp6l12zjeLI_EE3sO1ulMZYDrHrlN-x2SbHu' },
    { id: 2, title: 'Husky Siberiano', description: 'Se busca husky', price: '300€', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2J1bwGJrRJbNq9cYZjGLxce1N_ZX585bTX8i-cC_u9a_pJsmNJY5KN6JwpMhTDpcHbyPBp9Ar_fY0ZTy58c0uKpdt3pdNV51a1VcOOE' },
    { id: 3, title: 'Perro Salchicha', description: 'Se ofrece perro salchicha', price: '50€', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcm7pw5E1Y_AHdhIf0SfAyoahud7cIjN4GXntNOUjWVa8kKlXR' },
];

// Función para renderizar los productos en la página
function renderProducts(productList) {
    const productListEl = document.getElementById('product-list');
    productListEl.innerHTML = '';
    productList.forEach(product => {
        const productEl = document.createElement('div');
        productEl.classList.add('product');
        productEl.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3>${product.title}</h3>
            <p>${product.price}</p>
            <button onclick="showProductDetails(${product.id})">Ver detalles</button>
        `;
        productListEl.appendChild(productEl);
    });
}

// Función para mostrar los detalles de un producto
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = product.price;
    document.getElementById('product-details').style.display = 'block';
}

// Función para cerrar el modal
document.querySelector('.close').onclick = function() {
    document.getElementById('product-details').style.display = 'none';
}

// Buscador de productos
document.getElementById('search').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm));
    renderProducts(filteredProducts);
});

// Inicializar los productos al cargar la página
window.onload = function() {
    renderProducts(products);
};
