import React, { useEffect, useState } from "react";
import Card from "../card";
import { JobListing } from "@/@types/services";
import { getAllUserServices } from "@/services/apiUserServices";

export default function ListServices() {
  const [userService, setuserService] = useState<JobListing[]>([]);
  useEffect(() => {
    getAllUserServices().then((res) => setuserService(res));
  }, []);
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {userService.map((user, key) => (
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
