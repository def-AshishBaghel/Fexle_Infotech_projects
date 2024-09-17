document.addEventListener('DOMContentLoaded', function() {
    // Function to handle the logic for each set of buttons
    function setupOrderButtons(orderButton, quantitySection) {
        const decrementButton = quantitySection.querySelector('.decrement');
        const incrementButton = quantitySection.querySelector('.increment');
        const quantityDisplay = quantitySection.querySelector('.quantity');

        orderButton.addEventListener('click', function() {
            // Hide the Order Now button
            orderButton.style.display = 'none';
            // Show the quantity section
            quantitySection.style.display = 'block';
        });

        decrementButton.addEventListener('click', function() {
            let quantity = parseInt(quantityDisplay.textContent);
            if (quantity > 1) {
                quantity--;
                quantityDisplay.textContent = quantity;
            }
            // Restore the Order Now button if quantity is 1
            if (quantity === 1) {
                orderButton.style.display = 'block';
                quantitySection.style.display = 'none';
            }
        });

        incrementButton.addEventListener('click', function() {
            let quantity = parseInt(quantityDisplay.textContent);
            quantity++;
            quantityDisplay.textContent = quantity;
        });
    }

    // Get all button-box elements
    const buttonBoxes = document.querySelectorAll('.button-box');
    
    buttonBoxes.forEach(function(box) {
        const orderButton = box.querySelector('.ord');
        const quantitySection = box.querySelector('.addtokart2');
        setupOrderButtons(orderButton, quantitySection);
    });
});