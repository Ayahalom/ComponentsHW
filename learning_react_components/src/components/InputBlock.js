function InputBlock({ value, onChange, nameText, unitText }) {
    return (
        <div className="inputBlock">
            <p>{nameText}</p>
            <input value={value} onChange={onChange}></input>
            <p>{unitText}</p>
        </div>
    )
}
export default InputBlock;
