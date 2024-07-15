import { tv } from "tailwind-variants";

export const Typography = ({ children, size, color, weight, className }) => {
  const typography = tv({
    base: "sm:text-left leading-[1.13]",
    variants: {
      align: {
        left: "text-left",
        right: "text-right",
        center: "text-center",
      },
      color: {
        primary: "text-primary",
        accident: "text-accident",
        branding: "text-branding",
      },
      size: {
        xs: "text-xs",
        sm: "text-normal",
        lg: "text-4xl sm:text-5xl",
      },
      weight: {
        base: "font-normal",
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    compoundVariants: [
      {
        size: ["sm", "lg", "xs"],
        color: ["primary", "accident", "branding"],
        weight: ["bold", "base", "semibold"],
        align: "center",
      },
    ],
    defaultVariants: {
      size: "sm",
      color: "accident",
      weight: "base",
      align: "center",
    },
  });

  return (
    <div className={`${typography({ size, color, weight })} ${className}`}>
      {children}
    </div>
  );
};
