
/*how to create sites
step 1) save date 
step 2) generate the html
step 3)make the site interactive
 */
// 

const toDoList = [
  {name:'make dinner',
   dueDate:'31-05-2025'},
  
   {name:'wash dishes', 
    dueDate:'31-05-2025'}];


renderTodolist();


function renderTodolist(){

    let todoListHTML ='';

        toDoList.forEach((todoObject, index) => {

        const {name, dueDate } = todoObject; 

        const html =`
        <div>${name}</div>

        <div>${dueDate}</div>

        <button class ="delete-todo-button js-delete-todo-button" >Delete</button>
        `;

        todoListHTML += html;  //generating the HTML

        });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML; 

    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () =>{
      toDoList.splice(index, 1);
      renderTodolist();    

      });



    });

   
}













document.querySelector('.js-add-todo-button')
.addEventListener('click', () => {
  addTodo();
});




function addTodo (){
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;

  const dateinputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateinputElement.value;
  

  toDoList.push({name,
    dueDate //shorthand property syntax instead of normal long syntax 
    // name:name, dueDte: dueDate
  });
  


  inputElement.value = '';

  renderTodolist();
};

