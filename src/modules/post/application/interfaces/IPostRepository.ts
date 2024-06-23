import { ICrudRepository } from '../../../shared/application/interfaces/index';
import { Post } from '../../entities/Post';

export interface IPostRepository extends ICrudRepository<Post, string> {}
