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
          <h1 className="text-[24px] font-bold uppercase">Privacy Policy</h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <p className="font-medium">Name: THE PARENT GLOBAL SDN BHD</p>
              <p className="font-medium">BRN no: 1401506-D</p>
              <p className="font-medium">
                Address: 2-3, Jalan Jalil Jaya 2, Jalil Business Link 57000 KL
              </p>
              <p className="mt-4">
                Effective date:{" "}
                <span className="font-semibold">September 29, 2020</span>
              </p>
              <p className="mt-4">
                The Parent Global SDN BHD (&quot;us&quot;, &quot;we&quot;, or
                &quot;our&quot;) operates https://www.theparentcompany.com.my/
                (hereinafter referred to as &quot;Service&quot;).
              </p>
              <p>
                Our Privacy Policy governs your visit to
                https://www.theparentcompany.com.my/, and explains how we
                collect, safeguard and disclose information that results from
                your use of our Service.
              </p>
              <p>
                We use your data to provide and improve Service. By using
                Service, you agree to the collection and use of information in
                accordance with this policy. Unless otherwise defined in this
                Privacy Policy, the terms used in this Privacy Policy have the
                same meanings as in our Terms and Conditions.
              </p>
              <p>
                Our Terms and Conditions (&quot;Terms&quot;) govern all use of
                our Service and together with the Privacy Policy constitutes
                your agreement with us (&quot;agreement&quot;).
              </p>
            </div>

            {privacyPolicy.map((items, index) => (
              <div className="my-4" key={items.key}>
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
    </div>
  )
}
