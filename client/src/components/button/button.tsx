import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonComponent: React.FC = ({ ...props }: ButtonProps) => {
  return <button {...props} />;
};

export default ButtonComponent;
