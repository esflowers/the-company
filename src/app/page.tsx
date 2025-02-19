import Department from "./components/layouts/Department";
import { IconFrame, IconSchool, IconServer, IconTable, IconTrendingUp, IconWorld } from "./components/icons";
import { companyMail, companyPhone, companyUbication, linkDevelopment, linkMail, linkMap, linkMarketing, linkPhone, textCompany } from "./ui/consts";
import Quote from "./components/ui/Quote";
import CardFusion from "./components/ui/CardFusion";
import ItemList from "./components/ui/ItemList";
import Link from "next/link";
import Button from "./components/ui/Button";

export default function Home() {
  return (
    <Department classDescription="hidden md:flex">
      <main className="space-y-12 xl:space-y-14">
        <div className="flex flex-col gap-4 pb-4">
          <h2 className="font-brand font-[450] text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl select-none">Profesionalización Virtual</h2>
          <h2 className="font-brand font-extralight text-pretty text-2xl md:hidden">{textCompany}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 xl:gap-9">
          <div className="space-y-3">
            <h3 className="font-medium text-xl">Creamos para</h3>
            <ul className="text-primary-300">
              <ItemList isFirst={true} className="leading-tight">
                Empresas consolidadas
              </ItemList>
              <ItemList className="leading-tight">
                Profesionales independientes
              </ItemList>
              <ItemList className="leading-tight">
                Startups y líderes
              </ItemList>
              <ItemList className="leading-tight">
                Instituciones educativas
              </ItemList>
              <ItemList className="leading-tight">
                Organizaciones potenciales
              </ItemList>
            </ul>
          </div>
          <div className="h-full flex items-center sm:items-end">
            <p className="text-sm md:text-base text-pretty text-primary-300">Un diseño atractivo es solo el inicio. La estructura bien pensada potencia la identidad de una marca, la experiencia de usuario eficiente convierte visitantes en clientes y la tecnología escalable permite crecer con autonomía. Un proceso optimizado para resultados impactantes.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 xl:gap-9">
          <div className="space-y-3">
            <Button isLink={true} href={linkDevelopment} variant="text" size="xl">Desarrollo</Button>
            <ul className="text-primary-300">
              <ItemList isFirst={true}>
                Apps, páginas y sitios web
              </ItemList>
              <ItemList>
                Apps móviles
              </ItemList>
              <ItemList>
                Diseño UX y UI
              </ItemList>
              <ItemList>
                Bases de datos estructuradas
              </ItemList>
            </ul>
          </div>
          <div className="space-y-3">
            <Button isLink={true} href={linkMarketing} variant="text" size="xl">Marketing</Button>
            <ul className="text-primary-300">
              <ItemList isFirst={true}>
                Branding
              </ItemList>
              <ItemList>
                Estrategia y redacción publicitaria
              </ItemList>
              <ItemList>
                Identidad de marca
              </ItemList>
              <ItemList>
                Tono de voz
              </ItemList>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-9">
          <div className="order-2 md:order-1">
            <Quote quote="La tecnología no es un mal, ni un fin tampoco; es una herramienta. Es algo que nos permite ayudar, ser más eficientes y productivos; y si la sabemos usar bien, nos irá muy bien."
                  author="Dr. Héctor, CEO de Profesionalización Virtual." link="https://www.facebook.com/share/v/15wJHf8ekQ/" textLink="Entrevista completa" />
          </div>
          <ul className="order-1 md:order-2 text-primary-300">
            <ItemList isFirst={true}>
              <h4>Diseño Funcional</h4>
              <IconFrame size="18" />
            </ItemList>
            <ItemList>
              <h4>Gestión Eficiente</h4>
              <IconTable size="18" />
            </ItemList>
            <ItemList>
              <h4>Infraestructura Escalable</h4>
              <IconServer size="18" />
            </ItemList>
            <ItemList>
              <h4>Innovación Profesional</h4>
              <IconTrendingUp size="18" />
            </ItemList>
            <ItemList >
              <h4>Estrategia Digital</h4>
              <IconWorld size="18" />
            </ItemList>
            <ItemList>
              <h4>Educación Virtual</h4>
              <IconSchool size="18" />
            </ItemList>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-9">
          <div>
            <CardFusion className="font-semibold text-3xl lg:text-4xl">Hagamos algo increíble...</CardFusion>
          </div>
          <ul>
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
      </main>
    </Department>
  )
}