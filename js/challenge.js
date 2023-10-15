//timer
const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const likes = document.querySelector(".likes");
const pause = document.getElementById("pause");
const submit = document.getElementById("submit");

let seconds = 0;

let timerCounter = setInterval(()=>{seconds++;
    counter.textContent = seconds;
}, 1000);

minus.addEventListener("click", function(event) {
    seconds--;
    counter.textContent = seconds;
})
plus.addEventListener("click", function(event) {
    seconds++;
    counter.textContent = seconds;
})
heart.addEventListener("click", function(event) {
    let likeList = document.createElement("li");
    likes.appendChild(likeList);
    likeList.textContent = `${seconds} people likes you!`;
})
submit.addEventListener("click", function(event) {
    event.preventDefault();
    const inputValue = document.getElementById("comment-input").value;
    let p = document.createElement("p");
    let div = document.getElementById("list");
    div.appendChild(p);
    p.textContent = inputValue;
})

toggle = true;
pause.addEventListener("click", function(event) {
if(toggle) {
    clearInterval(timerCounter);
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    pause.textContent = "resume";
    toggle = !toggle
}else {
    timerCounter = setInterval(()=>{seconds++;
        counter.textContent = seconds;
    }, 1000);
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
    pause.textContent = "pause";
    toggle = !toggle
}
})


