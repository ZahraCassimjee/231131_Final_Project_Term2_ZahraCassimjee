let subOrders = [];


makeSub = () => {
  let sTotal = 0;
  //sub name
  let sName = document.getElementById("subName").value;

//bread type
let bread = document.getElementById("bread").value; 
    if(bread === "Honey wheat"){
        realTimePrice = realTimePrice + 30;
    } else if(bread === "French loaf"){
        realTimePrice = realTimePrice + 40;
    } else if(bread === "Whole wheat"){
        realTimePrice = realTimePrice + 50;
    }



  
//toppings
  let toppings = document.getElementsByName("toppings");
  let topArray = [];
  for (let i = 0; i < toppings.length; i++) {
    if (toppings[i].checked) {
      topArray.push(toppings[i].value);
      sTotal = sTotal + +toppings[i].dataset.cost;
    }
  }


//sauces
  let sauce = document.getElementsByName("sauceRadio");
  let sauceValue;
  for (let i = 0; i < sauce.length; i++) {
    if (sauce[i].checked) {
        sauceValue = sauce[i].value;
      sTotal = sTotal + +sauce[i].dataset.cost;
    }
  }



  subOrders.push({
    Name: sName,
    Sauce: sauceValue,
    Toppings: topArray,
    Price: sTotal,
  });

  document.getElementById("subForm").reset();
};

//card display
displaySubOrders = () => {
   
    let area = document.getElementById("orders");
   

    area.innerHTML = "";

  let overallTotal = 0;

  for (let i = 0; i < subOrders.length; i++) {
    let name = subOrders[i].Name;
    let sauce = subOrders[i].Sauce;
    let toppings = subOrders[i].toppings;
    let price = subOrders[i].Price;

    overallTotal += price;

    area.innerHTML += `
    <div class="col-6">
            <div class="card" style="width: 100%;">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p>Size:  ${sauce}</p>
                <p>Ingredients:  ${toppings}</p>
                <p>Total Cost: R${price}.00</p>
              </div>
            </div>
          </div>
          `;

  }
};




checkOut = () => {


    window.location.href = "checkout.html";
    
    }