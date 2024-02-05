const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text.length < 1) {
        return alert(`Please input a value.`);
    }
    const regex = /[^a-zA-Z0-9]/g;
    const cleanText = text.replace(regex, "").toLowerCase();
    
    result.textContent = cleanText === cleanText.split("").reverse('').join('') ? 
        `${textInput.value} is a palindrome!` : `${textInput.value} is not a palindrome.`;
})