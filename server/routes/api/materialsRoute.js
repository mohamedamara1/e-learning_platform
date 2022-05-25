const express = require("express");
const router = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/materials')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })

const verifySession =
  require("supertokens-node/recipe/session/framework/express").verifySession;
const materialServices = require("../../services/materialServices");
const permit = require("../middlewares/authorization").permit;

// @route  GET api/v1/materials/get_materials
// @desc   Get materials
// @access Private

router.get(
  "/get_materialUnits_by_courseId_include_materials/",
  verifySession(),
  (req, res) => {
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
  }
);

// @route  GET api/v1/materials/get_materials
// @desc   Get materials
// @access Private

router.get("/get_materialUnits_by_courseId/", verifySession(), (req, res) => {
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

router.get("/get_materials_by_materialUnitId/", verifySession(), (req, res) => {
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


router.post("/add_material", upload.any(), (req, res) => {
  console.log(req.files);
  materialServices
  .addMaterial(req.body.materialData, req.body.attachements)
  .then((material) => { res.status(200).json(material); })
  .catch((error) => {
    console.log(error);
    res.status(400).json({message: "There was a problem adding the material."});
  });
});

router.put("/update_material", verifySession(), (req, res) => {
  materialServices
    .updateMaterial({ id: req.materialId }, req.Material)
    .then(() => {
      res.status(200);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(400)
        .json({ message: "There was a problem updating the material." });
    });
});

router.delete("/delete_material", verifySession(), (req, res) => {
  materialServices
    .deleteMaterial({ id: materialId })
    .then(() => {
      res.status(200);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(400)
        .json({ message: "There was a problem deleting the material." });
    });
});
module.exports = router;
