import React from "react";
import "./index.css";
import  InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import './App.css';
import './image.jpg';

const Details = props => {
    return (  
        <div>
        <form>
        <div className="form-group">
           
            <h3 className="App">Enter your personal Details </h3>
        </div>
        <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Contact Name</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Enter your Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Mobile    </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Enter your Phone Number"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Email ID</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Enter your Email address"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Number of Guest</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Enter number of Guest"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Address</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Enter your Address"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">I have read the policy</label>
            </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal">Proceed to Payment</button>
        </form>
    </div>
    );
  };

export default Details;