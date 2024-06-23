import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CreatePostUseCase } from "./modules/post/application/useCases/commands/CreatePostUseCase";
import { DeletePostUseCase } from "./modules/post/application/useCases/commands/DeletePostUseCase";
import { EditPostUseCase } from "./modules/post/application/useCases/commands/EditPostUseCase";
import { GetPostByIdUseCase } from "./modules/post/application/useCases/queries/GetPostByIdUseCase";
import { GetPostListUseCase } from "./modules/post/application/useCases/queries/GetPostListUseCase";
import { FakePostApiClient } from "./modules/shared/infrastructure/backendApi/FakePostApiClient.ts";
import { FakeUserApiClient } from "./modules/shared/infrastructure/backendApi/FakeUserApiClient.ts";
import { MemoryCache } from "./modules/shared/infrastructure/cache/MemoryCache.ts";
import { MemoryCacheService } from "./modules/shared/infrastructure/cache/MemoryCacheService.ts";
import { ApiResourceCrudRepository } from "./modules/shared/infrastructure/repositories/ApiResourceCrudRepository.ts";
import { RepositoryCacheRefresherDecorator } from "./modules/shared/infrastructure/repositories/RepositoryCacheRefresherDecorator.ts";
// import { UserRepositoryCacheRefresherDecorator } from './modules/user/adapters/repositories/UserRepositoryCacheRefresherDecorator';
// import { UserRepository } from './modules/user/adapters/repositories/UserRepository';
import { CreateUserUseCase } from "./modules/user/application/useCases/commands/createUser/CreateUserUseCase";
import { DeleteUserUseCase } from "./modules/user/application/useCases/commands/deleteUser/DeleteUserUseCase";
import { EditUserUseCase } from "./modules/user/application/useCases/commands/editUser/EditUserUseCase";
import { GetUserByIdUseCase } from "./modules/user/application/useCases/queries/GetUserById/GetUserByIdUseCase";
import { GetUserListUseCase } from "./modules/user/application/useCases/queries/GetUserList/GetUserListUseCase";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

(async () => {
  // const userRepository = new UserRepositoryCacheRefresherDecorator(
  //   new UserRepository(new FakeUserApiClient()),
  //   new StoreCacheService(new MemoryCache())
  // );

  const memoryCacheService = new MemoryCacheService(new MemoryCache());

  const userRepository = new RepositoryCacheRefresherDecorator(
    new ApiResourceCrudRepository(new FakeUserApiClient()),
    memoryCacheService
  );

  const postRepository = new RepositoryCacheRefresherDecorator(
    new ApiResourceCrudRepository(new FakePostApiClient()),
    memoryCacheService
  );

  const getPostByIdUseCase = new GetPostByIdUseCase(postRepository);
  const getPostListUseCase = new GetPostListUseCase(postRepository);
  const createPostUseCase = new CreatePostUseCase(postRepository);
  const editPostUseCase = new EditPostUseCase(postRepository);
  const deletePostUseCase = new DeletePostUseCase(postRepository);

  const getUserByIdUseCase = new GetUserByIdUseCase(userRepository);
  const getUserListUseCase = new GetUserListUseCase(userRepository);
  const createUserUseCase = new CreateUserUseCase(userRepository);
  const editUserUseCase = new EditUserUseCase(userRepository);
  const deleteUserUseCase = new DeleteUserUseCase(userRepository);

  await createUser({ name: "new user 0" });

  await printUserById("1");
  await printUserById("1");
  await printUserById("8");

  await printUserList();
  await printUserList();

  await createUser({ name: "new user 1" });
  await createUser({ name: "new user 2" });

  await printUserList();

  await deleteUser("3");

  await printUserList();

  await editUser({ id: "1", name: "edit name 1" });

  await printUserList();
  // await printUserList();

  async function createUser(user: any) {
    await createUserUseCase.execute(user);
    console.log("create user", user);
  }

  async function editUser(user: any) {
    await editUserUseCase.execute(user);
    console.log("edit user", user);
  }

  async function deleteUser(id: string) {
    await deleteUserUseCase.execute(id);
    console.log("delete user", id);
  }

  async function printUserById(id: string) {
    try {
      const user = await getUserByIdUseCase.execute(id);
      console.log("user", user);
    } catch (error) {
      console.dir(error);
    }
  }

  async function printUserList() {
    const users = await getUserListUseCase.execute();
    console.log("user list", structuredClone(users));
  }

  await createPost({ title: "new post 0" });

  await printPostById("1");
  await printPostById("1");
  await printPostById("8");

  await printPostList();
  await printPostList();

  await createPost({ title: "new post 1" });
  await createPost({ title: "new post 2" });

  await printPostList();

  await deletePost("3");

  await printPostList();

  await editPost({ id: "1", title: "edit title 1" });

  await printPostList();
  // await printPostList();

  async function createPost(post: any) {
    await createPostUseCase.execute(post);
    console.log("create post", post);
  }

  async function editPost(post: any) {
    await editPostUseCase.execute(post);
    console.log("edit post", post);
  }

  async function deletePost(id: string) {
    await deletePostUseCase.execute(id);
    console.log("delete post", id);
  }

  async function printPostById(id: string) {
    try {
      const post = await getPostByIdUseCase.execute(id);
      console.log("post", post);
    } catch (error) {
      console.dir(error);
    }
  }

  async function printPostList() {
    const posts = await getPostListUseCase.execute();
    console.log("post list", structuredClone(posts));
  }
})();
