document.addEventListener('DOMContentLoaded', (event) => {
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const quantityElement = document.getElementById('quantity');

    let quantity = parseInt(quantityElement.textContent);

    decrementButton.addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            quantityElement.textContent = quantity;
        }
    });

    incrementButton.addEventListener('click', () => {
        quantity++;
        quantityElement.textContent = quantity;
    });
});
