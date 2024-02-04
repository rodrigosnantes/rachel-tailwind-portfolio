import React from "react";
import avatar from "../../assets/avatar.png";

export default function Home() {
  return (
    <section
      id="home"
      className="flex h-screen items-center"
      data-aos="fade-right"
    >

      <div className="max-w-2xl mx-12 md:mx-auto mb-10">
        <p className="text-slate-400 text-4xl md:text-7xl mb-4 md:mb-0">
          <span className="text-violet-800">Cyber Security</span> Engineer
        </p>
        <span className="text-slate-400 text-xl">
          Atuando como Purple Team, automatizando tarefas diarias com bash,
          prevenção a Fraudes, aplicando Segurança no produto, Threat
          Intelligence e pensando fora da caixa todos os dias.
        </span>
      </div>

      <img
        src={avatar}
        alt="avatar"
        className="absolute bottom-0 right-10 w-72 lg:w-96 xl:w-auto hidden sm:inline"
        data-aos="fade-up"
      />

      <div className="absolute w-48 h-48 bg-violet-800 rounded-full overflow-hidden bottom-28 left-1/2 transform -translate-x-1/2 sm:hidden">
        <img
          src={avatar}
          alt="avatar"
          className="object-cover"
          data-aos="fade-up"
        />
      </div>
    </section>
  );
}
