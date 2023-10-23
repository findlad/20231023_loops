let content = "";
const isDiviz = (number, denominator) => number % denominator === 0;

for (let i = 1; i <= 100; i++) {
  if (isDiviz(i, 15)) {
    content += "<li>FizzBuzz</li>";
    console.log("FizzBuzz");
  } else if (isDiviz(i, 3)) {
    content += "<li>Fizz</li>";
    console.log("Fizz");
  } else if (isDiviz(i, 5)) {
    content += "<li>Buzz</li>";
    console.log("Buzz");
  } else {
    content += `<li>${i}</li>`;
    console.log(i);
  }
}

const box = document.querySelector("main");
box.innerHTML = `<ul>${content}</ul>`;
