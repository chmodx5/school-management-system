import React from 'react';

export interface ButtonColorProps {
    color:
        | 'base'
        | 'primary'
        | 'secondary'
        | 'warning'
        | 'info'
        | 'success'
        | 'accent'
        | 'light'
        | 'destructive'
        | 'dark';
}

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: 'contained' | 'text' | 'ghost' | 'outline' | 'tonal';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: ButtonColorProps['color'];
    pill?: boolean;
    tile?: boolean;
    fullWidth?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    icon?: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    isActive?: boolean;
    asChild?: boolean;
    isLoading?: boolean;
    shadowOnHover?: boolean;
    children?: React.ReactNode;
    as?: string | React.ElementType<unknown>;
    href?: string;
}
