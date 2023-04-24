import { useEffect, useState } from "react";

function useGetResize() {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    const listener = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);
  return [width, height];
}
export default useGetResize;
