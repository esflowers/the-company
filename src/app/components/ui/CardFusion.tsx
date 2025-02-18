import { ReactNode } from "react"

interface Props {
    children: ReactNode
    className?: string
}

export default function CardFusion({ children, className }: Props) {
    return (
        <div className={`w-full aspect-video select-none p-5 fusion rounded-xl font-brand text-center text-pretty text-white flex items-center justify-center gap-1 ${className}`}>
            {children}
        </div>
    )
}