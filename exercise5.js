class Car {
    static getSpecs(car) {
        return console.log(car)
    }

    #price

    constructor ({speed, price, maxSpeed, isOn, distance}) {
        this.speed = speed
        this.#price = price
        this.maxSpeed = maxSpeed
        this.isOn = isOn
        this.distance = distance
    }

    get price() {
        return this.#price
    } 
    set price(value) {
        this.#price = value
    }

    turnOn() {
        return this.isOn = true
    }

    turnOff() {
        return this.isOn = false
    }

    accelerate(value) {
        if (value < this.maxSpeed) {
            return this.speed += value
        } else {
            return console.log(`Error! Max speed: ${this.maxSpeed}`)
        }
    }

    decelerate(value) {
        if (this.speed - value < 0) {
            return console.log(`Error! speed less than zero`)
        } else {
            return this.speed -= value
        }
    }

    drive(hours) {
        if (!this.isOn) {
            return console.log(`Error! the car doesn't start`)
        }
        if (this.isOn) {
            return this.distance = this.speed * hours 
        }
    }
}

const mustang = new Car({speed: 50, price: 2000, maxSpeed: 200, isOn: true, distance: 25})

mustang.turnOff()
Car.getSpecs(mustang)

mustang.turnOn()
Car.getSpecs(mustang)

mustang.accelerate(50)
Car.getSpecs(mustang)

mustang.accelerate(200)
Car.getSpecs(mustang)

mustang.decelerate(200)
Car.getSpecs(mustang)

mustang.decelerate(20)
mustang.drive(15);
mustang.turnOff()
Car.getSpecs(mustang)

console.log(mustang.price)
mustang.price = 4000
console.log(mustang.price)