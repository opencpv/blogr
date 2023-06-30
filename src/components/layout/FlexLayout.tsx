import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const FlexLayout = ({ children, className }: Props) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

export default FlexLayout;
