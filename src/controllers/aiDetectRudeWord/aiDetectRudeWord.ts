"use server"
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


export const aiDetectRudeWord = async (message: string) =>  {
    const response = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content:
              `The fallowing AI tool helps to identity if this sentence is a rude word or not.\n\n` +
  
              `User: mart\n` +
              `sentence: fuck you mathor fucker\n` +
              `should reply: Yes\n\n` +
  
              `User: martin\n` +
              `sentence: Hi how are you \n` +
              `should reply: No\n\n` +
              
              `User: mart\n` +
              `sentence: ${message} \n` +
              `should reply: `,
          },
        ],
        model: "gpt-3.5-turbo",
        max_tokens: 7,
        temperature: 0,
      });

 
      return response.choices[0].message
}