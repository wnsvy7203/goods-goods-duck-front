'use client'

import { useState } from 'react'
// import { useEffect, useState } from 'react'
// import { BiddingPreviewType } from '@/types/goodsType'
// import { getBiddingPreview } from '@/utils/goodsDetailApiActions'
import { SlArrowLeft } from 'react-icons/sl'
import BiddingUserItem from './BiddingUserItem'

export default function BiddingPreview({ goodsCode }: { goodsCode: string }) {
  // const [preview, setPreview] = useState<BiddingPreviewType[]>([])
  const [visible, setVisible] = useState<boolean>(false)

  // useEffect(() => {
  //   const fetchBiddingPreview = async () => {
  //     const biddingPreviewData = await getBiddingPreview(goodsCode)
  //     const biddingPreview = biddingPreviewData.result
  //     setPreview(biddingPreview)
  //   }
  //   fetchBiddingPreview()
  // }, [goodsCode])

  console.log(goodsCode)

  // to do: 입찰자 없을때 '입찰자가 없습니다' 표시

  const biddingPreview = [
    {
      bidId: 0,
      bidderUuid: '0',
      price: 10000,
      createdAt: '2024-06-17T10:57:00.000',
    },
    {
      bidId: 1,
      bidderUuid: '1',
      price: 20000,
      createdAt: '2024-06-17T10:57:00.000',
    },
    {
      bidId: 2,
      bidderUuid: '2',
      price: 30000,
      createdAt: '2024-06-17T10:57:00.000',
    },
  ]

  const handleClick = () => {
    setVisible(!visible)
  }

  return (
    <div className="mt-[60px] mb-[30px] pt-[20px] pb-[20px] mx-[20px] px-[20px] bg-[#f8f7f7] rounded-2xl">
      <p className="text-[#319AFD] text-[18px]">입찰 목록</p>
      {biddingPreview.map((item) => (
        <BiddingUserItem key={item.bidId} item={item} />
      ))}
      <button
        type="button"
        className="w-full mt-[25px] py-[13px] text-[15px] text-[#319AFD] border border-[#319AFD] rounded-2xl"
        onClick={handleClick}
      >
        입찰 목록 더보기
      </button>
      {visible && (
        <div className="w-screen h-screen z-30 top-0 left-0 fixed bg-white">
          <div>
            <button
              className="absolute mt-[20px] pl-[20px]"
              onClick={handleClick}
              type="button"
            >
              <span className="hidden">닫기</span>
              <SlArrowLeft className="w-[25px] h-[25px] text-sky-600" />
            </button>
            <p className="h-[60px] text-[20px] text-sky-600 content-center text-center">
              입찰 목록 전체
            </p>
          </div>
          <div className="mt-[20px] pl-[20px]">
            {biddingPreview.map((item) => (
              <BiddingUserItem key={item.bidId} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
