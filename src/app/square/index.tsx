"use client";
import React from "react";
import Image from "next/image";
import Draggable from "react-draggable";
import clsx from "clsx";

interface SquareProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const Square = React.memo(({ text, className, ...rest }: SquareProps) => {
  return (
    <Draggable bounds="parent">
      <div>
        <div
          className={clsx(
            "flex flex-col absolute cursor-pointer select-none w-72 h-72 shadow-custom p-4 rounded-md",
            className
          )}
          {...rest}
        >
          <Image
            src="/background.png"
            alt="Background Image"
            fill
            className="z-[-1] rounded-md filter brightness-90"
            draggable={false}
          />
          <p className="my-auto text-center text-2xl tracking-wide">{text}</p>
        </div>
      </div>
    </Draggable>
  );
});

Square.displayName = "Square";

export default Square;
