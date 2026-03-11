export type IUserProps = {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
};

export class UserEntity {
  constructor(public readonly props: IUserProps) {
    this.props.createdAt ??= new Date();
  }
}
