"use client";
import { themaList } from "@/services/services";
import React, { ReactNode, useEffect, useState } from "react";
import { IoIosColorPalette } from "react-icons/io";
interface Props {
  children: ReactNode;
}

export default function Main({ children }: Props) {
  const [theme, setTheme] = useState<string>("light");
  const [menu, setMenu] = useState<boolean>(false);
  let stored = localStorage.getItem("theme");
  function trocaThema(e: React.ChangeEvent<HTMLSelectElement>) {
    localStorage.setItem("theme", e.target.value);

    setTheme(stored || "light");
    setMenu(false);
  }

  return (
    <main
      className="flex bg-base-300 min-h-screen flex-col scroll-smooth"
      data-theme={stored ? stored : theme}
    >
      <span className="bg-base fixed bottom-3 left-3 z-50">
        <IoIosColorPalette
          className="hover:cursor-pointer hover:scale-125 opacity-40 hover:opacity-100"
          onClick={() => setMenu(!menu)}
          size={50}
        />
        {menu && (
          <select
            className="select w-full max-w-xs "
            onChange={(e) => trocaThema(e)}
          >
            {themaList.map((value, key) => (
              <option value={value} key={key}>
                {value}
              </option>
            ))}
          </select>
        )}
      </span>

      {children}
    </main>
  );
}
