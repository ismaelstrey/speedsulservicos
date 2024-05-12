"use client";
import UpdateService from "@/components/formNew/updateService";
import Loading from "@/components/loading";
import { findOneService } from "@/services/apiUserServices";
import { useQuery } from "@tanstack/react-query";

export default function PageSevice({ params }: { params: { edit: number } }) {
  const { edit } = params;
  const { isLoading, data } = useQuery({
    queryKey: ["service"],
    queryFn: () => findOneService(edit).then((res) => res),
  });
  if (isLoading) return <Loading valor={10} />;
  return data && !isLoading && <UpdateService service={data} />;
}
