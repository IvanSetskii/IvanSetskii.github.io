class Devices {
    constructor(name, power) {
        this.name = name,
            this.power = power,
            this.battery = 'No'
    }
    getPower() {
        console.log(`Power is ${this.power} W`)
    }

    showKeyProperty() {
        for (let key in this) {
            if (this.hasOwnProperty(key))
                console.log(`${key}: ${this[key]}`)
        }
    }
}

class Computers extends Devices {
    constructor(name, power, display) {
        super(name, power)
        this.display = display
    }
}

class Lamps extends Devices {
    constructor(name, power) {
        super(name, power)
    }
    getPower() {
        console.log(`Power is ${this.power} W`)
    }
}

class LampsBattery extends Lamps {
    constructor(name, power, battery) {
        super(name, power)
        this.battery = battery
    }
}

const computer = new Computers('Office_PC', '500', '22');
const lamp = new Lamps('Bra', '30');
const mobile_lamp = new LampsBattery('Flashlight', '10', 'Yes');

lamp.getPower()
computer.getPower()
mobile_lamp.showKeyProperty()