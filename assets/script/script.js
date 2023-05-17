//ex 1
class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 — то есть 10*31


//ex 2
const div = document.querySelector('.wrapper');
const element = document.createElement('div');
class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }
    
    getInfo() {
        return `Type: ${this.type}<br/> Brand: ${this.brand}`;
    }

    getPrice() {
        return `Price: ${this.price} rub`;
    }

    addElement(image, title, info, price) {
        element.innerHTML += `<div class="element">
                                <img src="${image}" alt="" class="image" />
                                    <div>
                                        <h2>${title}</h2>
                                        <p>${info}</p>
                                        <p>${price}</p>
                                    </div>
                                </div>`;
    }
}

class Car extends Transport {
    constructor(type, price, brand, doors, image) {
        super(type, price, brand);
        this.doors = doors;
        this.image = image;
    }
    

    getDoorsCount() {
        return `Doors count: ${this.doors}`;
    }
}

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed, image) {
        super(type, price, brand);
        this.maxSpeed = maxSpeed;
        this.image = image;
    }

    getMaxSpeed() {
        return `Max speed: ${this.maxSpeed} km/h`;
    }
}

const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://www.avtorinok.ru/photo/pics/mercedes-benz/e-class-cabriolet/72584.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }   
];

data.forEach(item => {
    if(item.type === 'car') {
        const car = new Car(item.type, item.price, item.brand, item.doors, item.image);
        console.log(car);
        car.addElement(car.image, car.getInfo(), car.getDoorsCount(), car.getPrice());
    } else {
        const bike = new Bike(item.type, item.price, item.brand, item.maxSpeed, item.image);
        console.log(bike);
        bike.addElement(bike.image, bike.getInfo(), bike.getMaxSpeed(), bike.getPrice());
    }
    div.appendChild(element);
});