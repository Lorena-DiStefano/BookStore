import './Cover.css'


export const Cover = ({ text1, text2 }) => {
    return (
        <div className="greeting">
            <p className="greeting_text" >{text1}</p>
            <p className="greeting_data" >{text2}</p>
        </div>
    )
}

export default Cover

