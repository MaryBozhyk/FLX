let login = prompt("Please, write login")
if (login === null || login === '') {
    alert("Canceled")
} else {
    let n = login.length
    if (n < 4) {
        alert("I don't know any users having name length less than 4 symbols")
    } else if (login === "User" || login === "Admin") {
        let password = prompt("Please, write password")
        if (password === null || password === '') {
            alert("Canceled")
        } else if (password === "UserPass" && login === "User" || password === "RootPass" && login === "Admin") {
            let d = new Date().getHours()
            if (d < 20) {
                alert(`Good day, dear ${login}!`)
            } else {
                alert(`Good evening, dear ${login}!`)
            }
        } else {
            alert("Wrong password")
        }
    } else {
        alert("I don’t know you")
    }
}