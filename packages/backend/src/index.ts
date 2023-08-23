import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { userRouter } from "./routers/userRouter";
import express from "express";

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({});
type Context = inferAsyncReturnType<typeof createContext>;
const t = initTRPC.context<Context>().create();
const appRouter = t.router({
  users: userRouter,
});

const app = express();
app.use(
  "/api",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000/");
});
