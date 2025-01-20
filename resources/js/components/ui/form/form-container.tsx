import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../card';

interface Props {
    title?: string;
    subTitle?: string;
    children: React.ReactNode;
}

const FormContainer: React.FC<Props> = ({ title, subTitle, children }) => {
    const showCardHeader = title || subTitle;

    return (
        <Card>
            {showCardHeader && (
                <CardHeader className='pb-0'>
                    {title && <CardTitle>{title}</CardTitle>}
                    {subTitle && <CardDescription>{subTitle}</CardDescription>}
                </CardHeader>
            )}
            <CardContent>{children}</CardContent>
        </Card>
    );
};

export default FormContainer;
