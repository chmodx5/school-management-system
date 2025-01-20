import React from "react";

import { ButtonColorProps } from "../button/types";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: "contained" | "text" | "ghost" | "outline" | "tonal";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: ButtonColorProps["color"];
    pill?: boolean;
    tile?: boolean;
    fullWidth?: boolean;
    align?: "left" | "center" | "right";
    isActive?: boolean;
    asChild?: boolean;
    isLoading?: boolean;
    shadowOnHover?: boolean;
    children?: React.ReactNode;
    raised?: boolean;
    as?: string | React.ElementType<any>;
    href?: string;
}
