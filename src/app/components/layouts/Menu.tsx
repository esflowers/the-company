import { linkBlog, linkContact, linkCourses, linkDevelopment, linkMarketing } from "@/app/ui/links";
import Button from "../ui/Button";

interface Props {
    mode?: ModeTheme
}

export default function Menu({ mode = 'normal' }: Props) {
    return (
        <nav className="space-y-1">
            {/* <span className="font-bold">&mdash;</span> */}
            <Button isLink={true} href={linkDevelopment} variant="text" mode={mode} size="md">Desarrollo</Button>
            <Button isLink={true} href={linkMarketing} variant="text" mode={mode} size="md">Marketing Digital</Button>
            <Button isLink={true} href={linkCourses} variant="text" mode={mode} size="md">Cursos</Button>
            <Button isLink={true} href={linkBlog} variant="text" mode={mode} size="md">Blog</Button>
            <Button isLink={true} href={linkContact} variant="text" mode={mode} size="md">Contacto</Button>
        </nav>
    )
}