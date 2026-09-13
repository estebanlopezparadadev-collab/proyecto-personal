import Tag from "./Tag";
import { WhatsAppIcon } from "./icons";
import Mascot from "./icons/Mascot";
import { whatsappLink } from "../config/whatsapp";

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="pegboard relative flex min-h-[92svh] items-center overflow-hidden bg-wall-deep bg-gradient-to-b from-wall to-wall-deep px-5 py-12 sm:px-8 lg:px-8 lg:py-16"
    >
      <div className="blob h-[22rem] w-[22rem] -translate-x-1/3 -translate-y-1/4 sm:h-[28rem] sm:w-[28rem]" style={{ top: "10%", left: "50%" }} />
      <div className="relative z-[1] mx-auto w-full max-w-[1180px]">
        <Tag
          tilt="-1.2deg"
          sway
          wrapClassName="mx-auto max-w-[640px]"
          className="relative px-7 pt-13 pb-11 text-center sm:px-13"
        >
          <Mascot className="absolute -right-5 -top-9 h-20 w-20 rotate-[8deg] sm:-right-8 sm:-top-10 sm:h-24 sm:w-24" />
          <h1
            id="hero-title"
            className="mx-auto mb-2 max-w-[15em] font-display text-[2.1rem] leading-[1.15] text-ink sm:text-[2.8rem] lg:text-[3.4rem]"
          >
            ¿Tu página web tiene problemas?{" "}
            <span className="text-accent">Yo los arreglo.</span>
          </h1>
          <p className="mx-auto mb-7 max-w-[42ch] text-[1.05rem] text-ink-soft sm:text-[1.2rem]">
            Arreglos y mantenimiento para negocios en Bogotá, sin tecnicismos ni vueltas.
          </p>
          <a
            href={whatsappLink()}
            className="inline-flex items-center gap-2.5 rounded-full border-[2.5px] border-ink bg-accent px-8 py-4 font-body text-[1.05rem] font-extrabold text-accent-ink shadow-[5px_5px_0_var(--color-ink)] transition hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[7px_7px_0_var(--color-ink)] active:translate-y-0.5 active:scale-[0.98] active:bg-accent-hover active:shadow-[2px_2px_0_var(--color-ink)]"
          >
            <WhatsAppIcon className="h-5.5 w-5.5" />
            Pide tu revisión gratis
          </a>
        </Tag>
      </div>
    </section>
  );
}
