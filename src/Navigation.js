import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import ListIcon from "@material-ui/icons/List";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="Navigation">

<div className="Navigation__Content_Mobile">
        <button onClick={handleClick} className="Mobilenavigation__button" aria-controls="fade-menu" aria-haspopup="true">
          <ListIcon fontSize="large" />
        </button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <NavLink className="Mobilenavigation__Link" exact to="/" activeClassName="activeClass">
              HOME
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <NavLink className="Mobilenavigation__Link" exact to="/about" activeClassName="activeClass">
              ABOUT US
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <NavLink className="Mobilenavigation__Link" exact to="/categeory" activeClassName="activeClass">
              CATEGORY
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <NavLink className="Mobilenavigation__Link" exact to="/contact" activeClassName="activeClass">
              CONTACT
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
              LOGIN
          </MenuItem>
          <MenuItem onClick={handleClose}>
               SIGN UP
          </MenuItem>
        </Menu>
      </div>

      <div className="Navigation__Logo">
        <h1>JobList</h1>
      </div>
      <div className="Navigation__Content">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="activeClass">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about" activeClassName="activeClass">
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/categeory" activeClassName="activeClass">
              CATEGORY
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="activeClass">
              CONTACT
            </NavLink>
          </li>
          <button className="Navigation__button">LOGIN</button>
          <button className="Navigation__button">SIGN UP</button>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
