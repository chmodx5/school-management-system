import { DashboardLayout } from '../shared/dashboard-layout';
import { AdminSidebar } from './admin-sidebar';

interface Props {
    children: React.ReactNode;
}

export const AdminDashboardLayout: React.FC<Props> = ({ children }) => {
    return (
        <DashboardLayout sidebar={<AdminSidebar />}>{children}</DashboardLayout>
    );
};
