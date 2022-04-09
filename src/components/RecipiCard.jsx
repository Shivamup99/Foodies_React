import React from "react";
import CustomImg from "../components/CustomImg";
import { cardData } from "../api/card";
function RecipiCard() {
  return (
    <>
      {cardData.map((data, index) => (
        <div className="recipe-card" key={index}>
          <CustomImg  imgSrc={data.image} pt="65%" />
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
    </>
  );
}

export default RecipiCard;
