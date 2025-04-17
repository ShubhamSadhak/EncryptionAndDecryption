function showSection(id) {
    document.getElementById('encryptionSection').style.display = 'none';
    document.getElementById('decryptionSection').style.display = 'none';
    document.getElementById(id).style.display = 'flex';
}

function encrypt(){
    let text = document.getElementById('encryptText').value;
    let key = document.getElementById('encryptKey').value;
    let codedString = '';

    for(var i=0;i<text.length;i++){
        codedString+=String.fromCharCode(text.charCodeAt(i)^key.charCodeAt(i%key.length));
    }

    document.getElementById('encryptResult').innerText = 'Encrypted: ' + btoa(codedString);
}

function decrypt(){
    let text = document.getElementById('decryptText').value;
    let key = document.getElementById('decryptKey').value;
    let decodedString = atob(text);
    let decodedText = '';

    for(var i=0;i<decodedString.length;i++){
        decodedText+=String.fromCharCode(decodedString.charCodeAt(i)^key.charCodeAt(i%key.length));
    }

    document.getElementById('decryptResult').innerText = 'Decrypted: ' + decodedText;
}

window.onload = function() {
    showSection('encryptionSection');
};