import Image from "next/image";
import React from "react";

interface Props {
  avatar?: string;
  profissao?: string;
  descricao?: string;
  especialidades?: string[];
  star: number;
}

export default function Card({
  avatar = "/images/eletricista.jpg",
  profissao = "Profissao",
  descricao = "Eperiencia em marcenaria a 8 anos",
  especialidades = ["marceneiro", "pintor"],
  star = 1,
}: Props) {
  function checkStar(star: number, value: number) {
    if (star > value) {
      return "defaultChecked";
    } else return "";
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:cursor-pointer hover:scale-105 hover:border border-slate-400">
      <figure>
        <Image
          src={avatar}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
          alt={profissao}
          width={900}
          height={900}
          className="bg-white"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-end">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <h2 className="card-title">
          {profissao}
          <div className="badge badge-secondary">PRO</div>
        </h2>
        <p>{descricao}</p>
        <div className="card-actions justify-end">
          {especialidades.map((espe, key) => (
            <div key={key} className="badge badge-outline">
              {espe}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
