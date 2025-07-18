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

const getMe = catchAsync(async (req, res) => {
  // const token = req.headers.authorization;

  // if (!token) {
  //   throw new AppError(httpStatus.NOT_FOUND, 'Token not found !');
  // }

  const { userEmail, role } = req.user;

  const result = await UserServices.getMe(userEmail, role);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is retrieved succesfully",
    data: result,
  });
});

const changeStatus = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await UserServices.changeStatus(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Status is updated succesfully",
    data: result,
  });
});

export const UserControllers = {
  createAdmin,
  createBuyer,
  getMe,
  changeStatus,
};
