import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: { 
        name: "Dummy name",
        location: "Default",
        avatar_url: "htp://dummy-photo.com"
      }
    };

  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Riu-Rathor")
    const json = await data.json();
    this.setState({
      userInfo: json
    }) 
  }

  render() {
    const { name, location, contact, avatar_url } = this.state.userInfo;
    return (
      <div className="">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
        <img src={avatar_url}/>
      </div>
    );
  }
}

export default UserClass;
