const form = document.getElementById('userForm');
const resultDisplay = document.getElementById('resultDisplay');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById('nameInput').value;
    const age = document.getElementById('ageInput').value;
    const city = document.getElementById('cityInput').value;
    const country = document.getElementById('countryInput').value;
    const email = document.getElementById('emailInput').value;
    resultDisplay.style.display = 'block';
    resultDisplay.innerHTML = `
        <strong>Hello, ${name}!</strong><br>
        Age: ${age}<br>
        City: ${city}<br>
        Country: ${country}<br>
        Email: ${email}
    `;
});
