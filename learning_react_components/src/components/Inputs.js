import InputBlock from './InputBlock';
import { clearInputsValues, calculateData } from '../utils/functionality'
import './styles.css';


function Inputs() {
    return (
        <div id="inputs">
            <InputBlock functionality={calculateData} placeholdertext="Velocity" />
            <InputBlock functionality={calculateData} placeholdertext="Angle" />
            <button onClick={clearInputsValues}>reset</button>
        </div>
    )
}

export default Inputs;
