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
    <Draggable>
      <div>
        <div
          className={clsx(
            "flex flex-col absolute cursor-pointer select-none w-72 h-72 shadow-custom p-4 rounded-md backdrop-blur-md",
            className
          )}
          {...rest}
        >
          <p className="my-auto text-center text-2xl tracking-wide text-black">
            {text}
          </p>
        </div>
      </div>
    </Draggable>
  );
});

Square.displayName = "Square";

export default Square;
