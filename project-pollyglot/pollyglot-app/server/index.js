import 'dotenv/config';
import express from 'express';
import { OpenAI } from 'openai';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

app.post('/api/chat', async (req, res) => {
  try {
    const { text } = req.body;
    
    const response = await openai.chat.completions.create({
      model: 'gpt-4.1-nano',
      messages: [
        {
          role: 'system',
          content: 'You are patient and encouraging language teacher who helps students learn French.',
        },
        {
          role: 'user',
          content: text,
        }
      ],
      temperature: 0.8,
    });

    res.json({ 
      translatedText: response.choices[0].message.content 
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error processing translation' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});