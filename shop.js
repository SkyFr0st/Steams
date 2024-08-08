const product = [
    { id: 0, image: 'img/dead-by-daylight.jpg', title: 'Dead by daylight', price: 390 },
    { id: 1, image: 'img/battlefield-v.jpg', title: 'Battlefield V', price: 799 },
    { id: 2, image: 'img/killing-floor-2.jpg', title: 'Killing Floor 2', price: 599 },
    { id: 3, image: 'img/tom-clancys-rainbow-six-siege.jpg', title: "Tom clancy's rainbow six siege", price: 560 }
];

const categories = [...new Set(product.map(item => item))];
let i = 0;

document.getElementById('root').innerHTML = categories.map(item => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image} alt=${title}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>฿ ${price}.00</h2>
                <button onclick='addtocart(${i++})'>Add to cart</button>
            </div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "฿ 0.00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map(items => {
            var { image, title, price } = items;
            total += price;
            document.getElementById("total").innerHTML = "฿ " + total + ".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image} alt=${title}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>฿ ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
                </div>`
            );
        }).join('');
    }
}

function myfunction() {
    // Display a thank you message
    alert("ขอบคุณครับที่ใช้บริการ");

    // Optionally, clear the cart
    cart = [];
    displaycart();
}

// Attach the function to the button
document.getElementById("btn-submit").addEventListener("click", myfunction);