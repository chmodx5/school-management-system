import { cn } from '@/lib/utils';
import React from 'react';
import { Input } from '../input';
import { FormDescription } from './form-description';
import FormLabel from './form-label';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    placeholder: string;
    formDescription?: string;
    disabled?: boolean;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

export const TextInput: React.FC<Props> = ({
    name,
    label,
    placeholder,
    disabled = false,
    type = 'text',
    formDescription,
    value,
    onChange,
    error,
    ...inputProps
}) => {
    // check if there is an error
    const hasError = Boolean(error);

    return (
        <div className='space-y-2'>
            {/* Label */}
            <FormLabel htmlFor={name} label={label} hasError={hasError} />

            {/* Input Field */}
            <div className={cn(type == 'date' ? 'inline-block' : '')}>
                <Input
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                    {...inputProps}
                />
            </div>

            {/* description and error message */}
            <FormDescription error={error} description={formDescription} />
        </div>
    );
};
