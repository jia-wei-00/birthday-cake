"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Reset = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="h-screen w-screen flex flex-col">
      <Image
        src="/bgpaper.jpg"
        alt="Background Image"
        layout="fill"
        className="z-[-1] rounded-md object-cover"
        draggable={false}
      />
    </div>
  );
};

export default Reset;
