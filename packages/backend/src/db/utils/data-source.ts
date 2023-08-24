import "reflect-metadata";
import { DataSource } from "typeorm";
import { configDotenv } from "dotenv";
import { User } from "../entity/User";

configDotenv()

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PG_HOSTNAME,
  port: 5432,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User],
});

