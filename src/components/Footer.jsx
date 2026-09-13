import { useLanguage } from "../hooks/LanguageContext";
import { copy } from "../data/copy";

export default function Footer() {
  const { lang } = useLanguage();
  const c = copy[lang];

  return (
    <footer className="bg-wall-deep px-4 py-7 text-center text-[0.85rem]">
      <p className="m-0 text-paper-onwall/55">{c.footer}</p>
    </footer>
  );
}
