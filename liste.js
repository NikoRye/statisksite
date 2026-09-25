"use strict";

const productURL = "https://kea-alt-del.dk/t7/api/products";
const listContainer = document.querySelector(".product_list_container");

function getData() {
  fetch(productURL).then((result) => result.json().then((data) => showData(data)));
}

function showData(products) {
  console.log("first product", products[0]);
  listContainer.innerHTML = "";

  products.forEach((product) => {
    let soldoutClass = "";

    if (product.soldout) {
      soldoutClass = "soldout";
    }

    listContainer.innerHTML += `
    <article class="product ${soldoutClass}">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Placeholder" />
        <h3>${product.productdisplayname}</h3>
        <p>${product.brandname} - Tshirts</p>
        <div>
            <p>${product.price} kr</p>
        </div>
        <p>
            <a href="produkt.html?id=${product.id}">Read More</a>
        </p>
        <p class="soldout_tag">Sold Out</p>
    </article>
`;
  });
}

getData();
