import {
  ICacheRefresher,
  ICacheService,
  ICrudRepository,
} from '../../application/interfaces/index';

export class RepositoryCacheRefresherDecorator<T, ID>
  implements ICrudRepository<T, ID>, ICacheRefresher
{
  #repository: ICrudRepository<T, ID>;
  #cacheService: ICacheService;

  #cacheKey: string = 'UserRepository';

  constructor(repository: ICrudRepository<T, ID>, cacheService: ICacheService) {
    this.#repository = repository;
    this.#cacheService = cacheService;
  }

  // 不會 cache getById 的結果，因為通常此查詢非常快，
  // 只有取得所有資料或修改任何資料時，才需要 cache
  async getById(id: ID) {
    return await this.#repository.getById(id);
  }

  async getAll() {
    const cachedList = await this.#cacheService.get(
      this.#cacheKey,
      async () => await this.#repository.getAll()
    );
    return cachedList;
  }

  async create(entity: T) {
    await this.#repository.create(entity);
    this.refreshCache();
  }

  async update(entity: T) {
    await this.#repository.update(entity);
    this.refreshCache();
  }

  async delete(id: ID) {
    await this.#repository.delete(id);
    this.refreshCache();
  }

  async refreshCache() {
    await this.#cacheService.remove(this.#cacheKey);

    const list = await this.#repository.getAll();

    await this.#cacheService.set(this.#cacheKey, list);

    console.log('refreshCache', list);
  }
}
