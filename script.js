// Hardcoded list of names
const names = ["Басанг Б.", "Артур С.", "Елизавета F.", "Георгий Р.", "Илья К. работает до 18:00", "Кирилл К. работает до 18:00.", "Константин П."];

// Function to pick two random names
function pickRandomNames() {
  let name1, name2;

  // Ensure the two names are not the same
  do {
    name1 = names[Math.floor(Math.random() * names.length)];
    name2 = names[Math.floor(Math.random() * names.length)];
  } while (name1 === name2);

  return [name1, name2];
}

// Display the result on the webpage
document.getElementById("cute-button").addEventListener("click", () => {
  const [name1, name2] = pickRandomNames();
  document.getElementById("result").textContent = `${name1} and ${name2}`;
});
