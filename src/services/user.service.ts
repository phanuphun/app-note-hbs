import UserModel from "../models/user.model";

export const getUserById = async (userId: string) => {
    return await UserModel.findById(userId).select('-password');
}