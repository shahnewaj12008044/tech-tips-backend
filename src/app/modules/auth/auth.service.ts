import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { IUser } from "../user/user.interface";

const registerUser = async (payload: IUser) => {
    const user = await User.isUserExist(payload.email);
    if (user) {
      throw new AppError(httpStatus.CONFLICT, 'This user is already exist!');
    }
    const result = await User.create(payload);
    return result;
  };
  

  export const AuthServices = {
    registerUser,
  }