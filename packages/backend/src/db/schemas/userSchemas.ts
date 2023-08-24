import { z } from "zod";

export const UserInput = z.object({
  firstName: z.string().nonempty("First name cannot be empty"),
  lastName: z.string().nonempty("Last name cannot be empty"),
  age: z.number().int("Age must be an integer").min(0, "Age must be positive"),
});

export const UserIdInput = z.object({
  id: z.number(),
});
