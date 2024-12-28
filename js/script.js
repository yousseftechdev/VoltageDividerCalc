function calculateVoltage() {
    const inputVoltage = parseFloat(document.getElementById('input-voltage').value);
    const resistor1 = parseFloat(document.getElementById('resistor1').value)*1000;
    const resistor2 = parseFloat(document.getElementById('resistor2').value)*1000;
    const outputVoltage = parseFloat(document.getElementById('output-voltage').value);

    let result = '';

    if (!isNaN(inputVoltage) && !isNaN(resistor1) && !isNaN(resistor2)) {
        result = `Output Voltage: ${(inputVoltage * resistor2 / (resistor1 + resistor2)).toFixed(2)} V`;
    } else if (!isNaN(inputVoltage) && !isNaN(resistor1) && !isNaN(outputVoltage)) {
        result = `Resistor R2: ${(((outputVoltage * resistor1) / (inputVoltage - outputVoltage)).toFixed(2))/1000} kΩ`;
    } else if (!isNaN(inputVoltage) && !isNaN(resistor2) && !isNaN(outputVoltage)) {
        result = `Resistor R1: ${(((inputVoltage - outputVoltage) * resistor2 / outputVoltage).toFixed(2))/1000} kΩ`;
    } else if (!isNaN(resistor1) && !isNaN(resistor2) && !isNaN(outputVoltage)) {
        result = `Input Voltage: ${((outputVoltage * (resistor1 + resistor2)) / resistor2).toFixed(2)} V`;
    } else {
        result = 'Please fill in three fields to calculate the fourth.';
    }

    document.getElementById('result').innerText = result;
}