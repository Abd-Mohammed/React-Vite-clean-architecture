import { RepositoryCacheRefresherDecorator } from "@/modules/shared/infrastructure/repositories/RepositoryCacheRefresherDecorator";
import { User } from "../../domain/User";

// 沒用到
export class UserRepositoryCacheRefresherDecorator extends RepositoryCacheRefresherDecorator<
  User,
  string
> {}
