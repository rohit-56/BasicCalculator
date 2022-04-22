import {add,sub,mul,div} from './Functions'
import React,{useState} from 'react';
import './App.css';

function App() {

  const [text,setText]=useState("");


  const addMethod=()=>{
      setText(""+add(12,13));
  }
  const subMethod=()=>{
    
  }

  const mulMethod=()=>{
    
  }
  const divMethod=()=>{
    
  }



  return (
    <>
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Calculator</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
     
       </div>
      </div>
   </nav>
</div>

  <div className="container my-5">
<div class="form-floating my-3">
  <textarea class="form-control" id="Input1" ></textarea>
  <label for="floatingInput">Enter First Value</label>
</div>

<div class="form-floating my-3">
  <textarea class="form-control" id="Input2" ></textarea>
  <label for="floatingInput">Enter Second Value</label>
</div>
 </div>
   <div className="container my-3">
        <button className="btn btn-primary mx-2" onClick={addMethod}>Addition( + )</button>
        <button className="btn btn-primary mx-2" onClick={subMethod}>Subtraction( - )</button>
        <button className="btn btn-primary mx-2" onClick={mulMethod}>Multiply( * )</button>
        <button className="btn btn-primary mx-2" onClick={divMethod}>Division( / )</button>
   </div>

   <div className="container my-5">
       <h1>Output</h1>
       <textarea className='form-control' value={text} id='outputArea'></textarea>
   </div>

    </>
  );
}

export default App;
