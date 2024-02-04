import React from "react";

import {
  Brain,
  Briefcase,
  Contact,
  Home,
  MessageCircleWarning,
} from "lucide-react";

import { Link } from "react-scroll";

export default function Menu() {
  return (
    <div className="fixed bottom-10 left-0 right-0 md:right-10 md:top-0 md:bottom-0 md:left-auto flex items-center justify-center z-50">
      <div className="flex row md:flex-col gap-2 md:gap-4">
        <MenuButton to="home">
          <Home className="text-slate-400" />
        </MenuButton>

        <MenuButton to="about">
          <MessageCircleWarning className="text-slate-400" />
        </MenuButton>

        <MenuButton to="skills">
          <Brain className="text-slate-400" />
        </MenuButton>

        <MenuButton to="experiences">
          <Briefcase className="text-slate-400" />
        </MenuButton>

        <MenuButton to="contact">
          <Contact className="text-slate-400" />
        </MenuButton>
      </div>
    </div>
  );
}

function MenuButton({ children, to }: { children: any; to: string }) {
  return (
    <Link
      className="cursor-pointer border-solid border-2 border-violet-800 p-1 rounded-lg shadow-lg hover:shadow-violet-800/40"
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={50}
      duration={200}
    >
      {children}
    </Link>
  );
}
