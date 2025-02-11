'use client'

import Link from 'next/link'
import { IoShareSocialOutline } from 'react-icons/io5'
import BackBtn from '@/components/Btn/BackBtn'
import BasicAlert from '@/components/Modal/BasicAlert'
import { useBasicAlertStore } from '@/components/Modal/store'
import Home from '@/public/svgs/icon/homeColor.svg'

export default function DetailHeader() {
  const { message, setAlert } = useBasicAlertStore()

  const showAlert = (alertMessage: string) => {
    setAlert(true, alertMessage)
  }

  const copyUrl = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    showAlert('URL이 복사 되었습니다.')
  }

  return (
    <header className="relative flex h-[60px] text-[#2B74B9]">
      <BackBtn />
      <div className="flex absolute top-1/2 right-[15px] -translate-y-1/2">
        <Link href="/" className="pr-[13px]">
          <Home />
        </Link>
        <IoShareSocialOutline
          className="w-[29px] h-[29px] text-[#2B74B9]"
          onClick={() => copyUrl()}
        />
      </div>
      <BasicAlert message={message} />
    </header>
  )
}
