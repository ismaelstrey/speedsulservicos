import React, { useEffect, useState } from "react";
import Card from "../card";
import { JobListing } from "@/@types/services";
import { getAllUserServices } from "@/services/apiUserServices";
interface Props {
  services: JobListing[];
}

export default function ListServices({ services }: Props) {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {services.map((user, key) => (
        <Card
          id={user.id}
          image={user.image}
          rate={user.rate}
          description={user.description}
          skils={user.skils}
          job={user.job}
          key={key}
        />
      ))}
    </div>
  );
}
