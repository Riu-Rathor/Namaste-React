import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <div>About</div>
      <div>
        loggedInUser
        <UserContext.Consumer>
          {(data)=> <h1>{data.loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
      <User/>
      <UserClass name={"Rishit Singh"} location={"Saharanpur"} contact={"7817070558"}/>
      </>
    );
}
}

export default About;