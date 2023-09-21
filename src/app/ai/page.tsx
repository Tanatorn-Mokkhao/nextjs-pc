import AiForm from "@/components/form/ai-form/ai-form";
import { aiDetectRudeWord } from "@/controllers/aiDetectRudeWord/aiDetectRudeWord";

const Ai = () => {
  // we can intrgate this with db to save data if not rude
  const completion = async (message: string) => {
    aiDetectRudeWord(message);
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10 md:mt-60 ">
        <AiForm />
      </div>
    </div>
  );
};

export default Ai;
