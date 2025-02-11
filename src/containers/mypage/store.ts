import { create } from 'zustand'

interface TradingState {
  currentStatus: number | null
  page: number

  setStatus: (currentStatus: number | null) => void
  setPage: (page: number) => void
}

interface LikeState {
  page: number

  setPage: (page: number) => void
}

interface ProfileState {
  profileImage: File | null
  nickname: string
  favoriteCategory: string

  setProfileImage: (profileIamge: File | null) => void
  setNickname: (nickname: string) => void
  setFavoriteCategory: (favoriteCategory: string) => void
}

export const useBidStore = create<TradingState>((set) => ({
  currentStatus: null,
  page: 0,

  setStatus: (currentStatus) => set({ currentStatus }),
  setPage: (page) => set({ page }),
}))

export const useSellStore = create<TradingState>((set) => ({
  currentStatus: null,
  page: 0,

  setStatus: (currentStatus) => set({ currentStatus }),
  setPage: (page) => set({ page }),
}))

export const useWinningStore = create<TradingState>((set) => ({
  currentStatus: null,
  page: 0,

  setStatus: (currentStatus) => set({ currentStatus }),
  setPage: (page) => set({ page }),
}))

export const useReviewStore = create<TradingState>((set) => ({
  currentStatus: null,
  page: 0,

  setStatus: (currentStatus) => set({ currentStatus }),
  setPage: (page) => set({ page }),
}))

export const useLikeStore = create<LikeState>((set) => ({
  page: 0,

  setPage: (page) => set({ page }),
}))

export const useUpdateProfileStore = create<ProfileState>((set) => ({
  profileImage: null,
  nickname: '',
  favoriteCategory: '',

  setProfileImage: (profileImage) => set({ profileImage }),
  setNickname: (nickname) => set({ nickname }),
  setFavoriteCategory: (favoriteCategory) => set({ favoriteCategory }),
}))
