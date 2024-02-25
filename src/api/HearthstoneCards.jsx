import React, { useState, useEffect } from "react";

const HearthstoneCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // cal api
    fetch(
      "https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json" 
    )
      .then((response) => response.json())
      
      // items 0 - 8
      .then((data) => setCards(data.slice(0, 8)))
      
      // error
      .catch((error) =>
        console.error("Error fetching Hearthstone cards:", error)
      );
  }, []);

  return (
    <>
      <h1 className="text-gray-custom font-bold text-4xl text-center my-3">
        Browse this collection of
        <span className="text-red-custom"> dynamic Items </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="gap-2 flex flex-col items-center justify-center text-center p-3 border-2 rounded-md"
          >
            <img
              src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.id}.png`}
              alt={card.name}
              className="w-auto h-auto object-cover"
            />
            <h2 className="text-lg font-bold ">{card.name}</h2>
            <p className="text-sm">{card.text}</p>
            <p className="text-sm">{card.flavor}</p>
            <p className="text-sm font-bold">{card.cardClass}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HearthstoneCards;
