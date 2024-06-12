
import './App.css';

import Form from "./Form";
import MyForm from "./MyForm";
import Masina from './Masina';

let myVar ="LinkAcademy";
let myCar={
  name:'Dacia',
  model:'Logan',
};


function App() {
  const obj={name:'Alice', email:'demo@demo.com', passwoed:'123456', car:'BMV', message:'Salut'}
  
  return (
    <div className="App">
      <header className="App-header">
       <h1>Salut {myVar}</h1>
       {/* <Salut nume="Demo" curs="HTML" scoala={myVar} />
       <Salut nume="Demo1" curs="HTML" scoala={myVar} />
       <Salut nume="Demo2" curs="HTML" scoala={myVar} />
       <Salut nume="Demo3" curs="HTML" scoala={myVar} /> */}
       <Masina car={myCar} />
       <Form />
      </header>
    </div>  
  );
}

export default App;
