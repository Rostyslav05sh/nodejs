import dotenv from "dotenv";

dotenv.config();

export const config = {
  Port: Number(process.env.Port),
  Host: process.env.Host,
  Mongo_URL: process.env.Mongo_URL
};