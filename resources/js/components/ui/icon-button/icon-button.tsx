import { Slot } from "@radix-ui/react-slot";
import * as React from "react";


import { cn } from "@/lib/utils";

import { buttonStyles } from "../button/theme";
import { Spinner } from "../spinner";
import { spinnerStyles } from "../spinner/theme";

import { iconButtonStyles } from "./theme";
import { ButtonProps } from "./types";

// hover effect : shadow | border

const IconButton = React.forwardRef<HTMLElement, ButtonProps>(
    (
        {
            as,
            className,
            variant = "contained",
            size = "md",
            color = "primary",
            pill = false,
            tile = false,
            asChild = false,
            fullWidth = false,
            // align = "center",
            isActive = false,
            isLoading = false,
            shadowOnHover = false,
            children,
            raised = false,
            ...props
        },
        ref
    ) => {
        // let Comp = as ? as : "button";
        const Comp = asChild ? Slot : as || "button";
        return (
            <Comp
                className={cn(
                    buttonStyles.base,
                    iconButtonStyles.size[size],
                    fullWidth && buttonStyles.fullWidth,
                    variant === "outline" && buttonStyles.variant.outline,
                    variant === "contained" && buttonStyles.variant.contained,
                    variant === "text" && buttonStyles.variant.text,
                    variant === "ghost" && buttonStyles.variant.ghost,
                    variant === "tonal" && buttonStyles.variant.ghost,
                    buttonStyles.color.variant[variant]?.[color]?.base,
                    isActive &&
                        buttonStyles.color.variant[variant]?.[color]?.active,
                    !pill && !tile && buttonStyles.shape.base,
                    pill && buttonStyles.shape.pill,
                    tile && buttonStyles.shape.tile,
                    raised && "shadow",
                    shadowOnHover && buttonStyles.shadowOnHover,
                    className
                )}
                ref={ref}
                {...props}
            >
                {isLoading ? (
                    <Spinner
                        className={cn(
                            spinnerStyles.color[color],
                            spinnerStyles.size[size],
                            isLoading && "text-inherit"
                        )}
                        color={isLoading ? "primary" : undefined}
                    />
                ) : (
                    <>{children}</>
                )}
            </Comp>
        );
    }
);

IconButton.displayName = "IconButton";

export { IconButton };
