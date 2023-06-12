function Man(name, age){
    this.name = name;
    this.age = age;
}

Man.prototype.getInfo = function(){
    console.log(`Name: ${this.name}, age: ${this.age}`);
}

function Car(brand, model, productionYear, numberPlate){
    this.brand = brand;
    this.model = model;
    this.productionYear = productionYear;
    this.numberPlate = numberPlate;
}

Car.prototype.assignTheOwner = function(man){
    this.owner = man.age >= 18 ? man : console.log(`Could not assign the owner to a man under 18.`);
}

Car.prototype.getInfo = function(){
    let ownerInfo = this.owner ? `Name: ${this.owner.name}, age: ${this.owner.age}` : 'No owner assigned';
    console.log(`Car brand is : ${this.brand}
    model is : ${this.model}
    production year is : ${this.productionYear}
    numberPlate is : ${this.numberPlate}.
    The owner is : ${ownerInfo}
    `);
}

let sasha = new Man('Sasha', '18');
sasha.getInfo();

let dasha = new Man('Dasha', '19');
dasha.getInfo();

let egor = new Man('Egor', '12');
egor.getInfo();

let SashasCar = new Car('Audi', 'R8', '2022' , 'C00L m3n');
SashasCar.assignTheOwner(sasha);
SashasCar.getInfo();

let DashasCar = new Car('Zhyguli', '9', '1980' , 'd3ngerous drlver');
DashasCar.assignTheOwner(dasha);
DashasCar.getInfo();

let EgorsCar = new Car('BMW', '220i', '2023' , 'ht 3409 io');
EgorsCar.assignTheOwner(egor);
EgorsCar.getInfo();