import React from "react";

export default function Hero() {
  return (
    <div
      className="hero min-h-4.5 md:min-h-screen h-h10 sm:h-3/4 bg-base-100 mt-16 bg-hero bg-cover"
      // style={{ backgroundImage: "url(/images/banner2.svg)" }}
    >
      <span className=" bg-personagem relative min-w-[60%] md:w-[30%] sm:w-screen sm:h-screen bottom-0 h-3/4 bg-cover"></span>
      <div className="hero-content"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl md:text-5xl text-white font-bold">
            O Que voçê precisa?
          </h1>
          <p className="mb-5"></p>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Ex: Eletricista" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
}
