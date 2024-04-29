import { usersByUserIdRepository } from "../repositories/users.by.userId.repository";
import { IUser } from "../interfaces/user.interface";

class UsersByUserIdService {
  public async getUserById(userId: string) {
    const user = await usersByUserIdRepository.getUserById(userId);
    return user;
  }

  public async updateUserById(userId: string, dto: Partial<IUser>) {
    return await usersByUserIdRepository.updateUserById(userId, dto);
  }


  public async deleteUserById(userId: string) {
    const deletedUser = await usersByUserIdRepository.deleteUserById(userId);
    return deletedUser;
  }
}

export const usersByUserIdService = new UsersByUserIdService();
