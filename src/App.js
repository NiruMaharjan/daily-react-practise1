import logo from './logo.svg';
import './App.css';
import {User} from './User'



function App() {
  // const age =15;
  // const isGreen= true;
  
// if(age >=18){
//   return <h1>Over age</h1>
// }else{
//   return <h1>Under age</h1>
// }

// return <div className='App'>
//   {age >=18 ? <h1>Over age</h1> : <h1>Under age</h1>}
//    <h2 style={{color:isGreen ? "green": 'red'}}>Red</h2>
//    {isGreen && <button>This is a button</button>}
//   </div>

//return <div className='App'></div>
//array

// const names= ["Pedro", "Jake", "Jessica", 'Mike', "Dustin"];

// return(
//   <div className="App">
//     {/* <h1>{names[1]}</h1> */}
//     {names.map((name, key) =>{
//       return <h1 key={key}>{name}</h1>
//     })}

//   </div>
//)

// const users = [
//   {name:"Pedro", age:21},
//   {name:"Jake", age:25},
//   {name:"Jessica", age:45},
// ];

// return(
//   <div className="App">
//     {users.map((user, key)=>{
//       return <div>
//         {user.name}{user.age}
//         </div>
//     })}


//   </div>
// )

const users = [
  {name:"Pedro", age:21},
  {name:"Jake", age:25},
  {name:"Jessica", age:45},
];

return(
  <div className="App">
    {users.map((user, key)=>{
      return <User name ={user.name} age ={user.age}/>;
    })}


  </div>
)



}
export default App;
