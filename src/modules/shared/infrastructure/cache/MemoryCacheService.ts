import { ICacheService } from '../../application/interfaces/index';
import { IMemoryCache } from './IMemoryCache';

export class MemoryCacheService implements ICacheService {
  memoryCache: IMemoryCache;

  constructor(storeCache: IMemoryCache) {
    this.memoryCache = storeCache;
  }

  async get<T>(cacheKey: string, factory: () => Promise<T>) {
    const cachedResult: any = this.memoryCache.get(cacheKey);

    if (cachedResult != null) {
      return cachedResult;
    }

    const result = await factory();
    this.memoryCache.set(cacheKey, result);
    return result;
  }

  async set<T>(cacheKey: string, value: T) {
    this.memoryCache.set(cacheKey, value);
  }

  async remove(cacheKey: string) {
    this.memoryCache.remove(cacheKey);
  }
}
