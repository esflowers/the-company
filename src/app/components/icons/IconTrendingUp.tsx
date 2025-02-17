interface Props {
    size?: string
    stroke?: string
    className?: string
}

export function IconTrendingUp({ size = '18', stroke = '1.6', className }: Props) {
    return (
        <svg  xmlns="http://www.w3.org/2000/svg"  width={size}  height={size}  
            viewBox="0 0 24 24"  fill="none"  
            stroke="currentColor"  strokeWidth={stroke}  strokeLinecap="round"  strokeLinejoin="round"  
            className={className}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 17l6 -6l4 4l8 -8" /><path d="M14 7l7 0l0 7" />
        </svg>
    )
}