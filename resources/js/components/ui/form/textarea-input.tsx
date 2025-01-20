import React from 'react';
import { Textarea } from '../textarea';
import { FormDescription } from './form-description';
import FormLabel from './form-label';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
    placeholder: string;
    formDescription?: string;
    disabled?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string;
}

export const TextAreaInput: React.FC<Props> = ({
    name,
    label,
    placeholder,
    disabled = false,
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
            <Textarea
                id={name}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                onChange={onChange}
                {...inputProps}
            />

            {/* description and error message */}
            <FormDescription error={error} description={formDescription} />
        </div>
    );
};
