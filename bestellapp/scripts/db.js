let shoppingBasket = []
let dishes = [
    {   
        "img": "./assets/img/insalata.jpg",
        "headline": "Salate",
        "info": "Alle Salate werden mit gemischtem Salat zubereitet und mit 5 Brötchen und Kräuter-Creme serviert.",
        "menu":[
            {
                "name": "Insalata Verde",
                "ingredients": "mit grünem Salat, ohne gemischten Salat",
                "price": 5.50,
                "added": true,
            },
            {
                "name": "Insalata Cippolina",
                "ingredients": "mit grünem Salat, Zwiebeln und Oliven, ohne gemischten Salat",
                "price": 6.50,
                "added": true,
            },
            {
                "name": "Insalata Mista",
                "ingredients": "mit Dressing",
                "price": 6.50,
                "added": true,
            },
            {
                "ingredients": "mit Formfleisch-Vorderschinken und Ananas",
                "name": "Insalata Hawaii",
                "added": true,
                "price": 6.50,
            },
            {
                "name": "Insalata Capricciosa",
                "ingredients": "mit Thunfisch, Formfleisch-Vorderschinken und Käse",
                "price": 8.50,
                "added": true,
            },
        ]
    },
    {
        "img": "./assets/img/Pizzaitalia.jpg",
        "headline": "Pizza",
        "info": "Alle Pizzen werden mit Tomatensauce, Oregano und Käse zubereitet.",
        "menu": [
            {
                "name": "Pizza Tonno",
                "ingredients": "mit Thunfisch",
                "price": 8.00,
                "added": true,
            },
            {
                "name": "Pizza Salami",
                "ingredients": "mit Salami",
                "price": 7.00,
                "added": true,
            },
            {
                "name": "Pizza Funghi",
                "ingredients": "mit Champignons",
                "price": 6.50,
                "added": true,
            },
            {
                "name": "Pizza Capricciosa",
                "ingredients": "mit Formfleisch-Vorderschinken, Champignons, Thunfisch und Artischocken",
                "price": 8.50,
                "added": true,
            },
            {
                "name": "Pizza Pirata Speciale",
                "ingredients": "mit Fleischsauce und Spaghetti",
                "price": 9.50,
                "added": true,
            },
        ]
    },
    {
        "img": "./assets/img/pizzaamerica.jpg",
        "headline": "American Pizza",
        "info": "Alle Pizzen werden mit doppeltem Teig und doppeltem Käse zubereitet.",
        "menu": [
            {
                "name": "Pizza Barbecue",
                "ingredients": "mit Barbecuesauce, Speck, Zwiebeln und Hackfleisch",
                "price": 11.00,
                "added": true,
            },
            {
                "name": "Pizza Amigo",
                "ingredients": "mit Putenfleisch und Ananas",
                "price": 11.00,
                "added": true,
            },
            {
                "name": "Pizza Amigo Special",
                "ingredients": "mit Putenfleisch, Champignons und Zwiebeln",
                "price": 11.00,
                "added": true,
            },
            {
                "name": "Pizza alla Tedesca",
                "ingredients": "mit Hähnchen, Champignons, Erbsen und Sauce Hollandaise",
                "price": 11.00,
                "added": true,
            },
            {
                "name": "Pizza Pollo",
                "ingredients": "mit Putenfleisch, Broccoli und Sauce Hollandaise",
                "price": 11.00,
                "added": true,
            },
        ]
    },
    {
        "img": "./assets/img/pasta.jpg",
        "headline": "Pasta",
        "info": "",
        "menu": [
            {
                "name": "Spaghetti Carbonara",
                "ingredients": "mit Speck, Ei, Pfeffer und Sahnesauce",
                "price": 8.50,
                "added": true,
            },
            {
                "name": "Spaghetti Frutti di Mare",
                "ingredients": "mit Meeresfrüchten, Tomatensauce und Knoblauch",
                "price": 9.50,
                "added": true,
            },
            {
                "name": "Spaghetti Bologna",
                "ingredients": "mit Hackfleischsauce",
                "price": 8.50,
                "added": true,
            },
            {
                "name": "Tagliatelle Napoli",
                "ingredients": "mit Tomatensauce",
                "price": 8.00,
                "added": true,
            },
            {
                "name": "Tagliatelle Tricolore",
                "ingredients": "mit Basilikum, Mozzarella, Tomatensauce und Knoblauch",
                "price": 9.00,
                "added": true,
            },
        ]
    },
    {
        "img": "./assets/img/alforno.jpg",
        "headline": "Al Forno",
        "info": "",
        "menu": [
            {
                "name": "Spaghetti 4 Formaggi",
                "ingredients": "mit 4 Käsesorten",
                "price": 9.00,
                "added": true,
            },
            {
                "name": "Lasagne",
                "ingredients": "mit Fleischsauce",
                "price": 9.00,
                "added": true,
            },
            {
                "name": "Combinazione",
                "ingredients": "mit Tortellini, Lasagne und Cannelloni",
                "price": 9.00,
                "added": true,
            },
            {
                "name": "Tortellini al Forno",
                "ingredients": "mit Formfleisch-Vorderschinken, Champignons und Ei",
                "price": 9.00,
                "added": true,
            },
            {
                "name": "Maccheroni al Forno",
                "ingredients": "mit Formfleisch-Vorderschinken, Champignons und Ei",
                "price": 9.00,
                "added": true,
            },
        ]
    },
    {
        "img": "./assets/img/softdrink.jpg",
        "headline": "Getränke",
        "info": "",
        "menu": [
            {
                "name": "Coca Cola 1,0l",
                "ingredients": "Coca-Cola steht für einzigartigen Geschmack, Erfrischung und Momente voller Lebensfreude. Die 1,0l PET Mehrwegflasche für die perfekte Erfrischung für jeden Tag - allein oder zu zweit.",
                "price": 3.00,
                "added": true,
            },
            {
                "name": "Sprite 1,0l",
                "ingredients": "Bist du bereit für Sprite, Die einzigartige Formel aus grünen Limetten und sonnengelben Zitronen erfrischt dich maximal.",
                "price": 3.00,
                "added": true,
            },
            {
                "name": "Fanta 1,0l",
                "ingredients": "Trinke Fanta. Lebe bunter. Spritzig erfrischend begleitet die originale Fanta Orange jede Lebenssituation und macht jetzt noch mehr Spaß.",
                "price": 3.00,
                "added": true,
            },
            {
                "name": "Coca Cola light 1,0l",
                "ingredients": "Leichter als das Original und in stylischem Design überzeugt Cola Light nicht nur die eigene Fangemeinschaft - und das komplett zucker- und kalorienfrei.",
                "price": 3.00,
                "added": true,
            },
            {
                "name": "Coca Cola Zero 1,0l",
                "ingredients": "Leichter als das Original und in stylischem Design überzeugt Cola Zero nicht nur die eigene Fangemeinschaft - und das komplett zucker- und kalorienfrei.",
                "price": 3.00,
                "added": true,
            },
        ]
    },
]
