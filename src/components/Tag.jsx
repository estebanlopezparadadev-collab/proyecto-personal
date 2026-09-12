import { useReveal } from "../hooks/useReveal";

// El objeto reutilizable de toda la página: una etiqueta de ferretería
// colgada de un agujero perforado, con leve rotación de "colgada a mano".
export default function Tag({
  as: Component = "div",
  tilt = "0deg",
  sway = false,
  className = "",
  children,
}) {
  const ref = useReveal();

  return (
    <Component
      ref={ref}
      data-reveal
      style={{ "--tilt": tilt }}
      className={`tag ${sway ? "tag-sway" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
