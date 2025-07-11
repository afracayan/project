"use client";
import { useState } from "react";
import styles from "./tarla.module.css";

export default function Home() {
  const [seeds, setSeeds] = useState(Array(16).fill(""));

  function plantSeed(index: number) {
    setSeeds((prevSeeds) => {
      const newSeeds = [...prevSeeds];
      if (newSeeds[index] === "") {
        newSeeds[index] = "T";
      } else if (newSeeds[index] === "T") {
        newSeeds[index] = "F";
      } else if (newSeeds[index] === "F") {
        newSeeds[index] = "B";
      } else if (newSeeds[index] === "B") {
        newSeeds[index] = "Ç";
      } else if (newSeeds[index] === "Ç") {
        newSeeds[index] = "K";
      } else if (newSeeds[index] === "K"){
        newSeeds[index] = "";
        }

       
        
      
      
          

      return newSeeds;
    });
  }
  

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 110px)",
        gap: "8px",
        justifyContent: "center",
      }}
    >
      {seeds.map((seed, index) => (
        <div
          key={index}
          onClick={() => plantSeed(index)}
          className={styles.parsel}
        >
          {seed}
        </div>
      ))}
    </div>
  );
}
