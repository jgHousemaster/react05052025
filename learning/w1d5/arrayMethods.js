const items = [
    {name:"Bike", price:100},
    {name:"TV", price:200},
    {name:"Album", price:10},
    {name:"Book", price:5},
    {name:"Phone", price:500},
    {name:"computer", price:1000},
    {name:"Keyboard", price:25}
];

const filteredItems = items.filter((item) => {
    return item.price <= 100
});

console.log(filteredItems)

const itemNames = items.map((item) => {
    return item.name
})

console.log(itemNames)

const foundItem = items.find((item) => {
    return item.name === "Album"
})

console.log(foundItem)

items.forEach((item) => {
    console.log(item.price)
})

const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
}) // 另一种用法：items.every()

console.log(hasInexpensiveItems)

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(total)

const arr = [1, 2, 3, 4, 5]

const includesTwo = arr.includes(2)
console.log(includesTwo)