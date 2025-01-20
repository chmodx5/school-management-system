import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react'; // Ensure this import matches your project
import React from 'react';
import { Button } from '../button';
import { Calendar } from '../calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { FormDescription } from './form-description';
import FormLabel from './form-label';

interface Props {
    name: string;
    label: string;
    placeholder: string;
    disabled?: boolean;
    formDescription?: string;
    value: Date | null;
    onChange: (date: Date | null) => void;
    error?: string;
}

export const DateInput: React.FC<Props> = ({
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
    // Check if there is an error
    const hasError = Boolean(error);

    const handleDateSelect = (date: Date | undefined) => {
        onChange(date ?? null);
    };

    return (
        <div className='space-y-2'>
            {/* Label */}
            <FormLabel htmlFor={name} label={label} hasError={hasError} />

            {/* Button Field */}
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={'outline'}
                        className={cn(
                            'pl-3 text-left text-sm font-normal',
                            !value && 'text-muted-foreground',
                        )}
                        disabled={disabled}
                        rightIcon={
                            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        }
                        {...inputProps}
                    >
                        {value ? (
                            format(value, 'PPP')
                        ) : (
                            <span>{placeholder}</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
                        mode='single'
                        selected={value ?? undefined}
                        onSelect={handleDateSelect}
                        disabled={(date) =>
                            date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                    />
                </PopoverContent>
            </Popover>

            {/* Description and error message */}
            <FormDescription error={error} description={formDescription} />
        </div>
    );
};
