document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleSVGColors();
});

function toggleSVGColors() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    const circuitImg = document.querySelector('img[src*="circuit"]');
    const equationImg = document.querySelector('img[src*="equation"]');
    
    if (circuitImg) {
        const circuitSrc = circuitImg.getAttribute('src');
        circuitImg.setAttribute('src', isDarkMode ? circuitSrc.replace('circuit.svg', 'circuitDark.svg') : circuitSrc.replace('circuitDark.svg', 'circuit.svg'));
    }
    
    if (equationImg) {
        const equationSrc = equationImg.getAttribute('src');
        equationImg.setAttribute('src', isDarkMode ? equationSrc.replace('equation.svg', 'equationDark.svg') : equationSrc.replace('equationDark.svg', 'equation.svg'));
    }
}

function calculateVoltage() {
    const inputVoltage = parseFloat(document.getElementById('input-voltage').value);
    const resistor1 = parseFloat(document.getElementById('resistor1').value);
    const resistor2 = parseFloat(document.getElementById('resistor2').value);
    const outputVoltage = parseFloat(document.getElementById('output-voltage').value);

    let result = '';
    let errorMessage = '';

    if (isNaN(inputVoltage) && isNaN(resistor1) && isNaN(resistor2) && isNaN(outputVoltage)) {
        errorMessage = 'Please fill in at least three fields.';
    } else if (!isNaN(inputVoltage) && !isNaN(resistor1) && !isNaN(resistor2)) {
        result = `Output Voltage: ${(inputVoltage * resistor2 / (resistor1 + resistor2)).toFixed(2)} V`;
    } else if (!isNaN(inputVoltage) && !isNaN(resistor1) && !isNaN(outputVoltage)) {
        result = `Resistor R2: ${((outputVoltage * resistor1) / (inputVoltage - outputVoltage)).toFixed(2)} kΩ`;
    } else if (!isNaN(inputVoltage) && !isNaN(resistor2) && !isNaN(outputVoltage)) {
        result = `Resistor R1: ${((inputVoltage - outputVoltage) * resistor2 / outputVoltage).toFixed(2)} kΩ`;
    } else if (!isNaN(resistor1) && !isNaN(resistor2) && !isNaN(outputVoltage)) {
        result = `Input Voltage: ${((outputVoltage * (resistor1 + resistor2)) / resistor2).toFixed(2)} V`;
    } else {
        errorMessage = 'Please fill in three fields to calculate the fourth.';
    }

    document.getElementById('result').innerText = result;
    document.getElementById('error-message').innerText = errorMessage;
}