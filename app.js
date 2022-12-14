let results = document.getElementById("results");


const orders = [

    {
        id: 1,
        pizza: "Hawaii",
        extra: "Kukrica",
        ital: "Pepsi zero",
        ar: 1500,
        kep: "https://images.pexels.com/photos/1878346/pexels-photo-1878346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        pizza: "Pepperoni",
        extra: "",
        ital: "Pepsi zero",
        ar: 1850,
        kep: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 3,
        pizza: "Margherita",
        extra: "Csirke",
        ital: "Pepsi",
        ar: 1350,
        kep: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 4,
        pizza: "BBQ Chicken",
        extra: "Kukrica",
        ital: "Pepsi",
        ar: 2050,
        kep: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 5,
        pizza: "Buffalo",
        extra: "ananász",
        ital: "Pepsi zero",
        ar: 2300,
        kep: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 6,
        pizza: "Vegetáriánus",
        extra: "Kukrica",
        ital: "Sprite",
        ar: 2000,
        kep: "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]


window.addEventListener("load", ()=>{

    output = "";

    orders.map((pizza)=>{

        output += `<div class="col-lg-4 text-center">
            <div class="order">
                <img class="imageCon" src="${pizza.kep}">
                <h3>${pizza.pizza}</h3>
                <p>${pizza.extra}</p>
                <p>${pizza.ital}</p>
                <h3>${pizza.ar}</h3>
            </div>
        </div>`
    })
    results.innerHTML = output;
})