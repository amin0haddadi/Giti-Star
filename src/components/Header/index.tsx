"use client";
import { HEADER_ITEMS } from "@/constants";
import { HeaderProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const Header: FC<HeaderProps> = () => {
  const path = usePathname();

  return (
    <header
      className="flex flex-row justify-center w-[100%] bg-sky-300 p-5 gap-8"
      dir="ltr"
    >
      {HEADER_ITEMS.map((item: string, index: number) => (
        <Link key={index} href={`/${index === 0 ? "" : item}`}>
          <h3
            className={`text-lg text-white hover:text-blue-400 hover:scale-110 ${
              path === "/" + item || (path === "/" && item === "Home")
                ? "text-xl text-black scale-[1.25]"
                : ""
            }`}
          >
            {item}
          </h3>
        </Link>
      ))}
    </header>
  );
};

export default Header;
