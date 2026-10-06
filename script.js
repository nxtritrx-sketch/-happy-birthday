const cake =
  document.getElementById("cake");

const candles =
  document.getElementById("candles");

const instruction =
  document.getElementById("instruction");

const blowBtn =
  document.getElementById("blowBtn");

const afterBlow =
  document.getElementById("afterBlow");

const envelope =
  document.getElementById("envelope");

const openLetterBtn =
  document.getElementById("openLetterBtn");

const letter =
  document.getElementById("letter");


let candlesAreOn = false;


/* =====================
   STEP 1
   กดเค้ก
===================== */

cake.addEventListener(
  "click",
  function () {

    if (candlesAreOn) {
      return;
    }


    candlesAreOn = true;


    /* เทียนเลื่อนลงมาปัก */

    candles.classList.add(
      "show"
    );


    instruction.innerHTML =
      "อธิษฐานก่อนนะ ✨<br>แล้วเป่าเทียนกัน";


    /* รอเทียนปักเสร็จ
       แล้วค่อยให้ปุ่มขึ้น */

    setTimeout(
      function () {

        blowBtn.classList.remove(
          "hidden"
        );

      },
      650
    );

  }
);


/* =====================
   STEP 2
   เป่าเทียน
===================== */

blowBtn.addEventListener(
  "click",
  function () {

    const flames =
      document.querySelectorAll(
        ".flame"
      );


    /* ไฟค่อย ๆ ดับ */

    flames.forEach(
      function (flame) {

        flame.style.transition =
          ".45s";

        flame.style.opacity =
          "0";

        flame.style.transform =
          "translateX(-50%) translateY(-12px) scale(0)";

      }
    );


    blowBtn.classList.add(
      "hidden"
    );


    instruction.innerHTML =
      "เย้!! 🎉<br>อธิษฐานแล้วเป่าเลย 🎂";


    createHearts();


    /* ซองจดหมายค่อย ๆ ขึ้น */

    setTimeout(
      function () {

        afterBlow.classList.remove(
          "hidden"
        );


        afterBlow.scrollIntoView({

          behavior:
            "smooth",

          block:
            "center"

        });

      },
      900
    );

  }
);


/* =====================
   STEP 3
   เปิดจดหมาย
===================== */

function openLetter() {

  letter.classList.remove(
    "hidden"
  );


  createHearts();


  setTimeout(
    function () {

      letter.scrollIntoView({

        behavior:
          "smooth",

        block:
          "start"

      });

    },
    200
  );

}


openLetterBtn.addEventListener(
  "click",
  openLetter
);


envelope.addEventListener(
  "click",
  openLetter
);


/* =====================
   EFFECT
===================== */

function createHearts() {

  const decorations = [

    "💗",
    "💕",
    "🤍",
    "♡",
    "✨"

  ];


  for (
    let i = 0;
    i < 22;
    i++
  ) {

    setTimeout(
      function () {

        const heart =
          document.createElement(
            "div"
          );


        heart.className =
          "floating-heart";


        heart.innerHTML =

          decorations[
            Math.floor(
              Math.random()
              *
              decorations.length
            )
          ];


        heart.style.left =
          Math.random()
          * 100
          + "vw";


        heart.style.fontSize =
          (
            18
            +
            Math.random()
            * 20
          )
          + "px";


        document.body.appendChild(
          heart
        );


        setTimeout(
          function () {

            heart.remove();

          },
          4000
        );


      },
      i * 90
    );

  }

}
