import { ReactNode } from "react"

interface Props {
    children: ReactNode
    className?: string
    theme?: 'dark' | 'light'
    isFirst?: boolean
}

export default function ItemList({ children, className, theme = 'dark', isFirst = false }: Props) {
    const paddingY = isFirst ? 'pb-2.5' : 'py-2.5'

    const borderTheme = {
        dark: 'border-primary-800',
        light: 'border-primary-300'
    }

    return (
        <li className={`w-full ${paddingY} group border-b ${borderTheme[theme]} flex items-center justify-between gap-3 text-pretty leading-none ${className}`}>
            {children}
        </li>
    )
}