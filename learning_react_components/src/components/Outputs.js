import { calcTrajectoryData } from '../utils/physics-calculation';


const Outputs = ({ velocity, angle }) => {
    const text = () => {
        const { distance, airborneTime } = calcTrajectoryData(velocity, angle);
        return `The throw distance is ${Math.round(distance)} [m]`
    }
    return (
        <h1> {text()} </h1>
    )
}

export default Outputs;
