import { IMemoryCache } from './IMemoryCache';

export class MemoryCache implements IMemoryCache {
  #map: Map<string, any> = new Map();

  get(cacheKey: string): any {
    return this.#map.get(cacheKey);
  }
  set(cacheKey: string, value: any): void {
    this.#map.set(cacheKey, value);
  }
  remove(cacheKey: string): void {
    this.#map.delete(cacheKey);
  }
}
