// src/components/GameCard.js
import React from "react";
import styled from "styled-components";

const GameCard = ({ game, jackpot }) => {
  const GameCardContainer = styled.div`
    width: 300px;
    height: 200px;
    border: 1px solid #373737;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
    background-image: url(${game.image});
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
      {/* <GameName>{game.name}</GameName> */}
      {jackpot && <JackpotValue>£{jackpot.amount}</JackpotValue>}
    </GameCardContainer>
  );
};

export default GameCard;

const GameImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const GameName = styled.h3`
  color: #373737;
  font-size: 1.1em;
  margin: 10px 0;
`;

const JackpotValue = styled.p`
  color: #8dc63f;
  font-size: 1.2em;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 10px;
`;
