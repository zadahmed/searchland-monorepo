import { AppDataSource } from "../utils/data-source";
import { User } from "../entity/User";

export const userRepository = AppDataSource.getRepository(User);