import { Check, ChevronsUpDown } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

import { Button } from '../button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '../command';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';

interface Option {
    label: string;
    value: string;
}

interface Props {
    name: string;
    label: string;
    placeholder: string;
    formDescription?: string;
    options: Option[];
    disabled?: boolean;
    emptyPlaceholder?: string;
    value: string;
    onSelect: (value: string) => void;
}

export const ComboboxInput = ({
    name,
    label,
    formDescription,
    options,
    disabled,
    placeholder,
    emptyPlaceholder,
    value,
    onSelect,
}: Props) => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className='flex flex-col'>
            <label htmlFor={name} className='mb-2 text-sm font-medium'>
                {label}
            </label>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        id={name}
                        variant='outline'
                        role='combobox'
                        className={cn(
                            'group justify-between bg-background text-green-500',
                            !value && 'text-muted-foreground',
                            'border border-border',
                            open
                                ? 'border-primary outline-none ring-2 ring-primary'
                                : 'focus:border-primary focus:outline-primary focus:ring-2 focus:ring-primary',
                        )}
                        align='left'
                        rightIcon={
                            <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                        }
                        disabled={disabled}
                    >
                        <span className='truncate text-sm text-muted-foreground group-hover:text-primary-foreground'>
                            {value
                                ? options.find(
                                      (option) => option.value === value,
                                  )?.label
                                : placeholder || 'Select item'}
                        </span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='w-[200px] p-0'>
                    <Command>
                        <CommandInput placeholder={placeholder} />
                        <CommandList>
                            <CommandEmpty>
                                {emptyPlaceholder
                                    ? emptyPlaceholder
                                    : 'Item not found'}
                            </CommandEmpty>
                            <CommandGroup>
                                {options.map((option) => (
                                    <CommandItem
                                        value={option.label}
                                        key={option.value}
                                        onSelect={() => {
                                            onSelect(option.value);
                                            setOpen(false);
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                'mr-2 h-4 w-4',
                                                option.value === value
                                                    ? 'opacity-100'
                                                    : 'opacity-0',
                                            )}
                                        />
                                        {option.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
            {formDescription && (
                <p className='mt-1 text-sm text-muted-foreground'>
                    {formDescription}
                </p>
            )}
        </div>
    );
};
