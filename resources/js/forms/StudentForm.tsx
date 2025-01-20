import { cn } from '@/lib/utils';
import { Student } from '@/types';
import { useForm, usePage } from '@inertiajs/react';
import {
    Button,
    CheckboxInput,
    SelectInput,
    TextAreaInput,
    TextInput,
} from '../components/ui';
import FormContainer from '../components/ui/form/form-container';

interface Props {
    isUpdate?: boolean;
}

const StudentForm: React.FC<Props> = ({ isUpdate = false }) => {
    const student: Student = usePage().props.student as Student;

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
            ? student
            : {
                  registration_no: '',
                  first_name: '',
                  middle_name: '',
                  surname: '',
                  preferred_name: '',
                  nationality: '',
                  date_of_birth: '',
                  gender: '',
                  birth_certificate_no: '',
                  passport_no: '',
                  passport_photo: '',
                  student_pass_number: '',
                  student_pass_expiry_date: '',
                  age_at_admission: '',
                  current_status: '',
                  status_date: '',
                  anticipated_year_level: '',
                  proposed_entry_date: '',
                  actual_entry_date: '',
                  special_things_about_child: '',
                  child_medical_conditions: '',
                  former_school: '',
                  home_residents: '',
                  primary_language_home: '',
                  has_other_children_enrolled: '',
                  other_children_details: '',
                  referred_by_family: '',
                  referrer_details: '',
                  employer_contribution: '',
                  contribution_percentage: '',
              },
    );

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isUpdate) {
            patch('/update-student');
        } else {
            post('/add-student');
        }
    };

    // const isUpdate = false

    return (
        <FormContainer title='Add Student'>
            <form onSubmit={submit} className='mt-6 space-y-6'>
                <TextInput
                    id='registration_no'
                    name='registration_no'
                    label='Registration Number'
                    type='number'
                    placeholder='Enter Registration Number'
                    value={data.registration_no}
                    onChange={(e) => setData('registration_no', e.target.value)}
                    error={errors.registration_no}
                />
                <div className='lg:grid-cols grid grid-cols-1 gap-6 md:grid-cols-2'>
                    {/* First Name Field */}
                    <TextInput
                        id='first_name'
                        name='first_name'
                        label='First Name'
                        placeholder='Enter First Name'
                        value={data.first_name}
                        onChange={(e) => setData('first_name', e.target.value)}
                        error={errors.first_name}
                    />

                    {/*Middle Name Field */}
                    <TextInput
                        id='middle_name'
                        name='middle_name'
                        label='Middle Name'
                        placeholder='Enter Middle Name'
                        value={data.middle_name}
                        onChange={(e) => setData('middle_name', e.target.value)}
                        error={errors.middle_name}
                    />

                    {/* Surname Field */}
                    <TextInput
                        id='surname'
                        name='surname'
                        label='Surname'
                        placeholder='Enter Surname'
                        value={data.surname}
                        onChange={(e) => setData('surname', e.target.value)}
                        error={errors.surname}
                    />

                    {/* Preffered Name Field */}
                    <TextInput
                        id='preferred_name'
                        name='preferred_name'
                        label='Preffered Name'
                        placeholder='Enter Preffered Name'
                        value={data.preferred_name}
                        onChange={(e) =>
                            setData('preferred_name', e.target.value)
                        }
                        error={errors.preferred_name}
                    />

                    {/* Nationality Field */}
                    <TextInput
                        id='nationality'
                        name='nationality'
                        label='Nationality'
                        placeholder='Enter Nationality'
                        value={data.nationality}
                        onChange={(e) => setData('nationality', e.target.value)}
                        error={errors.nationality}
                    />

                    {/* Date of Birth Field */}
                    <TextInput
                        id='date_of_birth'
                        name='date_of_birth'
                        label='Date of Birth'
                        type='date'
                        placeholder='Enter Date of Birth'
                        value={data.date_of_birth}
                        onChange={(e) =>
                            setData('date_of_birth', e.target.value)
                        }
                        error={errors.date_of_birth}
                    />

                    {/* Gender Field */}
                    <SelectInput
                        id='gender'
                        name='gender'
                        label='Gender'
                        placeholder='Enter Gender'
                        value={data.gender}
                        onChange={(e) => setData('gender', e)}
                        error={errors.nationality}
                        options={[
                            {
                                label: 'Male',
                                value: 'Male',
                            },
                            {
                                label: 'Female',
                                value: 'Female',
                            },
                        ]}
                    />

                    {/* Birth Certificate No Field */}
                    <TextInput
                        id='birth_certificate_no'
                        name='birth_certificate_no'
                        label='Birth Certificate No'
                        placeholder='Enter Birth Certificate No'
                        value={data.birth_certificate_no}
                        onChange={(e) =>
                            setData('birth_certificate_no', e.target.value)
                        }
                        error={errors.birth_certificate_no}
                    />

                    {/* Passport No Field */}
                    <TextInput
                        id='passport_no'
                        name='passport_no'
                        label='Passport No'
                        type='number'
                        placeholder='Enter Passport No'
                        value={data.passport_no}
                        onChange={(e) => setData('passport_no', e.target.value)}
                        error={errors.passport_no}
                    />

                    {/* Passport Photo Field */}
                    <TextInput
                        id='passport_photo'
                        name='passport_photo'
                        label='Passport Photo'
                        placeholder='Enter Passport Photo'
                        value={data.passport_photo}
                        onChange={(e) =>
                            setData('passport_photo', e.target.value)
                        }
                        error={errors.passport_photo}
                    />

                    {/* Pass Number Field */}
                    <TextInput
                        id='student_pass_number'
                        name='student_pass_number'
                        label='Pass Number'
                        placeholder='Enter Pass Number'
                        value={data.student_pass_number}
                        onChange={(e) =>
                            setData('student_pass_number', e.target.value)
                        }
                        error={errors.student_pass_number}
                    />

                    {/* Pass expiry date Field */}
                    <TextInput
                        id='student_pass_expiry_date'
                        name='student_pass_expiry_date'
                        type='date'
                        label='Pass expiry date'
                        placeholder='Enter Pass expiry date'
                        value={data.student_pass_expiry_date}
                        onChange={(e) =>
                            setData('student_pass_expiry_date', e.target.value)
                        }
                        error={errors.student_pass_expiry_date}
                    />

                    {/* Nationality Field */}
                    <TextInput
                        id='nationality'
                        name='nationality'
                        label='Nationality'
                        placeholder='Enter Nationality'
                        value={data.nationality}
                        onChange={(e) => setData('nationality', e.target.value)}
                        error={errors.nationality}
                    />

                    {/* Age at admission Field */}
                    <TextInput
                        id='age_at_admission'
                        name='age_at_admission'
                        label='Age at admission'
                        placeholder='Enter Age at admission'
                        type='number'
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        value={data.age_at_admission}
                        onChange={(e) =>
                            setData('age_at_admission', e.target.value)
                        }
                        error={errors.age_at_admission}
                    />

                    {/* Current Status Field */}
                    <TextInput
                        id='current_status'
                        name='current_status'
                        label='Current Status'
                        placeholder='Enter Current Status'
                        value={data.current_status}
                        onChange={(e) =>
                            setData('current_status', e.target.value)
                        }
                        error={errors.current_status}
                    />

                    {/* Status Date Field */}
                    <TextInput
                        id='status_date'
                        name='status_date'
                        label='Status Date'
                        type='date'
                        placeholder='Enter Status Date'
                        value={data.status_date}
                        onChange={(e) => setData('status_date', e.target.value)}
                        error={errors.status_date}
                    />

                    {/* Anticipated year level Field */}
                    <TextInput
                        id='anticipated_year_level'
                        name='anticipated_year_level'
                        label='Anticipated year level'
                        placeholder='Enter Anticipated year level'
                        value={data.anticipated_year_level}
                        onChange={(e) =>
                            setData('anticipated_year_level', e.target.value)
                        }
                        error={errors.anticipated_year_level}
                    />

                    {/* Proposed Entry Date Field */}
                    <TextInput
                        id='proposed_entry_date'
                        name='proposed_entry_date'
                        label='Proposed Entry Date'
                        type='date'
                        placeholder='Enter Proposed Entry Date'
                        value={data.proposed_entry_date}
                        onChange={(e) =>
                            setData('proposed_entry_date', e.target.value)
                        }
                        error={errors.proposed_entry_date}
                    />

                    {/* Actual Entry Date Field */}
                    <TextInput
                        id='actual_entry_date'
                        name='actual_entry_date'
                        label='Actual Entry Date'
                        type='date'
                        placeholder='Enter Actual Entry Date'
                        value={data.actual_entry_date}
                        onChange={(e) =>
                            setData('actual_entry_date', e.target.value)
                        }
                        error={errors.actual_entry_date}
                    />

                    {/* Special things about the child Field */}
                    <TextAreaInput
                        id='special_things_about_child'
                        name='special_things_about_child'
                        label='Special things about the child'
                        placeholder='Enter Special things about the child'
                        value={data.special_things_about_child}
                        onChange={(e) =>
                            setData(
                                'special_things_about_child',
                                e.target.value,
                            )
                        }
                        error={errors.special_things_about_child}
                    />

                    {/* Child Medical Conditions Field */}
                    <TextAreaInput
                        id='child_medical_conditions'
                        name='child_medical_conditions'
                        label='Child Medical Conditions'
                        placeholder='Enter Child Medical Conditions'
                        value={data.child_medical_conditions}
                        onChange={(e) =>
                            setData('child_medical_conditions', e.target.value)
                        }
                        error={errors.child_medical_conditions}
                    />

                    {/* Former School Field */}
                    <TextInput
                        id='former_school'
                        name='former_school'
                        label='Former School'
                        placeholder='Enter Former School'
                        value={data.former_school}
                        onChange={(e) =>
                            setData('former_school', e.target.value)
                        }
                        error={errors.former_school}
                    />

                    {/* Home residence Field */}
                    <TextInput
                        id='home_residents'
                        name='home_residents'
                        label='Home residence'
                        placeholder='Enter Home residence'
                        value={data.home_residents}
                        onChange={(e) =>
                            setData('home_residents', e.target.value)
                        }
                        error={errors.home_residents}
                    />

                    {/* Primary Home Language Field */}
                    <TextInput
                        id='primary_language_home'
                        name='primary_language_home'
                        label='Primary Home Language'
                        placeholder='Enter Primary Home Language'
                        value={data.primary_language_home}
                        onChange={(e) =>
                            setData('primary_language_home', e.target.value)
                        }
                        error={errors.primary_language_home}
                    />
                </div>

                {/* other children erolled and details fields */}
                <div className='space-y-6'>
                    <div
                        className={cn(
                            'w-full',
                            !data.has_other_children_enrolled && 'md:w-full',
                        )}
                    >
                        {/* Has other children enrolled Field */}
                        <CheckboxInput
                            id='has_other_children_enrolled'
                            name='has_other_children_enrolled'
                            label='Other children Enrolled'
                            placeholder='Enter Other children Enrolled'
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-expect-error
                            value={data.has_other_children_enrolled}
                            onChange={(e) =>
                                setData('has_other_children_enrolled', e)
                            }
                            error={errors.has_other_children_enrolled}
                        />
                    </div>
                    {data.has_other_children_enrolled && (
                        <div className='w-full'>
                            {/* Other Childrens Details Field */}
                            <TextAreaInput
                                id='other_children_details'
                                name='other_children_details'
                                label='Other Childrens Details'
                                placeholder='Enter Other Childrens Details'
                                value={data.other_children_details}
                                onChange={(e) =>
                                    setData(
                                        'other_children_details',
                                        e.target.value,
                                    )
                                }
                                error={errors.other_children_details}
                            />
                        </div>
                    )}
                </div>

                {/* reffered by family and details fields */}
                <div className='space-y-6'>
                    <div
                        className={cn(
                            'w-full',
                            !data.referred_by_family && 'md:w-full',
                        )}
                    >
                        {/* Was reffered by family Field */}
                        <CheckboxInput
                            id='referred_by_family'
                            name='referred_by_family'
                            label='Did a current enrooled family member refer you to CCIS'
                            placeholder='Did a current enrooled family member refer you to CCIS'
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-expect-error
                            value={data.referred_by_family}
                            onChange={(value) =>
                                setData('referred_by_family', value)
                            }
                            error={errors.referred_by_family}
                        />
                    </div>
                    {data.referred_by_family && (
                        <div className='w-full'>
                            {/* Referrer Details Field */}
                            <TextAreaInput
                                id='referrer_details'
                                name='referrer_details'
                                label='Referrer Details'
                                placeholder='Referrer Details'
                                value={data.referrer_details}
                                onChange={(e) =>
                                    setData('referrer_details', e.target.value)
                                }
                                error={errors.referrer_details}
                            />
                        </div>
                    )}
                </div>

                {/* Employer contribution and details fields */}
                <div className='space-y-6'>
                    {/* Employer Contribution Field */}
                    <div
                        className={cn(
                            'w-full',
                            !data.employer_contribution && 'md:w-full',
                        )}
                    >
                        <CheckboxInput
                            id='employer_contribution'
                            name='employer_contribution'
                            label='Employer Contribution'
                            placeholder='Employer Contribution'
                            type='number'
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-expect-error
                            value={data.employer_contribution}
                            onChange={(value) =>
                                setData('employer_contribution', value)
                            }
                            error={errors.employer_contribution}
                        />
                    </div>

                    {/* Contribution Percentage Field */}
                    {data.employer_contribution && (
                        <div className='w-full'>
                            <TextInput
                                id='contribution_percentage'
                                name='contribution_percentage'
                                label='Contribution Percentage'
                                placeholder='Contribution Percentage'
                                type='number'
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-expect-error
                                value={data.contribution_percentage}
                                onChange={(e) =>
                                    setData(
                                        'contribution_percentage',
                                        e.target.value,
                                    )
                                }
                                error={errors.contribution_percentage}
                            />
                        </div>
                    )}
                </div>

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
