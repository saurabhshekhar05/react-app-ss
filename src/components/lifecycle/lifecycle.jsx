import React, { Component } from "react";

class LifeCycle extends Component {
  childdivStyles = {
    float: "left",
    width: "32%",
    height: "700px",
    border: "1px solid black",
    paddingLeft: "8px"
  };

  childHeadingDivStyles = {
    fontStyle: "italic",
    fontWeight: "bold",
    color: "blue",
    textDecoration: "underline"
  };

  constructor() {
    super();
    console.log("LifeCycle Constructor Called.");
  }

  componentWillMount() {
    console.log("LifeCycle componentWillMount Called.");
  }

  componentDidMount() {
    console.log("LifeCycle componentDidMount Called.");
  }

  componentWillReceiveProps() {
    console.log("LifeCycle componentWillReceiveProps Called.");
  }

  shouldComponentUpdate(nextState, nextProps) {
    console.log("LifeCycle shouldComponentUpdate Called.");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("LifeCycle componentWillUpdate Called.");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("LifeCycle componentDidUpdate Called.");
  }

  componentWillUnmount() {
    console.log("LifeCycle componentWillUnmount Called.");
  }

  render() {
    console.log("LifeCycle render() Called.");
    return (
      <div style={{ height: "900px" }}>
        <div>
          <h4>Lifecycle Component Called.</h4>
        </div>
        <br />
        <div style={{ marginLeft: "1%" }}>
          <h6>LifeCycle Methods</h6>
          <ul>
            <li>Mounting</li>
            <li>Updating</li>
            <li>UnMounting</li>
          </ul>
        </div>

        <div style={{ width: "100%", marginLeft: "1%" }}>
          <div style={this.childdivStyles}>
            <h6>Mounting (Sequence of Execution):-</h6>
            <div style={this.childHeadingDivStyles}>constructor()</div>
            <ul>
              <li> constructor called once. </li>
              <li>
                assign this.state directly, no need to use this.setState().
              </li>
            </ul>
            <div style={this.childHeadingDivStyles}>componentWillMount() </div>
            <ul>
              <li> component will not render here. </li>
              <li>called once in a life of component.</li>
              <li>No access to DOM.</li>
              <li>componentWillMount is called before the render() method.</li>
              <li>
                Only lifecycle method that is called on the server side, when
                you use serverside rendering.
              </li>
            </ul>
            <div style={this.childHeadingDivStyles}>render()</div>
            <ul>
              <li> will call on every state change or prop change. </li>
              <li>never change the state in render.</li>
            </ul>
            <div style={this.childHeadingDivStyles}>componentDidMount()</div>
            <ul>
              <li>called after render(). DOM is loaded. </li>
              <li> Called once.</li>
              <li>
                To perform anything that relies on the DOM, can be done here
                only.
              </li>
              <li> On State change here, it will re-render the component.</li>
              <li> call ajax request here. subscribe method here.</li>
              <li>Add Event listeners.</li>
            </ul>
            <br />
          </div>

          <div style={this.childdivStyles}>
            <h6>Updating (Sequence of Execution):-</h6>
            <div style={this.childHeadingDivStyles}>
              componentWillReceiveProps()
            </div>
            <ul>
              <li>
                Whenever a component receives a new set of props, this method
                will be called first.
              </li>
              <li>
                React calls this method, even when the props have not changed.
              </li>
              <li>
                sure to compare this.props to nextProps to avoid setting the
                state unnecessarily.
              </li>
              <li>doesn’t call this method in the mount process. </li>
            </ul>
            <div style={this.childHeadingDivStyles}>
              shouldComponentUpdate(nextState, nextProps){" "}
            </div>
            <ul>
              <li>
                need to return something. If true, rendering will done. if
                false, no rendering will done.
              </li>
              <li>
                to avoid possible unnecessary renders, you could handle this
                here.
              </li>
              <li>
                Returning false means, that React will not execute
                componentWillUpdate(), render() and componentDidUpdate().
              </li>
              <li>can’t call setState here.</li>
            </ul>
            <div style={this.childHeadingDivStyles}>
              componentWillUpdate(nextProps, nextState)
            </div>
            <ul>
              <li>no setstate is used here.</li>
              <li>never change the state in render.</li>
            </ul>
            <div style={this.childHeadingDivStyles}>
              componentDidUpdate(prevProps, prevState)
            </div>
            <ul>
              <li>use setState here.</li>
              <li>
                invoked after updation occurs. Not called in initial render().
              </li>
              <li>prevProps, prevState is available here. </li>
              <li>To compare the updated props with prev props.</li>
              <li>
                Will not invoked if shouldComponentUpdate() returns false.
              </li>
            </ul>
            <br />
          </div>

          <div style={this.childdivStyles}>
            <h6>Unmounting (Sequence of Execution):-</h6>
            <div style={this.childHeadingDivStyles}>componentWillUnmount()</div>
            <ul>
              <li>
                removing event listeners you added in componentDidMount (or
                elsewhere)
              </li>
              <li>
                cleaning up DOM elements that you created in componentDidMount
              </li>
              <li>component destroyed, no other method will called.</li>
              <li>
                Should not call setState() in componentWillUnmount(), component
                will never re-rendered.
              </li>
              <li>unsubsribe it here. perform necessary cleanup.</li>
            </ul>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default LifeCycle;
