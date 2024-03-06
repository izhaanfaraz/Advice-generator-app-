const adviceId = document.querySelector("#adviceid");
const advicetext = document.querySelector("#advicetext");
const btn = document.querySelector("#btn");

function updateAdvice() {
    fetch('https://api.adviceslip.com/advice').then(response => {
    return response.json();
}).then(adviceData => {
    const adviceNum = adviceData.slip.id;
    const advice = adviceData.slip.advice;

    adviceId.textContent = adviceNum;
    advicetext.innerHTML = `<p>${advice}</p>`;
}).then(error => {
    console.log(error)
})
}
btn.addEventListener("click", function() {
    updateAdvice();
})

window.onload = () => {
    updateAdvice();
}

