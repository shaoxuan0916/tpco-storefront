import { termsAndConditions } from "@lib/data/termsAndConditions"
import { Metadata } from "next"

import { Fragment } from "react"

export const metadata: Metadata = {
  title: "T&C",
  description: "Terms and Conditions",
}

export default function TermsOfUse() {
  return (
    <div className="w-full min-h-screen relative">
      <div className="flex flex-col min-h-screen w-full bg-white py-12 px-4 mx-auto ">
        <div className="flex flex-col gap-12 m-auto max-w-4xl">
          <h1 className="text-[24px] font-bold uppercase">
            Terms and Conditions
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
                Welcome to The Parent Global SDN BHD (&quot;Company,&quot;
                &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
              </p>
              <p>
                These Terms of Service (&quot;Terms&quot;, &quot;Terms of
                Service&quot;) govern your use of our website located at
                https://www.theparentcompany.com.my (together or individually
                &quot;Service&quot;) operated by The Parent Global SDN BHD.
              </p>
              <p>
                Our Privacy Policy also governs your use of our Service and
                explains how we collect, safeguard and disclose information that
                results from your use of our web pages.
              </p>
              <p>
                Your agreement with us includes these Terms and our Privacy
                Policy (&quot;Agreements&quot;). You acknowledge that you have
                read and understood Agreements, and agree to be bound of them.{" "}
              </p>
              <p>
                If you do not agree with (or cannot comply with) Agreements,
                then you may not use the Service, but please let us know by
                emailing at info@theparentcompany.my so we can try to find a
                solution. These Terms apply to all visitors, users and others
                who wish to access or use Service.
              </p>
            </div>

            {termsAndConditions.map((items, index) => (
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
