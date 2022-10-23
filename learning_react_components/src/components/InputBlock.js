const InputBlock = ({ value, onChange, nameText, unitText }) => {
    return (
        <div className="inputBlock">
            <span>{nameText}</span>
            <input value={value} onChange={onChange}></input>
            <span>{unitText}</span>
        </div>
    )
}
export default InputBlock;
