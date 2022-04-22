const express = require("express");
const router = express.Router();

const materialServices = require("../../services/materialServices");

// @route  GET api/v1/materials/get_materials
// @desc   Get materials
// @access Private

router.get("/get_materialUnits_by_courseId_include_materials/", (req, res) => {
  // const { user_who_requested_id } = req.query;
  let courseId = req.query.courseId;
  materialServices
    .getMaterialUnitsByCourseIdIncludingMaterials(courseId)
    .then((materials) => {
      res.status(200).json(materials);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem retrieving the material units.",
      });
    });
});

// @route  GET api/v1/materials/get_materials
// @desc   Get materials
// @access Private

router.get("/get_materialUnits_by_courseId/", (req, res) => {
  // const { user_who_requested_id } = req.query;
  let courseId = req.query.courseId;
  materialServices
    .getMaterialUnitsByCourseId(courseId)
    .then((materialUnits) => {
      res.status(200).json(materialUnits);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem retrieving the material units.",
      });
    });
});

// @route  GET api/v1/materials/get_materials
// @desc   Get materials
// @access Private

router.get("/get_materials_by_materialUnitId/", (req, res) => {
  // const { user_who_requested_id } = req.query;
  let materialUnitId = req.query.materialUnitId;
  materialServices
    .getMaterialsByMaterialUnitId(materialUnitId)
    .then((materials) => {
      res.status(200).json(materials);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem retrieving the materials.",
      });
    });
});


router.post("/add_material", (req, res) => {
  materialServices
  .addMaterial(req.Material)
  .then(() => { res.status(200); })
  .catch((error) => {
    console.log(error);
    res.status(400).json({message: "There was a problem adding the material."});
  });
});

router.put("/update_material", (req, res) => {
  materialServices
  .updateMaterial({id: req.materialId}, req.Material)
  .then(() => { res.status(200); })
  .catch((error) => {
    console.log(error);
    res.status(400).json({message: "There was a problem updating the material."})
  });
});

router.delete("/delete_material", (req, res) => {
  materialServices
  .deleteMaterial({id: materialId})
  .then(() => {res.status(200);})
  .catch((error)=>{
    console.log(error);
    res.status(400).json({message: "There was a problem deleting the material."})
  })
});
module.exports = router;
