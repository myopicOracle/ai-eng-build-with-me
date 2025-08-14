const Button = ({ handleClick, disabled }) => {
    return (
        <div>
            <button onClick={handleClick} disabled={disabled}>
                {disabled ? 'Asking...' : 'Ask Me!'}
            </button>
        </div>
    )
}

export default Button