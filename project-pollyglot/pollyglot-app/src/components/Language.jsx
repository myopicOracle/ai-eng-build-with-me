import flag from '../assets/fr-flag.png'

const Language = () => {
    return (
        <>
            <h2>Selected Language:</h2>
            <div>
                <h3>French</h3>
                <img src={flag} alt="Flag of selected language" />
            </div>
        </>
    )
}

export default Language