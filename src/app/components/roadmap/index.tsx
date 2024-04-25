import React from 'react'

export default function RoadMap() {
    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                    <span className="font-mono italic text-3xl text-zinc-800 font-extrabolds">1°</span>
                    <div className="text-lg font-black">Registro e Login</div>
                    - O usuário acessa a plataforma e se registra como cliente, fornecendo informações básicas como nome, e-mail e senha.
                    - Após o registro, o usuário faz login na plataforma usando suas credenciais.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end mb-10">
                    <span className="font-mono italic text-3xl text-zinc-800 font-extrabolds">2°</span>
                    <div className="text-lg font-black">Pesquisa de Serviços</div>
                    - O usuário navega pela plataforma e utiliza a barra de pesquisa ou os filtros de categoria para encontrar o tipo de serviço que deseja contratar.
                    - Ele pode refinar sua pesquisa com base em critérios como localização, preço, avaliações de clientes, etc.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                    <span className="font-mono italic text-3xl text-zinc-800 font-extrabolds">3°</span>
                    <div className="text-lg font-black">Exploração de Profissionais</div>
                    - O usuário examina os perfis dos profissionais listados na plataforma, que incluem informações como experiência, especialidades, avaliações de clientes anteriores, portfólio e preços.
                    - Ele pode comparar vários profissionais antes de decidir qual contratar.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end mb-10">
                    <span className="font-mono italic text-3xl text-zinc-800 font-extrabolds">4°</span>
                    <div className="text-lg font-black">Seleção e Contato</div>
                    - Após encontrar um profissional que atenda às suas necessidades, o usuário pode entrar em contato com ele através da plataforma. Isso pode ser feito através de um botão de "Solicitar Serviço" ou "Enviar Mensagem".
                    - O usuário pode enviar uma mensagem ao profissional para discutir detalhes adicionais do serviço, como disponibilidade, preço final, prazos, etc.      </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                    <span className="font-mono italic text-3xl text-zinc-800 font-extrabolds">5°</span>
                    <div className="text-lg font-black">Agendamento do Serviço</div>
                    - Uma vez que os detalhes do serviço tenham sido acordados entre o usuário e o profissional, eles podem agendar o serviço através da plataforma. Isso pode ser feito selecionando uma data e horário disponíveis no calendário do profissional.
                    - O usuário pode receber uma confirmação do agendamento por e-mail ou mensagem dentro da plataforma.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end mb-10">
                    <span className="font-mono italic text-3xl text-zinc-800 font-extrabolds">6°</span>
                    <div className="text-lg font-black">Execução do Serviço</div>
                    - No dia agendado, o profissional comparece ao local designado para realizar o serviço contratado pelo usuário.
                    - Durante a execução do serviço, o usuário e o profissional podem manter contato através da plataforma, se necessário, para esclarecer dúvidas ou resolver problemas.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                    <span className="font-mono italic text-3xl text-zinc-800 font-extrabolds">7°</span>
                    <div className="text-lg font-black">Avaliação e Feedback</div>
                    - Após a conclusão do serviço, o usuário tem a oportunidade de avaliar a qualidade do trabalho realizado pelo profissional e deixar feedback sobre sua experiência.
                    - Essas avaliações e comentários podem ajudar outros usuários a tomar decisões informadas ao escolherem um profissional para seus próprios serviços.
                </div>
                <hr />
            </li>
        </ul>
    )
}
