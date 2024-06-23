import { nanoid } from "nanoid";

import { PostApiDto } from "./DTO/PostApiDto";
import { ICrudApiClient } from "./ICrudApiClient";

export class FakePostApiClient implements ICrudApiClient<PostApiDto, string> {
  #map: Map<string, PostApiDto> = new Map();

  constructor() {
    const fakeData = [
      { id: "1", title: "Post 1" },
      { id: "2", title: "Post 2" },
      { id: "3", title: "Post 3" },
      { id: "4", title: "Post 4" },
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
  async create(entity: PostApiDto) {
    const newId = nanoid(5);
    this.#map.set(newId, { ...entity, id: newId });
  }
  async update(entity: PostApiDto) {
    this.#map.set(entity.id, entity);
  }
  async delete(id: string) {
    this.#map.delete(id);
  }
}
