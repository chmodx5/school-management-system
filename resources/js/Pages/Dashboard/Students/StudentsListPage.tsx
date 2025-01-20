import { DataTable } from '@/components/data-table';
import { DashboardLayout } from '@/Layouts/shared/dashboard-layout';
import { studentsTableColumns } from '@/tables/StudentsTableColumns';
import { Student } from '@/types';
import { usePage } from '@inertiajs/react';

const StudentsListPage = () => {
    const students: Student[] = usePage().props.students as Student[];
    return (
        <DashboardLayout>
            <DataTable
                pagination
                filters={{
                    placeholder: 'Filter by Reg no',
                    value: 'registration_no',
                }}
                columns={studentsTableColumns}
                data={students || []}
            />
        </DashboardLayout>
    );
};

export default StudentsListPage;
