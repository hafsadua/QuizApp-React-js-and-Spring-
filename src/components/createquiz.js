import React, {  useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input }
  from "react-bootstrap";
import { useHistory } from 'react-router-dom';


const CreateQuiz = () => {

  const history = useHistory();

  const [store, setStore] = useState({
    title: 'ok',
    points: '',
    timeAllows: '',
    deadline: ''

})

function chnageStoreData(e) {
    console.log(store);
    setStore({ ...store, [e.target.name]: e.target.value });
}

useEffect(()=>{
console.log(store);
})

  
  return (
    <div>
      <form className="quizApp">
        <h1 className="font-weight-bold">Create a Quiz</h1>
        <FormGroup>
          <label>Quiz Title</label>
          <input type="title" class="form-control" id="title" onChange={chnageStoreData} placeholder="Enter Title" name="title" />
          <label>Total Points</label>
          <input class="form-control" id="points" onChange={chnageStoreData} placeholder="Enter Points" name="points" />
          <label>Time Allowed</label>
          <input class="form-control" id="timeAllows" onChange={chnageStoreData} placeholder="Time" name="timeAllowed" />
          <label>Deadline</label>
          <input class="form-control" id="deadline" onChange={chnageStoreData} placeholder="Deadline" name="deadline" />
        </FormGroup>
        <h5 className="App font-weight-bold">Questions</h5>
        <table className="border quizApp">
          <thead>
            <tbody >
              <tr>
                <th>

                </th>

                <tr>
                  <th>
                    <Button onClick={() => {
                      history.push("/question")
                    }}>Add Question</Button>
                  </th>
                </tr>
              </tr>
            </tbody>
          </thead>
        </table>
        <button type="button" class="btn btn-light">Cancel</button>
        <button type="button" class="btn btn-primary">Create Quiz</button>
      </form>
    </div>
  )
}
export default CreateQuiz;