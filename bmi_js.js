document.getElementById('btn').addEventListener('click', function () {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let heightError = document.getElementById('height_error');
    let weightError = document.getElementById('weight_error');
    let output = document.getElementById('output');

    // Clear previous errors
    heightError.textContent = '';
    weightError.textContent = '';
    output.textContent = '';

    // Validate inputs
    if (!height || isNaN(height) || height <= 0) {
        heightError.textContent = 'Please enter a valid height in centimeters.';
        return;
    }

    if (!weight || isNaN(weight) || weight <= 0) {
        weightError.textContent = 'Please enter a valid weight in kilograms.';
        return;
    }

    // Convert height from cm to meters
    height = height / 100;

    // Calculate BMI
    let bmi = (weight / (height * height)).toFixed(2);

    // Display result
    output.textContent = `Your BMI is ${bmi}.`;

    // Optionally, categorize BMI
    if (bmi < 18.5) {
        output.textContent += " You are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        output.textContent += " You have a normal weight.";
    } else if (bmi >= 25 && bmi < 29.9) {
        output.textContent += " You are overweight.";
    } else {
        output.textContent += " You are obese.";
    }
});
