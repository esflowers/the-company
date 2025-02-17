import { IconSchool } from "../components/icons"
import Department from "../components/layouts/Department"

export default function Courses() {
  return (
    <Department mode="edu" title="Cursos" description="Aprende, aplica y crece con formación digital.">
      <main className="flex flex-col gap-5">
        <h2 className="font-brand text-2xl md:text-4xl font-medium mb-2">Cursos en línea</h2>
        <div className="h-96 flex flex-col items-center justify-center gap-1.5">
            <IconSchool size="40" />
            <h2 className="font-brand text-center text-lg md:text-xl">Cursos en desarrollo...</h2>
        </div>
      </main>
    </Department>
  )
}