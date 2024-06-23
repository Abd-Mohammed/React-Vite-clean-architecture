import { ICrudRepository } from "@/modules/shared/application/interfaces/index";
import { User } from "../../domain/User";

export interface IUserRepository extends ICrudRepository<User, string> {}
