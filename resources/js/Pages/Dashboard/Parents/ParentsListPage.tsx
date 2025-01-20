import { DataTable } from '@/components/data-table';
import { DashboardLayout } from '@/Layouts/shared/dashboard-layout';
import { parentsTableColumns } from '@/tables/ParentsTableColumns';
import { Parent } from '@/types';
import { usePage } from '@inertiajs/react';

const ParentsListPage = () => {
    const parents: Parent[] = usePage().props.parents as Parent[];
    return (
        <DashboardLayout>
            <div className='w-full'>
                <DataTable
                    columns={parentsTableColumns}
                    data={parents || []}
                    filters={{
                        placeholder: 'Search parents name',
                        value: 'full_name',
                    }}
                    pagination
                />
            </div>
        </DashboardLayout>
    );
};

export default ParentsListPage;
