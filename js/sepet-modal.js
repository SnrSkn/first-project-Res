
let cart = [];
const cartButton = document.querySelector('.btn-cart');

document.querySelectorAll('.urun button').forEach(button => {
    button.addEventListener('click', function () {
        const product = {
            description: this.parentElement.querySelector('p').innerText,
            image: this.parentElement.previousElementSibling.src
        };
        cart.push(product);
        updateCartCount();
    });
});

cartButton.addEventListener('click', function () {
    showCart();
});

function showCart() {
    if (cart.length === 0) {
        alert('Sepetinizde ürün yok.');
        return;
    }

    const cartModal = document.createElement('div');
    cartModal.classList.add('sepet-modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('sepet-modal-icerik');
    modalContent.innerHTML = `<h2>Sepetiniz</h2>`;

    const cartItemsContainer = document.createElement('div');
    cartItemsContainer.classList.add('sepet-items');

    cart.forEach(product => {
        const productContainer = document.createElement('div');
        productContainer.classList.add('sepet-item');
        productContainer.innerHTML = `
    <img src="${product.image}" alt="${product.description}" style="width: 70px; height: auto; margin-right: 10px;">
    <span>${product.description}</span>`;
        cartItemsContainer.appendChild(productContainer);
    });

    modalContent.appendChild(cartItemsContainer);

    const closeButton = document.createElement('button');
    closeButton.classList.add('sepet-btn');
    closeButton.textContent = 'Kapat';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(cartModal);
    });
    modalContent.appendChild(closeButton);

    cartModal.appendChild(modalContent);
    document.body.appendChild(cartModal);
}

