import StudentForm from '@/forms/StudentForm';
import { DashboardLayout } from '@/Layouts/shared/dashboard-layout';

const AddStudentsPage = () => {
    return (
        <DashboardLayout>
            add student page
            <StudentForm />
        </DashboardLayout>
    );
};

export default AddStudentsPage;
