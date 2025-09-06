import { Product } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DeleteButton from "./DeleteButton";

type Props = {
  item: Product;
};

const Card = ({ item }: Props) => {
  return (
    <div className="bg-white rounded-lg p-2 sm:p-3 shadow-lg flex flex-col">
      <div className="relative h-[200px]">
        <Image
          fill
          src={item.image_url}
          alt={item.name}
          className="rounded-lg"
        />
      </div>

      <div className="mt-2 flex flex-col justify-between flex-1">
        <div>
          <h5 className="font-bold line-clamp-2">{item.name}</h5>
          <h5 className="text-blue-500 font-semibold mb-2">${item.price}</h5>
        </div>

        <div className="flex justify-between">
          <Link
            className="py-1 px-3 bg-[#e2eaf8] hover:bg-[#7aa7f4] transition rounded-md"
            href={`/products/${item.id}`}
          >
            Düzenle
          </Link>

          <DeleteButton id={item.id} />
        </div>
      </div>
    </div>
  );
};

export default Card;
