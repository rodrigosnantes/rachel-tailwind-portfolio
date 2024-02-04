import React from "react";
import { AtSign, Linkedin } from "lucide-react";
import Title from "../title/Title";

export default function Contact() {
  return (
    <section id="contact" className="w-full h-screen flex justify-center">
      <div className="max-w-3xl md:max-w-4xl lg:max-w-6xl flex h-full flex-col items-center justify-center gap-4">
        <Title title="Meu" colored="Contato" />

        <div className="flex gap-4" data-aos="fade-left">
          <button className="cursor-pointer border-solid border-2 border-violet-800 p-1 rounded-lg shadow-lg hover:shadow-violet-800/40">
            <AtSign className="text-slate-400" size={30} />
          </button>

          <button className="cursor-pointer border-solid border-2 border-violet-800 p-1 rounded-lg shadow-lg hover:shadow-violet-800/40">
            <Linkedin className="text-slate-400" size={30} />
          </button>
        </div>
      </div>
    </section>
  );
}
//email: rachel.bullmann@gmail.com
//https://www.linkedin.com/in/rachelbullmann/
//futuro hackthebox: https://app.hackthebox.com/profile/244363