# Firebase


# Gemini Api Configuration and SystemInstruction
```js
import { GoogleGenAI } from "@google/genai";

const gemini = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_KEY,
});

export async function getMovieSuggestions(prompt) {
    const response = await gemini.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: prompt,
        config: {
            systemInstruction: `You are a Movie suggestion model and you will suggest 
        5 movie names separated by commas based on the keywords given in the prompt.
        Example: 
        Prompt: Indian Comedy Horror
        Output: Munjya, Kuakuda, Stree, Bhool Bhulaiyaa, Kanchana`,
        },
    });
    return response;
}

export default gemini;
```