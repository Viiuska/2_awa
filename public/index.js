document.getElementById('submit-data').addEventListener('click', () => {
    const inputTxt = document.getElementById('input-text').value;
    const data = { text: inputTxt };

    fetch('/list', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(resData => {
        console.log(resData.list);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});