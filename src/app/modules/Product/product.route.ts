import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductControllers } from "./product.controller";
import { ProductValidations } from "./product.validation";
import { upload } from "../../utils/sendImageToCloudinary";

const router = express.Router();

router.post(
  "/create-product",
  upload.fields([
    { name: "twoDFile", maxCount: 1 },
    { name: "threeDFile", maxCount: 1 },
  ]),
  (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(ProductValidations.createProductValidationSchema),
  ProductControllers.createProduct,
);

router.get("/", ProductControllers.getAllProducts);

router.get("/:id", ProductControllers.getSingleProduct);

router.patch(
  "/:id",
  upload.fields([
    { name: "twoDFile", maxCount: 1 },
    { name: "threeDFile", maxCount: 1 },
  ]),
  (req, res, next) => {
    if (req.body.data) {
      req.body = JSON.parse(req.body.data);
    }
    next();
  },
  validateRequest(ProductValidations.updateProductValidationSchema),
  ProductControllers.updateProduct,
);

router.delete("/:id", ProductControllers.deleteProduct);

export const ProductRoutes = router;
