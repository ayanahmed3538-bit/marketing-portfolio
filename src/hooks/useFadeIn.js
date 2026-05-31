
import { useEffect, useRef, useState } from "react";

export default function useFadeIn(delay = 0) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVis(true);
        obs.disconnect();
      }
    }, { threshold: 0.05 });

    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return {
    ref,
    style: {
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : "translateY(30px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }
  };
}
