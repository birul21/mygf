document.addEventListener('DOMContentLoaded', function() {
    console.log("Halaman romantis ini dibuat dengan penuh cinta! 💖");

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
});

document.getElementById("surpriseBtn").addEventListener("click", function() {
    document.getElementById("hiddenMessage").style.display = "block";
    this.style.display = "none";
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 500);
