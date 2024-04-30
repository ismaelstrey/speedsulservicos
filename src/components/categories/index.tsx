import React from "react";
import ItensIcons from "./itemIcons";

export default function Categories() {
  return (
    <div className="h-36 bg-neutral-content my-10 flex justify-center items-center gap-8">
      <ItensIcons
        className="fill-base-100 hover:scale-125 hover:cursor-pointer hover:fill-neutral transition ease-in-out delay-150"
        size={80}
      />
    </div>
  );
}
