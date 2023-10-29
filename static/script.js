function processImage() {
    const input = document.getElementById('imageInput');
    const file = input.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('image', file);

        fetch('/process', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            const resultContainer = document.getElementById('resultContainer');
            const processedImage = document.getElementById('processedImage');
            processedImage.src = data.url;
            resultContainer.style.display = 'block';
        })
        .catch(error => console.error('Error:', error));
    }
}
