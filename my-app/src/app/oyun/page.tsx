"use client";
import { useState } from "react";
import styles from "./tarla.module.css";

export default function Home() {
  const [seeds, setSeeds] = useState(Array(16).fill(""));

  function handleGrowing(index: number) {


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
      } else if (newSeeds[index] === "K") {
        newSeeds[index] = "";
      }
      return newSeeds;
    });
    
    const tToF = setTimeout(() => {
      setSeeds((prev) => prev.map((s) => (s === "T" ? "F" : s)));
    }, 2000);

    const fToB = setTimeout(() => {
      setSeeds((prev) => prev.map((s) => (s === "F" ? "B" : s)));
    }, 4000);

    const bToC = setTimeout(() => {
      setSeeds((prev) => prev.map((s) => (s === "B" ? "Ç" : s)));
    }, 6000);

    const cToK = setTimeout(() => {
      setSeeds((prev) => prev.map((s) => (s === "Ç" ? "K" : s)));
    }, 10000);

    

    return () => {
      clearTimeout(tToF);
      clearTimeout(fToB);
      clearTimeout(bToC);
      clearTimeout(cToK);
      ;
    };
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
          onClick={() => handleGrowing(index)}
          className={styles.parsel}
          style={{ cursor: "pointer", userSelect: "none" }}
        >
          {seed}
        </div>
      ))}
    </div>
  );
}
