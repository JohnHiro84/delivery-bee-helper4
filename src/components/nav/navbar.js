import React from 'react';
import { Link } from 'react-router-dom'
import '../../assets/stylesheets/nav-links.css';
import { withRouter } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
      this.props.history.push("/login");
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
              <ul className="nav-bar-ul">
                <li id="logo"><Link to={'/orders'} >Delivery Bee</Link></li>
                <li><button id="logout-session" onClick={this.logoutUser}>Logout</button></li>
                <li id="helper-nav-link"><Link to={'#'}>HelperBee</Link></li>
                <li><Link to={'/profile'}>{this.props.handle}</Link></li>
                <li><Link to={'/profile'}>Profile</Link></li>
                <li><Link to={'/completed'}>Completed</Link></li>
                <li><Link to={'/accepted'}>Accepted</Link></li>
                <li><Link to={'/orders'}>Available</Link></li>
              </ul>
        );
      } else {
        return (
              <ul className="nav-bar-ul">
               <li id="logo"><Link to={'/'} >Delivery Bee</Link></li>
               <li><Link to={'/signup'}>Signup</Link></li>
               <li><Link to={'/login'}>Login</Link></li>
              </ul>
        );
      }
  }

  render() {
      return (
        <div className="nav-bar-container">
          { this.getLinks() }
        </div>
      );
  }
}

export default withRouter(NavBar);
