const TextBox = ({ content }) => {
    return (
        <ul>
            {content.map((author, i) => {
                console.log(author);

                return (
                    <li key={i}>{author.nombre}</li>
                )
            })}
        </ul>
    )
}

export default TextBox