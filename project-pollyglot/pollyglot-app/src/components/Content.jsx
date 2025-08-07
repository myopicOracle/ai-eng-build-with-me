import { useState } from 'react'
import Language from './Language'
import Response from './Response'
import Input from './Input'
import Button from './Button'

const Content = () => {
    const [userMessage, setUserMessage] = useState('')
    const [translatedText, setTranslatedText] = useState('')

    const handleUserInput = (e) => {
        setUserMessage(() => e.target.value)
    }

    const handleClick = async () => {
        try {
            // const response = await fetch('http://localhost:3001/api/chat', { // use this endpoint for full server setup with /server/index.js
            const response = await fetch('https://pollyglot-cloudflare-worker.myopic-oracle.workers.dev', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: userMessage })
            })

            if (!response.ok) {
                throw new Error('Translation failed')
            }

            const data = await response.json()
            console.log('Response data: ', data)
            console.log('User input: ', userMessage)
            setTranslatedText(data.translatedText)
        } catch (error) {
            console.error('Error:', error)
            setTranslatedText('Error: Failed to translate text')
        }
    }

    return (
        <div className='card'>
            <Language />
            <Response translatedText={translatedText}/>
            <Input userMessage={userMessage} handleUserInput={handleUserInput} />
            <Button handleClick={handleClick}/>
        </div>
    )
}

export default Content
