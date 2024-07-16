console.log("Welcome To Food Mania");

const wrapper = document.getElementById('wrapper');
const registerlink = document.getElementById('register-link');
const loginlink = document.getElementById('login-link');
console.log(wrapper);
console.log(registerlink);
console.log(loginlink);
if(registerlink){
    registerlink.addEventListener("click",()=>{
        wrapper.classList.add("active");
    });
}
if(loginlink){
    loginlink.addEventListener("click",()=>{
        wrapper.classList.remove("active");
    });
}
//index liked styling
function Toggle(id){
    console.log(id);
    var element =document.getElementById(id);
    if(element.style.color== 'yellow'){
        element.style.color = 'rgb(39, 38, 38)';
        
    }
    
    else {
        element.style.color = 'yellow';
       
    }
}

// Delivery cart Style
let cartItems = [];

function toggleCart() {
    const cartBox = document.getElementById('cart-box');
    cartBox.style.display = cartBox.style.display === 'block' ? 'none' : 'block';
}

function addToCart(productName) {
    const existingItem = cartItems.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ name: productName, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';

    cartItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'cart-item';
        listItem.style.listStyleType = 'none'; 
        
        listItem.innerHTML = `
            ${item.name} 
            <div class="quantity">
                <button class="remove" onclick="changeQuantity(${index}, -1)"> - </button>
                <input type="text" value="${item.quantity}" readonly>
                <button class="add" onclick="changeQuantity(${index}, 1)"> + </button>
            <button class="delete-btn" onclick="removeFromCart(${index})">×</button>
            </div>
        `;
        
        cartItemsList.appendChild(listItem);
    });
    updateCartCount();
}
function updateCartCount() {
    const cartCount = document.getElementById('Cart-count');
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function changeQuantity(index, delta) {
    if (cartItems[index].quantity + delta > 0) {
        cartItems[index].quantity += delta;
    } else {
        cartItems.splice(index, 1);
    }
    updateCart();
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}
