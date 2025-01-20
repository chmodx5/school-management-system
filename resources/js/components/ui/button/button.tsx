import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { Spinner } from '../spinner/spinner';
import { spinnerStyles } from '../spinner/theme';

import { buttonStyles } from './theme';
import { ButtonProps } from './types';

// hover effect : shadow | border

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            as,
            className,
            variant = 'contained',
            size = 'md',
            color = 'primary',
            pill = false,
            tile = false,
            asChild = false,
            fullWidth = false,
            icon,
            leftIcon,
            rightIcon,
            align = 'center',
            isActive = false,
            isLoading = false,
            shadowOnHover = false,
            children,
            ...props
        },
        ref,
    ) => {
        // let Comp = as ? as : "button";
        const Comp = asChild ? Slot : as || 'button';
        return (
            <Comp
                className={cn(
                    buttonStyles.base,
                    icon
                        ? buttonStyles.iconButton.size[size]
                        : buttonStyles.size[size],
                    fullWidth && buttonStyles.fullWidth,
                    variant === 'outline' && buttonStyles.variant.outline,
                    variant === 'contained' && buttonStyles.variant.contained,
                    variant === 'text' && buttonStyles.variant.text,
                    variant === 'ghost' && buttonStyles.variant.ghost,
                    variant === 'tonal' && buttonStyles.variant.ghost,
                    buttonStyles.color.variant[variant]?.[color]?.base,
                    isActive &&
                        buttonStyles.color.variant[variant]?.[color]?.active,
                    !pill && !tile && buttonStyles.shape.base,
                    pill && buttonStyles.shape.pill,
                    tile && buttonStyles.shape.tile,
                    shadowOnHover && buttonStyles.shadowOnHover,
                    className,
                )}
                ref={ref}
                {...props}
            >
                {icon ? (
                    <span className="">{icon}</span>
                ) : (
                    <div className="flex w-full items-center gap-2">
                        {leftIcon && (
                            <>
                                {leftIcon && !isLoading && (
                                    <div>{leftIcon}</div>
                                )}
                                {leftIcon && isLoading && <div>{leftIcon}</div>}
                            </>
                        )}
                        <div
                            className={cn(
                                'flex flex-1',
                                buttonStyles.align[align],
                            )}
                        >
                            {children}
                        </div>
                        {rightIcon ? (
                            <>
                                {!isLoading && <div>{rightIcon}</div>}
                                {isLoading && (
                                    <Spinner
                                        className={cn(
                                            spinnerStyles.color[color],
                                            spinnerStyles.size[size],
                                            isLoading && 'text-inherit',
                                        )}
                                        color={
                                            isLoading ? 'primary' : undefined
                                        }
                                    />
                                )}
                            </>
                        ) : (
                            isLoading && (
                                <Spinner
                                    className={cn(
                                        spinnerStyles.color[color],
                                        spinnerStyles.size[size],
                                        isLoading && 'text-inherit',
                                    )}
                                    color={isLoading ? 'primary' : undefined}
                                />
                            )
                        )}
                    </div>
                )}
            </Comp>
        );
    },
);

Button.displayName = 'Button';

export { Button };
