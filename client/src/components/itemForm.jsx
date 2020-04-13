import {Form, Button} from 'react-bootstrap'
import React,{ Component } from 'react'
import Axios from 'axios'

export default class ItemForm extends Component{
state = {
  name: '',
  description: '',
  image: ''
}


handleChange = (e) =>{
this.setState({
  [e.target.name]: e.target.value
})

}

handleSubmit = (e) =>{
  e.preventDefault()
  Axios.post('/api/items/', this.state).then(res => {
    console.log(res)
    this.clearForm()
    this.props.getItems()
  }).catch( err => console.log(err))
}

clearForm = () =>{
  this.setState({
    name: "",
    description: "",
    image: ""
  });
}



render(){
  return (
    <>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formItemName">
          <Form.Label>
            Name
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter Item Name"
              onChange={this.handleChange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="formItemDescription">
          <Form.Label>
            Description
            <Form.Control
              name="description"
              type="text"
              placeholder="Enter Item Description"
              onChange={this.handleChange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="formItemImage">
          <Form.Label>
            Image URL
            <Form.Control
              name="image"
              type="text"
              placeholder="Item Image URL"
              onChange={this.handleChange}
            />
          </Form.Label>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </>
  );
}
}