import React from "react"

export default function About() {
  return (
    <section id='about' className='w-full h-screen flex justify-center'>
      <div className='max-w-3xl md:max-w-4xl lg:max-w-6xl flex flex-col h-full items-center justify-center gap-4 mx-12 md:mx-auto'>
        <p className='text-slate-400 text-4xl md:text-6xl mb-4' data-aos="fade-right">
          Eu sou <span className='text-violet-800'>Rachel Bullmann</span>
        </p>
        <span className='text-slate-400 text-xl font-thin' data-aos="fade-left">
          Olá, formada em Redes de Computadores e Segurança da Informação atuei muito tempo com suporte até descobrir que sites 
          em wordpress podem ser invadidos através de vulnerabilidades. Descobri como poderia atuar com o que mais gosto, que é ler logs e entender a origem
          das coisas, no dia a dia. Hoje estou em um Purple team buscando formas de proteger a empresa de ameaças, principalmente com fraudes e atores malicioso.
          <p>
            Além de ser Mãe em tempo integral, pode me chamar de "MommyOffice".
         </p>
        </span>
      </div>
    </section>
  )
}