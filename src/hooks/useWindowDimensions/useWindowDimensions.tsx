import { useEffect, useState } from "react";

interface WindowDimensions {
  width: number;
  height: number;
}

function getWindowDimensions(): WindowDimensions {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  } as WindowDimensions;
}

export default function useWindowDimensions(): WindowDimensions {
  const [dimensions, setDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
}
