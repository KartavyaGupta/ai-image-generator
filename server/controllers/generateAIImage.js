// controllers/generateImage.js
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;
    if (!prompt || !prompt.trim())
      return res.status(400).json({ error: "Prompt is required" });

    const result = await openai.images.generate({
      model: "dall-e-3",
      prompt: "a white siamese cat",
      size: "1024x1024",
    });

    // Call DALL·E (OpenAI v4 SDK)
    console.log("data is", result);

    // `data` is an array of results – take the first one
    return res.status(200).json({ photo: result.data[0].url });
  } catch (err) {
    // console.error("generateImage error:", err);
    next(err); // forward to your global error handler
  }
};
