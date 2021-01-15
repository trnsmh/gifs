import "./App.css";
import { Component } from "react";
import Searchfield from "./Searchfield";
import Gifcard from "./gifcard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      jif: [],
      isRand: false,
    };
    this.add = this.add.bind(this);
  }
  componentDidMount() {
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=vxkSbg5S9kDqRaM2RqXtACQUlggmLUQ6"
    )
      .then((res) => res.json())
      .then((result) => {
        this.add(result);
      });
  }

  add(
    v //we dont use val XD
  ) {
    this.setState({ jif: v.data });
    if (this.state.jif.length === undefined) {
      this.setState({ isRand: true });
    } else this.setState({ isRand: false });
  }

  render() {
    let gifList;

    if (this.state.jif.length >= 1) {
      gifList = [];
      for (let i = 0; i < this.state.jif.length; i++) {
        gifList.push(<Gifcard url={this.state.jif[i].images.original.url} />);
      }
    } else if (this.state.isRand === true) {
      gifList = <Gifcard url={this.state.jif.images.original.url} />;
    } else {
      gifList = <div>No Results</div>;
    }

    return (
      <div>
        <Searchfield add={this.add} />
        <div className="Container">{gifList}</div>
      </div>
    );
  }
}

export default App;
