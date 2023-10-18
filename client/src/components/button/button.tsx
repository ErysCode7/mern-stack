import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC = ({ ...props }: ButtonProps) => {
  return <button {...props} />;
};

export default Button;
