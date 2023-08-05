import { useEffect, useState } from "react";

export function useAutoType(text: string, strokeDurationMs: number) {
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const interId = setInterval(() => {
      setCurrentPosition((val) => {
        return val + 1;
      });
    }, strokeDurationMs);
    return () => {
      clearInterval(interId);
    };
  }, [strokeDurationMs]);
  return text.substring(0, currentPosition);
}
