import React, { Component } from "react";
import "./../styles/header.css";
import tooltipHover from "./../javascript/tooltip.js";

export class Header extends Component {
  constructor(props) {
    super(props);
    // Get system preference initially
    const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    this.state = {
      isDarkMode: systemDarkMode,
    };
    // Apply the manual override based on system preference
    if (systemDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  componentDidMount() {
    // Optional: Listen to system changes (if you want to sync again)
    this.mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    this.mediaQuery.addEventListener("change", this.handleSystemThemeChange);
  }

  componentWillUnmount() {
    if (this.mediaQuery) {
      this.mediaQuery.removeEventListener("change", this.handleSystemThemeChange);
    }
  }

  handleSystemThemeChange = (e) => {
    // If system changes, update state and manual override.
    const isDark = e.matches;
    this.setState({ isDarkMode: isDark });
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  headerMenuToggle = () => {
    const headerRes = document.getElementById("headerRes");
    headerRes.style.display = headerRes.style.display === "flex" ? "none" : "flex";
  };

  handleIconClick = (e) => {
    // Toggle the theme manually on icon click
    this.setState((prevState) => {
      const newTheme = !prevState.isDarkMode;
      if (newTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return { isDarkMode: newTheme };
    });
    // Add a temporary "clicked" effect
    e.currentTarget.classList.add("clicked");
    setTimeout(() => {
      e.currentTarget.classList.remove("clicked");
    }, 800);
  };

  render() {
    const { isDarkMode } = this.state;
    const iconClass = isDarkMode ? "fa-regular fa-sun" : "fa-solid fa-moon";
    const tooltipText = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";

    return (
      <div className="headerWrap onLoad">
        <div className="headerCon">
          <h1>Milbert</h1>
          <div className="headerNav">
            <ul>
              {/* <li>
                <a href="#aboutme">About Me</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>Blogs</li>
              <li>Contact</li> */}
              <i
                onMouseOver={(e) => tooltipHover(e, tooltipText)}
                onMouseOut={() => tooltipHover(null, "")}
                className={iconClass}
                onClick={this.handleIconClick}
              >
                <div className="headerNightMode"></div>
              </i>
            </ul>
            <i className="fa-solid fa-bars" onClick={this.headerMenuToggle}>

              <div className="headerRes" id="headerRes">
                <ul>
                  <li>About Me</li>
                  <li>Projects</li>
                  <li>Blogs</li>
                  <li>Contact</li>
                </ul>
              </div>
            </i>
          </div>
        </div>

        
      </div>
    );
  }
}

export default Header;
