import { useLanguage } from "../hooks/LanguageContext";
import { copy } from "../data/copy";
import Tag from "./Tag";
import { steps } from "../data/steps";

export default function Process() {
  const { lang } = useLanguage();
  const c = copy[lang];
  const processSteps = steps[lang];

  return (
    <section
      id="proceso"
      aria-labelledby="proceso-title"
      className="pegboard bg-wall px-5 py-16 sm:px-8 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1180px]">
        <h2
          id="proceso-title"
          className="mb-10 rotate-[-1deg] text-center font-display text-[1.9rem] text-paper-onwall sm:text-[2.4rem] lg:mb-12"
        >
          {c.process.title}
        </h2>
        <ol className="grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-3 sm:gap-8">
          {processSteps.map(({ tilt, text }, i) => (
            <Tag
              key={text}
              as="li"
              tilt={tilt}
              className="pt-12 px-6 pb-8 text-center"
              badge={
                <span className="absolute -top-4.5 left-1/2 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full bg-accent font-display text-lg text-accent-ink shadow-[0_4px_8px_-2px_rgba(0,0,0,0.45)]">
                  {i + 1}
                </span>
              }
            >
              <p className="text-[1.05rem] font-semibold text-ink">{text}</p>
            </Tag>
          ))}
        </ol>
      </div>
    </section>
  );
}
