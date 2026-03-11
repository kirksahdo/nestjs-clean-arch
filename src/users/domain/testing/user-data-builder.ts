import { faker } from '@faker-js/faker';
import { IUserProps } from '../entities/user.entity';

export function UserDataBuilder(props: Partial<IUserProps>): IUserProps {
  return {
    name: props.name ?? faker.person.firstName(),
    email: props.email ?? faker.internet.email(),
    password: props.password ?? faker.internet.password(),
    createdAt: props.createdAt ?? faker.date.past(),
  };
}
