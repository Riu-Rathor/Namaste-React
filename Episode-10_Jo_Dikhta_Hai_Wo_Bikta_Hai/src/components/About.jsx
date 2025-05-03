import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <div>About</div>
      <User/>
      <UserClass name={"Rishit Singh"} location={"Saharanpur"} contact={"7817070558"}/>
      </>
    );
}
}

export default About;