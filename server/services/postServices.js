const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getPost(Criteria) {
  const Post = await prisma.post.findUnique({
    where: Criteria,
  });
  return Post;
}

async function getAllPosts() {
  const Posts = await prisma.post.findMany();
  return Posts;
}

async function getPostsByCriteria(Criteria, includes) {
  const Posts = await prisma.post.findMany({
    where: Criteria,
    include: includes,
  });
  return Posts;
}

async function getPostsByCourseId(courseId) {
  const Posts = await prisma.post.findMany({
    where: {
      courseId: courseId,
    },
    include: {
      postAttachements: true,
      postAttachements: {
        select: {
          attachement: true,
        },
      },
    },
  });
  return Posts;
}
async function addPost(Post) {
  const CreatePost = await prisma.post.create({ data: Post });
}

async function updatePost(Criteria, PostData) {
  const UpdatePost = prisma.post.update({
    where: Criteria,
    data: PostData,
  });
}

async function deletePost(Criteria) {
  const DeletePost = prisma.post.delete({
    where: Criteria,
  });
}

module.exports.getPost = getPost;
module.exports.getAllPosts = getAllPosts;
module.exports.getPostsByCriteria = getPostsByCriteria;
module.exports.addPost = addPost;
module.exports.updatePost = updatePost;
module.exports.deletePost = deletePost;
module.exports.getPostsByCourseId = getPostsByCourseId;
