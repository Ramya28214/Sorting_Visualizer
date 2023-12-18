function submitNumbers() {
  var nums = document.getElementById("num-input").value.split(",").map(Number);
  displayNumbers(nums);
}

function displayNumbers(numbers) {
  // display all numbers in an alert
  alert("Input numbers: " + numbers.join(", "));
}

let numbers = [];

function pushnumbers() {
  const input = document.getElementById("input-numbers").value;
  numbers = input.split(",").map(Number);
  console.log(numbers);
  displayBarGraph();
}


function displayBarGraph() {
  const barGraph = document.getElementById("bar-graph");
  barGraph.innerHTML = "";

  for (let i = 0; i < numbers.length; i++) {
    const barContainer = document.createElement("div");
    barContainer.className = "bar-container";

    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = `${numbers[i] * 6}px`;

    const barLength = document.createElement("div");
    barLength.className = "bar-length";
    barLength.textContent = numbers[i];
    barLength.style.position = "absolute";
    barLength.style.top = "10px";
    barLength.style.width = "100%";
    barLength.style.textAlign = "center";
    barLength.style.color = "black";
    barLength.style.fontSize = "12px";

    bar.appendChild(barLength);
    barContainer.appendChild(bar);
    barGraph.appendChild(barContainer);
  }
}

let delay = 1000;
let delayElement = document.querySelector('#speed_input');

delayElement.addEventListener('input', function() {
  delay = 800 - parseInt(delayElement.value);
});



function measureExecutionTime(func) {
  return new Promise((resolve) => {
    const startTime = performance.now();
    func();
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    resolve(executionTime);
  });
}

async function executeFunction(functionNumber) {
  let resultElement = document.getElementById('result');

  let executionTime;

  switch (functionNumber) {
    case 1:
      executionTime = await measureExecutionTime(insertion);
      break;
    case 2:
      executionTime = await measureExecutionTime(selection);
      break;
    case 3:
      executionTime = await measureExecutionTime(callbubble);
      break;
    case 4:
      executionTime = await measureExecutionTime(callmergesort);
      break;
    case 5:
      executionTime = await measureExecutionTime(callquicksort);
      break;
    default:
      console.log('Invalid function number');
      return;
  }

  resultElement.innerHTML = `Execution time: ${executionTime.toFixed(4)} ms`;
}