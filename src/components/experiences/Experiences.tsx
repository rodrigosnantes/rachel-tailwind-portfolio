import React from "react";
import Title from "../title/Title";
import { useTranslation } from "react-i18next";

export default function Experiences() {
  const { t } = useTranslation();

  return (
    <section
      id="experiences"
      className="w-full min-h-screen flex justify-center"
    >
      <div className="max-w-2xl lg:max-w-4xl w-full flex flex-col justify-center gap-4 mx-12 my-12 md:mx-auto mt-20">
        <Title title={t("ex-title")} colored={t("ex-subtitle")} />

        <ol
          className="border-l md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t"
          data-aos="fade-left"
        >
          <ExperienceItem
            time="2014-2018"
            role={t("ex-title-01")}
            text={t("ex-01")}
          />

          <ExperienceItem
            time="2018-2022"
            role={t("ex-title-02")}
            text={t("ex-02")}
          />

          <ExperienceItem
            time="2022 - Atual"
            role={t("ex-title-03")}
            text={t("ex-03")}
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
