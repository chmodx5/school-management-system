import { ChevronsUpDown, LogOut, User } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    SidebarFooter,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';
import { Link, usePage } from '@inertiajs/react';

export const AppSidebarFooter = () => {
    const { isMobile } = useSidebar();
    const user = usePage().props.auth.user;

    return (
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton
                                size='lg'
                                className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
                            >
                                <Avatar className='h-8 w-8 rounded-lg'>
                                    <AvatarImage
                                        src={user.name}
                                        alt={user.name}
                                    />
                                    <AvatarFallback className='rounded-lg uppercase'>
                                        {user.name.slice(0, 2)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className='grid flex-1 text-left text-sm leading-tight'>
                                    <span className='truncate font-semibold'>
                                        {user.name}
                                    </span>
                                    <span className='truncate text-xs'>
                                        {user.email}
                                    </span>
                                </div>
                                <ChevronsUpDown className='ml-auto size-4' />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
                            side={isMobile ? 'bottom' : 'right'}
                            align='end'
                            sideOffset={4}
                        >
                            <DropdownMenuSeparator />

                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem asChild>
                                    <Link
                                        href={route('profile.edit')}
                                        method='get'
                                    >
                                        <User />
                                        Profile
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href={route('logout')} method='post'>
                                    <LogOut />
                                    Log out
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    );
};
