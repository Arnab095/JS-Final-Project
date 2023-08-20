var itemsInCart = 0;
var itemsInCart = localStorage.getItem("quantity");
var miniCart = document.createElement("span");
miniCart.id = "miniCart";
var addCart = $("#addCart").append(miniCart);
miniCart.innerText = itemsInCart;
