import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { DashboardLayout } from '@/Layouts/shared/dashboard-layout';
import { Student } from '@/types';
import { usePage } from '@inertiajs/react';

const StudentDetailsPage = () => {
    const student: Student = usePage().props.student as Student;

    return (
        <DashboardLayout>
            <div className='mx-auto max-w-4xl px-4 py-8'>
                <Card className=''>
                    <CardHeader>
                        <CardTitle>Student information Report</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* Student Personal Info */}
                        <div className='mb-8'>
                            <h3 className='mb-2 text-xl font-medium'>
                                Personal Information
                            </h3>
                            <div className='grid grid-cols-2 gap-6'>
                                <div>
                                    <p>
                                        <strong>Full Name:</strong>{' '}
                                        {student.first_name}{' '}
                                        {student.middle_name} {student.surname}
                                    </p>
                                    <p>
                                        <strong>Preferred Name:</strong>{' '}
                                        {student.preferred_name}
                                    </p>
                                    <p>
                                        <strong>Nationality:</strong>{' '}
                                        {student.nationality}
                                    </p>
                                    <p>
                                        <strong>Date of Birth:</strong>{' '}
                                        {student.date_of_birth}
                                    </p>
                                    <p>
                                        <strong>Gender:</strong>{' '}
                                        {student.gender}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <strong>Birth Certificate No:</strong>{' '}
                                        {student.birth_certificate_no}
                                    </p>
                                    <p>
                                        <strong>Passport No:</strong>{' '}
                                        {student.passport_no}
                                    </p>
                                    <p>
                                        <strong>Passport Expiry Date:</strong>{' '}
                                        {student.student_pass_expiry_date}
                                    </p>
                                    <p>
                                        <strong>Student Pass No:</strong>{' '}
                                        {student.student_pass_number}
                                    </p>
                                    <p>
                                        <strong>Age at Admission:</strong>{' '}
                                        {student.age_at_admission}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Academic Info */}
                        <div className='mb-8'>
                            <h3 className='mb-2 text-xl font-medium'>
                                Academic Information
                            </h3>
                            <div className='grid grid-cols-2 gap-6'>
                                <div>
                                    <p>
                                        <strong>Current Status:</strong>{' '}
                                        {student.current_status}
                                    </p>
                                    <p>
                                        <strong>Status Date:</strong>{' '}
                                        {student.status_date}
                                    </p>
                                    <p>
                                        <strong>Anticipated Year Level:</strong>{' '}
                                        {student.anticipated_year_level}
                                    </p>
                                    <p>
                                        <strong>Proposed Entry Date:</strong>{' '}
                                        {student.proposed_entry_date}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <strong>Actual Entry Date:</strong>{' '}
                                        {student.actual_entry_date}
                                    </p>
                                    <p>
                                        <strong>Former School:</strong>{' '}
                                        {student.former_school}
                                    </p>
                                    <p>
                                        <strong>Home Residents:</strong>{' '}
                                        {student.home_residents}
                                    </p>
                                    <p>
                                        <strong>
                                            Primary Language at Home:
                                        </strong>{' '}
                                        {student.primary_language_home}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className='mb-8'>
                            <h3 className='mb-2 text-xl font-medium'>
                                Additional Information
                            </h3>
                            <div className='grid grid-cols-2 gap-6'>
                                <div>
                                    <p>
                                        <strong>
                                            Special Things About the Child:
                                        </strong>{' '}
                                        {student.special_things_about_child}
                                    </p>
                                    <p>
                                        <strong>Medical Conditions:</strong>{' '}
                                        {student.child_medical_conditions}
                                    </p>
                                    <p>
                                        <strong>
                                            Other Children Enrolled:
                                        </strong>{' '}
                                        {student.has_other_children_enrolled
                                            ? 'Yes'
                                            : 'No'}
                                    </p>
                                    <p>
                                        <strong>Referred by Family:</strong>{' '}
                                        {student.referred_by_family
                                            ? 'Yes'
                                            : 'No'}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <strong>Other Children Details:</strong>{' '}
                                        {student.other_children_details}
                                    </p>
                                    <p>
                                        <strong>Referrer Details:</strong>{' '}
                                        {student.referrer_details}
                                    </p>
                                    <p>
                                        <strong>Employer Contribution:</strong>{' '}
                                        {student.employer_contribution
                                            ? 'Yes'
                                            : 'No'}
                                    </p>
                                    <p>
                                        <strong>
                                            Contribution Percentage:
                                        </strong>{' '}
                                        {student.contribution_percentage}%
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Date Info */}
                        <div>
                            <h3 className='mb-2 text-xl font-medium'>
                                Date Information
                            </h3>
                            <div className='grid grid-cols-2 gap-6'>
                                <div>
                                    <p>
                                        <strong>Created At:</strong>{' '}
                                        {new Date(
                                            student.created_at,
                                        ).toLocaleString()}
                                    </p>
                                    <p>
                                        <strong>Updated At:</strong>{' '}
                                        {new Date(
                                            student.updated_at,
                                        ).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default StudentDetailsPage;
