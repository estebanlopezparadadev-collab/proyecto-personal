import { LanguageProvider } from "./hooks/LanguageContext";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import About from "./components/About";
import Closing from "./components/Closing";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function App() {
  return (
    <LanguageProvider>
      <>
        <LanguageSwitcher />
        <main>
          <Hero />
          <Problems />
          <Pricing />
          <Process />
          <About />
          <Closing />
        </main>
        <Footer />
      </>
    </LanguageProvider>
  );
}
