import React, { Component } from "react";
import "./Sidebar.scss";
import { Button, Header, Image } from "semantic-ui-react";
class Sidebar extends Component {
  render() {
    return (
      <div className="detailpage-sidebar">
        <div className="sidebar-content">
          <Image src="Image/GroupListPageImage/book-863418_1920.jpg" />

          <div className="sidebar-desc">
            <Header>Jeong Seung Hoon</Header>
            <p>I want...</p>
          </div>

          <div className="sidebar-btns">
            <Button>1. Times</Button>
            <Button>2. Times</Button>
            <Button>3. Times</Button>
            <Button>4. Times</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
