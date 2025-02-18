"use client"

import { usePathname } from "next/navigation";
import { linkBlog, linkContact, linkCourses, linkDevelopment, linkHome, linkMarketing } from "@/app/ui/links";
import Button from "../ui/Button";

interface Props {
    mode?: ModeTheme
}

const links = [
    { href: linkHome, label: "Inicio" },
    { href: linkDevelopment, label: "Desarrollo" },
    { href: linkMarketing, label: "Marketing Digital" },
    { href: linkCourses, label: "Cursos" },
    { href: linkBlog, label: "Blog" },
    { href: linkContact, label: "Contacto" },
]

export default function Menu({ mode = 'normal' }: Props) {
    const pathname = usePathname();

    return (
        <nav className="space-y-1">
            {links.map(({ href, label }) => (
                <Button
                    key={href}
                    isLink={true}
                    href={href}
                    variant="text"
                    mode={mode}
                    size="md"
                >
                    {pathname === href ? <span>&mdash;</span> : label}
                </Button>
            ))}
        </nav>
    )
}