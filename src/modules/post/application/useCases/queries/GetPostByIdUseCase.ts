import { IQuery } from '@/modules/shared/application/interfaces/index';
import { UseCaseFailureError } from '../../../../shared/application/errors/UseCaseFailureError';
import { IPostRepository } from '../../interfaces/IPostRepository';

export type GetPostByIdInput = string;

export interface GetPostByIdOutput {
  id: string;
  title: string;
}

export class GetPostByIdUseCase
  implements IQuery<GetPostByIdInput, GetPostByIdOutput>
{
  #postRepository: IPostRepository;

  constructor(postRepository: IPostRepository) {
    this.#postRepository = postRepository;
  }

  async execute(input: GetPostByIdInput): Promise<GetPostByIdOutput> {
    try {
      const post = await this.#postRepository.getById(input);
      return post;
    } catch (error) {
      throw new UseCaseFailureError(`找不到 id 為 ${input} 的 post`, {
        cause: error,
      });
    }
  }
}
