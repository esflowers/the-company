import { IconClose, IconMenu } from "../icons";
import Button from "./Button";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isLink?: false;
}

type Props = ButtonProps & {
    mode?: ModeTheme
    isOpen?: boolean
}

export default function ButtonMenu({ mode = 'normal', isOpen = false, ...props }: Props) {
    return (
        <Button variant="text" isIcon={true} mode={mode} className="md:hidden" {...(props as ButtonProps)}>
            {isOpen ? <IconClose size="24" /> : <IconMenu />}
        </Button>
    )
}