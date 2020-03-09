import React from "react";

class Box extends React.Component {
  constructor() {
    super();
    this.state = {
      bg: "Red",
      message: ""
    };
  }

  render() {
    return (
      <section className="inc_cont">
        <div className="hello">
          <p>Hello</p>
          <p>Hello Hello</p>
          <p>Hello Hello Hello </p>
          <p>Hello Hello Hello Hello</p>
        </div>
        <div className={this.state.bg}></div>
        <div className="color_box">
          <button
            onClick={() =>
              this.setState({
                message: "Button Clicked",
                bg: "Green"
              })
            }
          >
            Press
          </button>
        </div>
        <p className="para">{this.state.message}</p>
      </section>
    );
  }
}
export default Box;
