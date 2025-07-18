import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AdminControllers } from "./admin.controller";
import { updateAdminValidationSchema } from "./admin.validation";
import { USER_ROLE } from "../user/user.constant";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/", auth(USER_ROLE.superAdmin), AdminControllers.getAllAdmins);

router.get("/:id", auth(USER_ROLE.superAdmin), AdminControllers.getSingleAdmin);

router.patch(
  "/:id",
  auth(USER_ROLE.superAdmin),
  validateRequest(updateAdminValidationSchema),
  AdminControllers.updateAdmin,
);

router.delete("/:id", auth(USER_ROLE.superAdmin), AdminControllers.deleteAdmin);

export const AdminRoutes = router;
