let a = prompt("Input value a","0")
let b = prompt("Input value b","0")
let c = prompt("Input value c","0")
let x = 0
let x1 = 0
let x2 = 0
if (a === 0 || a === null || b === null || c === null || isNaN(a) || isNaN(b) || isNaN(c) ) {
    alert('Invalid input data');
} else {
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        alert('No solution');
    } else if (d === 0) {
        x = -b / 2 * a
        alert(`x == ${x}`)
    } else if (d > 0) {
        x1 = (-b - Math.sqrt(d)) / 2 * a
        x2 = (-b + Math.sqrt(d)) / 2 * a
        alert(`x1 = ${x1} and x2 = ${x2}`)
    }
}
