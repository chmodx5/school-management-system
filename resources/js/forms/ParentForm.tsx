import { Parent } from '@/types';
import { useForm, usePage } from '@inertiajs/react';
import { Button, SelectInput, TextInput } from '../components/ui';
import FormContainer from '../components/ui/form/form-container';

interface Props {
    isUpdate?: boolean;
}

const StudentForm: React.FC<Props> = ({ isUpdate = false }) => {
    const parent: Parent = usePage().props.parent as Parent;

    const {
        data,
        setData,
        post,
        patch,
        processing,
        errors,
        recentlySuccessful,
    } = useForm(
        isUpdate
            ? parent
            : {
                  full_name: '',
                  occupation: '',
                  residential_address: '',
                  contact_phone: '',
                  whatsapp_number: '',
                  email_address: '',
                  preferred_contact: '',
              },
    );

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isUpdate) {
            patch('/update-parent');
        } else {
            post('/add-parent');
        }
    };

    // const isUpdate = false

    return (
        <FormContainer title='Add Parent'>
            <form onSubmit={submit} className='mt-6 space-y-6'>
                <TextInput
                    id='full_name'
                    name='full_name'
                    label='Full Name'
                    type='text'
                    placeholder='Full Name'
                    value={data.full_name}
                    onChange={(e) => setData('full_name', e.target.value)}
                    error={errors.full_name}
                />
                <TextInput
                    id='occupation'
                    name='occupation'
                    label='Occupation'
                    type='text'
                    placeholder='Occupation'
                    value={data.occupation ?? ''}
                    onChange={(e) => setData('occupation', e.target.value)}
                    error={errors.occupation}
                />
                <TextInput
                    id='residential_address'
                    name='residential_address'
                    label='Residential Address'
                    type='text'
                    placeholder='Residential Address'
                    value={data.residential_address ?? ''}
                    onChange={(e) =>
                        setData('residential_address', e.target.value)
                    }
                    error={errors.residential_address}
                />
                <TextInput
                    id='contact_phone'
                    name='contact_phone'
                    label='Contact Phone'
                    type='number'
                    placeholder='Contact Phone'
                    value={data.contact_phone}
                    onChange={(e) => setData('contact_phone', e.target.value)}
                    error={errors.contact_phone}
                />
                <TextInput
                    id='whatsapp_number'
                    name='whatsapp_number'
                    label='Whatsapp Number'
                    type='number'
                    placeholder='Whatsapp Number'
                    value={data.whatsapp_number ?? ''}
                    onChange={(e) => setData('whatsapp_number', e.target.value)}
                    error={errors.whatsapp_number}
                />
                <TextInput
                    id='email_address'
                    name='email_address'
                    label='Email Address'
                    type='email'
                    placeholder='Email Address'
                    value={data.email_address ?? ''}
                    onChange={(e) => setData('email_address', e.target.value)}
                    error={errors.email_address}
                />
                <SelectInput
                    id='preferred_contact'
                    name='preferred_contact'
                    label='Preferred Contact'
                    placeholder='Preferred Contact'
                    value={data.preferred_contact}
                    onChange={(e) => setData('preferred_contact', e)}
                    error={errors.preferred_contact}
                    options={[
                        {
                            label: 'Phone',
                            value: 'Phone',
                        },
                        {
                            label: 'Email',
                            value: 'Email',
                        },
                        {
                            label: 'SMS',
                            value: 'SMS',
                        },
                        {
                            label: 'WhatsApp',
                            value: 'WhatsApp',
                        },
                    ]}
                />

                <div className='flex items-center gap-4'>
                    <Button type='submit' disabled={processing}>
                        {isUpdate ? 'Update' : 'Save'}
                    </Button>

                    {recentlySuccessful && (
                        <p className='text-sm text-green-600 dark:text-green-400'>
                            Saved.
                        </p>
                    )}
                </div>
            </form>
        </FormContainer>
    );
};

export default StudentForm;
