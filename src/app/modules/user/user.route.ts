import express, { NextFunction, Request, Response } from "express";
// import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { upload } from "../../utils/sendImageToCloudinary";
import { createAdminValidationSchema } from "../Admin/admin.validation";
import { UserControllers } from "./user.controller";
import { createBuyerValidationSchema } from "../Buyer/buyer.validation";
// import { UserValidation } from "./user.validation";

const router = express.Router();

router.post(
  "/create-admin",
  // auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(createAdminValidationSchema),
  UserControllers.createAdmin,
);

router.post(
  "/create-buyer",
  // auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(createBuyerValidationSchema),
  UserControllers.createBuyer,
);

export const UserRoutes = router;
