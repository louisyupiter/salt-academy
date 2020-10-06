class PostModel {
  private static instance: PostModel;
  posts = [
    { id: 1, authorId: 1, name: "Hello world" },
    { id: 2, authorId: 1, name: "Hello world second edition" },
    { id: 3, authorId: 2, name: "NodeJS world" },
  ]

  private constructor() {
  }

  get() {
    return this.posts;
  }

  getByAuthorId(authorId: number) {
    const posts = this.posts.filter(x => x.authorId == authorId);
    return posts;
  }

  create(id: number, authorId: number, name: string) {
    this.posts.push({ id: id, authorId: authorId, name: name });
    return true;
  }

  update(id: number, name: string, authorId: number) {
    const postIndex = this.posts.findIndex(x => x.id == id);
    if (postIndex < 0) {
      throw new Error('Not found')
    }
    const post = this.posts[postIndex];
    if (post.authorId !== authorId) {
      throw new Error('Unauthorized')
    }
    this.posts[postIndex].name = name;
    return this.posts[postIndex];
  }


  public static getInstance(): PostModel {
    if (!PostModel.instance) {
      PostModel.instance = new PostModel();
    }

    return PostModel.instance;
  }
}

export default PostModel;