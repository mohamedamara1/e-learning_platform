const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getCourseMaterial(Criteria) {
  const Material = await prisma.coursematerial.findUnique({
    where: Criteria,
  });
  return Material;
}

async function getAllMaterials() {
  const Materials = await prisma.coursematerial.findMany();
  return Materials;
}

async function addMaterial(Material) {
  const CreateMaterial = await prisma.coursematerial.create({ data: Material });
}

async function updateMaterial(Criteria, MaterialData) {
  const UpdateMaterial = prisma.coursematerial.update({
    where: Criteria,
    data: MaterialData,
  });
}

async function deleteMaterial(Criteria) {
  const DeleteMaterial = prisma.coursematerial.delete({
    where: Criteria,
  });
}

module.exports.getCourseMaterial = getCourseMaterial;
module.exports.getAllMaterials = getAllMaterials;
module.exports.addMaterial = addMaterial;
module.exports.updateMaterial = updateMaterial;
module.exports.deleteMaterial = deleteMaterial;
