import { IQuery } from '@/modules/shared/application/interfaces/index';
import { UseCaseFailureError } from '@/modules/shared/application/errors/UseCaseFailureError';
import { IUserRepository } from '../../../interfaces/IUserRepository';

export type GetUserByIdInput = string;

export interface GetUserByIdOutput {
  id: string;
  name: string;
}

export class GetUserByIdUseCase
  implements IQuery<GetUserByIdInput, GetUserByIdOutput>
{
  #userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.#userRepository = userRepository;
  }

  async execute(input: GetUserByIdInput): Promise<GetUserByIdOutput> {
    try {
      const user = await this.#userRepository.getById(input);
      return user;
    } catch (error) {
      throw new UseCaseFailureError(`找不到 id 為 ${input} 的 user`, {
        cause: error,
      });
    }
  }
}
