class UserModel {
  private static instance: UserModel;
  users = [
    { id: 1, name: "John", password: "123", role: "admin" },
    { id: 2, name: "Hello", password: "456", role: "user" },
    { id: 3, name: "Annie", password: "321", role: "user" },
    { id: 4, name: "Don", password: "don123", role: "admin" },
  ];

  private constructor() {
  }

  get() {
    return this.users;
  }

  getById(id: number) {
    return this.users.find(x => x.id == id);
  }

  create(id: number, name: string, password: string, role: string) {
    this.users.push({ id: id, name: name, password: password, role: role });
    return true;
  }

  update(id: number, name: string) {
    const index = this.users.findIndex(x => x.id === id);
    if (index < 0) {
      return false;
    }
    this.users[index].name = name;
    return this.users[index];
  }

  public static getInstance(): UserModel {
    if (!UserModel.instance) {
      UserModel.instance = new UserModel();
    }

    return UserModel.instance;
  }
}

export default UserModel;