const cake = document.getElementById("cake");
const candles = document.getElementById("candles");
const message = document.getElementById("message");
const blowBtn = document.getElementById("blowBtn");

const celebrate = document.getElementById("celebrate");
const envelope = document.getElementById("envelope");
const letterBtn = document.getElementById("letterBtn");
const letter = document.getElementById("letter");

let candlesOn = false;

/* กดเค้ก */

cake.addEventListener("click", function () {

  if (candlesOn) return;

  candles.classList.add("show");

  blowBtn.classList.remove("hidden");

  message.innerHTML =
    "อธิษฐานก่อนนะ ✨<br>แล้วเป่าเทียนกัน 🎂";

  candlesOn = true;

});


/* เป่าเทียน */

blowBtn.addEventListener("click", function () {

  const flames = document.querySelectorAll(".flame");

  flames.forEach(function (flame) {

    flame.style.transition = "0.4s";

    flame.style.opacity = "0";

    flame.style.transform =
      "translateY(-10px) scale(0)";

  });

  blowBtn.classList.add("hidden");

  message.innerHTML =
    "เย้!! 🎉<br>สุขสันต์วันเกิดนะอ้วนน 💗";

  createHearts();

  setTimeout(function () {

    celebrate.classList.remove("hidden");

    celebrate.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  }, 900);

});


/* เปิดจดหมาย */

function openLetter() {

  letter.classList.remove("hidden");

  createHearts();

  setTimeout(function () {

    letter.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }, 200);

}


letterBtn.addEventListener("click", openLetter);

envelope.addEventListener("click", openLetter);


/* หัวใจลอย */

function createHearts() {

  const hearts = [
    "💗",
    "💕",
    "💖",
    "♡",
    "✨"
  ];

  for (let i = 0; i < 18; i++) {

    setTimeout(function () {

      const heart =
        document.createElement("div");

      heart.className =
        "floating-heart";

      heart.innerHTML =
        hearts[
          Math.floor(
            Math.random() * hearts.length
          )
        ];

      heart.style.left =
        Math.random() * 100 + "vw";

      heart.style.fontSize =
        (18 + Math.random() * 22) + "px";

      document.body.appendChild(heart);

      setTimeout(function () {
        heart.remove();
      }, 3000);

    }, i * 100);

  }

}
