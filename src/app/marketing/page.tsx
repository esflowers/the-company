import Department from "../components/layouts/Department"

export default function Marketing() {
  return (
    <Department mode="mark" title="Marketing Digital" description="Estrategias que posicionan, atraen y convierten.">
      <main className="flex flex-col gap-5">
        <h2 className="font-brand text-4xl font-semibold mb-2">Marketing Digital</h2>
      </main>
    </Department>
  )
}