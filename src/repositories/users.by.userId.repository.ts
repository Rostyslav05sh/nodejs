import { Request } from "express";

import { ApiError } from "../api-error";
import { reader, writer } from "../fs.services";
import {IUser} from "../interfaces/user.interface";

class UsersByUserIdRepository {
  public async getUsers() {
    return await reader();
  }

  public async getIndex(req: Request) {
    const userId = Number(req.params.userId);
    const users = await reader();
    const index = users.findIndex((user) => user.id === userId);
    if (index === -1) {
      throw new ApiError("user not found", 404);
    }
    return index;
  }

  public async updateUser(req: Request, dto: Partial<IUser>) {
    const userId = Number(req.params.userId);
    const users = await reader();
    const index = users.findIndex((user) => user.id === userId);
    if (index === -1) {
      throw new ApiError("user not found", 404);
    }
    users[index] = {
      ...users[index],
      name: dto.name,
      email: dto.email,
      password: dto.password,
    };
    await writer(users);
    return users[index];
  }

  public async deleteUser(req: Request) {
    const userId = Number(req.params.userId);
    const users = await reader();
    const index = users.findIndex((user) => user.id === userId);
    if (index === -1) {
      throw new ApiError("user not found", 404);
    }
    users.splice(index, 1);
    await writer(users);
    return index;
  }
}

export const usersByUserIdRepository = new UsersByUserIdRepository();
