export interface ICount {
  count: number;
}

export interface IGetAllCountsRequest {
  userId: string;
}
export interface IGetAllCountsResponse {
  counts: ICount[];
}
export interface ICreateCountRequest {
  count: number;
}
export interface ICreateCountResponse {
  count: ICount;
}
