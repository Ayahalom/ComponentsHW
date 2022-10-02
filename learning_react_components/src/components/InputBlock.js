function InputBlock({ placeholdertext, functionality }) {
    return (
        <div>
            <form className="inputBlock" type="text" onSubmit={e => { e.preventDefault(); }}>
                <input onChange={functionality} placeholder={placeholdertext}></input>
            </form>
        </div >
    )
}
export default InputBlock;
