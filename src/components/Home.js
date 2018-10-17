import React, { Component } from "react";
import { connect } from "react-redux";
import { addPerson } from "../ducks/reducer";
import { getPeople } from "../ducks/reducer";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputname: "",
      inputage: 0,
      inputcity: "",
      obj: []
    };
  }

  componentDidMount() {
    this.props.getPeople();
    this.setState({ obj: this.props.state.people });
  }

  nameHandler(value) {
    this.setState({ inputname: value });
  }

  ageHandler(value) {
    this.setState({ inputage: value });
  }

  cityHandler(value) {
    this.setState({ inputcity: value });
  }

  submitHandler() {
    const { inputname, inputage, inputcity } = this.state;
    this.props.addPerson({
      name: inputname,
      age: inputage,
      city: inputcity
    });
  }

  render() {
    let display = this.state.obj.map((e, i) => {
      return (
        <div key={i}>
          <p>
            {e.name}
            {e.age}
            {e.city}
          </p>
        </div>
      );
    });
    return (
      <div>
        <h1>Home</h1>
        <input
          type="text"
          value={this.state.inputname}
          placeholder="Name"
          onChange={e => this.nameHandler(e.target.value)}
        />

        <input
          type="number"
          value={this.state.inputage}
          placeholder="age"
          onChange={e => this.ageHandler(e.target.value)}
        />

        <input
          type="text"
          value={this.state.inputcity}
          placeholder="City"
          onChange={e => this.cityHandler(e.target.value)}
        />
        <button onClick={() => this.submitHandler()}>Submit</button>
        {JSON.stringify(this.state.obj)}
        {display}
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return { state };
}

export default connect(
  mapStatetoProps,
  { addPerson, getPeople }
)(Home);
