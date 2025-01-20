import { cva } from 'class-variance-authority';

const button_radius = 'rounded-md';

export const buttonStyles = {
    base: 'group  inline-flex h-min items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none capitalize transition-all ease-linear duration-200 whitespace-nowrap hover:cursor-pointer',
    color: {
        variant: {
            contained: {
                base: {
                    base: [
                        'text-primary-foreground bg-primary',
                        'dark:text-primary-foreground dark:bg-primary',
                        'hover:bg-primary/80',
                        'focus:ring-2 focus:ring-primary/50',
                        'disabled:opacity-50 disabled:cursor-not-allowed ',
                    ],
                    active: 'bg-primary/80',
                },
                primary: {
                    base: [
                        'text-primary-foreground bg-primary',
                        'dark:text-primary-foreground dark:bg-primary',
                        'hover:bg-primary/80',
                        'focus:ring-2 focus:ring-primary/50',
                        'disabled:opacity-50 disabled:cursor-not-allowed ',
                    ],
                    active: 'bg-primary/80',
                },
                secondary: {
                    base: [
                        'text-secondary-foreground bg-secondary ',
                        'dark:text-secondary-foreground dark:bg-secondary',
                        'hover:bg-secondary/80',
                        'focus:ring-2 focus:ring-secondary/50',
                        'disabled:opacity-50 disabled:cursor-not-allowed ',
                    ],
                    active: 'bg-secondary/80',
                },

                destructive: {
                    base: 'text-destructive-foreground bg-destructive border border-transparent enabled:hover:bg-destructive/80 focus:ring-2 focus:ring-destructive/20',
                    active: 'bg-destructive/80',
                },
                warning: {
                    base: [
                        'text-warning-foreground bg-warning ',
                        'dark:text-warning-foreground dark:bg-warning',
                        'hover:bg-warning/80',
                        'focus:ring-2 focus:ring-warning/50',
                        'disabled:opacity-50 disabled:cursor-not-allowed ',
                    ],
                    active: 'bg-warning/80',
                },
                info: {
                    base: [
                        'text-info-foreground bg-info ',
                        'dark:text-info-foreground dark:bg-info',
                        'hover:bg-info/80',
                        'focus:ring-2 focus:ring-info/50',
                        'disabled:opacity-50 disabled:cursor-not-allowed ',
                    ],
                    active: 'bg-info/80',
                },
                success: {
                    base: [
                        'text-success-foreground bg-success ',
                        'dark:text-success-foreground dark:bg-success',
                        'hover:bg-success/80',
                        'focus:ring-2 focus:ring-success/50',
                        'disabled:opacity-50 disabled:cursor-not-allowed ',
                    ],
                    active: 'bg-success/80',
                },
                accent: {
                    base: [
                        'text-accent-foreground bg-accent ',
                        'dark:text-accent-foreground dark:bg-accent',
                        'hover:bg-accent/80',
                        'focus:ring-2 focus:ring-accent/50',
                        'disabled:opacity-50 disabled:cursor-not-allowed ',
                    ],
                    active: 'bg-accent/80',
                },
                dark: {
                    base: [
                        'text-dark-foreground bg-dark-background ',
                        'dark:text-dark-foreground dark:bg-dark-background',
                        'hover:bg-dark-background/80 hover:text-dark-foreground',
                        'focus:ring-2 focus:ring-dark-background/50',
                        'disabled:opacity-50 disabled:cursor-not-allowed ',
                    ],
                    active: 'bg-accent/80',
                },
                light: {
                    base: [
                        'text-light-foreground bg-light-background ',
                        'light:text-light-foreground light:bg-light-background',
                        'hover:bg-light-background/80 hover:text-foreground',
                        'focus:ring-2 focus:ring-light-background/50',
                        'disabled:opacity-50 disabled:cursor-not-allowed ',
                    ],
                    active: 'bg-accent/80 ',
                },
            },
            outline: {
                base: {
                    base: [
                        'text-inherit border-foreground',
                        'dark:text-inherit',
                        'hover:bg-dark-background/80 hover:text-primary-foreground',
                        'focus:ring-2 focus:ring-dark-background/50',
                        'disabled:opacity-50 disabled:cursor-not-allowed ',
                    ],
                    active: 'bg-primary text-primary-foreground',
                },
                primary: {
                    base: [
                        'text-primary border-primary',
                        'dark:text-primary',
                        'hover:bg-primary hover:text-primary-foreground',
                        'focus:ring-2 focus:ring-primary/70',
                        'disabled:opacity-50 disabled:cursor-not-allowed ',
                    ],
                    active: 'bg-primary text-primary-foreground',
                },
                secondary: {
                    base: [
                        'text-secondary border-secondary',
                        'dark:text-secondary',
                        'hover:bg-secondary hover:text-secondary-foreground',
                        'focus:ring-2 focus:ring-secondary/70',
                        'disabled:opacity-50 disabled:cursor-not-allowed ',
                    ],
                    active: 'bg-secondary text-secondary-foreground',
                },

                warning: {
                    base: [
                        'text-warning border-warning',
                        'dark:text-warning',
                        'hover:bg-warning hover:text-warning-foreground',
                        'focus:ring-2 focus:ring-warning/70',
                        'disabled:opacity-50 disabled:cursor-not-allowed ',
                    ],
                    active: 'bg-warning text-warning-foreground',
                },
                info: {
                    base: [
                        'text-info border-info',
                        'dark:text-info',
                        'hover:bg-info hover:text-info-foreground',
                        'focus:ring-2 focus:ring-info/70',
                        'disabled:opacity-50 disabled:cursor-not-allowed ',
                    ],
                    active: 'bg-info text-info-foreground',
                },
                success: {
                    base: [
                        'text-success border-success',
                        'dark:text-success',
                        'hover:bg-success hover:text-success-foreground',
                        'focus:ring-2 focus:ring-success/70',
                        'disabled:opacity-50 disabled:cursor-not-allowed ',
                    ],
                    active: 'bg-success text-success-foreground',
                },
                destructive: {
                    base: [
                        'text-destructive border-destructive',
                        'dark:text-destructive',
                        'hover:bg-destructive hover:text-destructive-foreground',
                        'focus:ring-2 focus:ring-destructive/70',
                        'disabled:opacity-50 disabled:cursor-not-allowed ',
                    ],
                    active: 'bg-destructive text-destructive-foreground',
                },
                accent: {
                    base: [
                        'text-accent border-accent',
                        'dark:text-accent',
                        'hover:bg-accent hover:text-accent-foreground',
                        'focus:ring-2 focus:ring-accent/70',
                        'disabled:opacity-50 disabled:cursor-not-allowed ',
                    ],
                    active: 'bg-accent text-accent-foreground',
                },
                light: {
                    base: [
                        'text-muted-foreground border-muted-foreground',
                        'dark:text-muted-foreground',
                        'hover:bg-muted hover:text-foreground',
                        'focus:ring-2 focus:ring-primary/70',
                        'disabled:opacity-50 disabled:cursor-not-allowed ',
                    ],
                    active: 'bg-accent text-light-foreground',
                },
                dark: {
                    base: [
                        'text-inherit border-foreground',
                        'dark:text-inherit',
                        'hover:bg-dark-background/80 hover:text-primary-foreground',
                        'focus:ring-2 focus:ring-dark-background/70',
                        'disabled:opacity-50 disabled:cursor-not-allowed ',
                    ],
                    active: 'bg-accent text-accent',
                },
            },
            text: {
                base: {
                    base: [
                        'text-inherit hover:text-primary/80',
                        'dark:text-inherit',
                        'hover:text-inherit',
                        'focus:font-semibold',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'font-semibold',
                },
                primary: {
                    base: [
                        'text-primary ',
                        'dark:text-primary',
                        'hover:text-primary/80',
                        'focus:font-semibold',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'font-semibold',
                },
                secondary: {
                    base: [
                        'text-secondary ',
                        'dark:text-secondary',
                        'hover:text-secondary/80',
                        'focus:font-semibold',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'font-semibold',
                },

                warning: {
                    base: [
                        'text-warning ',
                        'dark:text-warning',
                        'hover:text-warning/80',
                        'focus:font-semibold',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'font-semibold',
                },
                info: {
                    base: [
                        'text-info ',
                        'dark:text-info',
                        'hover:text-info/80',
                        'focus:font-semibold',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'font-semibold',
                },
                success: {
                    base: [
                        'text-success ',
                        'dark:text-success',
                        'hover:text-success/80',
                        'focus:font-semibold',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'font-semibold',
                },
                destructive: {
                    base: [
                        'text-destructive ',
                        'dark:text-destructive',
                        'hover:text-destructive/80',
                        'focus:font-semibold',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'font-semibold',
                },
                accent: {
                    base: [
                        'text-accent ',
                        'dark:text-accent',
                        'hover:text-accent/80',
                        'focus:font-semibold',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'font-semibold',
                },
                dark: {
                    base: [
                        'text-inherit ',
                        'dark:text-inherit',
                        'hover:text-inherit',
                        'focus:font-semibold',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'font-semibold',
                },
                light: {
                    base: [
                        'text-muted-foreground ',
                        'dark:text-muted-foreground',
                        'hover:text-foreground',
                        'focus:font-semibold',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'font-semibold',
                },
            },
            ghost: {
                base: {
                    base: [
                        'text-foreground ',
                        'dark:text-foreground',
                        'hover:bg-muted',
                        'focus:bg-muted',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'bg-muted',
                },
                primary: {
                    base: [
                        'text-primary ',
                        'dark:text-primary',
                        'hover:bg-primary/20',
                        'focus:bg-primary/20 ',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'bg-primary-20',
                },
                secondary: {
                    base: [
                        'text-secondary ',
                        'dark:text-secondary',
                        'hover:bg-secondary/20',
                        'focus:bg-secondary/20 ',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'bg-secondary-20',
                },

                warning: {
                    base: [
                        'text-warning ',
                        'dark:text-warning',
                        'hover:bg-warning/20',
                        'focus:bg-warning/20 ',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'bg-warning-20',
                },
                info: {
                    base: [
                        'text-info ',
                        'dark:text-info',
                        'hover:bg-info/20',
                        'focus:bg-info/20 ',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'bg-info-20',
                },
                success: {
                    base: [
                        'text-success ',
                        'dark:text-success',
                        'hover:bg-success/20',
                        'focus:bg-success/20 ',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'bg-success-20',
                },
                destructive: {
                    base: [
                        'text-destructive ',
                        'dark:text-destructive',
                        'hover:bg-destructive/20 hover:text-destructive',
                        'focus:bg-destructive/20 ',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'bg-destructive-20',
                },
                accent: {
                    base: [
                        'text-accent ',
                        'dark:text-accent',
                        'hover:bg-accent/20',
                        'focus:bg-accent/20 ',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'bg-accent-20',
                },
                dark: {
                    base: [
                        'text-foreground ',
                        'dark:text-foreground',
                        'hover:bg-muted',
                        'focus:bg-muted',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'bg-muted',
                },

                light: {
                    base: [
                        'text-muted-foreground ',
                        'dark:text-muted-foreground',
                        'hover:bg-muted',
                        'focus:bg-muted',
                        'disabled:cursor-not-allowed disabled:text-muted-foreground',
                    ],
                    active: 'bg-muted',
                },
            },
            tonal: {
                base: {
                    base: [
                        'text-foreground bg-muted',
                        'dark:text-foreground',
                        'hover:bg-dark-background hover:text-primary-foreground',
                        'focus:bg-primary focus:text-primary-foreground',
                        'disabled:cursor-not-allowed disabled:opacity/50 ',
                    ],
                    active: 'bg-muted',
                },
                primary: {
                    base: [
                        'text-primary bg-primary/20',
                        'dark:text-primary',
                        'hover:bg-primary hover:text-primary-foreground',
                        'focus:bg-primary focus:text-primary-foreground',
                        'disabled:cursor-not-allowed disabled:opacity/50 ',
                    ],
                    active: 'bg-primary text-primary-foreground',
                },
                secondary: {
                    base: [
                        'text-secondary bg-secondary/20',
                        'dark:text-foreground',
                        'hover:bg-secondary hover:text-secondary-foreground',
                        'focus:bg-secondary focus:text-secondary-foreground',
                        'disabled:cursor-not-allowed disabled:opacity/50 ',
                    ],
                    active: 'bg-secondary',
                },

                warning: {
                    base: [
                        'text-warning bg-warning/20',
                        'dark:text-foreground',
                        'hover:bg-warning hover:text-warning-foreground',
                        'focus:bg-warning focus:text-warning-foreground',
                        'disabled:cursor-not-allowed disabled:opacity/50 ',
                    ],
                    active: 'bg-warning',
                },
                info: {
                    base: [
                        'text-info bg-info/20',
                        'dark:text-foreground',
                        'hover:bg-info hover:text-info-foreground',
                        'focus:bg-info focus:text-info-foreground',
                        'disabled:cursor-not-allowed disabled:opacity/50 ',
                    ],
                    active: 'bg-info',
                },
                success: {
                    base: [
                        'text-success bg-success/20',
                        'dark:text-foreground',
                        'hover:bg-success hover:text-success-foreground',
                        'focus:bg-success focus:text-success-foreground',
                        'disabled:cursor-not-allowed disabled:opacity/50 ',
                    ],
                    active: 'bg-success',
                },
                destructive: {
                    base: [
                        'text-destructive bg-destructive/20',
                        'dark:text-foreground',
                        'hover:bg-destructive hover:text-destructive-foreground',
                        'focus:bg-destructive focus:text-destructive-foreground',
                        'disabled:cursor-not-allowed disabled:opacity/50 ',
                    ],
                    active: 'bg-destructive',
                },
                accent: {
                    base: [
                        'text-accent bg-accent/20',
                        'dark:text-foreground',
                        'hover:bg-accent hover:text-accent-foreground',
                        'focus:bg-accent focus:text-accent-foreground',
                        'disabled:cursor-not-allowed disabled:opacity/50 ',
                    ],
                    active: 'bg-accent',
                },
                dark: {
                    base: [
                        'text-foreground bg-dark-background/20',
                        'dark:text-foreground',
                        'hover:bg-dark-background hover:text-dark-foreground',
                        'focus:bg-primary focus:text-primary-foreground',
                        'disabled:cursor-not-allowed disabled:opacity/50 ',
                    ],
                    active: 'bg-muted',
                },
                light: {
                    base: [
                        'text-muted-foreground bg-muted',
                        'dark:text-foreground',
                        'hover:bg-light-background hover:text-light-foreground',
                        'focus:bg-primary focus:text-primary-foreground',
                        'disabled:cursor-not-allowed disabled:opacity/50 ',
                    ],
                    active: 'bg-muted',
                },
            },
        },
    },
    variant: {
        outline: 'border border-scale-0 2',
        contained: 'border border-transparent  outline-none focus:outline-none',
        text: 'border border-transparent enabled:hover:font-semibold outline-none focus:outline-none',
        ghost: 'border border-transparent outline-none focus:outline-none',
        tonal: 'border border-transparent outline-none focus:outline-none',
    },
    shape: {
        pill: 'rounded-full',
        tile: 'rounded-none',
        base: button_radius,
    },
    size: {
        xs: 'h-6 text-xs px-2',
        sm: 'h-8  px-3 ',
        md: 'h-10 px-4 ',
        lg: 'h-12 px-5 ',
        xl: 'h-14 px-6 ',
    },
    fullWidth: 'w-full',
    align: {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
    },
    iconButton: {
        size: {
            xs: 'text-xs p-1',
            sm: 'text-sm p-1.5',
            md: 'text-base p-2',
            lg: 'text-base p-2.5',
            xl: 'text-base p-3',
        },
    },
    shadowOnHover: 'hover:shadow',
};

export const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                destructive:
                    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline:
                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                secondary:
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);
