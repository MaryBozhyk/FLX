let rootNode = document.getElementById('root');
let getId = x => document.getElementById(x);
let addForm = document.forms['addForm'];
addForm.addButton.disabled = true;
addForm.textField.addEventListener('click', function () {
    getId('addButton').disabled = false;
})
addForm.textField.addEventListener('blur', function () {
    if (this.value === '') {
        getId('addButton').disabled = true;
    } else if (this.value !== '') {
        getId('addButton').disabled = false;
    }
})

let count = 0
addForm.addButton.addEventListener('click', function () {
    count++
    let maxCount = 10
    let checkBox = document.createElement('i')
    checkBox.className = 'material-icons'
    checkBox.innerHTML = 'check_box_outline_blank'
    let del = document.createElement('i')
    del.className = 'material-icons'
    del.innerHTML = 'delete'
    let div = document.createElement('div');
    div.className = 'task'
    div.draggable = true
    let taskText = addForm.textField.value
    let text = document.createElement('p')
    text.innerHTML = taskText
    text.className = 'taskText'
    addForm.textField.value = ''
    addForm.addButton.disabled = true;

    div.appendChild(checkBox)
    div.appendChild(text)
    div.appendChild(del)
    getId('listOfTasks').appendChild(div)
    checkBox.onclick = function () {
        this.innerHTML = 'check_box'
    }
    del.onclick = function () {
        let label = div.parentNode;
        label.removeChild(div);
        count--
        getId('fullList').innerHTML = ''
        addForm.textField.disabled = false;
    }

    if (count === maxCount) {
        getId('fullList').innerHTML = 'Maximum item per list are created'
        addForm.textField.disabled = true;
    }
})

let val = null

getId('listOfTasks').addEventListener('dragstart', function (move) {
    val = move.target;
});

getId('listOfTasks').addEventListener('dragover', function (move) {
    if (move.target.className === 'task') {
        move.preventDefault();
    }
});

getId('listOfTasks').addEventListener('drop', function (move) {
    if (move.target.className === 'task') {
        move.preventDefault();
        getId('listOfTasks').insertBefore(val, move.target);
    }
});