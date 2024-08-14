function addBasket(basketindex, menuindex){
    // if (`clicks${basketindex}` >= 0 ) {
    //     addAmount();
    // }else{
    let dishItem = dishes[basketindex]['menu'];
    shoppingBasket.push(dishItem);
    let contentBasketRef = document.getElementById('contentBasket');
    let name = dishes[basketindex]['menu'][menuindex].name;
    contentBasketRef.innerHTML += basketTemplate(name, basketindex, menuindex);
    clicks += 1;
    secondclicks += 1;
    addPrice += dishes[basketindex]['menu'][menuindex].price;
    document.getElementById(`clicks${menuindex}`).innerHTML = clicks;
    document.getElementById(`secondclicks${basketindex}`).innerHTML = secondclicks;
    document.getElementById(`addPrice${basketindex}`).innerHTML = addPrice.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'});  
    }
// }

// function addBasket(basketindex){

// }

function addAmount(basketindex){
    // let dishItem = dishes[basketindex].menu;
    // shoppingBasket.push(dishItem);
    // let contentBasketRef = document.getElementById('contentBasket');
    // contentBasketRef.innerHTML += basketTemplate(basketindex);
    clicks += 1;
    secondclicks += 1;
    addPrice += dishes[basketindex].menu[0].price;
    document.getElementById(`clicks${basketindex}`).innerHTML = clicks;
    document.getElementById(`secondclicks${basketindex}`).innerHTML = secondclicks;
    document.getElementById(`addPrice${basketindex}`).innerHTML = addPrice.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'});
}

function delAmount(basketindex){
    clicks -= 1;
    secondclicks -= 1;
    addPrice -= dishes[basketindex].menu[0].price;
    document.getElementById(`clicks${basketindex}`).innerHTML = clicks;
    document.getElementById(`secondclicks${basketindex}`).innerHTML = secondclicks;
    document.getElementById(`addPrice${basketindex}`).innerHTML = addPrice.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'});
    if (clicks <= 1) {
        document.getElementById(`eachBasket${basketindex},${menuindex}`).remove;
    }
}