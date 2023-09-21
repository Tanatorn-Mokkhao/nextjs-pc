"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTodo } from "@/controllers/todo/todo";
import { TodoModelPayload } from "@/interface/common/todo.interface";
import { useRef } from "react";
import ButtonWrapper from "@/components/button-wrapper/button-wrapper";
import FormLoadingHook from "@/hooks/form-loading-hook/form-loading-hook";

const TodoForm = () => {
  const { loading, setLoading } = FormLoadingHook();
  const formSchema = z.object({
    todo: z.string().nonempty({
      message: "required field",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todo: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    const payload = {
      name: values.todo,
    };

    form.reset();
    await createTodo(payload);
    setLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="todo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Todo</FormLabel>
              <FormControl>
                <Input placeholder="Add to do..." {...field} />
              </FormControl>
              <FormDescription>This for add todo list.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonWrapper pending={loading} />
      </form>
    </Form>
  );
};

export default TodoForm;
