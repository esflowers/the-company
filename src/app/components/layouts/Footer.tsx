import { IconPV } from "../icons"

export default function Footer() {
    return (
        <footer className="flex items-center justify-between gap-2 text-primary-500">
            <IconPV size="16" />
            
            <p className="font-brand text-sm">Profesionalización Virtual</p>

            <time dateTime="2025" className="text-xs ml-auto">
                2024 - 2025 & future
            </time>
        </footer>
    )
}