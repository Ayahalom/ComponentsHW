export function calcTrajectoryData(Velocity, angle) {
    const g = 9.81;
    return {
        airborneTime: 2 * Math.sin(Math.PI * angle / 180) * Velocity / g,
        distance: Math.sin(2 * Math.PI * angle / 180) * Velocity ** 2 / g
    }
}