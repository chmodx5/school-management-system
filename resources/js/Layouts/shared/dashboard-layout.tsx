import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    Separator,
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui';
import { ADMIN_SIDEBAR_ITEMS, TEACHER_SIDEBAR_ITEMS } from '@/site-config';
import { usePage } from '@inertiajs/react';
import React from 'react';
import { Toaster } from 'sonner';
import { AppSidebar } from './app-sidebar';

interface Props {
    children: React.ReactNode;
}

export const DashboardLayout: React.FC<Props> = ({ children }) => {
    const { roles } = usePage().props;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const isAdmin = roles.includes('admin');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const isTeacher = roles.includes('teacher');
    // const pathname = route().current() as string;
    const { url: pathname } = usePage();

    const pathSegments = pathname.split('/').filter(Boolean);
    // Create breadcrumb items based on the path segments
    const generateBreadcrumbs = () => {
        if (pathSegments.length <= 4) {
            return pathSegments.map((segment, index) => (
                <React.Fragment key={segment}>
                    <BreadcrumbItem>
                        {index < pathSegments.length - 1 ? (
                            <BreadcrumbLink
                                href={`/${pathSegments
                                    .slice(0, index + 1)
                                    .join('/')}`}
                            >
                                {segment.charAt(0).toUpperCase() +
                                    segment.slice(1)}
                            </BreadcrumbLink>
                        ) : (
                            <BreadcrumbPage>
                                {segment.charAt(0).toUpperCase() +
                                    segment.slice(1)}
                            </BreadcrumbPage>
                        )}
                    </BreadcrumbItem>
                    {index < pathSegments.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
            ));
        }

        // For more than 3 segments, use ellipsis
        return (
            <>
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/${pathSegments[0]}`}>
                        {pathSegments[0].charAt(0).toUpperCase() +
                            pathSegments[0].slice(1)}
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink
                        href={`/${pathSegments
                            .slice(0, pathSegments.length - 1)
                            .join('/')}`}
                    >
                        {pathSegments[pathSegments.length - 2]
                            .charAt(0)
                            .toUpperCase() +
                            pathSegments[pathSegments.length - 2].slice(1)}
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>
                        {pathSegments[pathSegments.length - 1]
                            .charAt(0)
                            .toUpperCase() +
                            pathSegments[pathSegments.length - 1].slice(1)}
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </>
        );
    };

    return (
        <>
            <SidebarProvider className=''>
                <AppSidebar
                    items={
                        isAdmin
                            ? ADMIN_SIDEBAR_ITEMS
                            : isTeacher
                              ? TEACHER_SIDEBAR_ITEMS
                              : []
                    }
                />
                {/* <SidebarInset> */}
                <SidebarInset className='flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
                    <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
                        <div className='flex items-center gap-2 px-4'>
                            <SidebarTrigger className='-ml-1' />
                            <Separator
                                orientation='vertical'
                                className='mr-2 h-4'
                            />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    {generateBreadcrumbs()}
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </header>
                    <div className='px-4'>{children}</div>
                </SidebarInset>
            </SidebarProvider>
            <Toaster />
        </>
    );
};
