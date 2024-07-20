import { checkToken, redirect } from "./utils.js";

(function () {
  const hasToken= checkToken()
  if (hasToken == false) {
    redirect("/login.html");
  }
})();

const products = [];
const button = document.getElementById("button");
const ul = document.getElementById("ul");
const imageInput = document.getElementById("image");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const descriptionInput = document.getElementById("description");

button.onclick = function handleSubmit() {
  
  const newProduct = {
    image: imageInput.value,
    name: nameInput.value,
    price: priceInput.value,
    description: descriptionInput.value,
  };
  
  products.push(newProduct);
  
  const addProducts = products.map((product) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${product.image}" style="width: 250px;">
        <div> <h2>${product.name}</h2>
              <p><strong>${product.price}$</strong></p>
        </div>
        <p>${product.description}</p>`;
      return li;
    });

    ul.innerHTML = '';

    addProducts.forEach((li) => {
      ul.append(li);
    })
  
    imageInput.value = "";
    nameInput.value = "";
    priceInput.value = "";
    descriptionInput.value = "";
}