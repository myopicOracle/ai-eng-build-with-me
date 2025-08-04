const Response = ({ translatedText }) => {
    return (
        <div className="panel">
            <h3>Translated Text:</h3>
            <div className="displayArea" id="translatedText">
                {translatedText}
            </div>
        </div>
    )
}

export default Response