import { cn } from '@/lib/utils';
import React from 'react';
import { Label } from '../label';

interface Props {
    htmlFor?: string;
    label: string;
    hasError?: boolean;
}

export const FormLabel: React.FC<Props> = ({
    htmlFor,
    label,
    hasError = false,
}) => {
    return (
        <Label
            htmlFor={htmlFor}
            className={cn(
                `block text-sm font-semibold ${hasError && 'text-destructive'}`,
            )}
        >
            {label}
        </Label>
    );
};

export default FormLabel;
