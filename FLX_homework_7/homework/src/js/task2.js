let range = 5
let step = 1
let prizeStep = 1
let totalPrize = 0
let attempt = 4
let question = confirm('Do you want to play a game?')
for (let q = 1; question === true; q++) {
        range *= step
        let prize = 10
        let randomNumber = Math.floor(Math.random() * `${range}`) + 1;
        prize *= prizeStep
        attempt = 4
        for (let i = 1; i <= 4; i++) {
            if (i <= 3) {
                attempt -= 1
                let userNumber = +prompt('Enter a number from 0 to ' + (range) +
                    '\nAttempts left: ' + (attempt) + '\nTotal prize: ' + (totalPrize) +
                    '\nPossible prize on current attempt: ' + (prize))
                if (userNumber === randomNumber) {
                    prize += 0
                    totalPrize += prize
                    question = confirm(`Congratulation! Your prize is: ${prize} Do you want to continue? `)
                    if (question === true) {
                        step = 2
                        prizeStep = 3
                    }
                    break
                }
                prize = Math.floor(prize / 2)
            } else if (i === 4) {
                prize = 0
            }
        }
        if (prize === 0 || question === false) {
            alert(`Thank you for a game. Your prize is: ${totalPrize}`)
            question = confirm('Do you want to play again?')
            if (question === false) {
                break
            } else {
                step = 1
                totalPrize = 0
            }
        }
 }

alert('You did not become a millionaire, but can.')