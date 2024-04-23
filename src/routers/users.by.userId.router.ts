import { Router } from "express";

import { userByUserIdController } from "../controllers/users.by.userId.controller";

const router = Router();

router.get("/:userId", userByUserIdController.getUser);
router.put("/:userId", userByUserIdController.updateUser);
router.delete("/:userId", userByUserIdController.deleteUser);

export const userByUserIdRouter = router;
