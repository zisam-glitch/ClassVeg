import { useEffect, useState } from "react";
const munfirmSlider = () => {
  const [active, setActive] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      
    });

    return () => clearInterval(interval);
  }, [active]);
  return { active, setActive };
};
export default munfirmSlider;
