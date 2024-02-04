import React from "react";
import Title from "../title/Title";

export default function Experiences() {
  return (
    <section id="experiences" className="w-full min-h-screen flex justify-center">
      <div className="max-w-2xl lg:max-w-4xl w-full flex flex-col justify-center gap-4 mx-12 my-12 md:mx-auto mt-20">
        <Title title="Minhas" colored="Experiencias" />

        <ol
          className="border-l md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t"
          data-aos="fade-left"
        >
          <ExperienceItem
            time="2014-2018"
            role="Analista de Suporte"
            text="
          - Unisys - suporte direto ao usuário final auxiliando com dificuldades diárias correlacionadas ao SO e Softwares instalados, auxiliando na resolução de problemas.
          através do telefone, chat e acesso remoto.          
          - Senac MS - estagiaria no suporte presencial, realizando formatações, troca de peças e maquinas e apoio técnico ao funcionário interno.         
            - Nastek - suporte para o sitema da empresa lidando com necessidades de técnicos em campo e apoiando nas soluções de problemas e escritas de relatórios diarios.
           "
          />

          <ExperienceItem
            time="2018-2022"
            role="Analista de suporte avançado Linux"
            text="Na Hostgator atuei como suporte avançado aos servidores de hospedagem 
          dedicados e compartilhados da empresa. Atividades diárias envolviam instalação e atualização de pacotes, resoluções de problemas de DNS e SMTP, manutenção nos paineis de hospedagem cPanel e Plesk.
          Além de automatizar tarefas diárias ou repetitivas com bash script. Atendimentos via ticket e chat, explicando a parte técnica de maneira que o cliente entenda."
          />

          <ExperienceItem
            time="2022 - Atual"
            role="Cyber Security Engineer"
            text="Atualmente trabalho na RD Station, estou atuando como Purple team onde meu desafio diário
          é proteger o produto contra Fraudes e possíveis ameaças. Atuo com Threat Intelligence para trazer mais segurança para a empresa e aos nossos clientes. 
          Realizo análise de diversos dados diariamente em busca de padrões, possuo proximidade com os times de produto para recomendações de segurança em novas funcionalidades."
          />
        </ol>
      </div>
    </section>
  );
}

const ExperienceItem = ({ time, role, text }) => {
  return (
    <li>
      <div className="flex-start flex items-center pt-2 md:block md:pt-0">
        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full md:-mt-[5px] md:ml-0 md:mr-0 bg-purple-400"></div>
        <p className="mt-2 text-slate-400 text-lg">{time}</p>
      </div>
      <div className="ml-4 mt-2 pb-5 md:ml-0">
        <p className="mb-1.5 text-xl font-semibold text-slate-400">{role}</p>
        <p className="text-slate-400 text-lg font-thin">{text}</p>
      </div>
    </li>
  );
};
