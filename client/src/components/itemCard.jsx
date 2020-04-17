import React from "react";
import "../App.css";

export default function itemCard(item) {
  return (
    <div key={item.id} style={styles.card}>
      <div style={styles.card.cardTop}>
        <img src={item.image} style={styles.card.cardTop.image} />
        <div style={styles.card.cardTop.name}>{item.name}</div>
      </div>
      <div>
        <div style={styles.card.description}>{item.description}</div>
        <button style={styles.card.upVoteButton}>
          <div className="upVote">{item.likes}</div>
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: "50%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "rgb(255	255	255)",
    marginTop: "10px",
    marginBottom: "30px",
    borderRadius: "8px",
    cardTop: {
      padding: "10px",
      name: {
        fontStyle: "bold",
        fontSize: "14px",
        float: "left",
        paddingLeft: "10px"
      },
      image: {
        borderRadius: "50px",
        height: "50px",
        width: "50px",
        float: "left"
      },
      postDate: {
        color: "gray",
        fontSize: "10px",
        fontStyle: "regular"
      }
    },
    description: {
      margin: "10px",
      paddingTop: "40px",
      paddingBottom: "20px",
      fontSize: "14px",
      fontStyle: "bold",
      shadow: "0 4px 8px",
      color: "0, 0, 0, 0.05"
    },
    upVoteButton: {
      height: "24px",
      width: "50px",
      borderRadius: "12px",
      float: "right",
      position: "relative",
      bottom: "20px",
      right: "10px",
      textAlign: "right",
      display: "block"
    }
  }
};
