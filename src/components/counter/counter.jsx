import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.counters.value,
    imageURL: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3", "tag4"]
  };

  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) return "No Tags.";
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>tag</li>
        ))}
      </ul>
    );
  }

  //To call handleIncrement function to Increment the value and initialise this.
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //If No Arrow Function, need to call and initialise using Constructor
  // handleIncrement() {
  //   console.log("Increment Clicked:- " + this.state.count);
  // }

  //Create Arrow Function to Initialise this operator, no need to call Constructor.
  handleIncrementArrowFunction = () => {
    console.log("handleIncrementArrowFunction Clicked:- " + this.state.value);

    //this.state.count++; Cannot Increment Like This.

    //Call Explicitily to Sync with the Real DOM.
    this.setState({ value: this.state.value + 1 });
  };

  handleIncrementArrowFunctionParameter = product => {
    console.log(product.id);
    console.log("handleIncrementArrowFunction Clicked:- " + this.state.value);

    //this.state.count++; Cannot Increment Like This.

    //Call Explicitily to Sync with the Real DOM.
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    //Apply Class Dynamically
    //let classes = this.getBadgeClasses(); //Ctrl + Shift + R

    console.log("props ", this.props);

    return (
      <React.Fragment>
        {/* <span style={this.styles} className="badge badge-primary m-2">
          Hello Count Is:- {this.formatCount()}
        </span> */}
        {/* <span
          style={{ fontFamily: "verdana", fontSize: 20 }}
          className="badge badge-primary m-2"
        >
          Hello Count Is:- {this.formatCount()}
        </span> */}

        {/* <span className="badge badge-primary m-2">
          Hello Count Is:- {this.formatCount()}
        </span> */}

        {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>tag</li>
          ))}
        </ul> */}

        {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrementArrowFunction}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button> */}

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrementArrowFunctionParameter({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-sm m-2 btn-danger"
          onClick={() => this.props.onDelete(this.props.counters.id)}
        >
          Delete
        </button>

        <div>
          {this.state.tags.length === 0 && "Please create a new tag!"}
          {this.renderTags()}
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
