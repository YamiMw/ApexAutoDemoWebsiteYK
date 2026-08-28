
// Mock Database Array using local image paths
const carData = [
    { 
        id: 1, 
        make: "tesla", 
        body: "sedan", 
        price: 55000000, 
        title: "Tesla Model 3 Long Range", 
        year: 2023, 
        mileage: "12,000 mi", 
        img: "images/tesla-model3.jpg" 
    },
    { 
        id: 2, 
        make: "bmw", 
        body: "suv", 
        price: 89000000, 
        title: "BMW X5 M-Sport", 
        year: 2024, 
        mileage: "5,500 mi", 
        img: "images/bmw-x5.jpg" 
    },
    { 
        id: 3, 
        make: "porsche", 
        body: "coupe", 
        price: 145000000, 
        title: "Porsche 911 Carrera S", 
        year: 2022, 
        mileage: "8,200 mi", 
        img: "images/porsche-911.jpg" 
    },
    { 
        id: 4, 
        make: "tesla", 
        body: "suv", 
        price: 95000000, 
        title: "Tesla Model X", 
        year: 2023, 
        mileage: "15,100 mi", 
        img: "images/tesla-modelx.jpg" 
    },
    { 
        id: 5, 
        make: "bmw", 
        body: "sedan", 
        price: 42000000, 
        title: "BMW 3 Series 330i", 
        year: 2021, 
        mileage: "24,000 mi", 
        img: "images/bmw-3series.jpg" 
    }
];


// Keep the remainder of your filterCars() and displayCars() functions exactly the same.

// Display inventory function
function displayCars(cars) {
    const container = document.getElementById("car-listings");
    container.innerHTML = "";

    if(cars.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #777; padding: 40px 0;">No vehicles match your search criteria.</p>`;
        return;
    }

    cars.forEach(car => {
        const card = document.createElement("div");
        card.className = "car-card";
        card.innerHTML = `
            <img src="${car.img}" alt="${car.title}" class="car-image">
            <div class="car-info">
                <div class="car-title">${car.title}</div>
                <div class="car-specs">
                    <span>${car.year}</span>
                    <span>${car.mileage}</span>
                    <span>${car.body.toUpperCase()}</span>
                </div>
                <div class="car-price-row">
                    <span class="car-price">K${car.price.toLocaleString()}</span>
                    <button class="btn-view">View Details</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Filtering Logic
function filterCars() {
    const makeVal = document.getElementById("filter-make").value;
    const bodyVal = document.getElementById("filter-body").value;
    const priceVal = document.getElementById("filter-price").value;

    const filtered = carData.filter(car => {
        const matchMake = (makeVal === "all" || car.make === makeVal);
        const matchBody = (bodyVal === "all" || car.body === bodyVal);
        const matchPrice = (priceVal === "all" || car.price <= parseInt(priceVal));
        
        return matchMake && matchBody && matchPrice;
    });

    displayCars(filtered);
}

// Initial Page Load
window.onload = () => {
    displayCars(carData);
};
