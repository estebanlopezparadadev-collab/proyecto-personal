import { useLanguage } from "../hooks/LanguageContext";
import { copy } from "../data/copy";
import Tag from "./Tag";
import { CheckIcon } from "./icons";
import { problems } from "../data/problems";

export default function Problems() {
  const { lang } = useLanguage();
  const c = copy[lang];
  const problemList = problems[lang];

  return (
    <section
      id="problemas"
      aria-labelledby="problemas-title"
      className="pegboard bg-wall px-5 py-16 sm:px-8 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1180px]">
        <h2
          id="problemas-title"
          className="mb-10 rotate-[-1deg] text-center font-display text-[1.9rem] text-paper-onwall sm:text-[2.4rem] lg:mb-12"
        >
          {lang === "es" ? "Problemas que resuelvo" : "Problems I solve"}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {problemList.map(({ icon: Icon, tilt, title, before, after }) => (
            <Tag key={title} tilt={tilt} className="px-6 pt-11 pb-8 sm:px-7">
              <Icon className="mb-3.5 h-9 w-9 text-accent" />
              <h3 className="mb-2.5 font-display text-[1.35rem] leading-[1.15] text-ink">
                {title}
              </h3>
              <p className="mb-3.5 text-[0.95rem] text-ink-soft">{before}</p>
              <p className="flex items-start gap-1.5 border-t border-dashed border-tag-edge pt-3.5 font-semibold text-ink">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {after}
              </p>
            </Tag>
          ))}
        </div>
      </div>
    </section>
  );
}
