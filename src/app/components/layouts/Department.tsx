import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

interface Props {
  mode?: ModeTheme
  title?: string
  description?: string
  children: ReactNode
}

export default function Department({
  children,
  mode = 'normal',
  title,
  description = 'Somos una agencia creativa especializada en soluciones digitales.',
}: Props) {
    return (
        <div className={`w-full md:h-full grid grid-cols-1 md:grid-cols-3 gap-9 md:gap-12 lg:gap-14 xl:gap-20 2xl:gap-24 ${mode}`}>
            <div className="h-dvh md:h-full md:col-span-1 pt-20 md:pt-0 md:p-12 md:pr-0 lg:p-14 lg:pr-0 xl:pl-20 2xl:pl-24 flex flex-col md:justify-between gap-8">
                <Header mode={mode} />
                <Menu mode={mode} />
                <div className="space-y-1.5">
                    <h1 className="font-brand font-semibold text-pretty text-2xl sm:text-3xl lg:text-4xl">{title}</h1>
                    <h2 className="font-brand font-extralight text-pretty text-xl sm:text-2xl lg:text-3xl">{description}</h2>
                </div>
            </div>

            <div className="md:h-full md:col-span-2 md:pr-6 md:pt-12 lg:pt-14 lg:px-9 xl:px-12 2xl:px-14 overflow-y-auto lg:pr-4">
                {children}
                <Footer />
            </div>
        </div>
    )
}