import Link from "next/link";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isLink?: false;
}
  
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    isLink: true;
    href: string;
}

type Props = (ButtonProps | AnchorProps) & {
    isIcon?: boolean
    variant?: 'colorfull' | 'outline' | 'text'
    mode?: 'normal' | 'dev' | 'mark' | 'edu' | 'blog'
    size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function BtnIcon({children, variant = 'colorfull', mode = 'normal', size = 'md', isIcon, isLink, ...props}: Props) {
    const styles = 'w-fit h-fit group flex items-center justify-center gap-2 font-brand font-medium text-center transition duration-150 cursor-pointer'

    const styleConfig = {
        colorfull: {
            base: 'rounded-md hover:opacity-85',
            sizes: {
                sm: "px-2 pt-1.5 pb-1 text-sm",
                md: "px-2.5 pt-1.5 pb-1 text-base",
                lg: "px-3 pt-2 pb-1.5 text-lg",
                xl: "px-3.5 pt-2.5 pb-2 text-xl"
            }
        },
        outline: {
            base: 'rounded-md bg-transparent border',
            sizes: {
                sm: "px-2 pt-1.5 pb-1 text-sm",
                md: "px-2.5 pt-1.5 pb-1 text-base",
                lg: "px-3 pt-2 pb-1.5 text-lg",
                xl: "px-3.5 pt-2.5 pb-2 text-xl"
            }
        },
        text: {
            base: 'bg-transparent p-0 pt-0.5',
            sizes: {
                sm: "text-sm",
                md: "text-base",
                lg: "text-lg",
                xl: "text-xl pt-1"
            }
        }
    }

    const iconStyles = {
        colorfull: {
            base: 'rounded-md hover:opacity-85',
            sizes: {
                sm: "p-1.5",
                md: "p-2",
                lg: "p-2.5",
                xl: "p-3"
            }
        },
        outline: {
            base: 'rounded-md bg-transparent border',
            sizes: {
                sm: "p-1.5",
                md: "p-2",
                lg: "p-2.5",
                xl: "p-3"
            }
        },
        text: {
            base: 'bg-transparent p-0 pt-0.5',
            sizes: {
                sm: "",
                md: "",
                lg: "",
                xl: ""
            }
        }
    }

    const modeStyles = {
        normal: {
            colorfull: 'text-primary-950 bg-white',
            outline: 'border-primary-800 text-primary-300 hover:text-white hover:bg-primary-900',
            text: 'text-primary-300 hover:text-white'
        },
        dev: {
            colorfull: 'text-dev-50 bg-dev-700',
            outline: 'border-dev-800 text-dev-200 hover:text-dev-50 hover:bg-dev-950/40',
            text: 'text-dev-200 hover:text-dev-50'
        },
        mark: {
            colorfull: 'text-mark-50 bg-mark-700',
            outline: 'border-mark-800 text-mark-200 hover:text-mark-50 hover:bg-mark-950/40',
            text: 'text-mark-200 hover:text-mark-50'
        },
        edu: {
            colorfull: 'text-edu-50 bg-edu-700',
            outline: 'border-edu-800 text-edu-200 hover:text-edu-50 hover:bg-edu-950/40',
            text: 'text-edu-200 hover:text-edu-50'
        },
        blog: {
            colorfull: 'text-primary-50 bg-primary-950',
            outline: 'border-primary-300 text-primary-800 hover:text-primary-950 hover:bg-primary-100',
            text: 'text-primary-800 hover:text-primary-950'
        }
    }

    const classes = isIcon 
        ? `${styles} ${iconStyles[variant].sizes[size]} ${iconStyles[variant].base} ${modeStyles[mode]?.[variant]}` 
        : `${styles} ${styleConfig[variant].sizes[size]} ${styleConfig[variant].base} ${modeStyles[mode]?.[variant]}`

    if (isLink) {
        return (
            <Link className={classes} {...(props as AnchorProps)}>{children}</Link>
        )
    }

    return (
        <button className={classes} {...(props as ButtonProps)}>
            {children}
        </button>
    )
}