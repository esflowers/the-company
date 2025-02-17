interface Props {
    size?: string
    stroke?: string
    className?: string
}

export function IconMenu({ size = '24', stroke = '1.6', className }: Props) {
    return (
        <svg  xmlns="http://www.w3.org/2000/svg"  width={size}  height={size}  
            viewBox="0 0 24 24"  fill="none"  
            stroke="currentColor"  strokeWidth={stroke}  strokeLinecap="round"  strokeLinejoin="round"  
            className={className}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 8l16 0" /><path d="M4 16l16 0" />
        </svg>
    )
}