function Devices(name, power) {
    this.name = name,
        this.power = power,
        this.battery = 'No'
}

Devices.prototype.getPower = function () {
    console.log(`Power is ${this.power} W`)
}

function Computers(name, power, display) {
    this.name = name,
        this.power = power,
        this.display = display
}

function Lamps(name, power) {
    this.name = name,
        this.power = power
}

function LampsBattery(name, power, battery) {
    this.name = name,
        this.power = power,
        this.battery = battery
}

Devices.prototype.showKeyProperty = function () {
    for (let key in this) {
        if (this.hasOwnProperty(key))
            console.log(`${key}: ${this[key]}`)
    }
}

Computers.prototype = new Devices();
Lamps.prototype = new Devices();
LampsBattery.prototype = new Lamps();

Lamps.prototype.getPower = function () {
    console.log(`Power is ${this.power} W`)
}

const computer = new Computers('Office_PC', '500', '22');
const lamp = new Lamps('Bra', '30');
const mobile_lamp = new LampsBattery('Flashlight' ,'10', 'Yes');

lamp.getPower()
computer.getPower()
mobile_lamp.showKeyProperty()