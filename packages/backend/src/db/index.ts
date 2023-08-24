import { userRepository } from "./repositories/userRepository"

export const db = {
  users: {
    findAllUsers: async () => {
      const users = await userRepository.find();
      return users;
    },
    findUserById: async (id: number) => userRepository.findOneBy({ id }),
    createUser: async (name: string) => {
      const user = userRepository.create({ name });
      await userRepository.save(user);
      return user;
    },
    deleteUser: async (id: number) => {
      const user = await userRepository.findOneBy({ id });
      if (user) {
        await userRepository.delete(user);
        return user;
      }
    },
  }
}