const Response = ({ translatedText }) => {
    return (
        <div className="panel">
            <h3>PollyGlot Says:</h3>
            <div className="displayArea" id="translatedText">
                {translatedText}
            </div>
        </div>
    )
}

export default Response