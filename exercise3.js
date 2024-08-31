class Storage {
    constructor(items) {
        this.items = items
    }

    getItem() {
        return this.items
    }

    addItem(item) { 
        this.items.push(item)
    }

    removeItem(item) {
        const deleteItem = this.items.indexOf(item)
        if (deleteItem !== -1) {
            this.items.splice(deleteItem, 1)
        }
    }
}

const items = new Storage(["Coca-Cola", "MacBook", "Book: Clean Code (Robert Martin - Uncle Bob)"])
console.log(items)

const consoleItem = items.getItem()
console.log(consoleItem)

items.addItem("Sprunk")
console.log(items.getItem())

items.removeItem("Coca-Cola")
console.log(items.getItem())