import React, { Component } from "react";
import "./chessField.css";
import { moveKnight } from "./moveKnight";

export default class chessField extends Component {
  state = {
    initialPosition: null
  };

  paintChessBoard = index => {
    let rowIndex = Math.floor(index / 8);
    let squareColor;
    if (rowIndex % 2 === 0) {
      squareColor = index % 2 === 0 ? " white" : " black";
    } else {
      squareColor = index % 2 === 0 ? " black" : " white";
    }
    return squareColor;
  };

  handleClick = index => {
    this.setState({
      initialPosition: index
    });
  };

  render() {
    const { chessField } = this.props;
    const { initialPosition } = this.state;
    let possibleMoves = [];

    // check if initial position was selected
    if (Number.isInteger(this.state.initialPosition)) {
      // invoke moveKnight function to get an array of strings of
      // possible moves
      possibleMoves = moveKnight(chessField[initialPosition]);
    }

    return (
      <div className="chessField">
        {this.props.chessField.map((chessSquare, index) => {
          return (
            <div
              // add css classes to display each square as a result of
              // calculation of initial position and possible moves
              className={`${this.paintChessBoard(index)} ${
                this.state.initialPosition === index ? " initialPosition" : ""
              } ${possibleMoves.includes(chessSquare) ? "possibleMove" : ""}`}
              key={index}
              onClick={() => this.handleClick(index)}
            />
          );
        })}
      </div>
    );
  }
}
