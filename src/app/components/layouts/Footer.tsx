import { IconPV } from "../icons"

export default function Footer() {
    return (
        <footer className="w-full h-fit pt-8 pb-6 mb-0 bottom-0 flex flex-wrap items-center justify-between gap-2 text-primary-500">
            <IconPV size="16" />
            
            <p className="font-brand text-sm">Profesionalización Virtual</p>

            <time dateTime="2025" className="text-xs ml-auto">
                <span className="hidden md:inline">2024 - </span>2025<span className="hidden md:inline"> & futuro</span>
            </time>
        </footer>
    )
}