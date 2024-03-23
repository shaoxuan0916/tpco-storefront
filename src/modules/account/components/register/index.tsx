"use client"

import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import { signUp } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Link from "next/link"

import { FcGoogle } from "react-icons/fc"
import { FaFacebookF } from "react-icons/fa"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signUp, null)

  return (
    <div className="max-w-sm flex flex-col items-center">
      <h1 className="text-large-semi uppercase mb-6">Become a TPCO Member</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
        Create your TPCO Member profile, and get access to an enhanced shopping
        experience.
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="First name"
            name="first_name"
            required
            autoComplete="given-name"
          />
          <Input
            label="Last name"
            name="last_name"
            required
            autoComplete="family-name"
          />
          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
          />
          <Input label="Phone" name="phone" type="tel" autoComplete="tel" />
          <Input
            label="Password"
            name="password"
            required
            type="password"
            autoComplete="new-password"
          />
        </div>
        <ErrorMessage error={message} />
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          By creating an account, you agree to TPCO Store&apos;s{" "}
          <LocalizedClientLink href="/privacy-policy" className="underline">
            Privacy Policy
          </LocalizedClientLink>{" "}
          and{" "}
          <LocalizedClientLink href="/terms-of-use" className="underline">
            Terms of Use
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton className="w-full mt-6">Join</SubmitButton>
        {/* Google Login */}
        <Link
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/store/auth/google`}
          className="flex items-center justify-center gap-4 p-2 w-full bg-white border border-black mt-4 rounded-md"
        >
          <FcGoogle />
          <p>Continue with Google</p>
        </Link>

        {/* Facebook Login */}
        <Link
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/store/auth/facebook`}
          className="flex items-center justify-center gap-4 p-2 w-full bg-white border border-black mt-4 rounded-md"
        >
          <FaFacebookF className="text-[#316FF6]" />
          <p>Continue with Facebook</p>
        </Link>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Already a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Sign in
        </button>
        .
      </span>
    </div>
  )
}

export default Register
