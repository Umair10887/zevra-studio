let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
cart.push({name, price});
localStorage.setItem("cart", JSON.stringify(cart));
alert("Added to cart");
}

function loadCart(){
let cartDiv = document.getElementById("cart");
if(!cartDiv) return;
let total = 0;
cartDiv.innerHTML = "";
cart.forEach(item=>{
cartDiv.innerHTML += `<p>${item.name} - Rs. ${item.price}</p>`;
total += item.price;
});
cartDiv.innerHTML += `<h3>Total: Rs. ${total}</h3>`;
}

function orderNow(){
let msg = "Order from ZEVRA Studio:%0A";
cart.forEach(i=>{
msg += i.name + " - Rs. " + i.price + "%0A";
});
window.open("https://wa.me/923244238587?text=" + msg);
}

loadCart();
