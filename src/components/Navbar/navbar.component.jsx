import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
export default class Navbar extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    console.log(activeItem);
    return (
      <Segment inverted>
        <Menu inverted stackable pointing secondary>
          <Menu.Item
            name="home"
            as={NavLink}
            to="/"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="about"
            as={NavLink}
            to="/about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="achievements"
            as={NavLink}
            to="/achievements"
            active={activeItem === "achievements"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name="contact"
            as={NavLink}
            to="/contact"
            active={activeItem === "contact"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="sponsor"
            as={NavLink}
            to="/sponsor"
            active={activeItem === "sponsor"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="signin"
            as={NavLink}
            to="/signin"
            active={activeItem === "signin"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}
