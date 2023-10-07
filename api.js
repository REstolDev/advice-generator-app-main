function getAdvice() {
    const adviceSpan = document.getElementById("adviceTxt");
    const adviceId = document.getElementById("adviceId");

    fetch("https://api.adviceslip.com/advice")
        .then(response => {
            if (!response.ok) {
                throw new Error(`The request was not successful. Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {

            const advice = data.slip.advice;
            const id = data.slip.id;

            adviceSpan.textContent = advice;
            adviceId.textContent = "#" + id;
        })
        .catch(error => {
            console.error("Error getting advice:", error);
        });
}
document.addEventListener("DOMContentLoaded", getAdvice);

const getAdviceBtn = document.getElementById("adviceBtn");
getAdviceBtn.addEventListener("click", getAdvice);
