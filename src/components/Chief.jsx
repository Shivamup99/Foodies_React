import React from "react";
import ChifCard from "./ChifCard";
import { chiefs } from "../api/chiefs";
function Chief() {
  return (
    <>
      <div className="section-chiefs">
        <h1 className="title">Our Top Chiefs</h1>
        <div className="top-chiefs-container">
          {chiefs.map((chief) => (
            <ChifCard key={chief.name} chief={chief} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Chief;
