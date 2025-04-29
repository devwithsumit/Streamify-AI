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
        3 movie names that are most relevant separated by commas based on the keywords given in the prompt.
        and if user simply search a movie name directly then return the movie names related to that keyword
        Example 1: 
            Prompt: Indian Comedy Horror
            Output: Stree, Bhool Bhulaiyaa, Kanchana;
        Example 2:
            Prompt: Bhool
            Output: Bhool Bhulaiyaa, BhoolBhulaiyaa 2
        `,
        },
    });
    return response;
}

export default gemini;