import { nanoid } from "nanoid";

import { UserApiDto } from "./DTO/UserApiDto";
import { ICrudApiClient } from "./ICrudApiClient";

export class FakeUserApiClient implements ICrudApiClient<UserApiDto, string> {
  #map: Map<string, UserApiDto> = new Map();

  constructor() {
    const fakeData = [
      { id: "1", name: "Titan 1" },
      { id: "2", name: "Titan 2" },
      { id: "3", name: "Titan 3" },
      { id: "4", name: "Titan 4" },
    ];
    for (const data of fakeData) {
      this.#map.set(data.id, data);
    }
  }

  async getById(id: string) {
    return this.#map.get(id) ?? null;
  }
  async getAll() {
    return [...this.#map.values()];
  }
  async create(entity: UserApiDto) {
    const newId = nanoid(5);
    this.#map.set(newId, { ...entity, id: newId });
  }
  async update(entity: UserApiDto) {
    this.#map.set(entity.id, entity);
  }
  async delete(id: string) {
    this.#map.delete(id);
  }
}
