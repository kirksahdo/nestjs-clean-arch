import { UserDataBuilder } from '@/users/domain/testing/user-data-builder';
import { IUserProps, UserEntity } from '../../user.entity';

describe('User Entity Unit Tests', () => {
  let props: IUserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = UserDataBuilder({});
    sut = new UserEntity({ ...props });
  });

  it('should create a user entity with the correct props', () => {
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
  });

  it('should return the correct name', () => {
    expect(sut.name).toEqual(props.name);
  });

  it('should return the correct email', () => {
    expect(sut.email).toEqual(props.email);
  });

  it('should return the correct password', () => {
    expect(sut.password).toEqual(props.password);
  });

  it('should return the correct created at date', () => {
    expect(sut.createdAt).toBeDefined();
    expect(sut.createdAt).toBeInstanceOf(Date);
  });
});
