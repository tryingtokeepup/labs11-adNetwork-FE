import React, { Component } from "react";
import { HeroHome } from "./HeaderStyle";
import { ElasticReverse } from "react-burgers";

class Header extends Component {
  state = {
    active: false
  };
  toggler = () => {
    console.log("clicked");
    this.setState({ active: !this.state.active });
  };
  render() {
    return (
      <>
        <HeroHome>
          {/* <nav>
        <a href="/#">Logo</a>

        <div className="middle-anchors">
          <a href="/#">Team</a>
          <a href="/#">Contact</a>
          <a href="/#">About</a>
          <a href="/#">Dashboard</a>
        </div>

        <div>
          <a href="/#">Login</a>
          <a href="/#">Signup</a>
        </div>
      </nav> */}

          <div className="container">
            <nav>
              <a href="/#logoHERE">LOGO</a>
              <ElasticReverse
                color="#ffff"
                lineHeight={2}
                width={30}
                acitve={this.toggler}
              />
            </nav>

            <div className="hero-content">
              {/* ----------------- Mobile nav  ----------------- */}
              <p className="hero-sub-title">
                #Lad Network #faster websites #improve SEO
              </p>
              <h1>
                <span>Creepy Ads</span> <br /> We are a non creepy ad network
                that presents itself as actually very creepy.
              </h1>
              <div className="button">
                <a className="btn_scroll btn_blue" href="#">
                  Start a Free Trial
                </a>
                <a className="btn_scroll btn_blue yellow-btn" href="#">
                  Start a Free Trial
                </a>
              </div>
            </div>
            <div className="container_illustration">
              {/* <div className="animation" /> */}
            </div>
          </div>
          <span className="border_bottom" />
        </HeroHome>
      </>
    );
  }
}

export default Header;
