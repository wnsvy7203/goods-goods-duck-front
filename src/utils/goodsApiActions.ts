'use server'

import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { ApiResponse } from '@/types/apiResponseType'
import { GoodsData, SummaryData } from '@/types/goodsApiDataType'

/**
 * 입찰한 상품 코드 조회
 * @param page 현재 페이지
 * @param status 0: 경매전 / 1: 경매중 / 2: 경매종료 / 3: 거래완료 / 4: 거래취소
 * @returns
 * "result": {
  "totalCount": "총 개수",
  "nowPage": "현재 페이지",
  "maxPage": "최대 페이지",
  "isLast": "마지막 페이지 여부"
  "goodsList":[
    {
      "goodsCode": "상품코드"
      },
  ],
}
*/
export const getBidGoods = async (
  page: number,
  status: number | null,
): Promise<ApiResponse<GoodsData>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/bids/users?page=${page}${status === null ? '' : `?status=${status}`}`,
    {
      headers: { Authorization: session?.user.accessToken },
    },
  )

  const data: ApiResponse<GoodsData> = await res.json()
  return data
}

/**
 * 내가 등록한 상품 내역 조회
 * @param page 현재 페이지
 * @param status 0: 경매전 / 1: 경매중 / 2: 경매종료 / 3: 거래완료 / 4: 거래취소
 * @returns
 * "result": {
    "totalCount": "총 개수",
    "nowPage": "현재 페이지",
    "maxPage": "최대 페이지",
    "isLast": "마지막 페이지 여부"
    "goodsList":[
      {
        "goodsCode": "상품코드"
        },
    ],
  }
  */
export const getSellGoods = async (
  page: number,
  status: number | null,
): Promise<ApiResponse<GoodsData>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/goods/users/sell?page=${page}${status === null ? '' : `?status=${status}`}`,
    {
      headers: { Authorization: session?.user.accessToken },
    },
  )

  const data: ApiResponse<GoodsData> = await res.json()
  return data
}

/**
 * 내가 낙찰받은 상품 코드 조회
 * @param page 현재 페이지
 * @param status 0: 경매전 / 1: 경매중 / 2: 경매종료 / 3: 거래완료 / 4: 거래취소
 * @returns
 * "result": {
    "totalCount": "총 개수",
    "nowPage": "현재 페이지",
    "maxPage": "최대 페이지",
    "isLast": "마지막 페이지 여부"
    "goodsList":[
      {
        "goodsCode": "상품코드"
        },
    ],
  }
  */
export const getWinningGoods = async (
  page: number,
  status: number | null,
): Promise<ApiResponse<GoodsData>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/bids/users?page=${page}${status === null ? '' : `?status=${status}`}`,
    {
      headers: { Authorization: session?.user.accessToken },
    },
  )

  const data: ApiResponse<GoodsData> = await res.json()
  return data
}

export const getLikeGoods = async (
  page: number,
): Promise<ApiResponse<GoodsData>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/aggregation/users/wish?page=${page}`,
    {
      headers: { Authorization: session?.user.accessToken },
    },
  )

  const data = await res.json()
  return data
}

export const getGoodsSummary = async (
  goodsCode: number,
): Promise<ApiResponse<SummaryData>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/goods/${goodsCode}/summary`,
    {
      headers: session?.user.accessToken,
    },
  )

  const data = await res.json()
  return data
}

export const getLike = async (
  goodsCode: number,
): Promise<ApiResponse<boolean>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/aggregation/${goodsCode}/is-wish`,
    {
      headers: session?.user.accessToken,
    },
  )

  const data = await res.json()
  return data
}
