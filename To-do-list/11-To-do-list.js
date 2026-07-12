const todoList = [{
    name :'make dinner',
    dueDate : '12-07-2026'},{
    name : 'wash dishes',
    dueDate : '12-07-2026'
    } 
    ];
renderTodolist();

function renderTodolist(){
    let todoListHTML = '';
        for(let i = 0; i < todoList.length; i++){
            const todoObject = todoList[i];
            // const name = todoObject.name;
            // const dueDate = todoObject.dueDate;
            const {name , dueDate} = todoObject
             const html = `
             <div>${name}</div>
             <div>${dueDate}</div>
             <button onclick = "
             todoList.splice(${i} , 1);
             renderTodolist();
             " class= "todo-delete-button"> Delete </button>
             `;
             todoListHTML += html;
        }
        document.querySelector('.js-to-list').innerHTML = todoListHTML;   
}

    function addItem(){
        const todoItem = document.querySelector('.list-item');
        const item = todoItem.value;
        const date = document.querySelector('.js-due-date');
        const dueDate = date.value;

         todoList.push({
            //name : item,
            //dueDate : dueDate
            name : item,
            dueDate
         });
        todoItem.value = '';

        renderTodolist();

    }

    function handleKeyDown(event){
        if(event.key === 'Enter'){
            addItem();
        }
    }

