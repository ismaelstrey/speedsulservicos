"use client";
import Loading from "@/components/loading";
import StarsRate from "@/components/stars";
import { findOneService } from "@/services/apiUserServices";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TfiBackLeft } from "react-icons/tfi";

export default function PageSevice({ params }: { params: { id: number } }) {
  const { id } = params;
  const router = useRouter();
  const { isLoading, data } = useQuery({
    queryKey: ["service"],
    queryFn: () => findOneService(id).then((res) => res),
  });
  if (isLoading) return "Loading...";

  return isLoading ? (
    <div>
      <Loading valor={10} />
    </div>
  ) : (
    <div className="flex h-full">
      <div className=" rounded-lg">
        {data?.image && (
          <Image
            src={data?.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full"
            priority={true}
            width={800}
            height={800}
            alt="Image"
          />
        )}
      </div>
      <div className="flex flex-col gap-4 justify-center m-8">
        <div>{data?.title}</div>
        {data?.id && data?.rate && (
          <StarsRate rate={data?.rate} id={data?.id} />
        )}
        <div>
          <button
            className="flex w-full justify-end"
            type="button"
            onClick={() => router.back()}
          >
            <TfiBackLeft size={30} className="mr-4" />
          </button>
        </div>
        <div>{data?.subtitle}</div>
        <div>
          <span>Descrição</span>
          <div>{data?.description}</div>
          <div>{data?.obs}</div>
        </div>
        <div>
          <div>
            <span>Cidade: </span>
            {data?.city}
          </div>
          <div>
            <span>Bairro: </span>
            {data?.bairro}
          </div>
          <div>
            <span>Endereço: </span>
            {data?.address}
          </div>
          <div>
            {" "}
            <span>Numero: </span>
            {data?.number}
          </div>

          <div>
            {" "}
            {data?.icon && (
              <Image
                src={data?.icon}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-20 h-20"
                priority={true}
                width={20}
                height={20}
                alt="Image"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
