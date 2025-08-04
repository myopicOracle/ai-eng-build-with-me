// first add { "@google/genai": "^1.10.0" } to package.json
import 'dotenv/config';
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini client
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY  // Ensure you have GEMINI_API_KEY in .env
});

async function getGeminiResponse() {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",  // Or other Gemini model
            contents: [
                {
                    role: "user",  // Primary role in Gemini
                    parts: [
                        { 
                            text: "Explain quantum computing to me like I'm 12 years old."
                        }
                    ]
                }
            ]
        });
        
        console.log(response.text);  // Access the response text
        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw error;
    }
}

// Call the function
getGeminiResponse();
