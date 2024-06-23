import { ApiResourceCrudRepository } from "@/modules/shared/infrastructure/repositories/ApiResourceCrudRepository";
import { IUserRepository } from "../../application/interfaces/IUserRepository";
import { User } from "../../domain/User";

// 沒用到
export class UserRepository
  extends ApiResourceCrudRepository<User, string>
  implements IUserRepository {}
