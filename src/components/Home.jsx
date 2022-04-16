import React from "react";
import CustomImg from "./CustomImg";
import { images } from "../api/arrayData";
function Home() {
  return (
    <>
      <div className="section hero">
        <div className="col typography">
          <h1 className="title">What Can We Serve</h1>
          <p className="info">
            Looking for a Foodie Day franchise alternative? Try Our "Restaurant
            Launch System" The only solution you need to launch a successful
            restaurant or food ..
          </p>
          <button className="btn">Check now </button>
        </div>
        <div className="col gallery">
          {images.map((src, index) => (
            <CustomImg key={index} imgSrc={src} pt={"80%"} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
