import React from 'react';

import { cn } from '@/lib/utils';

import { Card } from './card';

interface ImageContainerProps {
    src: string;
    alt: string;
    objectFit?: string;
    ratio:
        | 'aspect-1/1'
        | 'aspect-3/2'
        | 'aspect-2/3'
        | 'aspect-4/3'
        | 'aspect-3/4'
        | 'aspect-16/9'
        | 'aspect-9/16';
    className?: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
    src,
    alt,
    objectFit = 'contain',
    ratio = 'aspect-1/1',
    className,
}) => {
    return (
        <Card
            className={cn(
                'aspect relative h-full w-full overflow-hidden border',
                ratio,
                className,
            )}
        >
            <img
                alt={alt}
                src={src}
                className={cn(
                    'absolute h-full w-full',
                    objectFit === 'cover'
                        ? 'object-cover'
                        : objectFit === 'contain'
                          ? 'object-contain'
                          : 'object-contain',
                )}
            />
        </Card>
    );
};

export default ImageContainer;
