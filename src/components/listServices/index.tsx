import React from "react";
import Card from "../card";
import { userServico } from "@/services/services";

export default function ListServices() {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {userServico.usuarios.map((user, key) => (
        <Card
          avatar={user.avatar}
          star={user.star}
          descricao={user.descricao}
          especialidades={user.especialidades}
          profissao={user.profissao}
          key={key}
        />
      ))}
    </div>
  );
}
