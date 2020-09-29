import UserModel from '../src/models/UserModel';


describe('User Model', () => {
  it('should be return arrray', () => {
    const userModel = UserModel.getInstance();
    expect.arrayContaining(userModel.get())
  });

  it('should be return user john', () => {
    const userModel = UserModel.getInstance();
    expect(userModel.getById(1)?.name).toEqual('John');
  })

  it('should be create user', () => {
    const userModel = UserModel.getInstance();
    expect(userModel.create(5, "Budi", '1233456', 'admin')).toEqual(true);
  })
});