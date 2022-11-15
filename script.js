
    let wrapper = document.getElementById('wrapper');

    let title = document.createElement('h1');
    title.textContent = "List of tasks";
    wrapper.append(title);

let input = document.createElement('input');
input.setAttribute('placeholder', 'Enter a new task to do');
input.className = 'input';
wrapper.append(input);

let button = document.createElement('input');
button.setAttribute('type', 'submit');
button.textContent = 'Add';
button.className = 'button'
wrapper.append(button);

let list = document.createElement('ul');
wrapper.append(list);

function addTask(e){
let li = document.createElement('li')
li.textContent = input.value;
list.append(li);

let del = document.createElement('button');
del.innerHTML = "Done"
del.setAttribute('class', 'deltask');
li.append(del);

input.value = '';
return list;
}

button.onclick = addTask;

function deleteTask(e){
    let delSel = e.target;
    delSel.parentElement.remove();
    console.log(delSel);
    console.log('działa');
}

list.onclick = deleteTask;

