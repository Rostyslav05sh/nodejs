import { IUser } from "../interfaces/user.interface";
import { User } from "../models/user.model";

class UsersByUserIdRepository {
  public async getUserById(userId: string): Promise<IUser> {
    return await User.findById(userId);
  }

  public async updateUserById(userId: string, dto: Partial<IUser>): Promise<IUser> {
    return await User.findByIdAndUpdate(userId, dto, {
      returnDocument: 'after'
    });
  }

  public async deleteUserById(userId: string): Promise<void> {
    await User.deleteOne({ _id: userId });
  }
}

export const usersByUserIdRepository = new UsersByUserIdRepository();
