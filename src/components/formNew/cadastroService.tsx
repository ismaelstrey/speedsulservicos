"use client"
import React, { ChangeEvent, FormEvent, TextareaHTMLAttributes, useState } from "react";
import { FaCity, FaIcons, FaLink, FaSave } from "react-icons/fa";
import { FiAlignCenter } from "react-icons/fi";
import { GiAxeInStump } from "react-icons/gi";
import { IoMdImage } from "react-icons/io";
import { FaArrowRightToCity } from "react-icons/fa6";
import { MdCancel, MdOutlineAddRoad } from "react-icons/md";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { JobListing } from "@/@types/services";
import { addServices } from "@/services/apiUserServices";

export default function CardastroService() {
  const defaultValueFormaData = {
    title: "Informática",
    subtitle: "Profissional liberla autonomo",
    description: "Trabalho com fardware, resdes , notebooks empressoaras e perifericos",
    job: "Tecnico de Informática",
    link: "http://google.com.br",
    image: "/images/dev8.svg",
    icon: "/icon/tech.svg",
    city: "Igrejinha",
    bairro: "Centro",
    address: "Rua Tristão Monteiro",
    number: "405"
  }
  const [formData, setFormData] = useState<JobListing>({
    ...defaultValueFormaData
  });

  const [loading, setLoading] = useState<Boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement> | React.ChangeEventHandler<HTMLTextAreaElement> | any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode fazer o que quiser com os dados do formulário,
    setLoading(true)
    addServices(formData).then(() => {
      setLoading(false)
      setFormData({ ...defaultValueFormaData })
    }
    )
    // como salvar em um array ou enviar para um servidor.
    console.log(formData);
  };


  return (
    <div className="flex container flex-col gap-3 items-center justify-center flex-1 w-full z-50">

      {loading && <span className="flex w-full h-20 bg-success ">Salvando dados</span>}
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-3">
        {" "}
        <label className="input input-bordered w-full flex items-center gap-2">
          <FiAlignCenter />
          <input type="text" className="grow" name="title" value={formData.title} onChange={handleChange} placeholder="Título" />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <FiAlignCenter />
          <input type="text" className="grow" name="subtitle" value={formData.subtitle} onChange={handleChange} placeholder="Subtítulo" />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <GiAxeInStump />
          <input type="text" className="grow" name="job" value={formData.job} onChange={handleChange} placeholder="Trabalho" />
        </label>
        <label>
          <textarea className="textarea textarea-bordered textarea-sm w-full" name="description" value={formData.description} onChange={handleChange} placeholder="Trabalho" />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <FaLink />
          <input type="text" className="grow" name="link" value={formData.link} onChange={handleChange} placeholder="Link" />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <IoMdImage />

          <input type="text" className="grow" name="image" value={formData.image} onChange={handleChange} placeholder="Imagem" />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <FaIcons />

          <input type="text" className="grow" name="icon" value={formData.icon} onChange={handleChange} placeholder="Icone" />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <FaCity />
          <input type="text" className="grow" name="city" value={formData.city} onChange={handleChange} placeholder="Cidade" />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <FaArrowRightToCity />
          <input type="text" className="grow" name="bairro" value={formData.bairro} onChange={handleChange} placeholder="Bairro" />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <MdOutlineAddRoad />
          <input type="text" className="grow" name="address" value={formData.address} onChange={handleChange} placeholder="Endrereço" />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <AiOutlineFieldNumber />
          <input type="number" className="grow" name="number" value={formData.number} onChange={handleChange} placeholder="Número" />
        </label>
        <div className="flex w-full mt-4 justify-end gap-4 mr-4">
          <label className="input input-bordered flex items-center gap-2">
            <MdCancel />
            <button className="">Cancelar</button>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <FaSave />
            <button className="" type="submit">Salvar</button>
          </label>

        </div>
      </form>
    </div>
  );
}

// w-60 btn-warning bg-warning p-4 rounded-md mr-5
// "title": "Manutenção de computadores",
// "subtitle": "Realizo todo o trabalho de manutenção de computares para seu estabelecimento",
// "description": "Trabalho com fardware, resdes , notebooks empressoaras e perifericos",
// "job": "Tecnico de informatica",
// "status": true,
// "views": 5,
// "link": "https://google.com",
// "image": "/image/banner.svg",
// "icon ": "/image/icon.svg",
// "rate": "5",
// "city": "Igrejinha",
// "bairro": "centro",
// "address": "Rua joaquim silva",
// "obs": "Predio segundo piso",
// "number": "12",
