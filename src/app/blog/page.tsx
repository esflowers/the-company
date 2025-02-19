import Department from "../components/layouts/Department"
import CardFusion from "../components/ui/CardFusion"

export default function Blog() {
  return (
    <Department mode="blog" title="Blog" description="Inspírate, aprende y crece con nuestro contenido.">
      <main className="space-y-9 xl:space-y-12">
        <h2 className="font-brand font-medium text-2xl md:text-3xl xl:text-4xl">Artículos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 xl:gap-9 sm:divide-x divide-primary-300">
            <CardFusion>Imagen del artículo más reciente</CardFusion>
            <div className="sm:pl-6 lg:pl-8 xl:pl-9 flex flex-col justify-center gap-2">
                <h4 className="font-medium text-xl">Lorem ipsum dolor sit amet consectetur.</h4>
                <div className="text-sm text-primary-600 flex items-center gap-2.5">
                  <span>Author</span>
                  <span>8 minutos</span>
                  <span>2025</span>
                </div>
                <p className="text-pretty">Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius commodi quam repellat sequi nulla saepe ducimus provident at accusamus voluptatem non nisi nobis laudantium, et nihil ullam debitis culpa?</p>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 xl:gap-9">
            <CardFusion>Otro artículo</CardFusion>
            <CardFusion>Otro artículo</CardFusion>
        </div>
      </main>
    </Department>
  )
}