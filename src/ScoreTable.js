import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {

  render() {
    const { scores, doScore, totalScore, rolling, gameover} = this.props;

    if (gameover) {
      return (
        <div className="ScoreTable">
          <section className="ScoreTable-sect ion">
            <h2>Upper</h2>
            <table cellSpacing="0">
              <tbody>
                <RuleRow name="Ones" rolling={rolling} description={ones.description} score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)} />
                <RuleRow name="Twos" rolling={rolling} description={twos.description}score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)} />
                <RuleRow name="Threes" rolling={rolling} description={threes.description} score={scores.threes} doScore={evt => doScore("threes", threes.evalRoll)} />
                <RuleRow name="Fours" rolling={rolling} description={fours.description} score={scores.fours} doScore={evt => doScore("fours", fours.evalRoll)} />
                <RuleRow name="Fives" rolling={rolling} description={fives.description} score={scores.fives} doScore={evt => doScore("fives", fives.evalRoll)} />
                <RuleRow name="Sixes" rolling={rolling} description={sixes.description} score={scores.sixes} doScore={evt => doScore("sixes", sixes.evalRoll)} />
              </tbody>
            </table>
          </section>
          <section className="ScoreTable-section ScoreTable-section-lower">
            <h2>Lower</h2>
            <table cellSpacing="0">
              <tbody>
                <RuleRow name="Three of Kind" rolling={rolling} description={threeOfKind.description} score={scores.threeOfKind} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} />
                <RuleRow name="Four of Kind" rolling={rolling} description={fourOfKind.description} score={scores.fourOfKind} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} />
                <RuleRow name="Full House" rolling={rolling} description={fullHouse.description} score={scores.fullHouse} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} />
                <RuleRow name="Small Straight" rolling={rolling} description={smallStraight.description} score={scores.smallStraight} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} />
                <RuleRow name="Large Straight" rolling={rolling} description={largeStraight.description} score={scores.largeStraight} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} />
                <RuleRow name="Yahtzee" rolling={rolling} description={yahtzee.description} score={scores.yahtzee} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} />
                <RuleRow name="Chance" rolling={rolling} description={chance.description} score={scores.chance} doScore={evt => doScore("chance", chance.evalRoll)} />
              </tbody>
            </table>
          </section>
          <h2>TOTAL SCORE: {totalScore} </h2>
        </div>
      )
    }

    else{
      return (
        <div className="ScoreTable">
          <section className="ScoreTable-section ScoreTable-section-lower">
            <h2 className='gameover-title'>¡Thanks for playing!</h2>
            <h2 className='gameover-title'>FINAL SCORE: {totalScore} </h2>
            <button className='Game-reroll'>¡Try Again!</button>
          </section>
        </div>
      )
    }    
  }
}

export default ScoreTable;