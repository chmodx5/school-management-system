import { Button, Input } from '@/components/ui';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import React, { useState } from 'react';

interface DeleteItemDialogProps {
    confirmationText: string; // The text user must type to confirm deletion
    onConfirm: () => void; // Function to call when delete is confirmed
    triggerElement: React.ReactNode; // The element that triggers the dialog
}

const DeleteItemDialog: React.FC<DeleteItemDialogProps> = ({
    confirmationText,
    onConfirm,
    triggerElement,
}) => {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleConfirm = () => {
        if (inputValue === confirmationText) {
            onConfirm();
            setOpen(!open);
            setInputValue(''); // Reset input after confirming
            setError(''); // Clear error
        } else {
            setError('The input does not match the confirmation text.');
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{triggerElement}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        To confirm deletion, please type{' '}
                        <strong>{confirmationText}</strong> below. This action
                        cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <div className='space-y-4'>
                    <Input
                        placeholder={`Type "${confirmationText}" to confirm`}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    {error && <p className='text-sm text-red-500'>{error}</p>}
                </div>
                <DialogFooter>
                    <Button variant='outline' onClick={() => setInputValue('')}>
                        Cancel
                    </Button>
                    <Button
                        variant='contained'
                        color='destructive'
                        onClick={handleConfirm}
                    >
                        Confirm
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteItemDialog;
