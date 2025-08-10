import { useEffect, useRef, useState } from "react";

export function useFitText({ maxFontSize = 32, minFontSize = 17 } = {}) {
  const ref = useRef(null);
  const [fontSize, setFontSize] = useState(maxFontSize);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;

    const fitText = () => {
      if (!element) return;

      const containerWidth = element.clientWidth - 20 // padding is 20px

      // Hidden clone to measure original width at max size
      const clone = element.cloneNode(true);
      clone.style.visibility = "hidden";
      clone.style.position = "absolute";
      clone.style.whiteSpace = "nowrap";
      clone.style.fontSize = `${maxFontSize}px`;
      document.body.appendChild(clone);

      const textWidth = clone.scrollWidth;
      document.body.removeChild(clone);

      let newSize = maxFontSize;

      // If text overflows, scale down proportionally
      if (textWidth > containerWidth) {
        const scaleFactor = containerWidth / textWidth;
        const newSize = Math.max(minFontSize, Math.floor(maxFontSize * scaleFactor));
        element.style.fontSize = `${newSize}px`;
      }

      if (newSize !== fontSize) {
        setFontSize(newSize);
      }
    };

    const observer = new ResizeObserver(fitText);
    observer.observe(element);

    fitText();

    return () => observer.disconnect();
  }, [maxFontSize, minFontSize, fontSize]);

  return { ref, fontSize };
}
