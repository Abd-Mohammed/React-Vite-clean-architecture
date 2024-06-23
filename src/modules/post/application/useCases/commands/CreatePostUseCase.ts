import { ICommand } from '@/modules/shared/application/interfaces/index';
import { IPostRepository } from '../../interfaces/IPostRepository';

export interface CreatePostInput {
  title: string;
}

export class CreatePostUseCase implements ICommand<CreatePostInput> {
  #postRepository: IPostRepository;

  constructor(postRepository: IPostRepository) {
    this.#postRepository = postRepository;
  }

  async execute(input: CreatePostInput) {
    await this.#postRepository.create({ id: '', ...input });
  }
}
