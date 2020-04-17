import { Form, Button } from "react-bootstrap";
import React, { Component } from "react";
import Axios from "axios";

export default class ItemForm extends Component {
  state = {
    name: "",
    description: "",
    image: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    Axios.post("/api/items/", this.state)
      .then(res => {
        console.log(res);
        this.clearForm();
        this.props.toggleForm()
        this.props.getItems();
      })
      .catch(err => console.log(err));
  };

  clearForm = () => {
    this.setState({
      name: "",
      description: "",
      image: ""
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div controlId="formItemName">
            <label>
              Name
              <input
                name="name"
                type="text"
                placeholder="Enter Item Name"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div controlId="formItemDescription">
            <label>
              Description
              <input
                name="description"
                type="text"
                placeholder="Enter Item Description"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div controlId="formItemImage">
            <label>
              Image URL
              <input
                name="image"
                type="text"
                placeholder="Item Image URL"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
