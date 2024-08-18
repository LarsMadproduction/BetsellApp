let clicks = 0;
let secondclicks = 0;
let addPrice = 0;

function init(){    
    getFromLocalStorage();
    renderDishes();
    renderBottomBasket();
}

function renderDishes(){
    let dishesRef = document.getElementById('content');
    dishesRef.innerHTML = "";
    for (let dishindex = 0; dishindex < dishes.length; dishindex++) {
        let img = dishes[dishindex].img;
        let headline = dishes[dishindex].headline;
        let info = dishes[dishindex].info;
        dishesRef.innerHTML += dishesTemplate(img, headline, info, dishindex)
        for (let menuindex = 0; menuindex < dishes[dishindex]['menu'].length; menuindex++) {
            let name = dishes[dishindex]['menu'][menuindex].name;
            let ingredients = dishes[dishindex]['menu'][menuindex].ingredients;
            let price = dishes[dishindex]['menu'][menuindex].price;
            dishesRef.innerHTML += menuTemplate(name, ingredients, price, dishindex, menuindex)    
        }
    }
}

function renderBottomBasket(){
    totalValue = 0;
    document.getElementById('contentBasket').innerHTML = "";
    document.getElementById('basketTotalValue').innerHTML = "";
    if (basket.length == 0) {
        document.getElementById(`contentBasket`).innerHTML = basketEmptyMessageTemplate();
    } else {
        document.getElementById(`basketTotalValue`).innerHTML = basketCostTemplate();
    }
    renderBasket();
}

function renderBasket() {
    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
        if (basket[basketIndex].amount >= 1) {
            document.getElementById(`contentBasket`).innerHTML += basketTemplate(basketIndex);
        }
    calcSubtotal(basketIndex);
    saveToLocalStorage(basketIndex);
    }  
}

function sendOrder(){
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.remove('d_none')
    let content_dialogRef = document.getElementById('confirmedOrder');
    content_dialogRef.innerHTML = '';
    renderBottomBasket();
}

function closeOverlay() {
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.add('d_none');
    let content_dialog = document.getElementById('confirmedOrder');
    content_dialog.innerHTML = '';
    location.reload()
}

function logDownPrev(event){    
    event.stopPropagation()
}

function delBasket(){
    return emptyBasket;
}