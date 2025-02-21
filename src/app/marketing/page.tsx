import Department from "../components/layouts/Department"
import Link from "next/link"
import Button from "../components/ui/Button"
import ItemList from "../components/ui/ItemList"
import SectionContact from "../components/ui/SectionContact"
import { textMarketing, linkContact, linkMail } from "../ui/consts"
import { IconArrowLink, IconPV, IconSend } from "../components/icons"

export default function Marketing() {
  return (
    <Department mode="mark" title="Marketing Digital" description={textMarketing}>
      <main className="mt-6 md:mt-0 space-y-12 xl:space-y-14">
        <div className="space-y-4 lg:space-y-6">
          <h2 className="h2">Proyectos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-8">
            <div className="w-full aspect-video relative p-4 rounded-xl text-pretty text-primary-800 bg-white flex items-end justify-between gap-3">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"><IconPV size="40" /></div>
              <Link href={linkContact} className="font-light text-2xl lg:text-3xl space-y-1 transition duration-150 hover:text-black">
                Profesionalización Virtual
                <p className="text-sm">Branding</p>
              </Link>
              <Button isLink={true} isIcon={true} href="#" variant="text" size="lg">
                <IconArrowLink size="20" className="text-primary-800 transition duration-150 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
            <div className="w-full aspect-video p-4 rounded-xl text-pretty text-primary-300 bg-transparent border border-dashed border-primary-300 flex items-end justify-between gap-3">
              <Link href={linkContact} className="font-light text-2xl lg:text-3xl space-y-1 transition duration-150 hover:text-white">
                ¿Necesitas posicionamiento?
                <p className="text-sm">Nosotros lo conseguimos.</p>
              </Link>
              <Button isLink={true} isIcon={true} href={linkMail} variant="text" size="lg">
                <IconSend size="20" className="transition duration-150 group-hover:text-white group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 xl:gap-9">
          <div className="space-y-3">
            <h3 className="font-medium text-xl">Creamos</h3>
            <ul className="text-primary-300">
              <ItemList isFirst={true} className="leading-tight" theme="light">
                Branding
              </ItemList>
              <ItemList className="leading-tight" theme="light">
                Identidad de marca: visual y verbal
              </ItemList>
              <ItemList className="leading-tight" theme="light">
                Publicidad digital
              </ItemList>
              <ItemList className="leading-tight" theme="light">
                Redes sociales
              </ItemList>
              <ItemList className="leading-tight" theme="light">
                Analítica & optimización
              </ItemList>
            </ul>
          </div>
          <div className="h-full flex items-center sm:items-end">
            <p className="text-sm md:text-base text-pretty text-primary-300">Estrategias de marketing digital que posicionan marcas, generan engagement y convierten audiencias en clientes. Si no encuentras el servicio que buscas, contáctanos y diseñaremos una solución a tu medida.</p>
          </div>
        </div>

        <SectionContact />
      </main>
    </Department>
  )
}