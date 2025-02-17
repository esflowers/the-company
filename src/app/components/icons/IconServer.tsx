interface Props {
    size?: string
    stroke?: string
    className?: string
}

export function IconServer({ size = '18', stroke = '1.6', className }: Props) {
    return (
        <svg  xmlns="http://www.w3.org/2000/svg"  width={size}  height={size}  
            viewBox="0 0 24 24"  fill="none"  
            stroke="currentColor"  strokeWidth={stroke}  strokeLinecap="round"  strokeLinejoin="round"  
            className={className}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" />
            <path d="M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
            <path d="M12 20h-6a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h10.5" /><path d="M7 8v.01" />
            <path d="M7 16v.01" />
        </svg>
    )
}