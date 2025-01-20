'use client';

import { DataTableColumnHeader } from '@/components/data-table-column-header';
import DeleteItemDialog from '@/components/DeleteItemDialog';
import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui';
import { IconButton } from '@/components/ui/icon-button';
import { Parent } from '@/types';
import { router } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { Edit, EyeIcon, MoreVertical, Trash } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface Props {
    parent: Parent;
}

const TableActions: React.FC<Props> = ({ parent }) => {
    const [open, setOpen] = useState(false);
    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <IconButton variant='ghost' size='sm'>
                    <MoreVertical className='h-4 w-4' />
                </IconButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>

                <DropdownMenuItem asChild>
                    <Button
                        fullWidth
                        align='left'
                        variant='ghost'
                        rightIcon={<EyeIcon className='h-4 w-4' />}
                        onClick={() => {
                            router.get(
                                route('parents.detailsPage', {
                                    id: parent.id,
                                }),
                            );
                        }}
                    >
                        view
                    </Button>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Button
                        fullWidth
                        align='left'
                        variant='ghost'
                        rightIcon={<Edit className='h-4 w-4' />}
                        onClick={() => {
                            router.get(
                                route('parents.updatePage', {
                                    id: parent.id,
                                }),
                            );
                        }}
                    >
                        Update
                    </Button>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <>
                        <DeleteItemDialog
                            confirmationText='DELETE'
                            onConfirm={() => {
                                router.delete(
                                    route('parent.delete', parent.id),
                                    {
                                        onSuccess: () => {
                                            toast(
                                                'Parent deleted successfully',
                                            );
                                        },
                                        onError: () => {
                                            toast('Error deleting parent');
                                        },
                                    },
                                );
                                setOpen(!open);
                            }}
                            triggerElement={
                                <Button
                                    fullWidth
                                    align='left'
                                    variant='ghost'
                                    color='destructive'
                                    rightIcon={<Trash className='h-4 w-4' />}
                                >
                                    Delete
                                </Button>
                            }
                        />
                    </>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export const parentsTableColumns: ColumnDef<Parent>[] = [
    {
        accessorKey: 'full_name',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Full Name' />
        ),
    },
    {
        accessorKey: 'occupation',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Occupation' />
        ),
    },
    {
        accessorKey: 'residential_address',
        header: 'Residential Address',
    },
    {
        accessorKey: 'contact_phone',
        header: 'Contact Phone',
    },
    {
        accessorKey: 'whatsapp_number',
        header: 'Whatsapp Number',
    },
    {
        accessorKey: 'email_address',

        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Email Address' />
        ),
    },
    {
        accessorKey: 'preferred_contact',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Preferred Contact' />
        ),
    },
    {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => {
            const parent = row.original;

            return (
                <>
                    <TableActions parent={parent} />{' '}
                </>
            );
        },
    },
];
