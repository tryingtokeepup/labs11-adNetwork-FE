import React, { Component } from 'react';

class Home extends Component {
  render() {
    const { isAuthenticated, login, getExpiryDate } = this.props.auth;
    return (
      <div className="container">
        {isAuthenticated() &&
          <div>
            <h4>You are logged in!</h4>
            <h3>About Your Access Token</h3>
            <p>
              Your <code>access_token</code> has an expiry date of:{' '}
              {getExpiryDate()}
            </p>
            <p>
              The token has been scheduled for renewal, but you can also renew it manually from the navbar
              if you don't want to wait. This manual renewal button is really
              just for demonstration and you probably won't want such a control
              in your actual application.
            </p>
          </div>}
        {!isAuthenticated() &&
          <h4>
            You are not logged in! Please{' '}
            <a style={{ cursor: 'pointer' }} onClick={login.bind(this)}
              href='/#'
            >
              Log In
            </a>{' '}
            to continue.
          </h4>}
      </div>
    );
  }
}

export default Home;
