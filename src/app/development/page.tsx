import Link from "next/link"
import Department from "../components/layouts/Department"
import { IconArrowLink } from "../components/icons"

export default function Development() {
  const projects = [
    { id: 0, project: 'E-Learning', link: '#', page: '#', date: '2024 - 2025', work: 'Plataforma' },
    { id: 1, project: 'Página web', link: '#', page: '#', date: '2025', work: 'Diseño & DB' },
    { id: 2, project: 'Sistema Y', link: '#', page: '#', date: '2025', work: 'Sitio web' },
    { id: 3, project: 'Ecommerce', link: '#', page: '#', date: '2024', work: 'Sistema y web' },
    { id: 4, project: 'Landing page', link: '#', page: '#', date: '2024', work: 'Página web' },
    { id: 5, project: 'Institución Z', link: '#', page: '#', date: '2024', work: 'Branding & Página web' },
  ]

  return (
    <Department mode="dev" title="Desarrollo" description="Creamos productos que conectan, funcionan y evolucionan.">
      <main className="flex flex-col gap-5">
        <h2 className="font-brand text-2xl md:text-4xl font-medium mb-2">Proyectos</h2>

        <ul className="space-y-2.5 md:space-y-3 xl:space-y-3.5">
          {projects.map((item) => (
            <li key={item.id} className="flex flex-nowrap items-center justify-between gap-3 text-primary-300">
              <Link href={item.page} className="font-light text-3xl md:text-5xl xl:text-7xl flex flex-wrap items-center justify-start gap-2 transition duration-150 hover:text-white cursor-nwse-resize">
                {item.project}
                <small className="text-sm">/</small>
                <p className="text-sm">{item.work}</p>
                <small className="text-sm">/</small>
                <time dateTime={item.date} className="text-sm">{item.date}</time>
              </Link>
              <Link href={item.link} className="group">
                <IconArrowLink size="24" className="transition duration-150 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Department>
  )
}