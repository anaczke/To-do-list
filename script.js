
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

let li;
let del;
let prog;

let addTask = (e)=>{
let li = document.createElement('li')
li.textContent = input.value;
list.append(li);

let prog = document.createElement('button');
prog.textContent ='In Progress';
prog.setAttribute('class', 'progtask');
li.append(prog);

let del = document.createElement('button');
del.innerHTML = "Done"
del.setAttribute('class', 'deltask');
li.append(del);

input.value = '';
return list;
}

button.addEventListener('click', addTask);

let deleteTask = (e)=>{
    let delSel = e.target;
    if(delSel.className != 'deltask') return;
    delSel.parentElement.remove();
}

list.addEventListener('click', deleteTask);



//inny sposób zapisu - funkcja od razu w handlerze
// list.onclick = function(e){
//     let delSel = e.target;
//     if(delSel.className != 'deltask') return;
//     delSel.parentElement.remove();
// }


