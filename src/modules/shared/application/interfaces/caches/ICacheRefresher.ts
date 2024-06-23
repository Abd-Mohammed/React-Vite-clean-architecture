export interface ICacheRefresher {
  refreshCache(): Promise<void>;
}
