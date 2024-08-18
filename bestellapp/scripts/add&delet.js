function addBasket(dishindex, menuindex){
    let newBasketItem = dishes[dishindex].menu[menuindex];
    if (newBasketItem.amount == undefined || newBasketItem.amount == 0) {
        newBasketItem.amount = 1;
        basket.push(newBasketItem);
    } else {
        newBasketItem.amount++;
    }
    renderBottomBasket();
    document.getElementById('overlay').classList.add('d_none');
    document.getElementById('overlayMobile').classList.add('d_none');
}

function addAmount(basketIndex) {
    let basketItem = basket[basketIndex];
    basketItem.amount++;
    renderBottomBasket();
    document.getElementById('overlay').classList.add('d_none');   
    document.getElementById('overlayMobile').classList.add('d_none');
}

function delAmount(basketIndex) {
    let basketItem = basket[basketIndex];
    basketItem.amount--;
    if (basketItem.amount == 0) {
        basket.splice(basketIndex, 1);
    }
    renderBottomBasket();
    document.getElementById('overlay').classList.add('d_none');
    document.getElementById('overlayMobile').classList.add('d_none');
}

function calcSubtotal(basketIndex) {
    let basketItem = basket[basketIndex];
    let itemPriceSum = document.getElementById(`addPrice${basketIndex}`);
    let itemPriceSumMobile = document.getElementById(`addPriceMobile${basketIndex}`);
    let itemPriceValue = basketItem.price * basketItem.amount;
    itemPriceSum.innerHTML = `${itemPriceValue.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}`;
    itemPriceSumMobile.innerHTML = `${itemPriceValue.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}`;
    let subSum = document.getElementById(`subSum`);
    let totalBill = document.getElementById(`totalBill`);
    let subSumMobile = document.getElementById('subSumMobile');
    let totalBillMobile = document.getElementById(`totalBillMobile`);
    totalValue += itemPriceValue;
    subSum.innerHTML = totalValue.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'});
    totalBill.innerHTML = 'Bezahlen: ' + totalValue.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'});
    subSumMobile.innerHTML = totalValue.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'});
    totalBillMobile.innerHTML = 'Bezahlen: ' + totalValue.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'});
}