export interface ICacheService {
  get<T>(cacheKey: string, factory: () => Promise<T>): Promise<T>;
  set<T>(cacheKey: string, value: T): Promise<void>;
  remove(cacheKey: string): Promise<void>;
}
