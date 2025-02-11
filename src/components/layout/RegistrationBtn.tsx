'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GoPlus } from 'react-icons/go'

export default function RegistrationBtn() {
  const pathname = usePathname()

  if (pathname.startsWith(`/goods/`)) return null

  return (
    <Link
      href="/registration"
      className="bg-[#2B74B9] fixed z-20 rounded-full right-[20px] bottom-[110px] w-[50px] h-[50px] content-center"
    >
      <GoPlus className="w-[35px] h-[35px] m-auto text-white" />
    </Link>
  )
}
