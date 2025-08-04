const Input = ({ userMessage, handleUserInput }) => {
    return (
        <div className="panel">
            <h3>Enter question here:</h3>
            <input className='displayArea' type='text' name='userMessage' id='userMessage' placeholder='Enter text to translate.' value={userMessage} onChange={handleUserInput}/>
        </div>
    )
}

export default Input