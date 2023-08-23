// Get all add-to-cart buttons
var addToCartButtons = document.querySelectorAll('.Add to Cart');

// Add click event listener to each button
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', addToCart);
});

// Handle add-to-cart button click event
function addToCart(event) {
  var product = event.target.parentElement;
  var productName = product.querySelector('h3').innerText;

  // Create a new cart item
  var cartItem = document.createElement('li');
  cartItem.innerText = productName;

  // Append the item to the cart
  var cartItems = document.getElementById('cart-items');
  cartItems.appendChild(cartItem);
}