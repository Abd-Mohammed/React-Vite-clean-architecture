import { ICommand } from '@/modules/shared/application/interfaces/index';
import { IUserRepository } from '../../../interfaces/IUserRepository';

export interface CreateUserInput {
  name: string;
}

export class CreateUserUseCase implements ICommand<CreateUserInput> {
  #userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.#userRepository = userRepository;
  }

  async execute(input: CreateUserInput) {
    await this.#userRepository.create({ id: '', ...input });
  }
}
