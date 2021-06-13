import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, ListGroup }
  from "react-bootstrap"
import { useHistory } from 'react-router-dom';

const Question = () => {
  const history = useHistory();
  return (
    <div>
      <form className="quizApp">
        <h1 className="font-weight-bold">Question</h1>
        <FormGroup>
          <label className="quizApp">Write Question here</label>
          <label className="App">Type</label>
          <div>
            <ListGroup variant="flush">
           <ListGroup.Item>
           <input class="form-check-input" type="radio" name="singleChoice"  />
            <label class="form-check-label" for="singleChoice">
              Single Choice</label></ListGroup.Item> 
              <ListGroup.Item>
              <input class="form-check-input" type="radio" name="MultiChoice"  />
            <label class="form-check-label" for="ForMultipleChoices">
              For Multiple Choices</label>
              </ListGroup.Item>
            
              </ListGroup>
          </div>
          
        </FormGroup>
        <h5 className="App font-weight-bold">Choices</h5>
        <table className="border quizApp">
          <thead>
            <tbody >
              <tr>
                <th>

                </th>
                <tr>

                </tr><tr>

                </tr>
                <tr>
                  <th>
                    <Button onClick={() => {
                      history.push("/choice")
                    }}>Add Choices</Button>
                  </th>
                </tr>
              </tr>
            </tbody>
          </thead>
        </table>
        <button type="button" class="btn btn-light" onClick={()=>{
                  history.push("/")
                }}>Cancel</button>
        <button type="button" class="btn btn-primary">Create </button>
      </form>
    </div>
  )
}
export default Question;