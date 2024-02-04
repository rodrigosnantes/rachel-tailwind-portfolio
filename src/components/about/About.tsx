import React from "react";
import Title from "../title/Title";

export default function About() {
  return (
    <section id="about" className="w-full h-screen flex justify-center">
      <div className="max-w-2xl lg:max-w-4xl flex flex-col h-full items-center justify-center gap-4 mx-12 my-12 md:mx-auto">
        <Title title="Eu sou" colored="Rachel Bullmann" />
        <span className="text-slate-400 text-xl font-thin" data-aos="fade-left">
          Olá, formada em Redes de Computadores e Segurança da Informação atuei
          muito tempo com suporte até descobrir que sites em wordpress podem ser
          invadidos através de vulnerabilidades. Descobri como poderia atuar com
          o que mais gosto, que é ler logs e entender a origem das coisas, no
          dia a dia. Hoje estou em um Purple team buscando formas de proteger a
          empresa de ameaças, principalmente com fraudes e atores malicioso.
          <p>
            Além de ser Mãe em tempo integral, pode me chamar de "MommyOffice".
          </p>
        </span>
      </div>
    </section>
  );
}
