import React, { useState } from "react";
import { useParams } from "react-router";
import LayoutInner from "./LayoutInner";
import PopUp from "./PopUp";

import CrystalLeft from "../images/crystal.png";
import CrystalRight from "../images/crystal02.png";
import Girl from "../images/girl.png";

const heroHistory = [
  {
    "owner": "Ox57...0C12",
    "renter": "Ox57...0C11",
    "rent_mode": "Share Point",
    "rent": "54",
    "share": "4%",
    "date": "24/01/2022"
  },
  {
    "owner": "Ox57...0C12",
    "renter": "Ox57...0C11",
    "rent_mode": "Share Point",
    "rent": "54",
    "share": "4%",
    "date": "24/01/2022"
  },
  {
    "owner": "Ox57...0C12",
    "renter": "Ox57...0C11",
    "rent_mode": "Share Point",
    "rent": "54",
    "share": "4%",
    "date": "24/01/2022"
  },
  {
    "owner": "Ox57...0C12",
    "renter": "Ox57...0C11",
    "rent_mode": "Share Point",
    "rent": "54",
    "share": "4%",
    "date": "24/01/2022"
  }
];

const HeroDetail = (props) => {

  const [open, setOpen] = useState(false);
  
  const openPopUp = () => {
  
    document.querySelector('.header').style.filter = 'blur(3px)';
    document.querySelector('.warlock').style.filter = 'blur(3px)';
    setOpen(true);
  }

  const closePopUp = () => {
  
    document.querySelector('.header').style.filter = '';
    document.querySelector('.warlock').style.filter = '';
    setOpen(false);
  }

  const { id } = useParams();
  console.log(id);
  return (
    // <div>
    //     <h1>ID: { id }</h1>
    // </div>
    <>
      <LayoutInner />
      <div className="warlock">
        <div className="main_container">
          <div className="inner_warlock">
            <div className="warlock_img">
              <img src={ Girl } />
            </div>
            <div className="warlock_table">
              <h1 id="war_heading">
                Warlock<span id="war_txt"> ID: 8500 Warlock Tier 1</span>
              </h1>
              <h3 id="rent_heading">Rent history</h3>
              <table>
                <thead>
                  <tr id="border_btm">
                    <th scope="col">Owner</th>
                    <th scope="col">Renter</th>
                    <th scope="col">Rent mode</th>
                    <th scope="col">Rent</th>
                    <th scope="col">Price/share</th>
                    <th scope="col">Rent Time</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    heroHistory.map( (history, index) => (
                      <tr key={ index }>
                        <td>{ history.owner }</td>
                        <td>{ history.renter }</td>
                        <td>{ history.rent_mode }</td>
                        <td>{ history.rent }</td>
                        <td className="tax_color">{ history.share }</td>
                        <td>{ history.date }</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <div className="main_earn">
                <div className="earn_text">
                  <h2 id="earn_tax">You Earn 4%</h2>
                </div>
                <div className="earn_btn">
                <button
                  onClick={ openPopUp }
                  type='button'
                  className='btn btn-primary'
                  data-toggle='modal'
                >
                  INITIATE RENT
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Crystal_image">
        <img src={CrystalLeft} />
      </div>
      <div className="Crystal_image_right">
        <img src={CrystalRight} />
      </div>
      <PopUp opened={open} closepop={closePopUp} />
    </>
  );
};

export default HeroDetail;
