export interface ICrudApiClient<T, ID> {
  getById(id: ID): Promise<T | null>;
  getAll(): Promise<T[]>;
  create(entity: T): Promise<void>;
  update(entity: T): Promise<void>;
  delete(id: ID): Promise<void>;
}
