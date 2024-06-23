import { ICrudRepository } from '../../application/interfaces/index';
import { ICrudApiClient } from '../backendApi/ICrudApiClient';
import { ApiError } from '../errors/ApiError';

export class ApiResourceCrudRepository<T, ID>
  implements ICrudRepository<T, ID>
{
  #apiClient: ICrudApiClient<T, ID>;

  constructor(apiClient: ICrudApiClient<T, ID>) {
    this.#apiClient = apiClient;
  }

  async getById(id: ID) {
    const entity = await this.#apiClient.getById(id);

    if (entity === null) throw new ApiError('Api Data Not Found.');

    return entity;
  }

  async getAll() {
    return await this.#apiClient.getAll();
  }

  async create(entity: T) {
    await this.#apiClient.create(entity);
  }

  async update(entity: T) {
    await this.#apiClient.update(entity);
  }

  async delete(id: ID) {
    await this.#apiClient.delete(id);
  }
}
