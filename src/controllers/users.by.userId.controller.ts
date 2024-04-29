import { NextFunction, Request, Response } from "express";

import { IUser } from "../interfaces/user.interface";
import { usersByUserIdService } from "../services/users.by.userId.service";

class UsersByUserIdController {
  public async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.userId;
      const user = await usersByUserIdService.getUserById(userId);
      res.json(user);
    } catch (e) {
      next(e);
    }
  }

  public async updateUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as Partial<IUser>;
      const userId = req.params.userId;

      const updatedUser = await usersByUserIdService.updateUserById(userId, dto);

      res.json(updatedUser);
    } catch (e) {
      next(e);
    }
  }

  public async deleteUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.userId;

      await usersByUserIdService.deleteUserById(userId);

      res.sendStatus(204);
    } catch (e) {
      next(e);
    }
  }
}

export const userByUserIdController = new UsersByUserIdController();
