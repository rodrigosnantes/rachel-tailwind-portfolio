import React from "react";
import avatar from "../../assets/avatar.png";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="flex min-h-screen items-center"
      data-aos="fade-right"
    >
      <div className="max-w-2xl mx-12 md:mx-auto mb-52">
        <p className="text-slate-400 text-2xl md:text-7xl md:mb-0">
          <span className="text-violet-800">Cyber Security</span> Engineer
        </p>
        <span className="text-slate-400 text-md md:text-xl">{t("home")}</span>
      </div>

      <img
        src={avatar}
        alt="avatar"
        className="absolute bottom-0 right-10 w-72 lg:w-96 xl:w-auto hidden sm:inline"
        data-aos="fade-up"
      />

      <div className="absolute w-52 h-52 bg-violet-800 rounded-full overflow-hidden bottom-28 left-1/2 transform -translate-x-1/2 sm:hidden">
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
