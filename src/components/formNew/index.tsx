import React from "react";
import {
  IconEmail,
  IconKey,
  IconSearch,
  IconUser,
  IconUsers,
} from "../@ui/icons";

export default function FormNew() {
  return (
    <div className="flex flex-col gap-3 container items-center justify-center flex-1 w-full z-50">
      {" "}
      <label className="input input-bordered flex items-center gap-2">
        <IconUser />
        <input type="text" className="grow" placeholder="Seu Nome Completo" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <IconUsers />
        <input type="text" className="grow" placeholder="Cidade" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <IconEmail />
        <input type="text" className="grow" placeholder="Email" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <IconKey />
        <input type="password" className="grow" value="password" />
      </label>
    </div>
  );
}
