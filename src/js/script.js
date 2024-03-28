const adviceUpdateButton = document.querySelector('.advice-update-btn');
const adviceNumber = document.getElementById('advice-number');
const adviceDescription = document.getElementById('advice-description');
const url = 'https://api.adviceslip.com/advice';

async function fetchAdvice() {
    const response = await fetch(url);
    const data = await response.json();
    adviceNumber.innerText = `Advice # ${data.slip.id}`;
    adviceDescription.innerText = `"${data.slip.advice}"`;
};

adviceUpdateButton.addEventListener('click', () => {
    fetchAdvice();
});

fetchAdvice();