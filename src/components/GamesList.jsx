// src/components/GamesList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import GameCard from "./GameCard";
import CategoryNavigation from "./CategoryNavigation";

const GamesList = () => {
  const [games, setGames] = useState([]);
  const [jackpots, setJackpots] = useState([]);
  // const [categories, setCategories] = useState([])

  const categories = [
    { id: "top", name: "Top Games" },
    { id: "new", name: "New Games" },
    { id: "slots", name: "Slots" },
    { id: "jackpots", name: "Jackpots" },
    { id: "live", name: "Live" },
    { id: "blackjack", name: "Blackjack" },
    { id: "roulette", name: "Roulette" },
    { id: "table", name: "Table" },
    { id: "poker", name: "Poker" },
    { id: "other", name: "Other" },
  ];

  useEffect(() => {
    const fetchGames = async () => {
      const response = await axios.get(
        "http://stage.whgstage.com/front-end-test/games.php"
      );
      // let tempCategories = [];
      // response.data.map((elm) => {
      //   Object.values(elm.categories).map((c) => tempCategories.push(c));
      // });
      // setCategories(tempCategories);
      setGames(response.data);
    };

    const fetchJackpots = async () => {
      const response = await axios.get(
        "http://stage.whgstage.com/front-end-test/jackpots.php"
      );
      setJackpots(response.data);
    };

    fetchGames();
    fetchJackpots();
  }, []);

  const [activeCategory, setActiveCategory] = useState(null);

  const filteredGames = activeCategory
    ? games.filter((game) => game.categories.includes(activeCategory))
    : games;

  return (
    <>
      <CategoryNavigation
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />
      <GameGrid>
        {filteredGames.map((game) => {
          const jackpot = jackpots.find((j) => j.game === game.id);
          return <GameCard key={game.id} game={game} jackpot={jackpot} />;
        })}
      </GameGrid>
    </>
  );
};

export default GamesList;

const GameGrid = styled.div`
  margin-top: 50px;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
