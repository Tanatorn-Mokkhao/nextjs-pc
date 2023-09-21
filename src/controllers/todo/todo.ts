"use server";
import { TodoModelPayload } from "@/interface/common/todo.interface";
import { createTodoService, getTodoService } from "@/services/todo/todo";
import { revalidatePath } from "next/cache";

export const getTodo = async () => {
  const data = await getTodoService();

  return data;
};

export const createTodo = async (payload: TodoModelPayload) => {
  const data = await createTodoService(payload);
  revalidatePath("/");
  return data;
};
