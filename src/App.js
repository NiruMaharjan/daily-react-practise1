import logo from './logo.svg';
import './App.css';
import {User} from './User'
import {useState} from "react";



function App() {
  const [age, setAge] = useState(0)
  const [inputValue, setInputValue] = useState(true)
  const [textColor, setTextColor] = useState("black");

  //let  age = 0;

  const increaseAge = () =>{
    setAge(age+1)
    // age =age +1
    
    // console.log(age);
  };

  const handleInputChange = (event) =>{
    setInputValue(event.target.value)
    console.log(event.target.value)
  };

  const toggle = ()=>{
    setInputValue(!inputValue)
  }

  return<div className='App'>
    {age} 
    <button onClick={increaseAge}> Increase Age</button>
    <input type="text" onChange = {handleInputChange}/>
    {inputValue}
    <button onClick={toggle}>Show/hide</button>
    {inputValue && <h1>My name is niru</h1>}

    <button 
    onClick ={()=>{
   //setTextColor("red");
   setTextColor(textColor === "black"?"red":"black");
    }

    }>Change color</button>
    <h1 style={{color:textColor}}>Srisha</h1>


    </div>

}
export default App;
