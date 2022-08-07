import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
static defaultProps = {
  numberWords : ["one","two","three","four","five","six"],
  val:1
}

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.toggleLocked(this.props.idx)
  }

  render() {
    let classes = `Die fas fa-dice-${this.props.numberWords[this.props.val -1 ]} fa-5x `
    if(this.props.locked)classes += "Die-locked"
    if(this.props.rolling)classes += "Die-rolling"
    return (
      <i
        className={classes}
        onClick={this.handleClick}
      >
      </i>
    );
  }
}

export default Die;
