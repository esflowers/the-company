import Link from "next/link"
import Department from "../components/layouts/Department"
import { IconArrowLink, IconSend } from "../components/icons"
import Button from "../components/ui/Button"
import { linkContact, linkMail, textDevelopment } from "../ui/consts"
import ItemList from "../components/ui/ItemList"
import SectionContact from "../components/ui/SectionContact"

const projects = [
  { id: 0, project: 'E-Learning', link: '#', page: '#', date: '2024 - 2025', work: 'Plataforma', bg: 'from-blue-500 to-blue-950' },
  { id: 2, project: 'Sistema Y', link: '#', page: '#', date: '2025', work: 'Sitio web', bg: 'from-indigo-400 to-indigo-950' },
  { id: 3, project: 'Ecommerce', link: '#', page: '#', date: '2024', work: 'Sistema y web', bg: 'from-orange-400 to-orange-950' },
  { id: 4, project: 'Landing page', link: '#', page: '#', date: '2024', work: 'Página web', bg: 'from-pink-400 to-pink-950' },
  { id: 5, project: 'Institución Z', link: '#', page: '#', date: '2024', work: 'Branding & Página web', bg: 'from-gray-400 to-gray-950' },
]

export default function Development() {
  return (
    <Department mode="dev" title="Desarrollo" description={textDevelopment}>
      <main className="mt-6 md:mt-0 space-y-12 xl:space-y-14">
        <div className="space-y-4 lg:space-y-6">
          <h2 className="h2">Proyectos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-8">
            {projects.map((item) => (
              <div key={item.id} className={`w-full aspect-video p-4 bg-gradient-to-br ${item.bg} rounded-xl text-pretty text-primary-300 flex items-end justify-between gap-3`}>
                <Link href={item.page} className="font-light text-2xl lg:text-3xl space-y-1 transition duration-150 hover:text-white">
                  {item.project}
                  <p className="text-sm">{item.work}</p>
                </Link>
                <Button isLink={true} isIcon={true} href={item.link} variant="text" size="lg">
                  <IconArrowLink size="20" className="transition duration-150 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>
            ))}
            <div className="w-full aspect-video p-4 rounded-xl text-pretty text-primary-300 bg-transparent border border-dashed border-primary-300 flex items-end justify-between gap-3">
              <Link href={linkContact} className="font-light text-2xl lg:text-3xl space-y-1 transition duration-150 hover:text-white">
                ¿Necesitas un proyecto?
                <p className="text-sm">Nosotros lo creamos.</p>
              </Link>
              <Button isLink={true} isIcon={true} href={linkMail} variant="text" size="lg">
                <IconSend size="20" className="transition duration-150 group-hover:text-white group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 xl:gap-9">
          <div className="space-y-3">
            <h3 className="font-medium text-xl">Trabajamos con</h3>
            <ul className="text-primary-300">
              <ItemList isFirst={true} className="leading-tight" theme="light">
                React, Angular, Vue, Svelte, Laravel, Next.js, Astro
              </ItemList>
              <ItemList className="leading-tight" theme="light">
                TypeScript, JavaScript, Java, PHP, Python
              </ItemList>
              <ItemList className="leading-tight" theme="light">
                SQL, MySQL, SQLite, Firebase
              </ItemList>
              <ItemList className="leading-tight" theme="light">
                CSS, HTML, Tailwind CSS, Bootstrap
              </ItemList>
              <ItemList className="leading-tight" theme="light">
                Rendimiento, SEO, accesibilidad, buenas prácticas
              </ItemList>
            </ul>
          </div>
          <div className="h-full flex items-center sm:items-end">
            <p className="text-sm md:text-base text-pretty text-primary-300">Tecnologías modernas y herramientas eficientes para desarrollar soluciones sólidas y escalables. Si no ves aquí la tecnología que necesitas, no dudes en preguntarnos, nos adaptamos a los requerimientos de cada proyecto.</p>
          </div>
        </div>

        <SectionContact />
      </main>
    </Department>
  )
}