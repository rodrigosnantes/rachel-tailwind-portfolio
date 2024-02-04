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
      className="text-slate-400 text-center text-4xl md:text-6xl mb-4"
      data-aos="fade-right"
    >
      {title} <span className="text-violet-800">{colored}</span>
    </p>
  );
}
