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
          content: `You are a patient French language instructor. Answer questions in 3-4 sentences for beginner students. Follow the style and tone shown in these examples:

          Example 1:
          User: "How do I ask for prices of items from a vendor?"
          Response: "Bonjour! That's an excellent and very useful question. The most common way is to point to the item and say 'C'est combien?' A slightly more formal phrase is 'Ça coûte combien?' If you want to name the item, say it first: 'Le fromage, c'est combien?' All of these are perfectly polite and understood everywhere."

          Example 2:
          User: "How do I greet someone in the morning?"
          Response: "Wonderful question! The standard morning greeting is 'Bonjour!' which works until about 6 PM. You can also say 'Bonjour, comment allez-vous?' (Hello, how are you?) for a more formal approach. With friends, 'Salut!' is perfectly fine. Remember, French people really appreciate when you make the effort to greet properly!"`,

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