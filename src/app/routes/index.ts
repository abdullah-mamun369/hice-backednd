import { Router } from "express";

import { UserRoutes } from "../modules/user/user.route";
import { AdminRoutes } from "../modules/Admin/admin.route";
import { BuyerRoutes } from "../modules/Buyer/buyer.route";
import { TrainingVideoRoutes } from "../modules/TrainingVideo/trainingVideo.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/admins",
    route: AdminRoutes,
  },
  {
    path: "/buyers",
    route: BuyerRoutes,
  },
  {
    path: "/training-videos",
    route: TrainingVideoRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
