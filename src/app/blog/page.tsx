import Department from "../components/layouts/Department"

export default function Blog() {
  return (
    <Department mode="blog" title="Blog" description="Inspírate, aprende y crece con nuestro contenido.">
      <main className="flex flex-col gap-5">
        <h2 className="font-brand text-2xl md:text-4xl font-medium mb-2">Artículos</h2>
        <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            <div className="md:col-span-2 rounded-xl aspect-video w-2/3 bg-gradient-to-br from-pink-600 to-indigo-900"></div>
            <div>
                <h4 className="text-lg">Lorem ipsum dolor sit amet consectetur.</h4>
                <small className="text-sm">8 minutos</small>
            </div>
        </div>
      </main>
    </Department>
  )
}