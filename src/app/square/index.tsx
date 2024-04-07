import React, { SetStateAction, useState } from "react";
import Image from "next/image";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import clsx from "clsx";

export interface Position {
  x: number;
  y: number;
}

interface SquareProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  index?: number;
  position?: Position[];
  setPosition?: React.Dispatch<SetStateAction<Position[]>>;
}

const Square = ({ text, className, ...rest }: SquareProps) => {
  return (
    <Draggable>
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
            layout="fill"
            className="z-[-1] rounded-md filter brightness-90"
            draggable={false}
          />
          <p className="my-auto text-center text-2xl tracking-wide">{text}</p>
        </div>
      </div>
    </Draggable>
  );
};

export default Square;
