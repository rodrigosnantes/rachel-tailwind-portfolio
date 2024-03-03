import React from "react";
import Title from "../title/Title";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="w-full h-screen flex justify-center">
      <div className="max-w-2xl lg:max-w-4xl flex flex-col h-full items-center justify-center gap-4 mx-12 my-12 md:mx-auto">
        <Title title={t("about-title")} colored={t("about-subtitle")} />
        <span className="text-slate-400 text-xl font-thin" data-aos="fade-left">
          {t("about")}
          <p>{t("about-complement")}</p>
        </span>
      </div>
    </section>
  );
}
