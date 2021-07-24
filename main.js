const ErrorMessage = document.getElementById("displayed");
const ErrorMessage1 = document.getElementById("InputATip");
const ErrorMessage2 = document.getElementById("input-value");
const custom = document.getElementById("custom");

// Performing a check for input values
function PerformComparison() {
  Bill = document.getElementById("bill-input").value;
  NumberOfPeople = document.getElementById("people-input").value;

  if (Bill == "" || Bill == null || isNaN(Bill)) {
    ErrorMessage.style.display = "block";
  } else {
    ErrorMessage.style.display = "none";
  }

  if (NumberOfPeople === "0") {
    ErrorMessage1.style.display = "block";
  } else {
    ErrorMessage1.style.display = "none";
  }

  if (NumberOfPeople == "" || NumberOfPeople == null || isNaN(NumberOfPeople)) {
    ErrorMessage2.style.display = "block";
  } else {
    ErrorMessage2.style.display = "none";
  }
}

// Calculation for 5% discount
function getValue() {
  PerformComparison();
  // Final Calculation Value
  let TipAmountFinalValue;
  let TipAmount;
  // Button five value
  ButtonFive = document.getElementById("button-five").value;
  // Tip Amount Calculation
  TipAmount = (ButtonFive * Bill) / NumberOfPeople;
  // Setting the amount of fixed decimal places
  TipAmountFinalValue = TipAmount.toFixed(2);
  // displaying result for tip amount
  document.getElementById("amount").value = "$" + TipAmountFinalValue;
}

// Calculation for 10% discount
function getValue1() {
  PerformComparison();

  //Final Calculation Value
  let TipAmountFinalValue;
  let TipAmount;
  // Button five value
  ButtonTen = document.getElementById("button-ten").value;
  // Tip Amount Calculation
  TipAmount = (ButtonTen * Bill) / NumberOfPeople;
  // Setting the amount of fixed decimal places
  TipAmountFinalValue = TipAmount.toFixed(2);
  // displaying result for tip amount
  document.getElementById("amount").value = "$" + TipAmountFinalValue;
}

//Calculation for 15% discount
function getValue2() {
  PerformComparison();

  //Final Calculation Value
  let TipAmountFinalValue;
  let TipAmount;
  // Button five value
  ButtonFifteen = document.getElementById("button-fifteen").value;
  // Tip Amount Calculation
  TipAmount = (ButtonFifteen * Bill) / NumberOfPeople;
  // Setting the amount of fixed decimal places
  TipAmountFinalValue = TipAmount.toFixed(2);
  // displaying result for tip amount
  document.getElementById("amount").value = "$" + TipAmountFinalValue;
}

//Calculation for 25% discount
function getValue3() {
  PerformComparison();

  //Final Calculation Value
  let TipAmountFinalValue;
  let TipAmount;
  // Button five value
  ButtonTwentyFive = document.getElementById("button-twenty-five").value;
  // Tip Amount Calculation
  TipAmount = (ButtonTwentyFive * Bill) / NumberOfPeople;
  // Setting the amount of fixed decimal places
  TipAmountFinalValue = TipAmount.toFixed(2);
  // displaying result for tip amount
  document.getElementById("amount").value = "$" + TipAmountFinalValue;
}

//Calculation for 50% discount
function getValue4() {
  PerformComparison();

  //Final Calculation Value
  let TipAmountFinalValue;
  let TipAmount;
  // Button five value
  ButtonFifty = document.getElementById("button-fifty").value;
  // Tip Amount Calculation
  TipAmount = (ButtonFifty * Bill) / NumberOfPeople;
  // Setting the amount of fixed decimal places
  TipAmountFinalValue = TipAmount.toFixed(2);
  // displaying result for tip amount
  document.getElementById("amount").value = "$" + TipAmountFinalValue;
}

//Calculation for custom discount
custom.addEventListener("blur", () => {
  PerformComparison();

  //Final Calculation Value
  let TipAmountFinalValue;
  let TipAmount;
  let CustomValueFinal;
  // Button five value
  CustomValue = document.getElementById("custom").value;
  // Dividing it by 100 because it is a discount
  CustomValueFinal = CustomValue / 100;
  // Tip Amount Calculation
  TipAmount = (CustomValueFinal * Bill) / NumberOfPeople;
  // Setting the amount of fixed decimal places
  TipAmountFinalValue = TipAmount.toFixed(2);
  // displaying result for tip amount
  document.getElementById("amount").value = "$" + TipAmountFinalValue;
});
