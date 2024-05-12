import { JobListing } from "@/@types/services";
import { deleteService, updateServiceRate } from "@/services/apiUserServices";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ButtomDeleteCard from "./_buttom";
import StarsRate from "../stars";

export default function Card({
  image = "/images/eletricista.jpg",
  job = "Profissao",
  description = "Eperiencia em marcenaria a 8 anos",
  skils = ["marceneiro", "pintor"],
  rate = 4,
  type = "start",
  id,
  handleSet,
}: JobListing) {
  // const queryClient = useQueryClient();
  // const mutation = useMutation({
  //   mutationFn: updateServiceRate,
  //   onSuccess: () => {
  //     queryClient.refetchQueries();
  //   },
  // });
  const router = useRouter();
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-lg hover:scale-105 hover:border border-slate-400 transition ease-in-out delay-150">
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
          {id && <StarsRate rate={rate} id={id} />}
        </div>
        <h2 className="card-title">
          <Link href={`pages/service/${id}`}> {job}</Link>
          {type && (
            <div className="badge badge-secondary">
              {type}-{rate}
            </div>
          )}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {skils.map((espe, key) => (
            <div key={key} className="badge badge-outline bg-base">
              {espe}
            </div>
          ))}
        </div>
        {id && <ButtomDeleteCard id={id} job={job} />}
      </div>
    </div>
  );
}
