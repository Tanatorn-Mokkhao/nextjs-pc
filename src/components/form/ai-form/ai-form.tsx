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
import { aiDetectRudeWord } from "@/controllers/aiDetectRudeWord/aiDetectRudeWord";
import ButtonWrapper from "@/components/button-wrapper/button-wrapper";
import FormLoadingHook from "@/hooks/form-loading-hook/form-loading-hook";

const AiForm = () => {
  const { loading, setLoading } = FormLoadingHook();

  const formSchema = z.object({
    message: z.string().nonempty({
      message: "required field",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    const response = await aiDetectRudeWord(values.message);
    console.log(response);
    if (response.content?.trim() === "Yes") {
      form.setError("message", {
        type: "custom",
        message: "this message is rude",
      });
    }

    if (response.content?.trim() === "No") {
      form.setError("message", {
        type: "custom",
        message: "this message is not rude",
      });
    }
    setLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Detect rude message</FormLabel>
              <FormControl>
                <Input placeholder="type here..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonWrapper pending={loading} />
      </form>
    </Form>
  );
};

export default AiForm;
