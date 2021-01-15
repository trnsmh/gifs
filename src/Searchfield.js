import React, { Component } from "react";
import "./Searchfield.css";

class Searchfield extends Component {
  add(event) {
    event.preventDefault();

    if (event.target.gif.value !== "") {
      fetch(
        "https://api.giphy.com/v1/gifs/search?q=" +
          event.target.gif.value +
          "&api_key=vxkSbg5S9kDqRaM2RqXtACQUlggmLUQ6"
      )
        .then((res) => res.json())
        .then((result) => {
          this.props.add(result);
        });
    } else {
      alert("There was nothing entered");
    }
  }

  addR(event) {
    event.preventDefault();
    fetch(
      "http://api.giphy.com/v1/gifs/random?api_key=vxkSbg5S9kDqRaM2RqXtACQUlggmLUQ6"
    )
      .then((res) => res.json())
      .then((result) => {
        this.props.add(result);
      });
  }

  render() {
    return (
      <form onSubmit={(e) => this.add(e)}>
        <div className="Searchfield">
          <header className="App-header">
            <h1 id="title">GIPHY</h1>
          </header>
        </div>
        <input id="textbox" type="text" name="gif" placeholder="what is it ?"/>
        <br></br>
        <button id="submit">Submit</button>
        <button onClick={(e) => this.addR(e)} id="random">
          Random
        </button>
      </form>
    );
  }
}

export default Searchfield;
