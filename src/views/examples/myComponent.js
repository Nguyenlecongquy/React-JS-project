import react from "react";

class MyComponent extends react.Component {
  state = {
    name: "Cong Quy",
    address: "PY",
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="first">
          <div>My name is {this.state.name}</div>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChangeName(event)}
          />
        </div>

        <div className="second"> Address: {this.state.address} </div>
      </>
    );
  }
}
export default MyComponent;
