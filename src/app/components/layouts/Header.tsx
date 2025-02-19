import Link from "next/link";
import { IconPV, IconSend } from "../icons";
import { linkCompany, linkMail } from "../../ui/consts";
import Button from "../ui/Button";
import ButtonMenu from "../ui/ButtonMenu";

interface Props {
    mode?: ModeTheme
    isOpen: boolean
    setIsOpen: (open: boolean) => void
}

export default function Header({ mode = 'normal', isOpen, setIsOpen }: Props) {
    const modeLogo = {
        normal: 'text-white',
        dev: 'text-dev-100 hover:text-white',
        mark: 'text-mark-100 hover:text-white',
        edu: 'text-edu-100 hover:text-white',
        blog: 'text-primary-700 hover:text-black',
    }

    const modeBg = {
        normal: 'bg-primary-950/90',
        dev: '',
        mark: '',
        edu: '',
        blog: 'bg-white/90',
    }

    return (
        <header className={`w-full h-fit z-50 flex items-center justify-between gap-2 fixed top-0 left-0 md:relative px-6 py-5 sm:px-8 sm:py-6 md:p-0 backdrop-blur ${modeBg[mode]} md:backdrop-blur-none md:bg-transparent`}>
            <Link href={linkCompany} title="Profesionalización Virtual" className={`transition duration-150 ${modeLogo[mode]}`}><IconPV /></Link>

            <div className="flex items-center gap-5">
                <Button variant='text' isLink={true} href={linkMail} mode={mode}>
                    Contactar<IconSend className="hidden md:block transition-transform duration-150 group-hover:-rotate-45" />
                </Button>
                <ButtonMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} mode={mode} />
            </div>
        </header>
    )
}