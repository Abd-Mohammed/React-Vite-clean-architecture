import { ICommand } from '@/modules/shared/application/interfaces/index';
import { IPostRepository } from '../../interfaces/IPostRepository';

export type DeletePostInput = string;

export class DeletePostUseCase implements ICommand<DeletePostInput> {
  #postRepository: IPostRepository;

  constructor(postRepository: IPostRepository) {
    this.#postRepository = postRepository;
  }

  async execute(input: DeletePostInput) {
    await this.#postRepository.delete(input);
  }
}
