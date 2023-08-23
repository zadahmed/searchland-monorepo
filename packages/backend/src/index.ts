import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { userRouter } from "./routers/userRouter";
import express from "express";
import { createConnection } from './utils/data-source'; 
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

const PORT = process.env.PORT || 4000;

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({});
type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();
const appRouter = t.router({
  users: userRouter,
});

async function startServer() {
  // Connect to the database
  await createConnection();

  const app = express();

  // Middlewares
  app.use(cors());
  app.use(helmet());
  app.use(morgan('combined')); 
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(
    "/api",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
  });
}

startServer();
