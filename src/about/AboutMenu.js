import React, { Component } from 'react'
import AboutMenuItem from "./AboutMenuItem";
import AboutSubheading from "./AboutSubheading.js"; 
import subheadingsData from "./subheadingsData.js";
import personalIcon from '../assets/moebius-triangle.png'; 
import educationIcon from "../assets/upgrade.png";
import careerIcon from "../assets/triple-corn.png";


export default class AboutMenu extends Component {

  // this is for the about page, to show personal option first and then upfront,
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
      activeSubheading: 1,
    };
  }

  // updating about page options

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
      activeSubheading: 1,
    });
  };


  handleSubheadingClick = (subheading) => {
    this.setState({
      activeSubheading: subheading,
    });
  };

  render() {






    // destructring
    const{activeMenuItem, activeSubheading} = this.state;
    const menuItems=["PERSONAL","EDUCATION","CAREER"];
    // -1 because array starts with 0 index 
    const activeMenuTitle = menuItems[activeMenuItem - 1];

    // for changing of icons
    const activeMenuIcon =
    // Conditional rendering and if else condition
    activeMenuTitle ==="PERSONAL"  ? personalIcon 
    :activeMenuTitle === "EDUCATION" ? educationIcon
    : careerIcon;

    const subheadings = subheadingsData[activeMenuItem];
    return (<>
    {/* for the left side of the about page */}
      <div className="menu">
        {menuItems.map((item,index)=>(
          <AboutMenuItem
          key={index}
          title={item}
          active={activeMenuItem === index+1}
          onClick={()=>this.handleMenuItemClick(index+1)}
          />
          ))}
      </div>

{/* for the right side of aboutpage */}
<div className="sub-container">
          <div className="icon-title-container">
            {/* dynamic changing of image and title */}
            <img src={activeMenuIcon} alt={activeMenuTitle} className="icon" />
            <h3>{activeMenuTitle}</h3>
          </div>
          {/* mapping on subheading    */}
          {subheadings.map((subheading, index) => (
            <AboutSubheading
              key={index}
              title={subheading.title}
              content={subheading.content}
              active={activeSubheading === index + 1}
              onClick={() => this.handleSubheadingClick(index + 1)}
              menuItem={activeMenuItem}
            />
          ))}
        </div>
      </>
    )
  }
}
