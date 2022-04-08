const textArea = document.getElementById("textarea");

document.getElementById("upper-case").addEventListener("click", function() {
    let text = textArea.value.toUpperCase().split(' ');
    textArea.value = text.join(' ');
});

document.getElementById("lower-case").addEventListener("click", function () {
    let text = textArea.value.toLowerCase().split(' ');
    textArea.value = text.join(' ');
});

document.getElementById("proper-case").addEventListener("click", function () {
    let text = textArea.value;
    function properCase(str) {
        return str
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }
    textArea.value = properCase(text);
});

document.getElementById("sentence-case").addEventListener("click", function () {
   let text = textArea.value.toLowerCase().split('. ');
    let modifiedSentences = [];
    for (let sentence of text) {
        let modifiedSentence = sentence.charAt(0).toUpperCase().concat(sentence.slice(1));
        modifiedSentences.push(modifiedSentence);
    }
    textArea.value = modifiedSentences.join('. ');
});

document.getElementById("save-text-file").addEventListener("click", function () {
    let text = textArea.value;
    let filename = "text.txt";
    download(filename, text);

    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
});


