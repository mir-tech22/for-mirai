let isOpen = false;

function toggleEnvelope(e) {
  const envelope = document.getElementById("envelope");
  const isClickInsideLetter = e?.target.closest(".letter");
  const instruction = document.getElementById("openInstruction");

  if (
    isOpen &&
    isClickInsideLetter &&
    !e.target.classList.contains("letter-close")
  ) {
    return;
  }

  if (!isOpen) {
    envelope.classList.add("open");
    createSparkles();
    instruction.style.display = "none";
    isOpen = true;
  } else {
    envelope.classList.remove("open");
    instruction.style.display = "block";
    isOpen = false;
  }
}

function createSparkles() {
  const container = document.getElementById("envelopeContainer");
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = Math.random() * 100 + "%";
      sparkle.style.top = Math.random() * 100 + "%";
      sparkle.style.animationDelay = Math.random() * 2 + "s";
      container.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 2000);
    }, i * 100);
  }
}

document
  .getElementById("envelopeContainer")
  .addEventListener("click", toggleEnvelope);
document
  .getElementById("letterOverlay")
  .addEventListener("click", toggleEnvelope);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && event.ctrlKey) {
    updateMessage();
  }
  if (event.key === " ") {
    event.preventDefault();
    toggleEnvelope();
  }
});

document
  .getElementById("letterCloseBtn")
  .addEventListener("click", function (e) {
    e.stopPropagation();
    toggleEnvelope();
  });
