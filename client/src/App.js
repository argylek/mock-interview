import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ItemForm from "./components/itemForm";
import ItemCard from "./components/itemCard";

class App extends Component {
  state = {
    items: [],
    sortKey: 0,
    showForm: false,
    loading: false
  };

  componentDidMount() {
    this.getItems();
  }

  getItems = async () => {
    const res = await axios.get("api/items");

    this.setState({
      items: res.data,
      loading: false
    });
  };

  upVote = item_id => {};

  sortByMostLikes = () => {
    const sorted = this.state.items.sort((a, b) =>
      a.likes < b.likes ? 1 : -1
    );
    this.setState({
      items: sorted
    });
  };

  sortByLeastLikes = () => {
    const sorted = this.state.items.sort((a, b) =>
      a.likes > b.likes ? 1 : -1
    );
    this.setState({
      items: sorted
    });
  };

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  afterLoaded = () => (
    <div>
      <div style={styles.buttons}>
        <div onClick={this.toggleForm} className="buttons">
          {this.state.showForm ? "Close Form" : "New Item"}
        </div>

        <div className="buttons" onClick={this.sortByMostLikes}>
          Sort by Most Likes
        </div>
        <div className="buttons" onClick={this.sortByLeastLikes}>
          Sort by Least Likes
        </div>
      </div>
      <div style={styles.form}>
        {this.state.showForm ? (
          <ItemForm toggleForm={this.toggleForm} getItems={this.getItems} />
        ) : null}
      </div>
      {this.state.items.map(item => ItemCard(item))}
    </div>
  );

  render() {
    return (
      <div className="App" style={styles.main}>
        <h1>Mock Interview</h1>
        {this.state.loading ? (
          <div class="lds-dual-ring"></div>
        ) : (
          this.afterLoaded()
        )}
      </div>
    );
  }
}

export default App;

const styles = {
  main: {
    backgroundColor: "rgb(243,244,246)"
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    marginBottom: "4px",
    justifyContent: "center",
    borderBottom: "2px solid",
    width: "50%",
    marginLeft: "25%"
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
};

