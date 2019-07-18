import React, { Component } from 'react';
import Header from '../components/Header';
import Skillset from '../components/Skillset';
import Details from '../components/Details';
import "./Profile.scss"

class Profile extends Component {
  state = {  }
  render() { 
    return ( <>
      <Header />
      <div className="profile-content">
        <Skillset />
        <Details/>
      </div>
    </>);
  }
}
 
export default Profile;