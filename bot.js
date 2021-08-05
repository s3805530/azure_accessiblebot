const fetchAns = async (question) => {

    const requestBody = {question}

    const res = await fetch("https://qna100bot.azurewebsites.net/qnamaker/knowledgebases/f426f8b0-5559-4632-92e0-2d6ae82f248e/generateAnswer", {
        method: "POST",
        headers: {
            Authorization: "EndpointKey b8e03d9e-6fa9-4613-b017-fb48e2167396",
            "Content-type": "application/json"
        },
        body: JSON.stringify(requestBody)
    })
    return (await res.json())
}
