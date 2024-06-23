import { IQuery } from '@/modules/shared/application/interfaces/index';
import { IUserRepository } from '../../../interfaces/IUserRepository';

export interface GetUserListInput {}

export interface GetUserListOutput {
  id: string;
  name: string;
}

export class GetUserListUseCase
  implements IQuery<GetUserListInput, GetUserListOutput[]>
{
  #userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.#userRepository = userRepository;
  }

  async execute(_input?: GetUserListInput): Promise<GetUserListOutput[]> {
    const users = await this.#userRepository.getAll();
    return users;
  }
}
