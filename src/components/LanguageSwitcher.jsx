import { useLanguage } from "../hooks/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-5 z-50">
      <button
        onClick={toggleLanguage}
        className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-tag px-4 py-2 font-body text-sm font-semibold text-ink transition hover:bg-[#f0e6bb] active:scale-95"
        aria-label="Toggle language"
      >
        {lang === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}
      </button>
    </div>
  );
}
