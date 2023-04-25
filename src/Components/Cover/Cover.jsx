import './Cover.css'

export const Cover = ({ text1, text2, text3 }) => {
    return (
        <div className="greeting_container">
            <div className='greeting' >
                <div className='greeting_quote'>
                    <p className='text_1'>{text1}</p>
                    <p className='text_2'>{text2}</p>
                </div>
                <p className="greeting_data">{text3}</p>
            </div>
        </div>
    )
}

export default Cover

