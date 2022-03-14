const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getPost(Criteria) {
  const Post = await prisma.teacherpost.findUnique({
    where: Criteria,
  });
  return Post;
}

async function getAllPosts() {
  const Posts = await prisma.teacherpost.findMany();
  return Posts;
}

async function getPostsByCriteria(Criteria, includes) {
  const Posts = await prisma.teacherPost.findMany({
    where: Criteria,
    include: includes,
  });
  return Posts;
}

async function addPost(Post) {
  const CreatePost = await prisma.teacherpost.create({ data: Post });
}

async function updatePost(Criteria, PostData) {
  const UpdatePost = prisma.teacherpost.update({
    where: Criteria,
    data: PostData,
  });
}

async function deletePost(Criteria) {
  const DeletePost = prisma.teacherpost.delete({
    where: Criteria,
  });
}

module.exports.getPost = getPost;
module.exports.getAllPosts = getAllPosts;
module.exports.getPostsByCriteria = getPostsByCriteria;
module.exports.addPost = addPost;
module.exports.updatePost = updatePost;
module.exports.deletePost = deletePost;
