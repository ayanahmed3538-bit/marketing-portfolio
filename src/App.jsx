
import "./styles/global.css";

import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import MenuSection from "./components/MenuSection";
import SignatureDishesSection from "./components/SignatureDishesSection";

export default function App() {
  return (
    <div
      style={{
        background: "#0C0C0C",
        fontFamily: "'Kanit','Inter',sans-serif",
        overflowX: "clip",
      }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <MenuSection />
      <SignatureDishesSection />
    </div>
  );
}
