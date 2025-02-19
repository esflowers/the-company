"use client"

import { usePathname } from "next/navigation";
import { linkBlog, linkContact, linkCourses, linkDevelopment, linkHome, linkMarketing } from "@/app/ui/consts";
import Button from "../ui/Button";

interface Props {
    mode?: ModeTheme
    isOpen?: boolean
}

const links = [
    { href: linkHome, label: "Inicio" },
    { href: linkDevelopment, label: "Desarrollo" },
    { href: linkMarketing, label: "Marketing Digital" },
    { href: linkCourses, label: "Cursos" },
    { href: linkBlog, label: "Blog" },
    { href: linkContact, label: "Contacto" },
]

export default function Menu({ mode = 'normal', isOpen = false }: Props) {
    const pathname = usePathname()
    const visibility = isOpen ? 'translate-x-0' : 'translate-x-full'

    const modeBg = {
        normal: 'bg-primary-950',
        dev: 'bg-dev-700',
        mark: 'bg-mark-700',
        edu: 'bg-edu-700',
        blog: 'bg-white',
    }

    return (
        <nav className={`w-dvw h-dvh fixed bottom-0 left-0 z-40 pt-20 px-6 sm:px-8 flex flex-col items-end gap-2 ${modeBg[mode]} md:size-fit md:relative md:z-10 md:p-0 md:items-start md:gap-1 md:bg-transparent transition-transform duration-200 ${visibility} md:translate-x-0`}>
            {links.map(({ href, label }) => (
                <Button
                    key={href}
                    isLink={true}
                    href={href}
                    variant="text"
                    mode={mode}
                    size="md">
                    {pathname === href ? <span>&mdash;</span> : label}
                </Button>
            ))}
        </nav>
    )
}