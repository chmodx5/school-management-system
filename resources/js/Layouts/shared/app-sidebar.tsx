import { Sidebar, SidebarRail } from '@/components/ui';
import React from 'react';
import {
    AppSidebarContent,
    AppSidebarContentProps,
} from './app-sidebar-content';
import { AppSidebarFooter } from './app-sidebar-footer';
import { AppSidebarHeader } from './app-sidebar-header';

interface Props {
    items: AppSidebarContentProps['items'];
}

export const AppSidebar: React.FC<Props> = ({ items, ...props }) => {
    return (
        <Sidebar {...props}>
            <AppSidebarHeader />
            <AppSidebarContent items={items} />
            <AppSidebarFooter />
            <SidebarRail />
        </Sidebar>
    );
};
