import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "white";
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    fullWidth?: boolean;
}

const Button = ({
    children,
    variant = "primary",
    size = "md",
    className = "",
    onClick,
    type = "button",
    disabled = false,
    fullWidth = false
}: ButtonProps) => {
    // Base styles - FIXED: Added flex display for proper icon/text alignment
    const baseStyles =
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 relative overflow-hidden";

    // Size variants
    const sizeStyles = {
        sm: "px-4 py-2.5 text-sm",
        md: "px-6 py-3.5 text-base",
        lg: "px-8 py-4 text-lg"
    };

    // Variant styles - Enhanced for more dimension
    const variantStyles = {
        primary:
            "bg-primary text-white shadow-lg hover:shadow-xl " +
            "border border-primary/90 hover:border-primary " +
            "focus:ring-primary/40 " +
            "relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent " +
            "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[4px] " +
            "after:bg-white/30 after:transition-transform after:duration-300 " +
            "hover:after:translate-y-0 active:after:bg-white/40",

        secondary:
            "bg-secondary text-white shadow-lg hover:shadow-xl " +
            "border border-secondary/90 hover:border-secondary " +
            "focus:ring-secondary/40 " +
            "relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent " +
            "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[4px] " +
            "after:bg-white/30 after:transition-transform after:duration-300 " +
            "hover:after:translate-y-0 active:after:bg-white/40",

        outline:
            "bg-white text-gray-800 shadow-sm hover:shadow " +
            "border border-gray-300 hover:border-gray-400 " +
            "focus:ring-gray-300 " +
            "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] " +
            "after:bg-gray-400 after:transition-transform after:duration-300 " +
            "after:translate-y-full hover:after:translate-y-0",

        white:
            "bg-gradient-to-b from-white to-gray-50 text-gray-900 shadow-md hover:shadow-lg" +
            "border border-gray-200 hover:border-gray-300 " +
            "focus:ring-gray-300 " +
            "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] " +
            "after:bg-gray-400 after:transition-transform after:duration-300 " +
            "after:translate-y-full hover:after:translate-y-0"
    };

    // Width
    const widthStyles = fullWidth ? "w-full" : "";

    // Disabled styles
    const disabledStyles = disabled
        ? "opacity-60 cursor-not-allowed hover:shadow-lg"
        : "active:translate-y-[1px] active:shadow-md";

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                ${baseStyles}
                ${sizeStyles[size]}
                ${variantStyles[variant]}
                ${widthStyles}
                ${disabledStyles}
                ${className}
            `}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </button>
    );
};

export default Button;