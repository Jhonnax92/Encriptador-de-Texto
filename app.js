function btEncriptar() {
    const inputText = document.getElementById('inputTextArea').value;
    const encryptedText = encrypt(inputText);

    document.querySelector('.mensaje').textContent = encryptedText;
    updateUIForOutput();
}

function btDescriptografar() {
    const inputText = document.getElementById('inputTextArea').value;
    const decryptedText = decrypt(inputText);

    document.querySelector('.mensaje').textContent = decryptedText;
    updateUIForOutput();
}

function encrypt(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function updateUIForOutput() {
    const imageContainer = document.getElementById('imageContainer');
    const outputContainer = document.querySelector('.output-container');
    const inputTextArea = document.getElementById('inputTextArea').value;
    const outputTextArea = document.querySelector('.mensaje').value;

    if (inputTextArea || outputTextArea) {
        imageContainer.style.display = 'none';
        outputContainer.style.display = 'block';
    } else {
        imageContainer.style.display = 'block';
        outputContainer.style.display = 'none';
    }
}

document.getElementById('copyBtn').addEventListener('click', () => {
    const messageTextArea = document.querySelector('.mensaje');
    messageTextArea.select();
    document.execCommand('copy');
});

document.getElementById('cript').addEventListener('click', btEncriptar);
document.getElementById('descript').addEventListener('click', btDescriptografar);

document.getElementById('copyBtn').addEventListener('click', function () {
    const mensagemElement = document.querySelector('.mensaje');

    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = mensagemElement.textContent;
    document.body.appendChild(tempTextarea);

    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999);

    document.execCommand('copy');


    document.body.removeChild(tempTextarea);

});