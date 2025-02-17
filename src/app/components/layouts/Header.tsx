import Link from "next/link";
import { IconPV, IconSend } from "../icons";
import { linkCompany, linkMail } from "../../ui/links";
import Button from "../ui/Button";

interface Props {
    mode?: ModeTheme
}

export default function Header({ mode = 'normal' }: Props) {
    const modeLogo = {
        normal: 'text-white',
        dev: 'text-dev-100 hover:text-white',
        mark: 'text-mark-100 hover:text-white',
        edu: 'text-edu-100 hover:text-white',
        blog: 'text-primary-700 hover:text-black',
    }

    return (
        <header className="w-full h-fit flex items-center justify-between gap-2 fixed top-0 left-0 md:relative px-6 py-4 sm:px-8 sm:py-5 md:p-0 backdrop-blur bg-primary-950/40 md:backdrop-blur-none md:bg-transparent">
            <Link href={linkCompany} title="Profesionalización Virtual" className={`transition duration-150 ${modeLogo[mode]}`}><IconPV /></Link>

            <Button variant='text' isLink={true} href={linkMail} mode={mode}>
                Contactar<IconSend className="transition-transform duration-150 group-hover:-rotate-45" />
            </Button>
        </header>
    )
}