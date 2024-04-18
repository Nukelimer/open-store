import { useEffect } from "react";

export default function Spinner() {
  useEffect(() => {
    async function getLoader() {
      const { square } = await import("ldrs");
      square.register();
    }
    getLoader();
  }, []);
  return <l-square speed="1.3"  color="black" size="95 "></l-square>;
}
