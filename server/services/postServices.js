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
    orderBy:{
      createdAt :"desc"
    }
  });
  return Posts;
}
async function addPost(postData,attachementData) {
  console.log(postData);
  const CreatePost = await prisma.post.create({ 
    data: {
      text: postData.text,
      course : {
        connect: {
          id: postData.courseId,
        },
      },
    }

  });
  attachementData.map(async (attachement)=>{
    const Createattachement = await prisma.attachement.create({
      data : attachement,
      select: {id:true}
      });
    console.log(Createattachement);
    const CreatepostAttachement = await prisma.postAttachement.create({
      data : {postId:CreatePost.id, attachementId:Createattachement.id}
      });
      console.log(CreatepostAttachement);
  });

  return CreatePost;
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
