export interface IMemoryCache {
  get(cacheKey: string): any;
  set(cacheKey: string, value: any): void;
  remove(cacheKey: string): void;
}
