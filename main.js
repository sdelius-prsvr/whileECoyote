function numberDoubler(num) {
    // Your code here
    while (num < 100){
        num = num * 2
    }
    return num
}

function stringRepeater(str) {
    // Your code here
    let newStr = str
    while (newStr.length < 10){
        newStr = newStr + str
    }
    return newStr
}

function makeDivisible(x, y) {
    // Your code here
    while (x % y !== 0){
        x++
    }
    return x
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};