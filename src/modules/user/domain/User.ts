interface UserProps {
  id: string;
  name: string;
}

export class User {
  id: string;
  name: string;

  constructor(props: UserProps) {
    this.id = props.id;
    this.name = props.name;
  }
}
