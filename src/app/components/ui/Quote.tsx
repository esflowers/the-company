import Link from "next/link"
import { IconArrowLink } from "../icons"

interface Props {
    quote?: string
    author?: string
    link?: string
    textLink?: string
}

export default function Quote({ quote, author, link, textLink }: Props) {
    return (
        <figure className='space-y-2'>
            <blockquote>
                <q className='text-pretty'>{quote}</q>
            </blockquote>
            <figcaption className='text-sm text-primary-400 space-y-1 flex flex-col gap-0.5'>
                {author}
                {link ? <Link href={link} className="flex items-center gap-1.5 transition duration-150 hover:text-white">{textLink}<IconArrowLink size='16' /></Link> : ''}
            </figcaption>
        </figure>
    )
}