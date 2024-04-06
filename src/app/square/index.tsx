import React from "react";
import Image from "next/image";
import Draggable from "react-draggable";
import clsx from "clsx";

const Square = ({
  text,
  className,
  ...rest
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <Draggable>
      <div>
        <div
          className={clsx(
            "flex flex-col absolute cursor-pointer select-none w-72 h-72 shadow-custom",
            className
          )}
          {...rest}
        >
          <Image
            src="/background.png"
            alt="Background Image"
            layout="fill"
            className="z-[-1] rounded-md"
            draggable={false}
          />
          <p className="my-auto text-center text-2xl">{text}</p>
        </div>
      </div>
    </Draggable>
  );
};

export default Square;
