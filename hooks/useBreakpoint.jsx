import { useState, useEffect } from "react";
export default function useBreakpoint(breakpoint) {
  const [smallerThanBP, setSmallerThanBP] = useState(false);
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries)
        setSmallerThanBP(entry.contentRect.width <= breakpoint);
    });
    observer.observe(document.body);
    return () => observer.disconnect();
  }, [breakpoint]);

  return smallerThanBP;
}
