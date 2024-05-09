import React from "react";
interface Props {
  services: number
}

export default function CountServices({ services = 0 }: Props) {
  return (
    <div className="stats shadow my-4 bg-base-100">
      <div className="stat place-items-center">
        <div className="stat-title">Serviços</div>
        <div className="stat-value">{services}</div>
        <div className="stat-desc">Desde maio de 2024</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Usuários</div>
        <div className="stat-value text-secondary">4.2</div>
        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Atendidos</div>
        <div className="stat-value">1,2</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
}
