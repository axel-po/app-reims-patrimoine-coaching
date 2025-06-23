import React from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
  disabled = false,
  type = "button",
  icon,
  iconPosition = "right",
}: ButtonProps) => {
  // Size classes
  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6",
    lg: "py-4 px-8",
  };

  // Base classes for all buttons
  const baseClasses =
    "rounded-2xl font-medium transition-all flex items-center justify-center";

  // Variant specific classes
  const variantClasses = {
    primary: "relative group",
    secondary: "relative group",
    outline:
      "relative group border-2 border-gray-300 text-gray-700 hover:border-indigo-300 transition-colors",
  };

  // Inner content classes based on variant
  const contentClasses = {
    primary:
      "relative py-4 px-8 rounded-2xl bg-white border-2 border-indigo-600 text-indigo-600 font-medium group-hover:bg-indigo-600 group-hover:text-white transition-all flex items-center justify-between",
    secondary:
      "relative py-4 px-8 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg text-white font-medium hover:-translate-y-1 transition-transform flex items-center justify-center",
    outline: "",
  };

  // Background decoration for primary variant
  const decorationClasses = {
    primary:
      "absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl transform translate-y-2 translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform",
    secondary: "",
    outline: "",
  };

  // Icon classes
  const getIconClasses = () => {
    if (variant === "primary") {
      return "w-5 h-5 transform group-hover:translate-x-1 transition-transform";
    }
    if (variant === "secondary") {
      return "w-5 h-5";
    }
    return "w-5 h-5";
  };

  // Default right arrow icon
  const defaultIcon = (
    <svg
      className={getIconClasses()}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );

  // Build the content based on children and icon
  const content = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {(icon || variant === "primary") && iconPosition === "right" && (
        <span className="ml-2">{icon || defaultIcon}</span>
      )}
    </>
  );

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={clsx(variantClasses[variant], className)}>
        {variant === "primary" && (
          <div className={decorationClasses.primary}></div>
        )}
        {variant === "outline" ? (
          <div
            className={clsx(
              baseClasses,
              sizeClasses[size],
              contentClasses.outline || variantClasses.outline
            )}
          >
            {content}
            <div className="absolute top-0 right-0 bg-indigo-100 w-16 h-16 rounded-full -mt-2 -mr-2 transform scale-0 group-hover:scale-100 transition-transform origin-center"></div>
            <svg
              className="absolute top-4 right-8 w-5 h-5 text-indigo-500 transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7l4-4m0 0l4 4m-4-4v18"
              />
            </svg>
          </div>
        ) : (
          <div className={clsx(contentClasses[variant], sizeClasses[size])}>
            {content}
          </div>
        )}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        variantClasses[variant],
        className,
        disabled && "opacity-60 cursor-not-allowed"
      )}
    >
      {variant === "primary" && (
        <div className={decorationClasses.primary}></div>
      )}
      {variant === "outline" ? (
        <div
          className={clsx(
            baseClasses,
            sizeClasses[size],
            contentClasses.outline || variantClasses.outline
          )}
        >
          {content}
          <div className="absolute top-0 right-0 bg-indigo-100 w-16 h-16 rounded-full -mt-2 -mr-2 transform scale-0 group-hover:scale-100 transition-transform origin-center"></div>
          <svg
            className="absolute top-4 right-8 w-5 h-5 text-indigo-500 transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7l4-4m0 0l4 4m-4-4v18"
            />
          </svg>
        </div>
      ) : (
        <div className={clsx(contentClasses[variant], sizeClasses[size])}>
          {content}
        </div>
      )}
    </button>
  );
};

export default Button;
