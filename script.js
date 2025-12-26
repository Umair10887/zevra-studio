let cart=[];
function addToCart(n,p){cart.push({n,p});localStorage.setItem("cart",JSON.stringify(cart));}
function orderNow(){window.open("https://wa.me/923244238587");}