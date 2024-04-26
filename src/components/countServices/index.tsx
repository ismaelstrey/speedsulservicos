import React from 'react'

export default function CountServices() {
    return (
        <div className="stats shadow my-4">

            <div className="stat place-items-center">
                <div className="stat-title">Proficionais</div>
                <div className="stat-value">257</div>
                <div className="stat-desc">Desde maio de 2024</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Usuarios</div>
                <div className="stat-value text-secondary">4.2</div>
                <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Atendidos</div>
                <div className="stat-value">1,2</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>

        </div>
    )
}
