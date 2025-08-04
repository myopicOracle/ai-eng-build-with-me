// first add { "@google/genai": "^1.10.0" } to package.json
import 'dotenv/config';
import OpenAI from 'openai';

// Use Gemini with OpenAI library
const client = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

const response = await client.chat.completions.create({
    model: "gemini-2.5-flash", 
    messages: [
        {
            role: "system",
            content: "You are a helpful general knowledge expert.",
        },
        {
            role: "user",
            content: "How many r's are in the word 'strawberry'?"
        }
    ]
});

// console.log('Geimini API Key: ', client.apiKey)
// console.log("Full response array: ", response);  
// console.log("Message object: ", response.choices[0].message);  
console.log("Message content: ", response.choices[0].message.content);  
// console.log("Message role: ", response.choices[0].message.role);  
