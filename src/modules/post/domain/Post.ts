interface PostProps {
  id: string;
  title: string;
}

export class Post {
  id: string;
  title: string;

  constructor(props: PostProps) {
    this.id = props.id;
    this.title = props.title;
  }
}
