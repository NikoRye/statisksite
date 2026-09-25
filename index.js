"use strict";

const productUrl = "https://kea-alt-del.dk/t7/api/categories";
const categoryList = document.querySelector(".category_list_container");

getData();

function getData() {
  fetch(productUrl)
    .then((result) => result.json())
    .then((data) => showData(data));
}

function showData(data) {
  let myInnerHTML = "";

  data.forEach((element) => {
    myInnerHTML += `
      <a href="produktliste.html">
        <article class="category_card">
          <h2>${element.category}</h2>
        </article>
      </a>
    `;
  });

  categoryList.innerHTML = myInnerHTML;
}
