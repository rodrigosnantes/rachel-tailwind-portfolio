import React from "react";
import { AtSign, Linkedin } from "lucide-react";
import Title from "../title/Title";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="w-full h-screen flex justify-center">
      <div className="max-w-2xl lg:max-w-4xl flex h-full flex-col items-center justify-center gap-4">
        <Title title={t('contact-title')} colored={t('contact-subtitle')} />

        <div className="flex gap-4" data-aos="fade-left">
          <button
            className="cursor-pointer border-solid border-2 border-violet-800 p-1 rounded-lg shadow-lg hover:shadow-violet-800/40"
            onClick={() => window.open("mailto:rachel.bullmann@gmail.com")}
          >
            <AtSign className="text-slate-400" size={30} />
          </button>

          <button
            className="cursor-pointer border-solid border-2 border-violet-800 p-1 rounded-lg shadow-lg hover:shadow-violet-800/40"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/rachelbullmann/",
                "_blank"
              )
            }
          >
            <Linkedin className="text-slate-400" size={30} />
          </button>
        </div>
      </div>
    </section>
  );
}
//futuro hackthebox: https://app.hackthebox.com/profile/244363
