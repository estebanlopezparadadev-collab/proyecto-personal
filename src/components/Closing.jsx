import { useLanguage } from "../hooks/LanguageContext";
import { copy } from "../data/copy";
import Tag from "./Tag";
import { WhatsAppIcon } from "./icons";
import { whatsappLink } from "../config/whatsapp";

export default function Closing() {
  const { lang } = useLanguage();
  const c = copy[lang];

  return (
    <section
      id="contacto"
      aria-labelledby="cierre-title"
      className="pegboard bg-wall-deep bg-gradient-to-b from-wall to-wall-deep px-5 py-16 sm:px-8 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1180px]">
        <Tag
          tilt="-1.2deg"
          sway
          wrapClassName="mx-auto max-w-[640px]"
          className="px-7 pt-13 pb-11 text-center sm:px-13"
        >
          <h2 className="mb-6 font-display text-[1.9rem] leading-[1.15] text-ink sm:text-[2.4rem]">
            {c.closing.title}
            <br />
            {c.closing.subtitle}
          </h2>
          <a
            href={whatsappLink(c.whatsapp)}
            className="inline-flex items-center gap-2.5 rounded-full border-[2.5px] border-ink bg-accent px-8 py-4 font-body text-[1.05rem] font-extrabold text-accent-ink shadow-[5px_5px_0_var(--color-ink)] transition hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[7px_7px_0_var(--color-ink)] active:translate-y-0.5 active:scale-[0.98] active:bg-accent-hover active:shadow-[2px_2px_0_var(--color-ink)]"
          >
            <WhatsAppIcon className="h-5.5 w-5.5" />
            {c.closing.cta}
          </a>
          <p className="mt-4.5 text-[0.95rem] text-ink-soft">{c.closing.response}</p>
        </Tag>
      </div>
    </section>
  );
}
