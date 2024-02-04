import React from "react";

export default function Title({
  title,
  colored,
}: {
  title: string;
  colored: string;
}) {
  return (
    <p
      className="text-slate-400 text-center text-2xl md:text-4xl mb-2"
      data-aos="fade-right"
    >
      {title} <span className="text-violet-800">{colored}</span>
    </p>
  );
}
