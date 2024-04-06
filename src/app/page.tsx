"use client";
import React from "react";
import Square from "./square";
import Image from "next/image";

const Home = () => {
  const papers = [
    { text: "Drag the paper", rotation: getRandomRotation(-25, 25) },
    { text: "Drag the paper 2", rotation: getRandomRotation(-25, 25) },
    { text: "I know this is too sudden", rotation: getRandomRotation(-25, 25) },
    { text: "Wei, reply me leh", rotation: getRandomRotation(-25, 50) },
    { text: "Drag the paper", rotation: getRandomRotation(-25, 25) },
  ];

  function getRandomRotation(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="h-screen w-screen flex">
      <Image
        src="/bgpaper.jpg"
        alt="Background Image"
        layout="fill"
        className="z-[-1] rounded-md object-cover"
        draggable={false}
      />
      <div className="mx-auto my-auto relative w-[300px] h-[300px]">
        {papers.map((paper, index) => (
          <Square
            key={index}
            text={paper.text}
            className={`transform`}
            style={{
              transform: `rotate(${paper.rotation}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
