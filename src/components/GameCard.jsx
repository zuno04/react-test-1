// src/components/GameCard.js
import React from "react";
import styled from "styled-components";

const GameCard = ({ game, isNew, jackpot }) => {
  const GameCardContainer = styled.div`
    width: 290px;
    height: 195px;
    border: 1px solid #373737;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
    margin-top: 45px;
    background-image: url(${game.image});
    background-size: cover;
    text-align: center;
    position: relative;
    transition: 0.3s;

    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px);
    }

    @media (max-width: 768px) {
      width: 100%;
      max-width: 300px;
    }
  `;

  return (
    <GameCardContainer>
      {isNew && (
        <Ribbon>
          <span>New</span>
        </Ribbon>
      )}
      {jackpot && <JackpotValue>£{jackpot.amount}</JackpotValue>}
    </GameCardContainer>
  );
};

export default GameCard;

const Ribbon = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
  &::before,
  &::after {
    position: absolute;
    z-index: -1;
    content: "";
    display: block;
    border: 5px solid #08440b;
  }
  span {
    position: absolute;
    display: block;
    width: 225px;
    padding: 15px 0;
    background-color: #7fc22b;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    font: 700 18px/1 "Lato", sans-serif;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    text-align: center;
    left: -25px;
    top: 30px;
    transform: rotate(45deg);
  }
  top: -10px;
  right: -10px;
  &::before,
  &::after {
    border-top-color: transparent;
    border-right-color: transparent;
  }
  &::before {
    top: 0;
    left: 0;
  }
  &::after {
    bottom: 0;
    right: 0;
  }
`;

const JackpotValue = styled.p`
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 115px;
`;
