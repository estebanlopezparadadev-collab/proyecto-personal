import {
  ClockIcon,
  MailXIcon,
  SearchIcon,
  CardXIcon,
  CrackIcon,
  PhoneWarnIcon,
} from "../components/icons";

export const problems = [
  {
    icon: ClockIcon,
    tilt: "-2deg",
    title: "Tu página está lenta",
    before: "Los visitantes se cansan de esperar y se van antes de ver qué ofreces.",
    after: "Carga en segundos, sin que nadie se aburra.",
  },
  {
    icon: MailXIcon,
    tilt: "1.5deg",
    title: "Tu formulario no manda los correos",
    before: "Alguien te escribe y el mensaje se pierde en el camino. Nunca te enteras.",
    after: "Cada mensaje te llega al instante.",
  },
  {
    icon: SearchIcon,
    tilt: "-1deg",
    title: "No apareces en Google",
    before: "Cuando alguien te busca, encuentra primero a tu competencia.",
    after: "Apareces cuando te buscan.",
  },
  {
    icon: CardXIcon,
    tilt: "2deg",
    title: "No puedes cobrar en línea",
    before: "Pierdes ventas porque tu página no recibe pagos ni transferencias.",
    after: "Recibes pagos sin complicaciones.",
  },
  {
    icon: CrackIcon,
    tilt: "-1.5deg",
    title: "Tu página está abandonada",
    before: "Lleva meses (o años) sin actualizarse y ya no representa tu negocio.",
    after: "Siempre al día y lista para vender.",
  },
  {
    icon: PhoneWarnIcon,
    tilt: "1deg",
    title: "Se ve mal en el celular",
    before: "El 90% de tus visitas llegan desde un teléfono y tu página no se adapta.",
    after: "Se ve perfecta en cualquier pantalla.",
  },
];
