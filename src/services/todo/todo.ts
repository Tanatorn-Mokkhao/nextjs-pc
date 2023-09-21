import { TodoModelPayload } from "@/interface/common/todo.interface";
import { prisma } from "@/lib/prisma";

export const getTodoService = async () => {
  const data = await prisma.todo.findMany();

  return data;
};

export const createTodoService = async (payload: TodoModelPayload) => {
  const data = await prisma.todo.create({
    data: {
      ...payload,
    },
  });

  return data;
};
