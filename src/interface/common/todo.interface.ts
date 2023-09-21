import { Prisma } from "@prisma/client";

export interface TodoModelPayload extends Prisma.TodoCreateInput {
  id?: number;
}
