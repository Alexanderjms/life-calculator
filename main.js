document.addEventListener("DOMContentLoaded", function () {
  const letters = document.querySelectorAll(".jump-letter");
  let currentIndex = 0;

  function jumpNextLetter() {
    letters.forEach((letter) => {
      letter.style.transform = "translateY(0)";
    });

    if (
      letters[currentIndex] &&
      letters[currentIndex].textContent.trim() !== ""
    ) {
      letters[currentIndex].style.transform = "translateY(-50px)";
    }

    currentIndex = (currentIndex + 1) % letters.length;
  }

  setInterval(jumpNextLetter, 100);
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (!form) return;
  const inputDay = form.querySelector('input[name="day"]');
  const inputMonth = form.querySelector('input[name="month"]');
  const inputYear = form.querySelector('input[name="year"]');

  [inputDay, inputMonth, inputYear].forEach((input) => {
    input.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
    });
  });

  const yearsSpan = form.querySelector(".text-yellow-400.font-bold");
  const monthsSpan = form.querySelector(".text-blue-400.font-bold");
  const daysSpan = form.querySelector(".text-purple-500.font-bold");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const day = parseInt(inputDay.value, 10);
    const month = parseInt(inputMonth.value, 10);
    const year = parseInt(inputYear.value, 10);

    if (isNaN(day) || day < 1 || day > 31) {
      alert("El día debe estar entre 1 y 31");
      return;
    }
    if (isNaN(month) || month < 1 || month > 12) {
      alert("El mes debe estar entre 1 y 12");
      return;
    }
    if (isNaN(year) || year < 0 || year > 9999) {
      alert("El año debe estar entre 0 y 9999");
      return;
    }

    const inputDate = new Date(year, month - 1, day);
    const now = new Date();

    let years = now.getFullYear() - inputDate.getFullYear();
    let months = now.getMonth() - inputDate.getMonth();
    let days = now.getDate() - inputDate.getDate();

    if (days < 0) {
      months--;
      // Días del mes anterior
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    if (yearsSpan) yearsSpan.textContent = years;
    if (monthsSpan) monthsSpan.textContent = months;
    if (daysSpan) daysSpan.textContent = days;
  });
});
