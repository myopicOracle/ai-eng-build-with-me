import { useState } from 'react'
import 'dotenv/config' 
import {OpenAI} from 'openai'
// import Response from './Response'
// import Input from './Input'
// import Button from './Button'

const Content = () => {
    const [userMessage, setUserMessage] = useState('')
    const [translatedText, setTranslatedText] = useState('')
    
    const client = new OpenAI({
        // apiKey: process.env.OPENAI_API_KEY,
        apiKey: 'NotThatStupid', // hardcode only to test in local dev env 
        dangerouslyAllowBrowser: true,
    })

    const handleUserInput = (e) => {
        setUserMessage(() => e.target.value)
    }

    const handleClick = async () => {
        setUserMessage(userMessage)

        const messages = [
            {
                role: 'system',
                // content: 'You are patient and encouraging language teacher who helps students learn new languages.',
                content: 'You translate the user input into French.',
            },
            {
                role: 'user',
                content: userMessage,
            }
        ]

        const response = await client.chat.completions.create({
            model: 'gpt-4.1-nano',
            messages: messages,
            temperature: 0.8,
        })

        console.log(response)
        console.log(response.choices[0].message.content)
        setTranslatedText(response.choices[0].message.content)
    }

    return (
        <div className='card'>

            <div className="panel" id="translatedText">{translatedText}</div>
            <input className='panel' type='text' name='userMessage' id='userMessage' placeholder='Enter text to translate.' value={userMessage} onChange={handleUserInput}/>
            <div className="button">
                <button onClick={handleClick}>Translate</button>
            </div>

            {/* <Response content={translatedText}/>
            <Input />
            <Button handleClick={() => {console.log(translatedText)}}/> */}
        </div>
    )
}

export default Content