import React, { Component } from "react";
import "./Header.scss";
class Header extends Component {
  render() {
    return (
      <div className="profile-header">
        Name
        <div className="role">Role</div>
      </div>
    );
  }
}

export default Header;
