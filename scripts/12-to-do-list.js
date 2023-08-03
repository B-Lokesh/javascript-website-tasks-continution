let arrMy =[{
  name: 'make dinner',
  dueDate: '2023-07-07'
}, {
  name: 'wash dishes',
  dueDate: '2023-07-07'
}];
renderTodoLIst();
function renderTodoLIst(){

      let todolistHtml = '';

      arrMy.forEach((todo, index) =>{
           
            let name = todo.name;
            let dueDate = todo.dueDate;
            let html = 
            `<div>
            ${name} </div>
            <div>${dueDate}</div>
           <div> <button class="delete-todo-button js-delete-todo-button">Delete</button>
            </div>`;

            /*bcz div doesnt add space b/w lines and coming to <p> inside one <p> other <p> not possible so div used.shortcut generating htmlk instread of writing unlimited <p>'s.*/
            todolistHtml += html;
      });

      document.querySelector('.js-todo-list')
      .innerHTML = todolistHtml;

      document.querySelectorAll('.js-delete-todo-button')
      .forEach((deleteButton, index) =>{
            deleteButton.addEventListener('click',()=>{
                  arrMy.splice(index,1);
                  renderTodoLIst(); 
            });
     
      });
}

document.querySelector('.js-add-todo-button')
      .addEventListener('click', () => {
            funtodo();
      });

function funtodo(){
      const innerElement=document.querySelector('.js-todo');
      let element = innerElement.value;
      let dateInputElement = document.querySelector('.js-due-date-input');
      let dueDate = dateInputElement.value;
       arrMy.push({name : element,
       dueDate : dueDate});
      console.log(arrMy);
      //innerElement.value = '';//to empty textbox after adding

      renderTodoLIst();
  }
