// pizza order part
let elForm = document.querySelector("pizza__form");
let elOrderPizza = document.querySelector(".pizza__order");
let elOrderBread = document.querySelector(".order__bread");
let elOrderSize = document.querySelector(".order__size");
let elOrderIngredients = document.querySelector(".order__ingredients");
let elOrderExtra = document.querySelector(".order__extra");

// order result part
let elBreadResult = document.querySelector(".bread__result");
let elSizeResult = document.querySelector(".size__result");
let elIngredientsResult = document.querySelector(".ingredients__result");
let elExtraResult = document.querySelector(".extra__result");

// arrays-list
let pizzaBreadArray = ["Yupqa", "O'rta", "Qalin"];
let pizzaSizeArray = ["25sm", "30sm", "35sm"];
let pizzaIngredientsArray = ["Pomidor", "Kurka go'shti", "Zaytun", "Tuzlangan bodring", "Qo'ziqorin", "Qazi"];
let pizzaExtraArray = ["Achchiq", "Sosiskali"];
let checkedIngredientsArray = [];
let checkedAdditonalArray = []; 


// pizza-bread-array
for (let i = 0; i < pizzaBreadArray.length; i++) {
  let pizzaBreadOption = document.createElement("option");
  elOrderBread.appendChild(pizzaBreadOption);

  pizzaBreadOption.textContent = pizzaBreadArray[i];
  pizzaBreadOption.value = pizzaBreadArray[i];

  elOrderBread.addEventListener("change", function(evt) {
    evt.preventDefault();

    elBreadResult.textContent = elOrderBread.value;
  })
}


// pizza-size-array
for (let i = 0; i < pizzaSizeArray.length; i++) {
  
  let pizzaRadio = document.createElement("div");
  let pizzaSize = document.createElement("p");
  let radioInput = document.createElement("input");

  elOrderSize.appendChild(pizzaRadio);
  pizzaRadio.appendChild(pizzaSize);
  pizzaRadio.appendChild(radioInput);

  pizzaRadio.setAttribute("class", "form-check");
  pizzaSize.setAttribute("class", "text-start");
  radioInput.setAttribute("class", "radio__input form-check-input me-5 p-5");
  radioInput.setAttribute("type", "radio");
  radioInput.setAttribute("name", "pizza-size");

  pizzaSize.textContent = pizzaSizeArray[i];
  radioInput.value = pizzaSizeArray[i]; 

  radioInput.addEventListener("change", function (evt) {
      evt.preventDefault();

      elSizeResult.textContent = radioInput.value;
  })
}


// pizza-on-products-array

for (let i = 0; i < pizzaIngredientsArray.length; i++) {

  let elNewCheckBox = document.createElement("input");
  let newLi = document.createElement("div");
  let newLabel = document.createElement("label");

  newLi.setAttribute("class", "form-check col-6 d-flex align-items-center mb-1")
  elNewCheckBox.type = "checkbox";
  newLabel.textContent = pizzaIngredientsArray[i]
  newLabel.setAttribute("for", i);
  newLabel.setAttribute("class", "form-check-label");
  elNewCheckBox.setAttribute("class", "form-check-input me-3 p-3"); 

  elNewCheckBox.id = i;
  newLi.append(elNewCheckBox, newLabel);

  elNewCheckBox.addEventListener('change', function(evt) {
    evt.preventDefault();

    if(checkedIngredientsArray.includes(newLabel.textContent)){

      let index = checkedIngredientsArray.indexOf(this.value);
      checkedIngredientsArray.splice(index, 1);

    }

    else {

      checkedIngredientsArray.push(newLabel.textContent);

    }

    elIngredientsResult.innerHTML = " ";

    for(let i = 0; i < checkedIngredientsArray.length; i++){

      let elNewLi = document.createElement("div");
      elNewLi.setAttribute("class", "text-start mb-1");
      elNewLi.textContent = checkedIngredientsArray[i];
      elIngredientsResult.appendChild(elNewLi);
    }
  })
  elOrderIngredients.append(newLi);
}


// pizza-extra-order-array
for (let i = 0; i < pizzaExtraArray.length; i++) {

  let elNewCheckBoxi = document.createElement("input");
  let newLii = document.createElement("div");
  let newLabeli = document.createElement("label");

  elNewCheckBoxi.type = "checkbox";
  elNewCheckBoxi.id = item;
  newLi2.setAttribute("class", "form-check col-6 d-flex align-items-center mb-1")
  elNewCheckBoxi.setAttribute("class", "form-check-input me-3 p-3"); 
  newLabel2.setAttribute("for", "item");
  newLabel2.setAttribute("class", "form-check-label");

  newLabel2.textContent = pizzaExtraArray[i];
  newLi2.append(elNewCheckBoxi, newLabeli);

  elNewCheckBoxi.addEventListener('change', function(evt) {
    evt.preventDefault();

    if(checkedAdditonalArray.includes(newLabeli.textContent)){

      let indexi = checkedAdditonalArray.indexOf(this.value);
      checkedAdditonalArray.splice(indexi, 1);

    }

    else {

      checkedAdditonalArray.push(newLabeli.textContent);

    }

    elExtraResult.innerHTML = "";

    for(let i = 0; i < checkedAdditonalArray.length; i++){

      let elNewLii = document.createElement("li");
      elNewLii.setAttribute("class", "text-start mb-1");
      elNewLii.textContent = checkedAdditonalArray[i];
      elExtraResult.appendChild(elNewLii);
    }

  })
  elOrderExtra.appendChild(newLii);
}