import Tag from "./Tag";
import { WhatsAppIcon } from "./icons";
import { whatsappLink } from "../config/whatsapp";

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="pegboard flex min-h-[92svh] items-center bg-wall-deep bg-gradient-to-b from-wall to-wall-deep px-5 py-12 sm:px-8 lg:px-8 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1180px]">
        <Tag
          tilt="-1.2deg"
          sway
          className="mx-auto max-w-[640px] px-7 pt-13 pb-11 text-center sm:px-13"
        >
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
            className="inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 font-body text-[1.05rem] font-extrabold text-accent-ink shadow-[0_10px_22px_-10px_rgba(0,0,0,0.6)] transition hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_14px_26px_-10px_rgba(0,0,0,0.65)] active:translate-y-px active:scale-[0.98] active:bg-accent-hover"
          >
            <WhatsAppIcon className="h-5.5 w-5.5" />
            Pide tu revisión gratis
          </a>
        </Tag>
      </div>
    </section>
  );
}
