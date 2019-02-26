const rootNode = document.getElementById('root');

const todoItems = [
    {
        isDone: false,
        id: 12345,
        description: 'Todo 1'
    }
];

let getId = x => document.getElementById(x);
let addForm = document.forms['addForm'];
getId('addPage').style.display = 'none';
getId('modifyPage').style.display = 'none';

getId('addButton').addEventListener('click', function () {
    getId('firstPage').style.display = 'none';
    getId('addPage').style.display = 'flex';
})

getId('cancel').addEventListener('click', function () {
    getId('firstPage').style.display = 'flex';
    getId('addPage').style.display = 'none';
})
getId('cancelM').addEventListener('click', function () {
    getId('firstPage').style.display = 'flex';
    getId('modifyPage').style.display = 'none';
})
getId('saveChanges').addEventListener('click', function () {
    getId('firstPage').style.display = 'flex';
    getId('addPage').style.display = 'none';
    if (getId('textField').value !== '') {
        let checkBox = document.createElement('img')
        checkBox.src = 'assets/img/todo-s.png'
        checkBox.className = 'icon'
        let del = document.createElement('img')
        del.src = 'assets/img/remove-s.jpg'
        del.className = 'icon'
        let div = document.createElement('div');
        div.className = 'task'
        let taskText = getId('textField').value
        let text = document.createElement('p')
        text.innerHTML = taskText
        text.className = 'taskText'
        getId('textField').value = ''
        div.appendChild(checkBox)
        div.appendChild(text)
        div.appendChild(del)
        getId('listOfTasks').appendChild(div)
        localStorage.setItem(div)
        checkBox.onclick = function () {
            this.src = 'assets/img/done-s.png'
        }
        text.onclick = function () {
            getId('firstPage').style.display = 'none';
            getId('modifyPage').style.display = 'flex';
            getId('modifyField').value = this.innerHTML
            getId('saveChangesM').addEventListener('click', function () {
                text.innerHTML = getId('modifyField').value
                getId('modifyField').value = ''
                getId('firstPage').style.display = 'flex';
                getId('modifyPage').style.display = 'none';
                 localStorage.setItem(div)

            })
        }
        del.onclick = function () {
            let label = div.parentNode;
            label.removeChild(div);
            localStorage.removeItem(div)
        }
    }
})
//rootNode.appendChild(/* Append your list item node*/);