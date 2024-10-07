import React from "react";

const Button = ({ children, stuff }) => {
  return <button className={`${stuff}`}>{children}</button>;
};

export default Button;

// Having fun are we?
// Much modular, such innovation, wow
