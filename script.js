const ratings = document.querySelectorAll(".rating");
const ratingContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectRating = "Satisfied";

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You</strong>
        <br>
        <strong>Feedback: ${selectRating} </strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
