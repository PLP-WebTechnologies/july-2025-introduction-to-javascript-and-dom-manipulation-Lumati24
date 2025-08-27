// 🎯 Part 1: JavaScript Basics
document.getElementById("greetBtn").addEventListener("click", () => {
  let name = document.getElementById("userName").value;

  // Using conditionals
  if (name.trim() === "") {
    document.getElementById("greetOutput").textContent = "Please enter your name!";
  } else {
    document.getElementById("greetOutput").textContent = `Hello, ${name}! Welcome to JS Mastery 🚀`;
  }
});

// ❤️ Part 2: Functions — Reusability
function calculateSum(a, b) {
  return a + b;
}

function formatResult(num) {
  return `The result is: ${num}`;
}

document.getElementById("sumBtn").addEventListener("click", () => {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);

  // Call our functions
  let total = calculateSum(n1, n2);
  document.getElementById("sumOutput").textContent = formatResult(total);
});

// 🔁 Part 3: Loops — Repetition
const colors = ["Red", "Blue", "Green", "Purple", "Orange"];

document.getElementById("listBtn").addEventListener("click", () => {
  let list = document.getElementById("colorList");
  list.innerHTML = ""; // Clear previous list

  // Example of a for loop
  for (let i = 0; i < colors.length; i++) {
    let li = document.createElement("li");
    li.textContent = colors[i];
    list.appendChild(li);
  }

  // Example of forEach loop
  console.log("Logging colors with forEach:");
  colors.forEach(color => console.log(color));
});

// 🌐 Part 4: DOM Manipulation
document.getElementById("toggleBtn").addEventListener("click", () => {
  let text = document.getElementById("toggleText");
  text.classList.toggle("highlight");
});
