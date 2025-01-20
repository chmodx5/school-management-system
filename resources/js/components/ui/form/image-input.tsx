import { CloudUpload, X } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

import { Card, CardDescription, CardTitle } from '../card';
import { FormDescription, FormLabel } from '../form';
import { IconButton } from '../icon-button/icon-button';
import ImageContainer from '../image-container';

interface Props {
    label: string;
    description?: string;
    error?: string;
    name: string;
    onChange: (file: File | string | null) => void;
}

export const ImageInput: React.FC<Props> = ({
    label,
    description,
    error,
    name,
    onChange,
}) => {
    const [image, setImage] = React.useState<string | null>(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [_error, set_error] = React.useState<string | null>('');

    React.useEffect(() => {
        if (error) {
            set_error(error);
        }
    }, [error]);

    const validateImage = (file: File): string | File => {
        const maxSizeInMB = 10;
        const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

        if (!file.type.startsWith('image/')) {
            return 'The selected file is not an image.';
        }

        if (file.size > maxSizeInBytes) {
            return `The file size exceeds the ${maxSizeInMB}MB limit.`;
        }

        return file;
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) processFile(file);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault(); // Prevent default to allow drop
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        processFile(file);
    };

    const processFile = (file: File) => {
        if (file) {
            const checkImage = validateImage(file);
            if (typeof checkImage === 'string') {
                set_error(checkImage);
                onChange(checkImage);
            } else {
                // process the file for display
                const reader = new FileReader();
                reader.onloadend = () => {
                    // Convert file to base64 string for display
                    setImage(reader.result as string);
                };
                reader.readAsDataURL(file);

                onChange(file);
                set_error('');
            }
        } else {
            onChange('Please provide an image');
        }
    };

    return (
        <div className='flex flex-col'>
            <FormLabel label={label} hasError={Boolean(error)} />

            <Card
                className={cn(
                    'mt-3 inline-flex aspect-square w-36 items-center justify-center overflow-hidden border border-dashed bg-background',
                    isDragging ? 'bg-muted-foreground' : '',
                )}
            >
                <input
                    type='file'
                    accept='image/*'
                    className='hidden'
                    id={name}
                    onChange={handleImageChange}
                />
                <label htmlFor={name} className='h-full w-full'>
                    <div
                        className='flex h-full w-full items-center justify-center'
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        {image ? (
                            <>
                                {isDragging ? (
                                    <CloudUpload
                                        className={cn(
                                            isDragging ? 'text-primary' : '',
                                        )}
                                    />
                                ) : (
                                    <ImageContainer
                                        src={image}
                                        alt='image to be uploaded'
                                        ratio='aspect-1/1'
                                    />
                                )}
                            </>
                        ) : (
                            <CloudUpload
                                className={cn(isDragging ? 'text-primary' : '')}
                            />
                        )}
                    </div>
                </label>
            </Card>

            <FormDescription error={_error || ''} description={description} />
        </div>
    );
};

interface NewImageInputProps {
    label: string;
    description?: string;
    error?: string;
    name: string;
    onChange: (file: File[]) => void;
    previewImages?: File[];
    multiple?: boolean;
    aspect?: 'square' | 'video';
    imageContainerClasses?: string;
    onDeleteImage?: (file: File) => void;
    onImageClick?: (file: File) => void;
}

export const NewImageInput: React.FC<NewImageInputProps> = ({
    label,
    description,
    error,
    name,
    onChange,
    multiple = false,
    previewImages,
    aspect = 'square',
    imageContainerClasses,
    onDeleteImage,
    // onImageClick,
}) => {
    const [isDragging, setIsDragging] = React.useState(false);
    const [previewImageUrls, setPreviewImageUrls] = React.useState<string[]>(
        [],
    );

    React.useEffect(() => {
        let imageURLS: string[];

        if (previewImages && previewImages.length > 0) {
            const _imgurls = previewImages.map((file) =>
                URL.createObjectURL(file),
            );
            imageURLS = _imgurls;
        } else {
            imageURLS = [];
        }

        setPreviewImageUrls(imageURLS);
    }, [previewImages]);

    const handleImageChange = (images: File[]) => {
        onChange(images);
    };

    const EmptyContainer = () => {
        return (
            <div className='text-center'>
                <CloudUpload
                    className={cn('mx-auto', isDragging ? 'text-primary' : '')}
                />
                <div className='px-2'>
                    <CardTitle className='mt-2 text-sm'>
                        Drop or select files
                    </CardTitle>
                    <CardDescription className='mt-2 text-xs'>
                        Drop files here or click to select
                    </CardDescription>
                </div>
            </div>
        );
    };
    return (
        <div className='flex flex-col'>
            <FormLabel label={label} hasError={Boolean(error)} />

            <Card
                className={cn(
                    'mt-3 inline-flex w-36 items-center justify-center overflow-hidden border border-dashed bg-background',
                    imageContainerClasses,
                    aspect === 'square' ? 'aspect-square' : 'aspect-video',
                    isDragging ? 'bg-muted-foreground' : '',
                )}
            >
                <input
                    type='file'
                    accept='image/*'
                    className='hidden'
                    id={name}
                    onChange={(e) => {
                        if (e.target.files)
                            handleImageChange(Array.from(e.target.files));
                    }}
                    multiple={multiple}
                />
                <label htmlFor={name} className='h-full w-full'>
                    <div
                        className='flex h-full w-full items-center justify-center'
                        onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
                            e.preventDefault(); // Prevent default to allow drop
                            setIsDragging(true);
                        }}
                        onDragLeave={() => {
                            setIsDragging(false);
                        }}
                        onDrop={(e) => {
                            e.preventDefault();
                            setIsDragging(false);
                            if (e.dataTransfer.files)
                                handleImageChange(
                                    Array.from(e.dataTransfer.files),
                                );
                        }}
                    >
                        {!multiple && previewImageUrls.length == 1 ? (
                            <div className='h-44 w-full'>
                                {isDragging ? (
                                    <EmptyContainer />
                                ) : (
                                    <ImageContainer
                                        src={previewImageUrls[0]}
                                        alt='image to be uploaded'
                                        ratio='aspect-1/1'
                                    />
                                )}
                            </div>
                        ) : (
                            <EmptyContainer />
                        )}
                    </div>
                </label>
            </Card>

            <FormDescription description={description} error={error} />

            {/* here we display the grid of multiple images  */}
            {previewImageUrls.length > 0 && (
                <div className='mt-2 grid grid-cols-12 gap-2'>
                    {previewImageUrls.map((url, index) => (
                        <div
                            className='relative col-span-4 aspect-square'
                            key={index}
                        >
                            <ImageContainer
                                src={url}
                                alt='image to be uploaded'
                                ratio='aspect-1/1'
                            />
                            <IconButton
                                type='button'
                                size='xs'
                                color='destructive'
                                variant='outline'
                                className='absolute right-2 top-2'
                                onClick={() => {
                                    if (
                                        onDeleteImage &&
                                        previewImages &&
                                        previewImages.length > 0
                                    ) {
                                        onDeleteImage(previewImages[index]);
                                    }
                                }}
                            >
                                <X className='h-3 w-3' />
                            </IconButton>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
