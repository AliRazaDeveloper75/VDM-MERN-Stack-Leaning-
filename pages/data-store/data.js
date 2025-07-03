function showMessage(message, type = 'success') {
    resultDiv.textContent = message;
    resultDiv.style.color = type === 'error' ? 'red' : 'green';
}

const userInput = document.getElementById('input-text');
const saveInput = document.getElementById('save-input');
const getInput = document.getElementById('get-input');
const resultDiv = document.getElementById('result-Div');

// Save name to array in localStorage
saveInput.addEventListener('click', () => {
    const name = userInput.value.trim();

    if (name) {
        let names = JSON.parse(localStorage.getItem('user-data')) || [];
        names.push(name);
        localStorage.setItem('user-data', JSON.stringify(names));

        showMessage(`Name "${name}" saved!`);
        userInput.value = '';
    } else {
        showMessage('Please enter a name', 'error');
    }
});

// Get all names from localStorage
getInput.addEventListener('click', () => {
    const names = JSON.parse(localStorage.getItem('user-data')) || [];

    if (names.length > 0) {
        showMessage(`Stored names: ${names.join(', ')}`);
        console.log('Stored Names:', names);
    } else {
        showMessage('No names found in storage', 'error');
    }
});
