import React from "react";
import Image from "next/image";
import Link from "next/link";
import { EquipmentTypes } from "../../types/common";

const GameCard = ({ ...props }: EquipmentTypes) => {
  console.log(props);
  return (
    <article
      key={props.id}
      className="flex max-w-xl flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={props.date} className="text-gray-500">
          {props.date}
        </time>
      </div>
      <div className="relative h-48 w-full overflow-hidden">
        <Link href={"https://gamexua.vn"} target="_blank">
          <img
            alt={props.title}
            src={props.image}
            style={{ width: "100vw" }}
            className="rounded-lg bg-gray-50"
          />
        </Link>
      </div>
      <div className="group relative py-2">
        <Link
          className="mt-3 h-12 font-semibold line-clamp-2 text-gray-900 group-hover:text-gray-600"
          href={props.href}>
          {props.title}
        </Link>
      </div>
    </article>
  );
};

export default GameCard;
