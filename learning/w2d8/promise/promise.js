function getDefinition(word) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then((response) => {
                if (response.ok) {
                    response.json().then(resolve); // 正常解析并返回
                } else {
                    response.json().then(reject);  // 错误也要解析后再 reject
                }
            })
            .catch((error) => {
                reject(error); // 网络错误等
            });
    });
}

getDefinition("hello")
    .then((response) => {
        console.log(response[0].meanings[0].definitions[0].definition);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
