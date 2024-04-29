import { Router } from "express";

import { userByUserIdController } from "../controllers/users.by.userId.controller";
import { commonMiddleware } from "../middlewarees/common.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.get("/:userId", commonMiddleware.isIdValid, commonMiddleware.isExist, userByUserIdController.getUserById);
router.put("/:userId", commonMiddleware.isIdValid, commonMiddleware.isExist, commonMiddleware.isBodyValid(UserValidator.update), userByUserIdController.updateUserById);
router.delete("/:userId", commonMiddleware.isIdValid, commonMiddleware.isExist, commonMiddleware.isBodyValid(UserValidator.create), userByUserIdController.deleteUserById);

export const userByUserIdRouter = router;
