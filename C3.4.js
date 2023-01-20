//Функция

function ElectrcApp(name, power) {
    this.name = name;
    this.power = power;
    this.isPlug = false;
}

// Включен в розетку

ElectrcApp.prototype.plug = function() {
    console.log(this.name + "is plugged");
    this.isPlug = true;
};

// выключенный из розетки


ElectrcApp.prototype.unplug = function() {
    console.log(this.name + "is unplugged");
    this.isPlug = false;
};

//Приборы

//Прибор 1
function Phone(name, brand, bulbType) {
    this.name = name;
    this.brand = brand;
    this.bulbType = bulbType;
    this.isPlug = true;
}

Phone.prototype = new ElectrcApp()

//Прибор 2

function Computer(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.isPlug = false;
}

Computer.prototype = new ElectrcApp()

//Телефон

const myPthone = new Phone("nik's pthone", "iPone",  "smartphone")

//Компьютер

const homePC = new Computer("My PC", "Intel", 12000, "stationary", "for develop");


