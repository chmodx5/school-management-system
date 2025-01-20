interface Props {
    error?: string;
    description?: string;
}

export const FormDescription: React.FC<Props> = ({ error, description }) => {
    const hasError = Boolean(error);
    return (
        <>
            {hasError ? (
                <p className='text-sm text-destructive'>{error}</p>
            ) : description ? (
                <p className='text-sm text-gray-500'>{description}</p>
            ) : null}
        </>
    );
};
