import { publicProcedure, router } from '../utils/trpc';
import { z } from 'zod';
import { db } from '../../db';

const appRouter = router({
  getUser: publicProcedure
    .input(z.number())
    .query(async ( request ) => {
      const { input } = request;
      const user = await db.users.findUserById(input);
      return user;
    }),
  getUsers: publicProcedure
    .query(async () => {
      const users = await db.users.findAllUsers();
      return users;
    }
  ),
  createUser: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ( request ) => {
      const { input } = request;
      const user = await db.users.createUser(input.name);
      return user;
    }
  ),
  deleteUser: publicProcedure
    .input(z.number())
    .query(async ( request ) => {
      const { input } = request;
      const user = await db.users.findUserById(input);
      if (user) {
        await db.users.deleteUser(input);
      }
      return user;
    }
  ),
});

export default appRouter;