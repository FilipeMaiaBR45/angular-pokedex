export type BaseResponse = {
  count: number,
  next: string | null,
  previous: string | null,
  results: Results[]
}

type Results = {
  name: string,
  url: string
}
