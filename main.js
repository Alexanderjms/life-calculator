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

// --- CALCULADORA DE FECHA ---
document.addEventListener("DOMContentLoaded", function () {
  // Selección del formulario y los inputs
  const form = document.querySelector("form");
  if (!form) return;
  const inputDay = form.querySelector('input[name="day"]');
  const inputMonth = form.querySelector('input[name="month"]');
  const inputYear = form.querySelector('input[name="year"]');

  // Selección de los resultados
  const yearsSpan = form.querySelector(
    "div.flex.flex-col .flex.items-center:nth-child(1) .text-purple-500"
  );
  const monthsSpan = form.querySelector(
    "div.flex.flex-col .flex.items-center:nth-child(2) .text-purple-500"
  );
  const daysSpan = form.querySelector(
    "div.flex.flex-col .flex.items-center:nth-child(3) .text-purple-500"
  );

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const day = parseInt(inputDay.value, 10);
    const month = parseInt(inputMonth.value, 10);
    const year = parseInt(inputYear.value, 10);
    const currentYear = new Date().getFullYear();

    // Validaciones
    if (isNaN(day) || day < 1 || day > 31) {
      alert("El día debe estar entre 1 y 31");
      return;
    }
    if (isNaN(month) || month < 1 || month > 12) {
      alert("El mes debe estar entre 1 y 12");
      return;
    }

    const inputDate = new Date(year, month - 1, day);
    const now = new Date();

    let years = now.getFullYear() - inputDate.getFullYear();
    let months = now.getMonth() - inputDate.getMonth();
    let days = now.getDate() - inputDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    // Mostrar en consola
    console.log("Años:", years, "Meses:", months, "Días:", days);

    // Actualizar resultados en los spans correctos
    if (yearsSpan) yearsSpan.textContent = years;
    if (monthsSpan) monthsSpan.textContent = months;
    if (daysSpan) daysSpan.textContent = days;
  });
});
