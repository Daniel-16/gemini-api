import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI(`${process.env.GEMINI_KEY}`);

export async function generate(req, res) {
  const { userPrompt } = req.body;
  const model = genAi.getGenerativeModel({ model: "gemini-pro" });

  const prompt = userPrompt;

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  res.status(201).json({
    message: text,
  });
  // console.log(response);
}
