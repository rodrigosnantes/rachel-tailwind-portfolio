import React from "react";
import { Linkedin } from "lucide-react";
import Title from "../title/Title";

export default function Skills() {
  return (
    <section id="skills" className="w-full h-screen flex justify-center">
      <div className="w-full max-w-2xl lg:max-w-4xl flex flex-col items-center justify-center gap-2 mx-12 my-12 md:mx-auto">
        <Title title="Minhas" colored="Habilidades" />

        <SkillItem skillName="Redes de computadores" value={100} />
        <SkillItem skillName="Hosting" value={100} />
        <SkillItem skillName="Investigação e Prevenção a Fraude" value={100} />
        <SkillItem skillName="Inteligencia de ameaças/OSINT" value={90} />
        <SkillItem skillName="Linux/script" value={90} />
        <SkillItem skillName="Siem" value={90} />
        <SkillItem skillName="IAM" value={90} />
        <SkillItem skillName="Inglês intermediário" value={80} />
      </div>
    </section>
  );
}

function SkillItem({ skillName, value }: { skillName: string; value: number }) {
  return (
    <div
      className="min-w-full flex items-center content-center"
      data-aos="fade-left"
    >
      <div className="mr-4">
        <Linkedin
          className="text-slate-400 cursor-pointer border border-solid border-violet-800 p-1 rounded-lg shadow-lg hover:shadow-violet-800/40"
          size={35}
        />
      </div>

      <dl className="grow shrink">
        <dt className="text-lg font-medium text-slate-400">{skillName}</dt>
        <dd className="flex items-center md:mb-3 ">
          <div className="w-full bg-slate-400 rounded h-2.5 mr-2 ">
            <div
              className="h-2.5 rounded bg-violet-800"
              style={{ width: `${value}%` }}
            />
          </div>
          <span className="text-sm font-medium text-slate-400">{value}%</span>
        </dd>
      </dl>
    </div>
  );
}
