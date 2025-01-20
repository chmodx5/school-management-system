import React from "react";

import { ButtonColorProps } from "../button/types";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: ButtonColorProps["color"];
}
