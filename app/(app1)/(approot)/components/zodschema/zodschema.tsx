
import { z } from "Zod";


export const inputSchema  = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string(),
  lovesong: z.string(),
  gender: z.union([z.literal('M'), z.literal('F'), z.literal('Others')])
});

//you may skip these type
export type Inputs = z.infer<typeof inputSchema>;