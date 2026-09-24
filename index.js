"use strict";
const productUrl = "https://kea-alt-del.dk/t7/api/categories";
getData();
function getData() {
  fetch(productUrl).then((result) => result.json().then((data) => showData(data)));
}

function showData(data) {
  data.forEach((element) => {
    console.log("DATA, data");
  });
}
