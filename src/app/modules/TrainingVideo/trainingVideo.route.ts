import express from "express";
import { TrainingVideoControllers } from "./trainingVideo.controller";
import { TrainingVideoValidation } from "./trainingVideo.validation";
import validateRequest from "../../middlewares/validateRequest";
// import auth from "../../middlewares/auth";
// import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

// Only accessible by superAdmin and admin
// const adminAuth = auth(USER_ROLE.superAdmin, USER_ROLE.admin);

// Create Training Video
router.post(
  "/create-training-video",
  //   adminAuth,
  validateRequest(TrainingVideoValidation.createTrainingVideoValidationSchema),
  TrainingVideoControllers.createTrainingVideo,
);

// Get a single Training Video by ID
router.get(
  "/:id",
  // adminAuth,
  TrainingVideoControllers.getSingleTrainingVideo,
);

// Update Training Video
router.patch(
  "/:id",
  //   adminAuth,
  validateRequest(TrainingVideoValidation.updateTrainingVideoValidationSchema),
  TrainingVideoControllers.updateTrainingVideo,
);

// Get all Training Videos
router.get(
  "/",
  // adminAuth,
  TrainingVideoControllers.getAllTrainingVideos,
);

// Delete Training Video (soft delete)
router.delete(
  "/:id",
  // adminAuth,
  TrainingVideoControllers.deleteTrainingVideo,
);

export const TrainingVideoRoutes = router;
