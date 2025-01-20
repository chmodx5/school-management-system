import { DashboardLayout } from '@/Layouts/shared/dashboard-layout';
import ParentForm from '@/forms/ParentForm';

const UpdateParentPage = () => {
    return (
        <DashboardLayout>
            <ParentForm isUpdate />
        </DashboardLayout>
    );
};

export default UpdateParentPage;
