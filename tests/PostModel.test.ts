import PostModel from '../src/models/PostModel';


describe('post', () => {
  it('should return Array', async () => {
    const response = PostModel.getInstance();
    expect.arrayContaining(response.get());
  })

  it('should create post', async () => {
    const response = PostModel.getInstance();
    expect(response.create(5, 3, "Hello 2nd")).toEqual(true);
  })

  it('should create post', async () => {
    const response = PostModel.getInstance();
    expect(response.create(5, 3, "Hello 2nd")).toEqual(true);
  })
})
