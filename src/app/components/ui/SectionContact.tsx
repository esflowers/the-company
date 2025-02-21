import Link from "next/link"
import { companyMail, companyPhone, companyUbication, linkMail, linkPhone, linkMap } from "@/app/ui/consts"
import CardFusion from "./CardFusion"
import ItemList from "./ItemList"

export default function SectionContact() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-9">
          <div>
            <CardFusion className="font-semibold text-3xl lg:text-4xl">Hagamos algo increíble...</CardFusion>
          </div>
          <ul>
            <ItemList isFirst={true}>
              <Link href={linkMail} className="w-full text-center md:text-start transition duration-150 group-hover:text-white">{companyMail}</Link>
            </ItemList>
            <ItemList className="tracking-wide">
              <Link href={linkPhone} className="w-full text-center md:text-start transition duration-150 group-hover:text-white">{companyPhone}</Link>
            </ItemList>
            <ItemList className="leading-tight">
              <Link href={linkMap} className="w-full text-center md:text-start transition duration-150 group-hover:text-white">{companyUbication}</Link>
            </ItemList>
          </ul>
        </div>
    )
}