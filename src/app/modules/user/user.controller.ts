import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";

const createAdmin = catchAsync(async (req, res) => {
  const { password, admin: adminData } = req.body;

  const result = await UserServices.createAdminIntoDB(
    req.file,
    password,
    adminData,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin is created succesfully",
    data: result,
  });
});

const createBuyer = catchAsync(async (req, res) => {
  const { password, buyer: buyerData } = req.body;

  const result = await UserServices.createBuyerIntoDB(
    req.file,
    password,
    buyerData,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Buyer is created succesfully",
    data: result,
  });
});

export const UserControllers = {
  createAdmin,
  createBuyer,
};
