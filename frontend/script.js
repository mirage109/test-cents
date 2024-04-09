document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', async () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);

        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.innerText = 'Not valid numbers.';
            return;
        }
        
        try {
            const response = await fetch('url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ num1, num2 })
            });

            const data = await response.json();
            resultDiv.innerText = `Result: ${data.result}`;
        } catch (error) {
            console.error('Error:', error);
            resultDiv.innerText = 'Error occurred.';
        }
    });
});
