import React, { Component } from "react";
import Avatar from "../avatar/Avatar.js";
import SkillMenu from "./SkillMenu.js";

export default class Skill extends Component {
  render() {
    return (
      <>
      {/* using this as a prop */}
        <Avatar page="skills" />
        <SkillMenu />
      </>
    );
  }
}