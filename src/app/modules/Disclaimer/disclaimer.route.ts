import express from "express";
import { DisclaimerControllers } from "./disclaimer.controller";
import { DisclaimerValidation } from "./disclaimer.validation";
import validateRequest from "../../middlewares/validateRequest";
// import auth from "../../middlewares/auth";
// import { USER_ROLE } from "../user/user.constant";

const router = express.Router();
// const adminAuth = auth(USER_ROLE.superAdmin, USER_ROLE.admin);

// Create disclaimer
router.post(
  "/create-disclaimer",
  //   adminAuth,
  validateRequest(DisclaimerValidation.createDisclaimerValidationSchema),
  DisclaimerControllers.createDisclaimer,
);

// Get all disclaimers
router.get(
  "/",
  // adminAuth,
  DisclaimerControllers.getAllDisclaimers,
);

// Get single disclaimer
router.get(
  "/:id",
  // adminAuth,
  DisclaimerControllers.getSingleDisclaimer,
);

// Update disclaimer
router.patch(
  "/:id",
  //   adminAuth,
  validateRequest(DisclaimerValidation.updateDisclaimerValidationSchema),
  DisclaimerControllers.updateDisclaimer,
);

// Delete disclaimer (soft delete or hard delete as needed)
router.delete(
  "/:id",
  // adminAuth,
  DisclaimerControllers.deleteDisclaimer,
);

export const DisclaimerRoutes = router;
