import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import About from "./components/About";
import Closing from "./components/Closing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
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
  );
}
