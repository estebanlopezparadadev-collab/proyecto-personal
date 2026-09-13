import { useReveal } from "../hooks/useReveal";

// El objeto reutilizable de toda la página: una etiqueta de ferretería
// colgada de una chincheta con cordel real, agujero reforzado, y leve
// rotación de "colgada a mano". El wrapper lleva el cordel + la rotación;
// el div interior es la tarjeta de cartón en sí (recortada por el agujero).
export default function Tag({
  as: Component = "div",
  tilt = "0deg",
  sway = false,
  wrapClassName = "",
  className = "",
  badge = null,
  children,
}) {
  const ref = useReveal();

  return (
    <Component
      ref={ref}
      data-reveal
      style={{ "--tilt": tilt }}
      className={`tag-wrap ${sway ? "tag-sway" : ""} ${wrapClassName}`}
    >
      <svg className="tag-string" viewBox="0 0 40 58" aria-hidden="true">
        <path d="M20 3 Q 8 28 20 50" />
        <circle className="peg" cx="20" cy="3" r="2.6" />
        <circle className="peg-shine" cx="19.2" cy="2.2" r="0.9" />
      </svg>
      <div className={`tag ${className}`}>{children}</div>
      {/* el badge vive fuera de la tarjeta enmascarada: si estuviera dentro
          de .tag, el mask-image del agujero recortaría lo que sobresale
          por encima del borde superior. */}
      {badge}
    </Component>
  );
}
