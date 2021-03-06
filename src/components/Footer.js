import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import youtube from "../img/social/youtube.svg";
import linkedin from "../img/social/linkedin.svg";
import github from "../img/social/github.svg";
import reddit from "../img/social/reddit.svg";
import twitch from "../img/social/twitch.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="The Coding Canal"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
              <a title="linkedin" href="https://www.linkedin.com/in/thecodingcanal" target="_blank" rel="noreferrer">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/TheCodingCanal" target="_blank" rel="noreferrer">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com/TheCodingCanal" target="_blank" rel="noreferrer">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="youtube" href="https://www.youtube.com/channel/UCKa1UOG4ORxGnkKpTUAgO5A" target="_blank" rel="noreferrer">
                  <img
                    src={youtube}
                    alt="Youtube"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="github" href="https://github.com/thecodingcanal" target="_blank" rel="noreferrer">
                  <img
                    src={github}
                    alt="Github"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitch" href="https://www.twitch.tv/thecodingcanal" target="_blank" rel="noreferrer">
                  <img
                    src={twitch}
                    alt="Twitch"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="facebook" href="https://www.facebook.com/profile.php?id=100076442108449" target="_blank" rel="noreferrer">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="reddit" href="https://www.reddit.com/user/TheCodingCanal" target="_blank" rel="noreferrer">
                  <img
                    src={reddit}
                    alt="Reddit"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
