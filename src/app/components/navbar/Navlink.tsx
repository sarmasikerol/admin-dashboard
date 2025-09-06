"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { JSX } from "react";

type Props = {
  item: {
    url?: string;
    name: string;
    icon: JSX.Element;
  };
};

const Navlink = ({ item }: Props) => {
  const path = usePathname();

  const isActive = path === item.url;

  console.log(path);
  return (
    <Link
      href={item.url || "/"}
      className={`flex gap-2 items-center p-5 hover:bg-gray-100 transition border-l-2 border-transparent ${
        isActive && "text-blue-500 !border-blue-500"
      }`}
    >
      {item.icon}

      <span className="nav-text">{item.name}</span>
    </Link>
  );
};

export default Navlink;
