import { ICommand } from '@/modules/shared/application/interfaces/index';
import { IUserRepository } from '../../../interfaces/IUserRepository';

export type DeleteUserInput = string;

export class DeleteUserUseCase implements ICommand<DeleteUserInput> {
  #userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.#userRepository = userRepository;
  }

  async execute(input: DeleteUserInput) {
    await this.#userRepository.delete(input);
  }
}
