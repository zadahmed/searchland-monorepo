import { initTRPC } from "@trpc/server";
import { User } from "../entity/User";
import { UserIdInput, UserInput } from "../schemas/userSchemas";

const t = initTRPC
  .context<{
    createUser: (user: Omit<User, "id">) => Promise<User>;
    getAllUsers: () => Promise<User[]>;
    deleteUser: (id: number) => Promise<boolean>;
  }>()
  .create();

export const userRouter = t.router({
  getAllUsers: t.procedure.query(async (opts) => {
    return await opts.ctx.getAllUsers();
  }),

  addUser: t.procedure.input(UserInput).mutation(async (opts) => {
    return await opts.ctx.createUser({
      firstName: opts.input.firstName,
      lastName: opts.input.lastName,
      age: opts.input.age,
    });
  }),

  deleteUser: t.procedure.input(UserIdInput).mutation(async (opts) => {
    return {
      success: await opts.ctx.deleteUser(opts.input.id),
    };
  }),
});

export type UserRouter = typeof userRouter;
