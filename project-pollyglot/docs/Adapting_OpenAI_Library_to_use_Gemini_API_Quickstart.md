# Install

```bash
npm install openai
```

# Making Request

```js
import 'dotenv/config';
import OpenAI from 'openai';

const client = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
    dangerouslyAllowBrowser: true,
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
            content: "What is the capital of France?"
        }
    ]
});

console.log(response.choices[0].message);  
```
