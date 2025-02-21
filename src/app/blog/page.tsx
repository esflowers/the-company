import Department from "../components/layouts/Department"
import CardFusion from "../components/ui/CardFusion"
import { textBlog } from "../ui/consts"

export default function Blog() {
  return (
    <Department mode="blog" title="Blog" description={textBlog}>
      <main className="mt-6 md:mt-0 space-y-12 xl:space-y-14">
        <div className="space-y-4 lg:space-y-6">
          <h2 className="h2">Artículos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <CardFusion>Imagen del artículo más reciente</CardFusion>
            <div className="flex flex-col sm:justify-center gap-2">
                <h4 className="font-medium text-xl">Lorem ipsum dolor sit amet consectetur.</h4>
                <div className="text-sm text-primary-600 flex items-center gap-2.5">
                  <span>Author</span>
                  <span>8 minutos</span>
                  <span>2025</span>
                </div>
                <p className="text-pretty">Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius commodi quam repellat sequi nulla saepe ducimus provident at accusamus voluptatem non nisi nobis laudantium, et nihil ullam debitis culpa?</p>
            </div>
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