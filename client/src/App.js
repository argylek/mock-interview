import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ItemForm from "./components/itemForm";
import ItemCard from './components/itemCard'
import {Button} from 'react-bootstrap'

class App extends Component {
  state = {
    items: [],
    sortKey: 0,
    showForm: false
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

  sortByMostLikes = () =>{
    const sorted = this.state.items.sort((a,b) => (a.likes < b.likes) ? 1 : -1)
    this.setState({
      items: sorted
    })
  }

  sortByLeastLikes = () =>{
    const sorted = this.state.items.sort((a, b) => (a.likes > b.likes ? 1 : -1));
    this.setState({
      items: sorted
    })
  }

  toggleForm = () =>{
    this.setState({
      showForm: !this.state.showForm
    })
  }


  render() {
    return (
      <div className="App" style={styles.main}>
        <h1>Mock Interview</h1>
        <Button onClick={this.toggleForm}>
        {this.state.showForm ? "Close Form" : "New Item"}
        </Button>
        {this.state.showForm ? <ItemForm getItems={this.getItems}/> : null}
        <Button onClick={this.sortByMostLikes}>Sort by Most Likes</Button>
        <Button onClick={this.sortByLeastLikes}>Sort by Least Likes</Button>
        {this.state.items.map(item => ItemCard(item))}
      </div>
    );
  }
}

export default App;


const styles = {
  itemView: {
    width: "500px",
    height: "300px"
  },
  upVote: {
    width: "1em",
    height: "1em",
    backgroundRepeat: "no-repeat",
    backgroundSize: "1rem 1rem"
  },
  main: {
    backgroundColor: "rgb(243,244,246)"
  }
};