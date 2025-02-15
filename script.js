function typeEffect(element, text, speed, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            setTimeout(callback, 500);
        }
    }
    type();
}

window.onload = function () {
    const akshay = document.getElementById("akshay");
    const and = document.getElementById("and");
    const namomi = document.getElementById("namomi");
    const dots = document.getElementById("dots");

    typeEffect(akshay, "𝔸𝕂𝕊ℍ𝔸𝕐", 100, () => {
        typeEffect(and, "&", 300, () => {
            typeEffect(namomi, "ℕ𝔸𝕄𝕆𝕄𝕀", 120, startDots);
        });
    });

    function startDots() {
        let dotArray = ["", ".", "..", "..."];
        let index = 0;
        setInterval(() => {
            dots.innerHTML = dotArray[index];
            index = (index + 1) % dotArray.length;
        }, 500);
    }
};