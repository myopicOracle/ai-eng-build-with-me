const Input = ({ userMessage, handleUserInput, disabled }) => {
    return (
        <div className="panel">
            <h3>Ask for language lesson:</h3>
            <input className='displayArea' type='text' name='userMessage' id='userMessage' value={userMessage} onChange={handleUserInput} disabled={disabled}/>
        </div>
    )
}

export default Input