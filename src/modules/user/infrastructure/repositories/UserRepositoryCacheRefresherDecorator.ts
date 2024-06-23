import { RepositoryCacheRefresherDecorator } from "@/modules/shared/infrastructure/repositories/RepositoryCacheRefresherDecorator";
import { User } from "../../domain/User";

export class UserRepositoryCacheRefresherDecorator extends RepositoryCacheRefresherDecorator<
  User,
  string
> {}
