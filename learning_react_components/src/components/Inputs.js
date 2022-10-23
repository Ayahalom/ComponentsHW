import InputBlock from './InputBlock';
import './styles.css';


const Inputs = ({ velocity, setVelocity, angle, setAngle }) => {
    const clearInputs = () => {
        setVelocity();
        setAngle();
    }
    return (
        <form type="text" onSubmit={(e) => { e.preventDefault(); }}>
            <InputBlock value={velocity} onChange={(e) => (setVelocity(e.target.value))} nameText="Velocity" unitText="[m/s]" />
            <InputBlock value={angle} onChange={(e) => (setAngle(e.target.value))} nameText="Angle" unitText="[deg]" />
            <button onClick={() => clearInputs()}>reset</button>
        </form>
    )
}

export default Inputs;
