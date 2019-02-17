const data = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
  },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
  },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
  },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
  }
]

//task1
function findTypes() {
    let argTypes = [];
    for (let i = 0; i < arguments.length; i++) {
        argTypes.push(typeof arguments[i])
    }
    return argTypes
}
findTypes('number')
findTypes(null, 5, "hello")
console.log(findTypes('number'))
console.log(findTypes(null, 5, "hello"))

//task2
function executeforEach(array, functionE) {
    for (let i = 0; i < array.length; i++) {
        functionE(array[i])
    }
}
executeforEach([1, 2, 3], function (el) {
    console.log(el)
})

//task3
function mapArray(array, functionM) {
    let arg = []
    executeforEach(array, function (el) {
        arg.push(functionM(el))
    })
    return arg
}
mapArray([2, 5, 8], function (el) {
    return el + 3
})
console.log(mapArray([2, 5, 8], function (el) {
    return el + 3
}))

//task4
function filterArray(array, functionF) {
    let arg = []
    executeforEach(array, function (el) {
        if (functionF(el)) {
            arg.push(el)
        }
    })
    return arg
}
filterArray([2, 5, 8], function (el) {
    return el > 3
})
console.log(filterArray([2, 5, 8], function (el) {
    return el > 3
}))

//task5
function getAmountOfAdultPeople(data) {
    let fArr = filterArray(data, function (el) {
        return el.age > 18
    })
    return fArr.length
}
getAmountOfAdultPeople(data)
console.log(getAmountOfAdultPeople(data))

//task6
function getGreenAdultBananaLovers(data) {
    let fArr = filterArray(data, function (el) {
        return el.age > 18 && el.eyeColor === "green" && el.favoriteFruit === "banana"
    })
    let mArr = mapArray(fArr, function (el) {
        return el.name
    })
    return mArr
}
getGreenAdultBananaLovers(data)
console.log(getGreenAdultBananaLovers(data))

//task 7
function keys() {
    let keyArr = []
    for (let i = 0; i < arguments.length; i++) {
        let keyEl = arguments[i]
        for (let [key, ] of Object.entries(keyEl)) {
            keyArr.push(key)
        }
    }
    return keyArr
}
keys({
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
})
console.log(keys({
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
}))

//task8
function values() {
    let valueArr = []
    for (let i = 0; i < arguments.length; i++) {
        let valueEl = arguments[i]
        for (let [, value] of Object.entries(valueEl)) {
            valueArr.push(value)
        }
    }
    return valueArr
}
values({
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
})
console.log(values({
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
}))

//task9
function showFormattedDate(date) {
    const options = {
        month: "short"
    };
    return (`Date: ${date.getDate()} of ${Intl.DateTimeFormat("en-US", options).format(date)}, ${date.getFullYear()}`)
}
showFormattedDate(new Date('2019-01-27T01:10:00'))
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')))

//task10
function isEvenYear(date) {
    return date.getFullYear() % 2 === 0
}
isEvenYear(new Date('2019-01-27T01:10:00'))
console.log(isEvenYear(new Date('2019-01-27T01:10:00')))

//task11
function isEvenMonth(date) {
    return date.getMonth() % 2 === 1
}
isEvenMonth(new Date('2019-02-27T01:10:00'))
console.log(isEvenMonth(new Date('2019-02-27T01:10:00')))