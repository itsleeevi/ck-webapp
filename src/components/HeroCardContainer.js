import React, { useEffect, useState } from "react";
import HeroCard from "./HeroCard";
import Pagination from "./Pagination";

const HeroItems = [
    {
      "id": 123,
      "name": "Rogue 123",
      "class": "Rogue",
      "Tier": "Teir 1",
      "Price": 10,
      "image": "images/Character_Frame_01.png"
    },
    {
      "id": 124,
      "name": "Monk 124",
      "class": "Monk",
      "Tier": "Teir 1",
      "Price": 15,
      "image": "images/Character_Frame_02.png"
    },
    {
      "id": 125,
      "name": "Knight 125",
      "class": "Knight",
      "Tier": "Teir 2",
      "Price": 15,
      "image": "images/Character_Frame_03.png"
    },
    {
      "id": 126,
      "name": "Magician 126",
      "class": "Magician",
      "Tier": "Teir 2",
      "Price": 15,
      "image": "images/Character_Frame_04.png"
    },
    {
        "id": 127,
        "name": "Rogue 127",
        "class": "Rogue",
        "Tier": "Teir 1",
        "Price": 10,
        "image": "images/Character_Frame_01.png"
      },
      {
        "id": 128,
        "name": "Monk 128",
        "class": "Monk",
        "Tier": "Teir 1",
        "Price": 15,
        "image": "images/Character_Frame_02.png"
      },
      {
        "id": 129,
        "name": "Knight 129",
        "class": "Knight",
        "Tier": "Teir 2",
        "Price": 15,
        "image": "images/Character_Frame_03.png"
      },
      {
        "id": 130,
        "name": "Magician 130",
        "class": "Magician",
        "Tier": "Teir 2",
        "Price": 15,
        "image": "images/Character_Frame_04.png"
      },
      {
        "id": 131,
        "name": "Rogue 131",
        "class": "Rogue",
        "Tier": "Teir 1",
        "Price": 10,
        "image": "images/Character_Frame_01.png"
      },
      {
        "id": 132,
        "name": "Monk 132",
        "class": "Monk",
        "Tier": "Teir 1",
        "Price": 15,
        "image": "images/Character_Frame_02.png"
      },
      {
        "id": 133,
        "name": "Knight 133",
        "class": "Knight",
        "Tier": "Teir 2",
        "Price": 15,
        "image": "images/Character_Frame_03.png"
      },
      {
        "id": 134,
        "name": "Magician 134",
        "class": "Magician",
        "Tier": "Teir 2",
        "Price": 15,
        "image": "images/Character_Frame_04.png"
      },
      {
          "id": 135,
          "name": "Rogue 135",
          "class": "Rogue",
          "Tier": "Teir 1",
          "Price": 10,
          "image": "images/Character_Frame_01.png"
        },
        {
          "id": 136,
          "name": "Monk 136",
          "class": "Monk",
          "Tier": "Teir 1",
          "Price": 15,
          "image": "images/Character_Frame_02.png"
        },
        {
          "id": 137,
          "name": "Knight 137",
          "class": "Knight",
          "Tier": "Teir 2",
          "Price": 15,
          "image": "images/Character_Frame_03.png"
        },
        {
          "id": 138,
          "name": "Magician 138",
          "class": "Magician",
          "Tier": "Teir 2",
          "Price": 15,
          "image": "images/Character_Frame_04.png"
        }
];

const HeroCardContainer = (props) => {

  const [heros, setHeros] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [herosPerPage] = useState(6);

  useEffect( () => {

    setHeros(HeroItems);
  }, []);

  const indexOfLastHero = currentPage * herosPerPage;
  const indexOfFirstHero = indexOfLastHero - herosPerPage;
  const currentHeros = HeroItems.slice(indexOfFirstHero, indexOfLastHero);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="main_container">
      <div className="hero-container">
        <HeroCard heros={currentHeros} />       
      </div>

      <Pagination herosPerPage={herosPerPage} totalHeros={HeroItems.length} paginate={paginate} />
    </div>
  );
};

export default HeroCardContainer;
