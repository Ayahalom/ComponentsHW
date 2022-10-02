import { calcTrajectoryData } from '../utils/physicsCalculation';

export function clearInputsValues() {
    const inputComponents = document.getElementsByClassName("inputBlock");
    for (let input of inputComponents) {
        input.reset();
    }
}

export function calculateData() {
    const inputsComponents = [...document.getElementsByTagName("input")];
    const isAllFilled = inputsComponents.every(inp => inp.value);
    if (isAllFilled) {
        const ans = calcTrajectoryData(inputsComponents[0].value, inputsComponents[1].value)
        console.log(ans);
    }
}