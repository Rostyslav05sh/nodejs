import { NextFunction, Request, Response } from "express";

import { IUser } from "../interfaces/user.interface";
import { usersByUserIdService } from "../services/users.by.userId.service";

class UsersByUserIdController {
  public async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await usersByUserIdService.getUsers();

      const index = await usersByUserIdService.getIndex(req);

      res.json(users[index]);
    } catch (e) {
      next(e);
    }
  }

  public async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as Partial<IUser>;
      const userIndex = await usersByUserIdService.updateUser(req, dto);

      res.json(userIndex);
    } catch (e) {
      next(e);
    }
  }

  public async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      await usersByUserIdService.deleteUser(req);

      res.sendStatus(204);
    } catch (e) {
      next(e);
    }
  }
}

export const userByUserIdController = new UsersByUserIdController();
