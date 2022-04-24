import {add,sub,mul,div} from "./Functions";
import React,{useState} from 'react';
import './App.css';

function App() {

  const [text,setText]=useState("");
  const [input1,setInput1]=useState("");
  const [input2,setInput2]=useState("");


  const addMethod=()=>{
      let a=parseInt(input1);
      let b=parseInt(input2);
      setText(add(a,b));
  }
  const subMethod=()=>{
    let a=parseInt(input1);
    let b=parseInt(input2);
      setText(sub(a,b));
  }

  const mulMethod=()=>{
    let a=parseInt(input1);
      let b=parseInt(input2);
    setText(mul(a,b));
  }
  const divMethod=()=>{
    let a=parseInt(input1);
      let b=parseInt(input2);
    setText(div(a,b));
  }

  const handleInput1=(event)=>{
     setInput1(event.target.value);
  }
  const handleInput2=(event)=>{
    setInput2(event.target.value);
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
  <textarea class="form-control" value={input1}  onChange={handleInput1} id="Input1" ></textarea>
  <label for="floatingInput">Enter First Value</label>
</div>

<div class="form-floating my-3">
  <textarea class="form-control" value={input2} onChange={handleInput2} id="Input2" ></textarea>
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
