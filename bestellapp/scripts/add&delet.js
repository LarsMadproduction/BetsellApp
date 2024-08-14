function addBasket(basketindex){
    if (`clicks${basketindex}` >= 0 ) {
        addAmount();
    }else{
    let dishItem = dishes[basketindex].menu;
    shoppingBasket.push(dishItem);
    let contentBasketRef = document.getElementById('contentBasket');
    let name = dishes[basketindex].menu[0].name;
    contentBasketRef.innerHTML += basketTemplate(name, basketindex);
    clicks += 1;
    secondclicks += 1;
    addPrice += dishes[basketindex].menu[0].price;
    document.getElementById(`clicks${basketindex}`).innerHTML = clicks;
    document.getElementById(`secondclicks${basketindex}`).innerHTML = secondclicks;
    document.getElementById(`addPrice${basketindex}`).innerHTML = addPrice.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'});  
    }
}

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
    if (clicks <= 0) {
        document.getElementById(`eachBasket${basketindex}`).classList.add('d_none');
    }
}