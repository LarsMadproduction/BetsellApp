function dishesTemplate(img, headline, info){
    return `<div class="genre_tilte">
                <img class="genre_img" id="${headline}" src="${img}"/>
                <h2>${headline}</h2>
                <p>${info}</p>
            </div>`
}

function menuTemplate(name, ingredients, price, dishindex, menuindex){
    return  `<div class="menu_content">
                <div class="meal_order">
                    <h2 class="meal_title">${name}</h2>
                    <button onclick="addBasket(${dishindex},${menuindex})" class="add_meal">+</button>
                </div>
                <div class="meal_ingrediants"><h3>${ingredients}</h3></div>
                <div class="meal_price"><h2>${price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</h2>
                </div>
            </div>`
}

function basketTemplate(basketIndex){
    let newBasketItem = basket[basketIndex]
    return `<div id="eachBasket${basketIndex}">
                <div class="dish_basket">
                    <div><span id="basketDishName">${newBasketItem.name}</span></div>
                    <span class="add_price" id="addPrice${basketIndex}"></span>
                </div>
                <div class="count_basket">
                    <button onclick="delAmount(${basketIndex})" class="minus_button">-</button>
                    <span class="second_counter" id="secondclicks${basketIndex}">${newBasketItem.amount}</span>
                 <button onclick="addAmount(${basketIndex})" class="plus_button">+</button>
                </div>
            </div>`
}

function basketEmptyMessageTemplate() {
    return`
      <h2 class="align_basket">Fülle deinen Warenkorb</h2>
      <p class="align_basket">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>`
}

function basketCostTemplate() {
    return `<div class="delivery_price">
                <span>Zwischensumme:</span>
                <span id="subSum"></span>
            </div>
            <button id="totalBill" onclick="sendOrder()" class="basket_button"></button>        
            <div onclick="closeOverlay()" id="overlay" class="overlay">
            <div onclick="logDownPrev(event)" id="confirmedOrder" class="confirmed_order">Vielen Dank für deine Bestellung</div>
            </div>`
}