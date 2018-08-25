import React, { Component } from "react";
import Counter from "../counter/counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 1 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(x => {
      x.value = 0;
      return x;
    });
    this.setState({ counters });
  };

  handleDelete = countedId => {
    console.log("Handle Delete Event Clicked", countedId);
    const counters = this.state.counters.filter(c => c.id !== countedId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>

        {this.state.counters.map(counters => (
          <Counter
            key={counters.id}
            counters={counters}
            onDelete={this.handleDelete}
          />
          //   <Counter
          //     key={counters.id}
          //     value={counters.value}
          //     id={counters.id}
          //     onDelete={this.handleDelete}
          //   />
        ))}
      </div>
      //   <div>
      //     <Counter />
      //     <Counter />
      //     <Counter />
      //     <Counter />
      //   </div>
    );
  }
}

export default Counters;
