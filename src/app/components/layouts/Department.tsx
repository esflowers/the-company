"use client"

import { ReactNode, useState } from "react";
import { textCompany } from "@/app/ui/consts";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

interface Props {
  mode?: ModeTheme
  title?: string
  description?: string
  children: ReactNode
  classDescription?: string
}

export default function Department({
  children,
  mode = 'normal',
  title,
  description = textCompany,
  classDescription
}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`w-full md:h-full p-6 sm:p-8 md:p-0 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-9 md:gap-12 lg:gap-14 xl:gap-20 2xl:gap-24 ${mode}`}>
            <div className="h-fit md:h-full md:col-span-1 pt-16 md:p-12 md:pr-0 lg:p-14 lg:pr-0 xl:pl-20 2xl:pl-24 flex flex-col md:justify-between gap-3.5">
                <Header mode={mode} isOpen={isOpen} setIsOpen={setIsOpen} />
                <Menu mode={mode} isOpen={isOpen} />
                <div className="space-y-1.5">
                    <h1 className="font-brand font-semibold text-pretty text-3xl md:text-4xl xl:text-5xl">{title}</h1>
                    <h2 className={`font-brand font-extralight text-pretty text-2xl lg:text-3xl ${classDescription}`}>{description}</h2>
                </div>
            </div>

            <div className="min-h-screen md:h-full md:col-span-2 md:pr-6 md:pt-12 lg:pt-14 lg:px-9 xl:px-10 2xl:px-12 overflow-y-auto lg:pr-4">
                {children}
                <Footer />
            </div>
        </div>
    )
}