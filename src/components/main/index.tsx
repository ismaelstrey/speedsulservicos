"use client";
import { themaList } from "@/services/services";
import { handleSetLocalStorage } from "@/utils/localStorage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode, useEffect, useState } from "react";
import { IoIosColorPalette } from "react-icons/io";

const queryClient = new QueryClient();
interface Props {
  children: ReactNode;
}
export default function Main({ children }: Props) {
  const [theme, setTheme] = useState<string>("");
  const [menu, setMenu] = useState<boolean>(false);

  function trocaThema(e: React.ChangeEvent<HTMLInputElement>) {
    const stored = e.target.value;
    handleSetLocalStorage(stored);
    setTheme(stored || "light");
    setMenu(false);
  }

  useEffect(() => {
    const savedValue = window.localStorage.getItem("theme");
    savedValue && setTheme(savedValue);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  console.log(theme);

  return (
    <QueryClientProvider client={queryClient}>
      <main
        className="flex bg-base-300 min-h-screen flex-col scroll-smooth transition-all"
        data-theme={theme}
      >
        <span className="bg-base fixed bottom-3 left-3 z-50">
          <IoIosColorPalette
            className="hover:cursor-pointer hover:scale-125 opacity-40 hover:opacity-100"
            onClick={() => setMenu(!menu)}
            size={25}
          />
          {menu && (
            <div className="join join-vertical">
              {themaList.map((value, key) => (
                <input
                  key={key}
                  type="radio"
                  name="theme-buttons"
                  className="btn theme-controller join-item"
                  aria-label={value}
                  value={value}
                  onChange={(e) => trocaThema(e)}
                />
              ))}
            </div>
          )}
        </span>

        {children}
      </main>
    </QueryClientProvider>
  );
}
