import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-6 py-3 rounded-xl 
      bg-gradient-to-r from-[#FF9898] to-[#8054FF] 
      hover:opacity-90 transition font-medium 
      ${className}`}
    >
      {children}
    </button>
  );
}
