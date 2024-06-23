import { ICommand } from '@/modules/shared/application/interfaces/index';
import { IPostRepository } from '../../interfaces/IPostRepository';

export interface EditPostInput {
  id: string;
  title: string;
}

export class EditPostUseCase implements ICommand<EditPostInput> {
  #postRepository: IPostRepository;

  constructor(postRepository: IPostRepository) {
    this.#postRepository = postRepository;
  }

  async execute(input: EditPostInput) {
    await this.#postRepository.update(input);
  }
}
