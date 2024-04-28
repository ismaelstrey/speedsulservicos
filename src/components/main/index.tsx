"use client";
import { themaList } from "@/services/services";
import React, { ReactNode, useState } from "react";
interface Props {
  children: ReactNode;
}

export default function Main({ children }: Props) {
  const [theme, setTheme] = useState<string>("light");
  return (
    <main
      className="flex bg-base-300 min-h-screen flex-col scroll-smooth"
      data-theme={theme}
    >
      <select
        className="select w-full max-w-xs bg-base fixed bottom-3 left-3 z-50"
        onChange={(e) => setTheme(e.target.value)}
      >
        {themaList.map((value, key) => (
          <option value={value} key={key}>
            {value}
          </option>
        ))}
      </select>
      {children}
    </main>
  );
}
