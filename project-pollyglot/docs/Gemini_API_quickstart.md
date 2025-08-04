# Install

```bash
npm install @google/genai
```

# Making Request

```js
import 'dotenv/config';
import { GoogleGenAI } from "@google/genai";

const client = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY  
});

async function getGeminiResponse() {
    try {
        const response = await client.models.generateContent({
            model: "gemini-2.5-flash",  
            contents: [
                {
                    role: "user",  
                    parts: [
                        { 
                            text: "Explain quantum computing to me like I'm 12 years old."
                        }
                    ]
                }
            ]
        });
        
        console.log(response.text);  
        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw error;
    }
}

getGeminiResponse();
```
