import React from 'react';
import { FormDescription, FormLabel } from '.';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../select';

interface Option {
    label: string;
    value: string;
}

interface Props {
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    formDescription?: string;
    options: Option[];
    disabled?: boolean;
    value: string;
    error?: string;
    onChange: (value: string) => void;
}

export const SelectInput: React.FC<Props> = ({
    name,
    label,
    placeholder,
    formDescription,
    options,
    disabled = false,
    value,
    error,
    onChange,
}) => {
    const hasError = Boolean(error);

    return (
        <div className='space-y-2'>
            {/* Label */}
            <FormLabel htmlFor={name} label={label} hasError={hasError} />

            {/* Select Dropdown */}
            <Select
                name={name}
                onValueChange={onChange}
                value={value}
                disabled={disabled}
            >
                <div>
                    <SelectTrigger>
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                </div>
                <SelectContent>
                    {options.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {/* description and error message */}
            <FormDescription error={error} description={formDescription} />
        </div>
    );
};
