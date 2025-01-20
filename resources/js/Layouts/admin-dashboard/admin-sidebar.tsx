import {
    AppSidebar,
    AppSidebarContent,
    AppSidebarFooter,
    AppSidebarHeader,
} from '../shared';

export const AdminSidebar = () => {
    return (
        <AppSidebar>
            <AppSidebarHeader />
            <AppSidebarContent
                items={[
                    {
                        title: 'Students',
                        url: '/students',
                        items: [
                            {
                                title: 'Admit student',
                                url: '/add-student',
                            },
                            {
                                title: 'Students list',
                                url: '/add-student',
                            },
                        ],
                    },
                    {
                        title: 'Parents',
                        url: '/parents',
                        items: [
                            {
                                title: 'Add new parent',
                                url: '/add-parent',
                            },
                            {
                                title: 'parents list',
                                url: '/add-staff',
                            },
                        ],
                    },
                    {
                        title: 'Staff',
                        url: '/staff',
                        items: [
                            {
                                title: 'Admit staff',
                                url: '/add-staff',
                            },
                            {
                                title: 'Staff list',
                                url: '/add-staff',
                            },
                        ],
                    },
                ]}
            />
            <AppSidebarFooter />
        </AppSidebar>
    );
};
