import { Card } from '../card';
import { Checkbox } from '../checkbox';
import { FormDescription } from './form-description';
import FormLabel from './form-label';

interface Props {
    id?: string;
    name: string;
    label: string;
    description?: string;
    disabled?: boolean;
    value: boolean;
    onChange: (value: boolean) => void;
    error?: string;
}

export const CheckboxInput = ({
    id,
    name,
    label,
    disabled = false,
    description,
    value,
    onChange,
    error,
    ...inputProps
}: Props) => {
    const hasError = Boolean(error);

    return (
        <Card className='items-top flex space-x-2 p-3 shadow-none'>
            <Checkbox
                id={id}
                name={name}
                checked={value}
                onCheckedChange={(checked: boolean | 'indeterminate') => {
                    if (checked !== 'indeterminate') {
                        onChange(checked);
                    }
                }}
                disabled={disabled}
                {...inputProps}
            />
            <div className='grid gap-1.5 leading-none'>
                <FormLabel htmlFor={name} label={label} hasError={hasError} />

                <FormDescription error={error} description={description} />
            </div>
            {error && <p className='text-sm text-destructive'>{error}</p>}
        </Card>
    );
};
