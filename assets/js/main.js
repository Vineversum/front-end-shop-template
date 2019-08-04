let cartCounter = document.getElementById('cart-counter');
let mainContent = document.querySelector('.main__content');
let cartCount = 0;
let costAmount = 0;
mainContent.addEventListener('click', addToCart);


function addToCart(event) {
    if(event.target.classList.contains('item-actions__cart')) {
         cartCounter.innerHTML = ++cartCount;
         let str = event.target.parentElement.previousElementSibling.innerHTML;
         str = str.replace(/\$|(<\/sup>)/g, '').replace(/(<sup>)/g, '.');
         costAmount += +str;
         costAmount = Math.round(costAmount * 100) / 100;
         let defaultHTML = event.target.innerHTML;
         event.target.innerHTML = 'ADDED ' + costAmount + ' $';
         mainContent.removeEventListener('click', addToCart);
         setTimeout(() => {
             event.target.innerHTML = defaultHTML;
             mainContent.addEventListener('click', addToCart);
         }, 2000);
    }
    if(cartCount === 1) cartCounter.style.display = 'block';
}