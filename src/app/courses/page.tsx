import { IconSchool } from "../components/icons"
import Department from "../components/layouts/Department"
import SectionContact from "../components/ui/SectionContact"
import { textCourses } from "../ui/consts"

export default function Courses() {
  return (
    <Department mode="edu" title="Cursos" description={textCourses}>
      <main className="mt-6 md:mt-0 space-y-12 xl:space-y-14">
        <div className="space-y-4 lg:space-y-6">
          <h2 className="h2">Cursos en línea</h2>
          <div className="h-96 flex flex-col items-center justify-center gap-1.5">
            <IconSchool size="40" stroke="2" />
            <h2 className="font-medium text-center text-xl">Cursos en desarrollo...</h2>
          </div>
        </div>

        <SectionContact />
      </main>
    </Department>
  )
}