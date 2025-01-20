import StudentForm from '@/forms/StudentForm';
import { DashboardLayout } from '@/Layouts/shared/dashboard-layout';

const UpdateStudentPage = () => {
    return (
        <DashboardLayout>
            <StudentForm isUpdate />
        </DashboardLayout>
    );
};

export default UpdateStudentPage;
