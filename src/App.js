import logo from './logo.svg';
import './App.css';
import {User} from './User'
import {useState} from "react";



function App() {
  const[todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange =(event) =>{
    setNewTask(event.target.value)

  };

  const addTask = ()=>{
    // const newTodoList = [...todoList,newTask]
    // setTodoList(newTodoList);
    const task ={
      id: todoList.length ===0 ?1:todoList[todoList.length-1].id+1,
      taskName:newTask,
    }
    setTodoList([...todoList, task]);
  }

  const deleteTask =(id) =>{
    // const newTodoList = todoList.filter((task)=>{
    //   return task !== taskName;
    // }) 
    // setTodoList(newTodoList)
    //setTodoList(todoList.filter((task)=> task !== taskName));
    setTodoList(todoList.filter((task)=> task.id !== id));

  }


 return(
  <div className='App'>
    <div className='addTask'>
    <input onChange ={handleChange}/>
    <button onClick={addTask}>Add Task</button>
    </div>
    <div className="list">
      {todoList.map((task) =>{
        return (
          <div>
          <h1>{task.taskName}</h1>
          <button onClick = {()=>deleteTask(task.id)}>X</button>
          </div>
        )
      })}

    </div>
  
   

  </div>
 )

}
export default App;
