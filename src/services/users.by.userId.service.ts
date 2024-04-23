import { Request } from "express";

import { usersByUserIdRepository } from "../repositories/users.by.userId.repository";
import { IUser } from "../interfaces/user.interface";

class UsersByUserIdService {
  public async getUsers() {
    return await usersByUserIdRepository.getUsers();
  }

  public async getIndex(req: Request): Promise<number> {
    return await usersByUserIdRepository.getIndex(req);
  }

  public async updateUser(req: Request, dto: Partial<IUser>) {
    return await usersByUserIdRepository.updateUser(req, dto);
  }

  public async deleteUser(req: Request) {
    return await usersByUserIdRepository.deleteUser(req);
  }
}

export const usersByUserIdService = new UsersByUserIdService();
