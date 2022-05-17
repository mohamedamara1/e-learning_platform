const express = require("express");
const router = express.Router();

const verifySession =
  require("supertokens-node/recipe/session/framework/express").verifySession;
const exerciceServices = require("../../services/exerciceServices");
const permit = require("../middlewares/authorization").permit;

// @route  GET api/v1/courses/get_courses
// @desc   Get courses
// @access Private

router.get(
  "/get_practiceUnits_by_courseId_include_exercices",
  verifySession(),
  (req, res) => {
    // const { user_who_requested_id } = req.query;
    // const { courseId } = req.params.courseId;
    let courseId = req.query.courseId;

    exerciceServices
      .getPracticeUnitsByCourseIdIncludingExercices(courseId)
      .then((exerciceUnits) => {
        res.status(200).json(exerciceUnits);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({
          message: "There was a problem retrieving the exercice units.",
        });
      });
  }
);

// @route  GET api/v1/materials/get_materials
// @desc   Get materials
// @access Private

router.get("/get_practiceUnits_by_courseId/", verifySession(), (req, res) => {
  // const { user_who_requested_id } = req.query;
  let courseId = req.query.courseId;
  exerciceServices
    .getPracticeUnitsByCourseId(courseId)
    .then((practiceUnits) => {
      res.status(200).json(practiceUnits);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem retrieving the practice units.",
      });
    });
});

// @route  GET api/v1/materials/get_materials
// @desc   Get materials
// @access Private

router.get("/get_exercices_by_practiceUnitId/", verifySession(), (req, res) => {
  // const { user_who_requested_id } = req.query;
  let practiceUnitId = req.query.practiceUnitId;
  exerciceServices
    .getExercicesByPracticeUnitId(practiceUnitId)
    .then((exercices) => {
      res.status(200).json(exercices);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "There was a problem retrieving the exercices.",
      });
    });
});

router.post("/add_exercice", verifySession(), (req, res) => {
  exerciceServices
    .addExercice(req.exercice)
    .then(() => {
      res.status(200);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(400)
        .json({ message: "There was a problem adding the exercice." });
    });
});

router.put("/update_exercice", verifySession(), (req, res) => {
  materialServices
    .updateExercice({ id: req.exerciceId }, req.exercice)
    .then(() => {
      res.status(200);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(400)
        .json({ message: "There was a problem updating the exercice." });
    });
});

router.delete("/delete_exercice", verifySession(), (req, res) => {
  exerciceServices
    .deleteExercice({ id: req.ExerciceId })
    .then(() => {
      res.status(200);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(400)
        .json({ message: "There was a problem deleting the exercice." });
    });
});
module.exports = router;
