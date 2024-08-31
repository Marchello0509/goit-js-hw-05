class StringBuilder {
    constructor (value) {
        this.value = value
    }

    get getValue() {
        return this.value
    }

    appendEnd(appendValue) {
        this.value = this.value.padEnd(this.value.length  + appendValue.length, appendValue)
    }

    appendStart(appendValue) {
        this.value = this.value.padStart(this.value.length  + appendValue.length, appendValue)
    }

    appendAll(appendValue) {
        this.value = this.value.padEnd(this.value.length  + appendValue.length, appendValue)
        this.value = this.value.padStart(this.value.length  + appendValue.length, appendValue)
    }
}

const builder = new StringBuilder('.')
console.log(builder.getValue)

builder.appendEnd('^')
console.log(builder.value)

builder.appendStart('^')
console.log(builder.value)

builder.appendAll('=')
console.log(builder.value)