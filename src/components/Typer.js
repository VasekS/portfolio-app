import React, { useRef, useEffect } from "react";
import Typed from "typed.js";


const Typer = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ["Web Developer", "Technical Producer", "Maker &amp; Dreamer"],
      typeSpeed: 150,
      backSpeed: 50,
      loop: true
    });
  }, []);

  return <span ref={typeTarget} />;
};

export default Typer;