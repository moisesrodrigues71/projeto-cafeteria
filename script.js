const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


const searchBtn = document.querySelector('#search-btn');
const searchForm = document.querySelector('.search-form');

searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
}


let cartCount = 0;

document.querySelectorAll('.menu .btn').forEach(button => {

    button.addEventListener('click', () => {

        cartCount++;

        document.querySelector('.cart-count').innerText = cartCount;

    });

});

document.addEventListener("DOMContentLoaded", () => {

const cartBtn = document.querySelector("#cart-btn");
const cartContainer = document.querySelector(".cart-container");
const cartItems = document.querySelector(".cart-items");
const cartCount = document.querySelector(".cart-count");

let count = 0;

// abrir e fechar carrinho
cartBtn.onclick = () => {
  cartContainer.classList.toggle("active");
};

// pegar todos os produtos do menu
document.querySelectorAll(".menu .box").forEach(product => {

  const button = product.querySelector(".btn");
  const name = product.querySelector("h3").innerText;

  button.addEventListener("click", () => {

    // aumenta contador
    count++;
    cartCount.innerText = count;

    // cria item do carrinho
    const li = document.createElement("li");
    li.innerText = name;

    // adiciona no carrinho
    cartItems.appendChild(li);

  });

});

});