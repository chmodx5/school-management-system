import { AppSidebarContentProps } from './Layouts/shared';

export const APP_NAME = 'School Management System';

const BASE_URL = '/dashboard';
const TEACHERS_BASE_URL = `${BASE_URL}/teachers`;
const STUDENTS_BASE_URL = `${BASE_URL}/students`;
const PARENTS_BASE_URL = `${BASE_URL}/parents`;

export const ADMIN_SIDEBAR_ITEMS: AppSidebarContentProps['items'] = [
    {
        title: 'Students',
        url: STUDENTS_BASE_URL,
        items: [
            {
                title: 'Home',
                url: STUDENTS_BASE_URL,
            },
            {
                title: 'Admit student',
                url: `${STUDENTS_BASE_URL}/add-student`,
            },
            {
                title: 'Students list',
                url: `${STUDENTS_BASE_URL}/students-list`,
            },
        ],
    },
    {
        title: 'Parents',
        url: PARENTS_BASE_URL,
        items: [
            {
                title: 'Add new parent',
                url: `${PARENTS_BASE_URL}/add-parent`,
            },
            {
                title: 'Parents list',
                url: `${PARENTS_BASE_URL}/parents-list`,
            },
        ],
    },
    {
        title: 'Teachers',
        url: TEACHERS_BASE_URL,
        items: [
            {
                title: 'Add Teacher',
                url: `${TEACHERS_BASE_URL}/add-teacher`,
            },
            {
                title: 'Teachers list',
                url: `${TEACHERS_BASE_URL}/teachers-list`,
            },
        ],
    },
    {
        title: 'Support Staff',
        url: `${BASE_URL}/staff`,
        items: [
            {
                title: 'Admit staff',
                url: `${BASE_URL}/staff/add-staff`,
            },
            {
                title: 'Staff list',
                url: `${BASE_URL}/staff/staff-list`,
            },
        ],
    },
];

export const TEACHER_SIDEBAR_ITEMS: AppSidebarContentProps['items'] = [
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
];
