import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ItemForm from "./components/itemForm";

class App extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.getItems();
  }

  getItems = async () => {
    const res = await axios.get("api/items");

    this.setState({
      items: res.data
    });
  };

  upVote = (item_id) => {

  }

  renderItems = () => {
    return this.state.items.map(item => {
      return (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.image} </p>
          <p>{item.description}</p>
          <p>{item.likes}</p>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Mock Interview</h1>
        <ItemForm getItems={this.getItems}/>
        {this.renderItems()}
      </div>
    );
  }
}

export default App;
