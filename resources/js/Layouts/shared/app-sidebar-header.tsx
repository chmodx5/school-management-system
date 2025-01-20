import { SidebarHeader, SidebarMenuButton } from '@/components/ui';
import { APP_NAME } from '@/site-config';
import { usePage } from '@inertiajs/react';
import React from 'react';
interface Props {}

export const AppSidebarHeader: React.FC<Props> = () => {
    const { roles, user } = usePage().props;
    return (
        <SidebarHeader>
            <SidebarMenuButton
                size='lg'
                className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
                <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                    SIS
                </div>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                    <span className='truncate font-semibold'>{APP_NAME}</span>
                    <span className='truncate text-xs'>
                        <span className='font-semibold capitalize'>
                            {user.name}
                        </span>
                        {' ' + '-' + ' '}
                        <span className='capitalize'>{roles && roles[0]}</span>
                    </span>
                </div>
            </SidebarMenuButton>
        </SidebarHeader>
    );
};
