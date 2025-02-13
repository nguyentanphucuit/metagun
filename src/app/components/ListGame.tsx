"use client";
import React, { Suspense, useEffect, useState } from "react";
import GameCard from "./game/GameCard";
import { EquipmentTypes } from "../types/common";
import { listItems } from "@/src/app/constants/index";

const ListGame = () => {
  const [items, setItems] = useState<EquipmentTypes[]>([...listItems]);
  console.log(items);
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {items.map((blog) => (
            <GameCard key={blog.href} {...blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListGame;
