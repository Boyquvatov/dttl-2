
const apiKey = 'My_API_key';  // Bu yerga Yandex Translate API kalitingizni yozing


function translateText() {
    const sourceLang = document.getElementById('source-lang').value;
    const targetLang = document.getElementById('target-lang').value;
    const inputText = document.getElementById('input-text').value;
    const outputText = document.getElementById('output-text');

    if (!inputText) {
        outputText.textContent = "Iltimos, tarjima qilish uchun matn kiriting.";
        return;
    }

    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&text=${encodeURIComponent(inputText)}&lang=${sourceLang}-${targetLang}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.text && data.text[0]) {
                outputText.textContent = data.text[0];
            } else {
                outputText.textContent = "Tarjima qilishda xatolik yuz berdi.";
            }
        })
        .catch(error => {
            console.error('Tarjima qilishda xatolik:', error);
            outputText.textContent = "Tarjima qilishda xatolik yuz berdi.";
        });
}
