import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { cardData } from "../api/card";

function Searches({ setFoodItem, catItems }) {
  //console.log('ffhfh',foodItem)
  const [searchData,setSearchData] = useState('')
  const filtterItem = (cate) => {
    if (cate === "all") {
      setFoodItem(cardData);
      return;
    }
    let newFood = cardData.filter((newVal) => {
      return newVal.name === cate;
    });
    setFoodItem(newFood);
  };
  
  const handleSearch =(event)=>{
    setSearchData(event.target.value)
  }

  const dataSearch = cardData.filter((val)=>{
   return val.title.toLowerCase().includes(searchData.toLowerCase())
  })

  return (
    <>
      <div className="previous-searches section">
        <h2>Previously Fillter</h2>
        <div className="privous-searches-container">
          {catItems.map((currentEle, index) => (
            <button
              className="search-item btn"
              style={{ animationDelay: index * 0.2 + "s" }}
              key={index}
              onClick={() => filtterItem(currentEle)}
            >
              {currentEle}
            </button>
          ))}
        </div>
        <div className="search-box">
          <input type="text"  value={searchData} onChange={handleSearch} placeholder="Search ...." />
          <button className="btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Searches;
