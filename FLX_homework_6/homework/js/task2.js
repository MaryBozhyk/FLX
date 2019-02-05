let money = prompt("Enter money amount","0")
let discount = prompt("Enter a discount","0")
if (money === null ||
    discount === null ||
    isNaN(money) ||
    isNaN(discount) ||
    money < 0 ||
    discount < 0 ||
    money > 9999999 ||
    discount > 99) {
    alert('Invalid input data')
}else if (money >= 0 && money <= 9999999 || discount >= 0 && discount <= 99) {
    let dPrice = money * (1 - discount / 100)
    let saved = money - dPrice
    dPrice = +dPrice.toFixed(2)
    saved = +saved.toFixed(2)
    alert(`Price without discount: ${money}\nDiscount: ${discount}%\nPrice with discount: ${dPrice}\nSaved: ${saved}`)
}