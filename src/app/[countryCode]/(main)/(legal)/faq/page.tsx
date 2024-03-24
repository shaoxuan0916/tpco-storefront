import { Metadata } from "next"

import { Fragment } from "react"
import { faqList } from "@lib/data/faqList"

export const metadata: Metadata = {
  title: "FAQ",
  description: "The Parent Company Product FAQ's List",
}

export default function TermsOfUse() {
  return (
    <div className="w-full min-h-screen relative">
      <div className="flex flex-col min-h-screen w-full bg-white py-12 px-4 mx-auto ">
        <div className="flex flex-col gap-12 m-auto max-w-4xl">
          <h1 className="text-[24px] font-bold uppercase">
            THE PARENT COMPANY Product FAQ&apos;s List:
          </h1>

          {faqList.map((items, index) => (
            <div className="my-4" key={index}>
              <label className="text-[20px] font-semibold">
                {index + 1}. {items.heading}
              </label>
              <p className="mt-2">
                {items.description.split("\n").map((line, index) => (
                  <Fragment key={index}>
                    {line}
                    <br />
                  </Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
