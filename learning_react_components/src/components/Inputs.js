import InputBlock from './InputBlock';
import './styles.css';


function Inputs({ velocity, setVelocity, angle, setAngle }) {
    function cleary(setVelocity, setAngle) {
        setVelocity(0);
        setAngle(0);
    }
    return (
        <form type="text" onSubmit={e => { e.preventDefault(); }}>
            <InputBlock value={velocity} onChange={(e) => (setVelocity(e.target.value))} nameText="Velocity" unitText="[m/s]" />
            <InputBlock value={angle} onChange={(e) => (setAngle(e.target.value))} nameText="Angle" unitText="[deg]" />
            <button onClick={() => cleary(setVelocity, setAngle)}>reset</button>
        </form>
    )
}

export default Inputs;
