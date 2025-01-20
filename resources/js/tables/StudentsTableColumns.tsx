'use client';

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
import { Student } from '@/types';
import { router } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { Edit, EyeIcon, MoreVertical, Trash } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface Props {
    student: Student;
}

const StudentTableActions: React.FC<Props> = ({ student }) => {
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
                                route('students.detailsPage', {
                                    registration_no: parseInt(
                                        student.registration_no,
                                    ),
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
                                route('students.updatePage', {
                                    id: student.id,
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
                                    route('student.delete', student.id),
                                    {
                                        onSuccess: () => {
                                            toast(
                                                'Student deleted successfully',
                                            );
                                        },
                                        onError: () => {
                                            toast('Error deleting student');
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

export const studentsTableColumns: ColumnDef<Student>[] = [
    {
        accessorKey: 'registration_no',
        header: 'Reg No',
    },
    {
        accessorKey: 'first_name',
        header: 'First Name',
    },
    {
        accessorKey: 'surname',
        header: 'Surname',
    },
    {
        accessorKey: 'nationality',
        header: 'Nationality',
    },
    {
        accessorKey: 'gender',
        header: 'Gender',
    },
    {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => {
            const student = row.original;

            return (
                <>
                    <StudentTableActions student={student} />
                </>
            );
        },
    },
];
