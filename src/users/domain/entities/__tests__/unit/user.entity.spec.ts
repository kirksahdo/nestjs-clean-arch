import { IUserProps, UserEntity } from '../../user.entity';
import { faker } from '@faker-js/faker';

describe('User Entity Unit Tests', () => {
  let props: IUserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    sut = new UserEntity({ ...props });
  });

  it('should create a user entity with the correct props', () => {
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
  });
});
