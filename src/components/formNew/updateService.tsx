"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { FaCity, FaIcons, FaLink, FaSave } from "react-icons/fa";
import { FiAlignCenter } from "react-icons/fi";
import { GiAxeInStump } from "react-icons/gi";
import { IoMdImage } from "react-icons/io";
import { FaArrowRightToCity } from "react-icons/fa6";
import { MdCancel, MdOutlineAddRoad } from "react-icons/md";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { JobListing } from "@/@types/services";
import { addServices, updateService } from "@/services/apiUserServices";
import { GoNumber } from "react-icons/go";
import { useRouter } from "next/navigation";

interface Props {
  service?: JobListing;
}
export default function UpdateService({ service }: Props) {
  const [formData, setFormData] = useState<JobListing>({
    ...service,
  });

  const [loading, setLoading] = useState<Boolean>(false);

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | React.ChangeEventHandler<HTMLTextAreaElement>
      | any
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode fazer o que quiser com os dados do formulário,
    setLoading(true);

    updateService(formData).then((data) => {
      setLoading(false);
      setFormData({ ...data });
      console.log(data);
    });
    // como salvar em um array ou enviar para um servidor.
    console.log(formData);
  };

  const router = useRouter();

  return (
    <div className="m-auto flex container flex-col gap-3 items-center justify-center flex-1 w-full">
      {loading && (
        <span className="flex w-full h-20 bg-success ">Salvando dados</span>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-3">
        {" "}
        <label className="input input-bordered w-full flex items-center gap-2">
          <GoNumber /> #
          <input
            type="text"
            className="grow"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="Id"
            disabled
          />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <FiAlignCenter />
          <input
            type="text"
            className="grow"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Título"
          />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <FiAlignCenter />
          <input
            type="text"
            className="grow"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            placeholder="Subtítulo"
          />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <GiAxeInStump />
          <input
            type="text"
            className="grow"
            name="job"
            value={formData.job}
            onChange={handleChange}
            placeholder="Trabalho"
          />
        </label>
        <label>
          <textarea
            className="textarea textarea-bordered textarea-sm w-full"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Trabalho"
          />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <FaLink />
          <input
            type="text"
            className="grow"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="Link"
          />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <IoMdImage />

          <input
            type="text"
            className="grow"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Imagem"
          />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <FaIcons />

          <input
            type="text"
            className="grow"
            name="icon"
            value={formData.icon}
            onChange={handleChange}
            placeholder="Icone"
          />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <FaCity />
          <input
            type="text"
            className="grow"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Cidade"
          />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <FaArrowRightToCity />
          <input
            type="text"
            className="grow"
            name="bairro"
            value={formData.bairro}
            onChange={handleChange}
            placeholder="Bairro"
          />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <MdOutlineAddRoad />
          <input
            type="text"
            className="grow"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Endrereço"
          />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <AiOutlineFieldNumber />
          <input
            type="number"
            className="grow"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Número"
          />
        </label>
        <div className="flex w-full mt-4 justify-end gap-4 mr-4">
          <label className="input input-bordered flex items-center gap-2">
            <MdCancel className="fill-error" />
            <button onClick={() => router.back()} className="">
              Cancelar
            </button>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <FaSave className="fill-green-400" />
            <button className="" type="submit">
              Atualizar
            </button>
          </label>
        </div>
      </form>
    </div>
  );
}
