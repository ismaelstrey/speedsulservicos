import React from "react";
import { GiEgyptianProfile } from "react-icons/gi";
import { GiSensuousness } from "react-icons/gi";
import { GiPhotoCamera } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { GiInjustice } from "react-icons/gi";
import { GiHealthNormal } from "react-icons/gi";
import { GiDiscobolus } from "react-icons/gi";
import { IoConstructSharp } from "react-icons/io5";

interface Props {
  size: number;
  className: string;
}

export default function ItensIcons(props: Props) {
  return (
    <>
      <GiEgyptianProfile title="Beleza" {...props} />
      <GiSensuousness title="Beleza" {...props} />
      <GiPhotoCamera title="Fotografia" {...props} />
      <GiKnifeFork title="Alimentação" {...props} />
      <GiInjustice title="Direitos" {...props} />
      <GiHealthNormal title="Saude" {...props} />
      <GiDiscobolus title="Esporte" {...props} />
      <IoConstructSharp title="Construção" {...props} />
    </>
  );
}
