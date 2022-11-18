const Form = ({ set, valor, addValue, deleteValue, btnDel }) => {
    return (
        <>
            <input cols="30" rows="10" onChange={(e) => { set(e.target.value) }} value={valor} />
            {(!btnDel) ?
                <button onClick={addValue}>Enviar</button> :
                <button onClick={deleteValue}>Borrar</button>}
        </>
    )
}

export default Form