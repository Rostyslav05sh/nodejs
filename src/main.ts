import cors from "cors";
import express, { NextFunction, Request, Response } from "express";

import { ApiError } from "./api-error";
import { userRouter } from "./routers/user.router";
import { userByUserIdRouter } from "./routers/users.by.userId.router";

const app = express();

const Port = 3006;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/users", userByUserIdRouter);

app.use(
  "*",
  (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    return res.status(err.status || 500).json(err.message);
  },
);

process.on("uncaughtException", (error) => {
  console.error("uncaughtException: ", error);
  process.exit(1);
});

app.listen(Port, "localhost", () => {
  console.log(`Server is running at http://localhost:${Port}/`);
});