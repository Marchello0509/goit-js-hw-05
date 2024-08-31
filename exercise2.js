class aboutInfo {
    constructor ({name, age, followers}) {
        this.name = name
        this.age = age
        this.followers = followers
    }

    get getInfo () {
        return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    }
}

const Mark = new aboutInfo({name: "Mark", age: 15, followers: 2500})
console.log(Mark.getInfo)