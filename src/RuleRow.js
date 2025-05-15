import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const wasClicked = this.props.score
    return (
      <tr
        className={wasClicked?"RuleRow RuleRow-disabled":"RuleRow RuleRow-active" }
        onClick={(wasClicked||this.props.rolling)?null:this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{wasClicked?this.props.score:this.props.description}</td>
      </tr>
    )
  }
}

export default RuleRow;