"use client";
import React from "react";
import Square from "./square";
import Link from "next/link";
import { Fireworks } from "@fireworks-js/react";
import type { FireworksHandlers } from "@fireworks-js/react";
import "./cake.scss";

function getRandomRotation(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const papers = [
  {
    text: "Here's a virtual cake for you",
    rotation: getRandomRotation(-25, 25),
  },
  {
    text: "No physical cake just a virtual one",
    rotation: getRandomRotation(-25, 25),
  },
  {
    text: "You requested this birrthday cake",
    rotation: getRandomRotation(-25, 25),
  },
  {
    text: "Actually is happy belated birthday",
    rotation: getRandomRotation(-25, 25),
  },
  {
    text: "Happy Birthday!!",
    rotation: getRandomRotation(-25, 50),
  },
  { text: "Drag the card to move", rotation: getRandomRotation(-25, 25) },
];

const Home = () => {
  const ref = React.useRef<FireworksHandlers>(null);
  React.useEffect(() => {
    let opacity = 0;
    const interval = setInterval(() => {
      opacity = opacity > 0 ? 0 : 0.1;
      ref.current?.updateOptions({
        opacity,
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Fireworks
        ref={ref}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
          background: "black",
        }}
      />
      <div className="cake">
        <div className="plate"></div>
        <div className="layer layer-bottom"></div>
        <div className="layer layer-middle"></div>
        <div className="layer layer-top"></div>
        <div className="drip drip1"></div>
        <div className="drip drip2"></div>
        <div className="drip drip3"></div>
        <div className="icing"></div>
        <div className="candle">
          <div className="flame"></div>
        </div>
      </div>
      <div className="h-screen w-screen flex flex-col">
        <div className="mx-auto my-auto relative w-[300px] h-[300px] flex">
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
          <Link
            href="/reset"
            className="relative text-black mx-auto my-auto top-3/4"
          >
            <button className="border border-solid border-white rounded-md py-2 px-5 hover:bg-white/5 transition">
              <p className="text-2xl text-white">Reset</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
