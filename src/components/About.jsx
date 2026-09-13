import Tag from "./Tag";

export default function About() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="sobre-title"
      className="pegboard bg-wall px-5 py-16 sm:px-8 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1180px]">
        <Tag
          tilt="-1deg"
          wrapClassName="mx-auto max-w-[620px]"
          className="px-7 pt-16 pb-9 text-center sm:px-9"
          badge={
            <span
              aria-hidden="true"
              className="absolute -top-6 left-1/2 grid h-14 w-14 -translate-x-1/2 -rotate-6 place-items-center rounded-full border-4 border-wall bg-accent font-display text-2xl text-accent-ink shadow-[0_6px_12px_-3px_rgba(0,0,0,0.4)]"
            >
              J
            </span>
          }
        >
          <h2 id="sobre-title" className="mb-3 font-display text-[1.7rem] text-ink">
            Sobre mí
          </h2>
          <p className="text-[1.05rem] text-ink-soft">
            Soy Julian, desarrollador full stack en Bogotá. Trabajo con las mismas tecnologías
            que usan empresas grandes, aplicadas a resolver lo que a tu negocio realmente le
            está costando ventas. Atiendo negocios de toda la ciudad, sin letra pequeña ni
            tecnicismos.
          </p>
        </Tag>
      </div>
    </section>
  );
}
