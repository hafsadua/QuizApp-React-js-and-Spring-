import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input }
  from "react-bootstrap";
  import { useHistory } from 'react-router-dom';

const Choice = () => {
  const history = useHistory();
  return (
    <div>
      <form className="quizApp">
        <h1 className="font-weight-bold">Choice</h1>
        <FormGroup>
        <label>Add Choice</label>
      <input  class="form-control"  id="choice"  placeholder="Enter choice" name="choice"/>
   
         

        </FormGroup>

        <button type="button" class="btn btn-light" onClick={()=>{
                  history.push("/question")
                }}>Cancel</button>
        <button type="button" class="btn btn-primary" onClick={()=>{
                  history.push("/")
                }}>Add Question</button>
      </form>
    </div>
  )
}
export default Choice;