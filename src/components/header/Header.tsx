import React from "react";
import { AtSign, Instagram, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <header className="hidden sm:inline fixed top-0 w-full z-50">
      <div className="flex justify-between p-4 md:p-8">
        <h1 className="text-slate-400	 text-3xl" data-aos="fade-down">RBullmann</h1>
        <div className="flex gap-4">
          <Instagram
            data-aos="fade-down"
            className="cursor-pointer border-solid border-2 border-violet-800 p-1 rounded-lg shadow-lg hover:shadow-violet-800/40 text-slate-400"
            size={35}
          />
          <Linkedin
            data-aos="fade-down"
            className="cursor-pointer border-solid border-2 border-violet-800 p-1 rounded-lg shadow-lg hover:shadow-violet-800/40 text-slate-400"
            size={35}
          />
          <AtSign
            data-aos="fade-down"
            className="cursor-pointer border-solid border-2 border-violet-800 p-1 rounded-lg shadow-lg hover:shadow-violet-800/40 text-slate-400"
            size={35}
          />
        </div>
      </div>
    </header>
  );
}
