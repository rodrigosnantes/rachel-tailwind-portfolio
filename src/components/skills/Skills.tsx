import React from "react";
import {
  Fingerprint,
  Languages,
  Lock,
  Network,
  ScanSearch,
  Server,
  ShieldX,
  Terminal,
} from "lucide-react";
import Title from "../title/Title";
import { useTranslation } from "react-i18next";

const iconSize = 35;
const iconClass = "text-slate-400 cursor-pointer border border-solid border-violet-800 p-1 rounded-lg shadow-lg hover:shadow-violet-800/40";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="w-full h-screen flex justify-center">
      <div className="w-full max-w-2xl lg:max-w-4xl flex flex-col items-center justify-center gap-2 mx-12 my-12 md:mx-auto">
        <Title title={t("hability-title")} colored={t("hability-subtitle")} />

        <SkillItem skillName={t("hability-01")} value={100}>
          <Network className={iconClass} size={iconSize} />
        </SkillItem>
        <SkillItem skillName={t("hability-02")} value={100}>
          <Server className={iconClass} size={iconSize} />
        </SkillItem>
        <SkillItem skillName={t("hability-03")} value={100}>
          <ScanSearch className={iconClass} size={iconSize} />
        </SkillItem>
        <SkillItem skillName={t("hability-04")} value={90}>
          <ShieldX className={iconClass} size={iconSize} />
        </SkillItem>
        <SkillItem skillName={t("hability-05")} value={90}>
          <Terminal className={iconClass} size={iconSize} />
        </SkillItem>
        <SkillItem skillName={t("hability-06")} value={90}>
          <Fingerprint className={iconClass} size={iconSize} />
        </SkillItem>
        <SkillItem skillName={t("hability-07")} value={90}>
          <Lock className={iconClass} size={iconSize} />
        </SkillItem>
        <SkillItem skillName={t("hability-08")} value={80}>
          <Languages className={iconClass} size={iconSize} />
        </SkillItem>
      </div>
    </section>
  );
}

function SkillItem({ skillName, value, children }: { skillName: string; value: number; children: React.ReactNode }) {
  return (
    <div
      className="min-w-full flex items-center content-center"
      data-aos="fade-left"
    >
      <div className="mr-4">{children}</div>

      <dl className="grow shrink">
        <dt className="text-lg font-medium text-slate-400">{skillName}</dt>
        <dd className="flex items-center md:mb-3 ">
          <div className="w-full bg-slate-400 rounded h-2.5 mr-2 ">
            <div
              className="h-2.5 rounded bg-violet-800"
              style={{ width: `${value}%` }}
            />
          </div>
          <span className="text-sm font-medium text-slate-400">{value}%</span>
        </dd>
      </dl>
    </div>
  );
}
