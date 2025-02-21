import Department from "../components/layouts/Department"
import Button from "../components/ui/Button"
import Link from "next/link"
import ItemList from "../components/ui/ItemList"
import { Input } from "../components/ui/Input"
import { companyMail, companyPhone, companyUbication, linkMail, linkPhone, linkMap, textContact } from "../ui/consts"

export default function Contact() {
    return (
        <Department title="Contacto" description={textContact}>
            <main className="mt-6 md:mt-0 space-y-4 lg:space-y-6">
                <div className="h2">Hagamos algo increíble...</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 xl:gap-9">
                    <form action="#" className="space-y-6 lg:space-y-8 md:col-span-2">
                        <Input type="text" placeholder="Nombre" />
                        <Input type="text" placeholder="Nombre de la empresa" />
                        <Input type="email" placeholder="Correo electrónico" />
                        <Input type="text" placeholder="¿Qué quieres construir?" />
                        <Button type="submit" variant="outline" size="xl">Enviar</Button>
                    </form>
                    <div className="flex flex-col sm:flex-col-reverse gap-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.3616703123607!2d-93.01435529999999!3d16.708796500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed25f8c915b02f%3A0xf3f2164437ed018f!2sAl%C3%B3%20Idiomas!5e0!3m2!1sen!2smx!4v1740106660767!5m2!1sen!2smx" width="230" height="180" className="w-full max-w-full" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <ul className="text-primary-400">
                            <ItemList isFirst={true}>
                                <Link href={linkMail} className="w-full text-center md:text-start transition duration-150 group-hover:text-white">{companyMail}</Link>
                            </ItemList>
                            <ItemList className="tracking-wide">
                                <Link href={linkPhone} className="w-full text-center md:text-start transition duration-150 group-hover:text-white">{companyPhone}</Link>
                            </ItemList>
                            <ItemList className="leading-tight">
                                <Link href={linkMap} className="w-full text-center md:text-start transition duration-150 group-hover:text-white">{companyUbication}</Link>
                            </ItemList>
                        </ul>
                    </div>
                </div>
            </main>
        </Department>
    )
}