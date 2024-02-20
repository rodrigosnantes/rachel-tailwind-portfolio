import React from "react";
import { AtSign, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <header className="hidden sm:inline fixed top-0 w-full z-50">
      <div className="flex justify-between p-4 md:p-8">
        <h1 className="text-slate-400	 text-3xl" data-aos="fade-down">
          RBullmann
        </h1>
        {/* <div className="flex gap-4">
          <button
            data-aos="fade-down"
            className="cursor-pointer border-solid border-2 border-violet-800 p-1 rounded-lg shadow-lg hover:shadow-violet-800/40"
            onClick={() => window.open("mailto:rachel.bullmann@gmail.com")}
          >
            <AtSign className="text-slate-400" size={20} />
          </button>

          <button
            data-aos="fade-down"
            className="cursor-pointer border-solid border-2 border-violet-800 p-1 rounded-lg shadow-lg hover:shadow-violet-800/40"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/rachelbullmann/",
                "_blank"
              )
            }
          >
            <Linkedin className="text-slate-400" size={20} />
          </button>
        </div> */}
      </div>
    </header>
  );
}
