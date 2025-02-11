// 리스트 조회
export interface GoodsCardType {
  goodsCode: string
  goodsName: string
  minPrice: number
  tradingStatus: number
  opendAt: string
  closedAt: string
}

export interface FilterType {
  id: number
  name: string
}

export interface WishTradeType {
  id: number
  name: string
}

// 상세 조회
export interface GoodsDetailType {
  uuid: string
  goodsName: string
  description: string
  minPrice: number
  tradingStatus: number
  openedAt: string
  closedAt: string
  imageUrls: ImageUrlType[]
  wishTradeType: number
  tags: TagType[]
}

export interface ImageUrlType {
  id: number
  url: string
}

export interface TagType {
  id: number
  name: string
}

// 판매자 - 입찰 목록
export interface BiddingPreviewType {
  bidId: number
  bidderUuid: string
  price: number
  createdAt: string
}

export interface BiddingUserType {
  userUuid: string
  profileImg: string
  nickname: string
  favCategory: string
}
