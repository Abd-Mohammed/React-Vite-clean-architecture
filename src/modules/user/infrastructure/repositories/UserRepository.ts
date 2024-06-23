import { ApiResourceCrudRepository } from "@/modules/shared/infrastructure/repositories/ApiResourceCrudRepository";
import { IUserRepository } from "../../application/interfaces/IUserRepository";
import { User } from "../../domain/User";

export class UserRepository
  extends ApiResourceCrudRepository<User, string>
  implements IUserRepository {}
