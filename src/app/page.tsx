"use client";
import React from "react";
import Square from "./square";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const papers = [
    {
      text: "You can just reject me but at least let me know leh",
      rotation: getRandomRotation(-25, 25),
    },
    {
      text: "I know is too sudden. But, would you give me a chance to talk with you?",
      rotation: getRandomRotation(-25, 25),
    },
    {
      text: "But at least let me know leh",
      rotation: getRandomRotation(-25, 25),
    },
    {
      text: "I don't know if you're busy or just don't want to reply me...",
      rotation: getRandomRotation(-25, 25),
    },
    {
      text: "Is been a long time you didn't reply me",
      rotation: getRandomRotation(-25, 25),
    },
    {
      text: "Hi, how was your trip in Chongqing?",
      rotation: getRandomRotation(-25, 50),
    },
    { text: "Drag the paper to move", rotation: getRandomRotation(-25, 25) },
  ];

  function getRandomRotation(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="h-screen w-screen flex flex-col">
      <Image
        src="/bgpaper.jpg"
        alt="Background Image"
        layout="fill"
        className="z-[-1] rounded-md object-cover"
        draggable={false}
      />
      <div className="mx-auto my-auto relative w-[300px] h-[300px] flex">
        {papers.map((paper, index) => (
          <Square
            key={index}
            index={index}
            text={paper.text}
            className={`transform`}
            style={{
              transform: `rotate(${paper.rotation}deg)`,
            }}
          />
        ))}
        <Link href="/reset" className="text-black mx-auto my-auto">
          <button className="border border-solid border-slate-950 rounded-md py-2 px-5 hover:shadow-custom transition">
            <p className="text-2xl">Reset</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
