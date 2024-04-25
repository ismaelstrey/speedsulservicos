import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">SpeedSul</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Produtos</a></li>
                    <li><a>Serviços</a></li>
                    <li>
                        <details>
                            <summary>
                                Empresa
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><a>Serviços</a></li>
                                <li><a>Sobre</a></li>
                                <li><a>Visão</a></li>
                                <li><a>Contato</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}
