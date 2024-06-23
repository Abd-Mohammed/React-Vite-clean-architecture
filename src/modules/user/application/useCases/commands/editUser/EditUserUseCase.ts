import { ICommand } from '@/modules/shared/application/interfaces/index';
import { IUserRepository } from '../../../interfaces/IUserRepository';

export interface EditUserInput {
  id: string;
  name: string;
}

export class EditUserUseCase implements ICommand<EditUserInput> {
  #userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.#userRepository = userRepository;
  }

  async execute(input: EditUserInput) {
    await this.#userRepository.update(input);
  }
}
