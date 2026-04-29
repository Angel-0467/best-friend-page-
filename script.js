const chat = document.getElementById("chat");

// create message
function addMessage(text, className = "") {
    const div = document.createElement("div");
    div.className = "message " + className;
    div.innerText = text;
    chat.appendChild(div);
    return div;
}

// slow visible movement
function moveAway(el) {
    // get current position before changing
    const rect = el.getBoundingClientRect();

    // lock current position (so it doesn't disappear)
    el.style.position = "fixed";
    el.style.left = rect.left + "px";
    el.style.top = rect.top + "px";

    // force browser to apply position before moving
    el.offsetHeight;

    // calculate new position
    const maxX = window.innerWidth - el.offsetWidth;
    const maxY = window.innerHeight - el.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    // smooth movement
    el.style.transition = "all 0.8s ease";

    el.style.left = x + "px";
    el.style.top = y + "px";
}

// question
setTimeout(() => {
    addMessage("💖 Who is your best friend? 💖");
}, 500);

// options appear one by one
setTimeout(() => {
    const angel = addMessage("Angel 👑", "option");
    angel.onclick = correct;
}, 1500);

setTimeout(() => {
    const shrishti = addMessage("Shrishti 🌸", "option");
    shrishti.onmouseover = () => moveAway(shrishti);
}, 2500);

setTimeout(() => {
    const both = addMessage("Both 💫", "option");
    both.onmouseover = () => moveAway(both);
}, 3500);

// correct answer
function correct() {
    addMessage("🎉 Correct! Angel is the best friend 💖");

    for (let i = 0; i < 100; i++) {
        const c = document.createElement("div");
        c.classList.add("confetti");
        document.body.appendChild(c);

        c.style.left = Math.random() * window.innerWidth + "px";
        c.style.top = "-10px";
        c.style.backgroundColor =
            ["#fff", "#ff69b4", "#ffc0cb"][Math.floor(Math.random() * 3)];

        c.animate(
            [
                { transform: "translateY(0px)" },
                { transform: "translateY(600px)" }
            ],
            { duration: 1500 }
        );

        setTimeout(() => c.remove(), 1500);
    }
}

// multiple floating stickers
const stickerContainer = document.querySelector(".stickers");
const emojis = ["🎀","💖","✨","🌸","💕","💗","💫","🦋","💓","🌷"];

for (let i = 0; i < 10; i++) {
    const span = document.createElement("span");
    span.innerText = emojis[i % emojis.length];

    span.style.left = Math.random() * 100 + "%";
    span.style.top = Math.random() * 100 + "%";
    span.style.animationDuration = (4 + Math.random() * 4) + "s";

    stickerContainer.appendChild(span);
}