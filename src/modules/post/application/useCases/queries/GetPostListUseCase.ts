import { IQuery } from '@/modules/shared/application/interfaces/index';
import { IPostRepository } from '../../interfaces/IPostRepository';

export interface GetPostListInput {}

export interface GetPostListOutput {
  id: string;
  title: string;
}
export class GetPostListUseCase
  implements IQuery<GetPostListInput, GetPostListOutput[]>
{
  #postRepository: IPostRepository;

  constructor(postRepository: IPostRepository) {
    this.#postRepository = postRepository;
  }

  async execute(_input?: GetPostListInput): Promise<GetPostListOutput[]> {
    const posts = await this.#postRepository.getAll();
    return posts;
  }
}
