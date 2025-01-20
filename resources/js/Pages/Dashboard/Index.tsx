import { DashboardLayout } from '@/Layouts/shared/dashboard-layout';
import { usePage } from '@inertiajs/react';

interface Props {
    children: React.ReactNode;
}

const AppDashboard = ({ children }: Props) => {
    const { user, roles } = usePage().props;

    return (
        <DashboardLayout>
            {children}
            AppDashboard
            {JSON.stringify(user)}
            <br />
            <div>someone</div>
            {JSON.stringify(roles)}
            <div>
                <h1 className='text-2xl font-bold'>wow i am here</h1>
            </div>
        </DashboardLayout>
    );
};

export default AppDashboard;
