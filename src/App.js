import logo from './logo.svg';
import './App.css';

function App() {
  const name = <h1>Niru Maharjan</h1>
  const address = <h2>Kirtipur</h2>

  return (
    <div className="App">
      <User name="Niru Maharjan"   address= "kirtipur" email="nmaharjan417@gmail.com"/>
      <User name="Srisha Maharjan" address="kirtipur" email="srishamaharjan@gmail.com"/>

      
    </div>
  );
}

 const User =(props) =>{
  return(
    <div>
      <h1>{props.name}</h1>
      <h2>{props.address}</h2>
      <h2>{props.email}</h2>

    </div>
  )
 }


export default App;
