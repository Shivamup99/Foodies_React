import React, { useState } from "react";
import CustomImg from "../components/CustomImg";
import { cardData } from "../api/card";
import Searches from "./Searches";

const categoryFood = [...new Set(cardData.map((val)=>val.name)),"all"]

function RecipiCard() {
  const [foodItem,setFoodItem] = useState(cardData);
  const [catItems,setCatItems] = useState(categoryFood);
  return (
    <>
    <Searches foodItem={foodItem} setFoodItem={setFoodItem} catItems={catItems}/>
    <div className="recipies-container">
      {foodItem.map((data, index) => (
        <div className="recipe-card" key={index}>
          <CustomImg imgSrc={data.image} pt="65%" />
          <div className="recipe-card-info">
            <img className="auther-img" src={data.autherImg} alt="" />
            <p className="recipe-title">{data.title}</p>
            <p className="recipe-desc">{data.about}</p>
            <a className="view-btn" href="#">
              VIEW RECIPE
            </a>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}

export default RecipiCard;
