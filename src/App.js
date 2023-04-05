import { useState } from "react";
import"./styles.css"
import TodoTextbox from "./Todotextbox";
import { Container } from "reactstrap";
import ItemsList from "./Itemslist";
import { v4 as uuidv4 } from 'uuid';



export default function App() {

  const [todos, setTodos] = useState([]);

  const addTodoInTodoList = (todo) => {
    let tempTodo = {id: uuidv4(), todo, isCompleted: false }
    setTodos([...todos, tempTodo]);
  }

  const markAsDone = (id) =>{
    let index = todos.findIndex((value) => value.id === id );
    let tempTodos = todos;
    tempTodos[index].isCompleted = true;
    setTodos([...tempTodos])
  }

  return (
    <Container>
    <div className="App">
      <h1>Todo Application</h1>
   <TodoTextbox addTodoInTodoList={addTodoInTodoList}/>
   {todos.length > 0 && (
    <ItemsList todos={todos} markAsDone={markAsDone}/>
   )}
   
   </div>
    </Container>
  );
}


