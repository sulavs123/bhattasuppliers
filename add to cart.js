// Define variables
var cart = [];
var addToCartButton = document.getElementById('add-to-cart');

// Add click event listener to the "Add to Cart" button
addToCartButton.addEventListener('click', function() {
    // Add the product to the cart array
    cart.push({
        name: 'Product Name',
        description: 'Description of the product.',
        price: 9.99
    });

    // Alert the user that the product has been added to the cart
    alert('Product added to cart!');
});
