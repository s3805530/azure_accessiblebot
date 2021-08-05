const sleep = async (ms) => new Promise(resolve => setTimeout(resolve, ms));

const setImg = (value) => {
    let image_value = value.toLowerCase();
    switch (value) {
        case " ":
            image_value = "_space"
    }

    document.getElementById("signLanguageImage").setAttribute("src", `https://lingojam.com/img/BSL_signs/${image_value}.png`)
    document.getElementById("txtBeingDisplayed").innerText = image_value
}

const display = async (text) => {

    const chars = text.split("");

    for (let i = 0; i < chars.length; i++) {
        const char = chars[i]
        setImg(char)
        await sleep(250)
        setImg("blank")
        await sleep(100)
    }

}
