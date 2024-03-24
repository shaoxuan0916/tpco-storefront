import { Metadata } from "next"

import { Fragment } from "react"
import { privacyPolicy } from "@lib/data/privacyPolicy"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy",
}

export default function TermsOfUse() {
  return (
    <div className="w-full min-h-screen relative">
      <div className="flex flex-col min-h-screen w-full bg-white py-12 px-4 mx-auto ">
        <div className="flex flex-col gap-12 m-auto max-w-4xl">
          <h1 className="text-[24px] font-bold uppercase">
            Refund and Return Policy
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <p className="font-medium">Name: THE PARENT GLOBAL SDN BHD</p>
              <p className="font-medium">BRN no: 1401506-D</p>
              <p className="font-medium">
                Address: 2-3, Jalan Jalil Jaya 2, Jalil Business Link 57000 KL
              </p>
              <p className="mt-4">
                Last updated:{" "}
                <span className="font-semibold">March 24, 2024</span>
              </p>
              <p className="mt-4">
                All purchases may qualify for a return or exchange within
                seven(7) days from the date of receiving the item(s). Customers
                may exchange an item for a different brand or type, and of equal
                value only after it is proven the received perfume is of
                defective in nature due to manufacturing defect or it is proven
                to be fake. Customers must prove the received perfume is
                fake/counterfeit with attached facts. Any proof of the
                counterfeit products will be taken into consideration. Customers
                who blind buy and later wants to return due to perfume scents
                not compatible,it will not be entertain.
              </p>
              <p>
                The item(s) returned must be in resale-able condition with
                original packaging. For refund processing, an invoice is needed
                to be attached upon return.
              </p>
              <p>
                Please submit your request at Product Returns and it will be
                reviewed by THE PARENT COMPANY. We will arrange to pick up and
                re-send the item at no charge if it is proven to be
                manufacturing fault. For exchange or other reasons of return, if
                it is approved by THE PARENT COMPANY, the shipping charges will
                be borne by customer.
              </p>
              <p>
                We reserve the right to replace the returned item with a new
                item of the same original order or refund via e-voucher.
                Shipping charges are not refundable, all points accumulated will
                be deducted upon the refund of the item.
              </p>
              <p>
                If returning an item that qualified you for a free gift, please
                include the free gift with your return. If you choose to keep
                the free gift, you will be charged for its value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
