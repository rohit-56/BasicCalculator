import logo from './logo.svg';
import './App.css';

function App() {
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
        <button className="btn btn-primary mx-2">Addition( + )</button>
        <button className="btn btn-primary mx-2">Subtraction( - )</button>
        <button className="btn btn-primary mx-2">Multiply( * )</button>
        <button className="btn btn-primary mx-2">Division( / )</button>
   </div>

   <div className="container my-5">
       <h1>Output</h1>
       <textarea className='form-control'></textarea>
   </div>

    </>
  );
}

export default App;
