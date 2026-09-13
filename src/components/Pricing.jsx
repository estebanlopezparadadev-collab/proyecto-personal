import { useLanguage } from "../hooks/LanguageContext";
import { copy } from "../data/copy";
import { pricing } from "../data/pricing";
import Tag from "./Tag";

export default function Pricing() {
  const { lang } = useLanguage();
  const c = copy[lang];
  const pricingItems = pricing[lang];

  return (
    <section
      id="precios"
      aria-labelledby="precios-title"
      className="pegboard bg-wall px-5 py-16 sm:px-8 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1180px]">
        <h2
          id="precios-title"
          className="mb-10 rotate-[-1deg] text-center font-display text-[1.9rem] text-paper-onwall sm:text-[2.4rem] lg:mb-12"
        >
          {c.pricing.title}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {pricingItems.map(({ tilt, title, desc, price, currency, period }) => (
            <Tag key={title} tilt={tilt} className="px-6 pt-11 pb-8 sm:px-7">
              <h3 className="mb-2.5 font-display text-[1.3rem] leading-[1.15] text-ink">
                {title}
              </h3>
              <p className="mb-2 min-h-[2.8em] text-[0.95rem] text-ink-soft">{desc}</p>
              <p className="flex flex-wrap items-baseline gap-x-1.5 font-display text-[1.7rem] text-accent sm:text-[1.9rem]">
                <span className="font-body text-[0.85rem] font-semibold lowercase text-ink-soft">
                  {lang === "es" ? "desde" : "from"}
                </span>
                {price}
                {period && (
                  <span className="font-body text-base font-bold text-ink-soft">{period}</span>
                )}
              </p>
              <p className="mt-1 text-[0.75rem] font-semibold text-ink-soft">{currency}</p>
            </Tag>
          ))}
        </div>
        <p
          className="mx-auto mt-10 max-w-[46ch] text-center text-base text-paper-onwall lg:mt-11"
          dangerouslySetInnerHTML={{ __html: c.pricing.note }}
        />
      </div>
    </section>
  );
}
