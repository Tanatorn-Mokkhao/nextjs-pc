import TodoForm from "@/components/form/todo-form/todo-form";
import { getTodo } from "@/controllers/todo/todo";

export default async function Todo() {
  const todoData = await getTodo();

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10 md:mt-60">
        <TodoForm />
        {/* shold seperate for scle able */}
        <div className="mt-10">
          {todoData.map((todo, index) => (
            <div key={index}>{todo.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
