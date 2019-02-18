// Below is a formula for working out compound interest, but with no contributions
// let result = initialINT * Math.pow(1 + (interestFLOAT/12), 12*termINT);

let dataEntry = document.querySelector("#dataEntry");
dataEntry.addEventListener("change", (e) => {
  let output = document.querySelector('#output');  
  let intitial = document.querySelector("#intitial");
  let interest = document.querySelector("#interest");
  let term = document.querySelector("#term");
  let contributions = document.querySelector("#contributions");

  initialINT = parseInt(initial.value);
  let origAmount = initialINT;
  interestFLOAT = parseInt(interest.value);
  interestFLOAT /= 100;
  interestFLOAT /= 365;
  termINT = parseInt(term.value);
  termINT *= 365;
  contributionsINT = parseInt(contributions.value);
  let deposits = 0;
  let interestEarned = 0;
  let monthlyAcrual = 0;
  let interestTotal = 0; 
  for(let i = 0; i < termINT; i++) {
    monthlyAcrual += initialINT * interestFLOAT; // accrue interest daily but pay monthly
    // add contributions every 7 iterations
    if(i % 7 == 0) {
      initialINT += contributionsINT;
      deposits += contributionsINT;
    }
    if(i % 30 == 0) {
      initialINT += monthlyAcrual;
      interestTotal += monthlyAcrual;
      monthlyAcrual = 0;
    }
  }
  
  let result = initialINT;
  interestEarned = result - deposits;
  let msg = "";
  if (isNaN(termINT)) {
    termINT = 0;
  }
  if (isNaN(interestEarned)) {
    interestEarned = 0;
  }
  if (isNaN(contributionsINT)) {
    contributionsINT = 0;
  }
  if(isNaN(result)) {
    msg = "Waiting for the rest of the input...";
  } else {
    msg = `Your total savings amount will be: $${result.toFixed(2)}<hr>`;
    msg += `The amount of interest earned over the ${termINT/365} year period will be $${interestTotal.toFixed(2)}<hr>`;
    msg += `Your contribution of $${contributionsINT} per week will total $${deposits}`;
  }
  output.innerHTML = msg;
});