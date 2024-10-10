import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

// Get All User
const getAllUser = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUserFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All users data are retrived successfully',
    data: result,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserServices.updateUserIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User is updated successfully!!',
    data: result,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserServices.deleteUserFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User is Deleted successfully!!!',
    data: result,
  });
});

// Get user profile
const getMyProfile = catchAsync(async (req, res) => {
  const { email } = req.params;
  const result = await UserServices.getMyProfileFromDB(email);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Your profile data is retrieved successfully',
    data: result,
  });
});

// Update user profile
const updateMyProfile = catchAsync(async (req, res) => {
  const { email } = req.params;
  const result = await UserServices.updateMyProfileIntoDB(email, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'your profile is done',
    data: result,
  });
});

// Follow a user
const followUser = catchAsync(async (req, res) => {
  const { userId, targetId } = req.body;
  const result = await UserServices.followUser(userId, targetId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'you are following this user',
    data: result,
  });
});

// Unfollow a user
const unfollowUser = catchAsync(async (req, res) => {
  const { userId, targetId } = req.body;
  const result = await UserServices.unfollowUser(userId, targetId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'you have unfollowed this user successfully',
    data: result,
  });
});

export const UserControllers = {
  getAllUser,
  updateUser,
  deleteUser,
  updateMyProfile,
  getMyProfile,
  followUser,
  unfollowUser,
};
