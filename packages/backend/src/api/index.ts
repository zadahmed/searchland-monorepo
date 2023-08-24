import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import { AppDataSource } from "../db/utils/data-source";
import helmet from "helmet";
import cors from "cors";
import appRouter from "./routers";

const PORT = process.env.PORT || 4000;

async function startServer() {

  const app = express();

  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(
    "/api",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
    })
  );

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
  });
}


AppDataSource.initialize().then(() => {
  startServer();
  console.log('Database initialized');
});