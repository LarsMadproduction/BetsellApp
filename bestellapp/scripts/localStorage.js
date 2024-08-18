function saveToLocalStorage(basketIndex){
    localStorage.setItem("dishname", JSON.stringify(basket[basketIndex].name));
    localStorage.setItem("dishprice", JSON.stringify(basket[basketIndex].price));
    localStorage.setItem("dishamount", JSON.stringify(basket[basketIndex].amount));
}

function getFromLocalStorage(){
JSON.parse(localStorage.getItem("dishname"));
JSON.parse(localStorage.getItem("dishprice"));
JSON.parse(localStorage.getItem("dishamount"));
}