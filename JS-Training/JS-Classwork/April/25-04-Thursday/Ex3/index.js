// Aveti 2 functii, una in care o sa luam userii si una in care luam todos
// fiecare todo are o proprietate Id, pentru fiecare Id care este acelasi ca id-ul din users vom printa ce title 
// se potriveste - o sa faceti o verificare aici.
// Afisati in html un paragraph cu numele userilor, emailul si title-ul din todos.

const usersUrl = "https://jsonplaceholder.typicode.com/users";
const todosUrl = "https://jsonplaceholder.typicode.com/todos"

const todosCallback = (todos,users) => {
    console.log(todos);
    console.log(users);
}

const usersCallback = (users) => {
    getTodos(users, todosCallback);
}

const getUsers = (callback) =>{
  const requestUsers = new XMLHttpRequest();
  requestUsers.onload = function() {
    const UsersJson = requestUsers.response;
    callback(UsersJson);
  } 

  requestUsers.open("GET",usersUrl);
  requestUsers.responseType = "json";
  requestUsers.send();

}

const getTodos = (users, callback) => {
  const requestTodos = new XMLHttpRequest();
  requestTodos.onload = function() {
    const TodosJson = requestTodos.response;
    callback(TodosJson, users);
  }
  requestTodos.open("GET",todosUrl);
  requestTodos.responseType = "json";
  requestTodos.send();
}

getUsers(usersCallback);


// const showUserDetails = () => {
//     const UserObj = getUsers;
//     const TodosObj = getTodos();
//     console.log(UserObj);
// }

// showUserDetails();