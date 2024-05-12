import { updateServiceRate } from "@/services/apiUserServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

interface Props {
  rate: number;
  id: number;
}

export default function StarsRate({ rate = 0, id = 0 }: Props) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateServiceRate,
    onSuccess: () => {
      queryClient.refetchQueries();
    },
  });
  return (
    <div className="rating">
      <span className="bg-orange-400"></span>
      <input
        type="radio"
        name="rating-2"
        onClick={() => mutation.mutate({ id: id, rate: 1 })}
        className={`mask mask-star-2 ${rate >= 1 && "bg-orange-400"}`}
      />
      <input
        type="radio"
        name="rating-2"
        onClick={() => mutation.mutate({ id: id, rate: 2 })}
        className={`mask mask-star-2 ${rate >= 2 && "bg-orange-400"}`}
      />
      <input
        type="radio"
        name="rating-2"
        onClick={() => mutation.mutate({ id: id, rate: 3 })}
        className={`mask mask-star-2 ${rate >= 3 && "bg-orange-400"}`}
      />
      <input
        type="radio"
        name="rating-2"
        onClick={() => mutation.mutate({ id: id, rate: 4 })}
        className={`mask mask-star-2 ${rate >= 4 && "bg-orange-400"}`}
      />
      <input
        type="radio"
        name="rating-2"
        onClick={() => mutation.mutate({ id: id, rate: 5 })}
        className={`mask mask-star-2 ${rate >= 5 && "bg-orange-400"}`}
      />
    </div>
  );
}
