// ===========================
// Offer Finder JavaScript
// Created by Kamlesh
// ===========================

// Elements
const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");

// ===========================
// Search Function
// ===========================

function searchProducts() {

    let value = searchBox.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let product = card.querySelector("h3").innerText.toLowerCase();

        let category = card.dataset.category.toLowerCase();

        if(product.includes(value) || category.includes(value)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}

// Search while typing
searchBox.addEventListener("keyup", searchProducts);

// Search button click
searchBtn.addEventListener("click", searchProducts);

// ===========================
// View Offer Button
// ===========================

let buttons = document.querySelectorAll(".card button");

buttons.forEach(function(btn){

    btn.addEventListener("click",function(){

        alert("Offer details will be added soon!");

    });

});

// ===========================
// Welcome Message
// ===========================

window.onload = function(){

    console.log("Offer Finder Loaded Successfully");

};

// ===========================
// Scroll To Top Button
// ===========================

let topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "15px";
topButton.style.background = "#1e88e5";
topButton.style.color = "white";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.cursor = "pointer";

document.body.appendChild(topButton);

topButton.onclick = function(){

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};

// ===========================
// Dark Mode
// ===========================

let dark = false;

let modeButton = document.createElement("button");

modeButton.innerHTML = "🌙";

modeButton.style.position = "fixed";
modeButton.style.bottom = "80px";
modeButton.style.right = "20px";
modeButton.style.padding = "15px";
modeButton.style.background = "black";
modeButton.style.color = "white";
modeButton.style.border = "none";
modeButton.style.borderRadius = "50%";
modeButton.style.cursor = "pointer";

document.body.appendChild(modeButton);

modeButton.onclick = function(){

    if(!dark){

        document.body.style.background = "#121212";
        document.body.style.color = "white";
        dark = true;

    }else{

        document.body.style.background = "#f5f5f5";
        document.body.style.color = "black";
        dark = false;

    }

};

// ===========================
// Wishlist
// ===========================

let wishlist = [];

function addWishlist(product){

    wishlist.push(product);

    console.log(wishlist);

}

// ===========================
// Notification
// ===========================

setTimeout(function(){

    console.log("Today's Offers Updated");

},3000);