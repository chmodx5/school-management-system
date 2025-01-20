import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
    SidebarContent,
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui';
import { usePage } from '@inertiajs/react';
import { ChevronRight, type LucideIcon } from 'lucide-react';

export interface AppSidebarContentProps {
    items: {
        title: string;
        url: string;
        icon?: LucideIcon;
        isActive?: boolean;
        items?: {
            title: string;
            url: string;
        }[];
    }[];
}

export const AppSidebarContent: React.FC<AppSidebarContentProps> = ({
    items,
}) => {
    const { url: currentUrl } = usePage();

    const isActive = (itemUrl: string) => {
        return currentUrl.includes(itemUrl);
    };

    const linkIsActive = (itemUrl: string, parentUrl: string): boolean => {
        if (itemUrl === currentUrl) {
            return true;
        }

        if (currentUrl.startsWith(`${parentUrl}/`) && parentUrl === itemUrl) {
            return false;
        }

        return isActive(itemUrl);
    };

    const hasActiveChild = (subItems?: { url: string }[]) =>
        subItems?.some((subItem) => isActive(subItem.url));

    return (
        <SidebarContent>
            <SidebarGroup>
                {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
                <SidebarMenu>
                    {items.map((item) => {
                        const shouldBeOpen =
                            isActive(item.url) || hasActiveChild(item.items);

                        return (
                            <Collapsible
                                key={item.title}
                                asChild
                                defaultOpen={shouldBeOpen}
                                className='group/collapsible'
                            >
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton tooltip={item.title}>
                                            {item.icon && <item.icon />}
                                            <span>{item.title}</span>
                                            <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {item.items?.map((subItem) => (
                                                <SidebarMenuSubItem
                                                    key={subItem.title}
                                                >
                                                    <SidebarMenuSubButton
                                                        asChild
                                                        isActive={linkIsActive(
                                                            subItem.url,
                                                            item.url,
                                                        )}
                                                    >
                                                        <a href={subItem.url}>
                                                            <span>
                                                                {subItem.title}
                                                            </span>
                                                        </a>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        );
                    })}
                </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>
    );
};
