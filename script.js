let count = 0;

const display = document.getElementById("display");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const btnActive = e.currentTarget.classList;
    if (btnActive.contains("decrease")) {
      count--;
    } else if (btnActive.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    display.textContent = `${count}`;
  });
});
