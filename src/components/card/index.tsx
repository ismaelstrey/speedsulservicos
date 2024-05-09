import { JobListing } from "@/@types/services";
import { deleteService } from "@/services/apiUserServices";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTrash } from "react-icons/fa";


export default function Card({
  image = "/images/eletricista.jpg",
  job = "Profissao",
  description = "Eperiencia em marcenaria a 8 anos",
  skils = ["marceneiro", "pintor"],
  rate = "1",
  type,
  id,
}: JobListing) {
  function checkStar(star: number, value: number) {
    if (star > value) {
      return "defaultChecked";
    } else return "";
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:cursor-pointer rounded-lg hover:scale-105 hover:border border-slate-400 transition ease-in-out delay-150">
      <figure>
        <Image
          src={image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
          alt={job}
          width={900}
          height={900}
          className="bg-white"
        />
      </figure>

      <div className="card-body bg-base-100 rounded-b-lg">
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
          <Link href={`pages/service&id=${id}`}> {job}</Link>
          {type && <div className="badge badge-secondary">{type}</div>}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {skils.map((espe, key) => (
            <div key={key} className="badge badge-outline bg-base">
              {espe}
            </div>
          ))}
        </div>
        {id && <button onClick={() => deleteService(id)}> <FaTrash className="hover:text-red-600 hover:scale-125" title={`Deletar: ${job}`} /></button>
        }
      </div>
    </div>
  );
}
