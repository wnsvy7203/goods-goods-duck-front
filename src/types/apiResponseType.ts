export interface ApiResponse<T> {
  status: number
  result: T
  message: string
}
