const ErrorMessage = document.getElementById("displayed");
const ErrorMessage1 = document.getElementById("InputATip");
const ErrorMessage2 = document.getElementById("input-value");
const Details = document.getElementById("details1");

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
  const Bill1 = parseFloat(Bill);
  const NumberOfPeople1 = parseFloat(NumberOfPeople);

  let TipAmountFinalValue;
  let TipAmount;
  // Button five value
  ButtonFive = document.getElementById("button-five").value;
  // Tip Amount Calculation
  if (isNaN(Bill1) && isNaN(NumberOfPeople1)) {
    return;
  } else {
    TipAmount = (ButtonFive * Bill1) / NumberOfPeople1;
    // Setting the amount of fixed decimal places
    TipAmountFinalValue = TipAmount.toFixed(2);
    // displaying result for tip amount
    if (isNaN(TipAmountFinalValue)) {
      return;
    } else {
      document.getElementById("amount").value = "$" + TipAmountFinalValue;
    }
    //Calculation for total amount
    let TotalAmount1;
    let TotalAmount2;
    let TotalAmount3;
    let TotalAmount4;
    let TotalAmount5;
    let TotalAmount6;
    let TotalAmountFinal;
    TotalAmount1 = ButtonFive * Bill1;
    TotalAmount2 = TotalAmount1.toFixed(2);
    TotalAmount3 = parseFloat(TotalAmount2);
    TotalAmount4 = TotalAmount3 + Bill1;
    TotalAmount5 = parseFloat(TotalAmount4);
    TotalAmount6 = TotalAmount5 / NumberOfPeople1;
    TotalAmountFinal = TotalAmount6.toFixed(2);

    if (isNaN(TotalAmountFinal)) {
      return;
    } else {
      document.getElementById("total").value = "$" + TotalAmountFinal;
    }
  }
}

// Calculation for 10% discount
function getValue1() {
  PerformComparison();

  //Final Calculation Value
  const Bill1 = parseFloat(Bill);
  const NumberOfPeople1 = parseFloat(NumberOfPeople);
  let TipAmountFinalValue;
  let TipAmount;
  // Button five value
  ButtonTen = document.getElementById("button-ten").value;
  // Tip Amount Calculation
  if (isNaN(Bill1) && isNaN(NumberOfPeople1)) {
    return;
  } else {
    TipAmount = (ButtonTen * Bill1) / NumberOfPeople1;
    // Setting the amount of fixed decimal places
    TipAmountFinalValue = TipAmount.toFixed(2);
    console.log(TipAmountFinalValue);
    // displaying result for tip amount
    if (isNaN(TipAmountFinalValue)) {
      return;
    } else {
      document.getElementById("amount").value = "$" + TipAmountFinalValue;
    }

    //Calculation for total amount
    let TotalAmount1;
    let TotalAmount2;
    let TotalAmount3;
    let TotalAmount4;
    let TotalAmount5;
    let TotalAmount6;
    let TotalAmountFinal;
    TotalAmount1 = ButtonTen * Bill1;
    TotalAmount2 = TotalAmount1.toFixed(2);
    TotalAmount3 = parseFloat(TotalAmount2);
    TotalAmount4 = TotalAmount3 + Bill1;
    TotalAmount5 = parseFloat(TotalAmount4);
    TotalAmount6 = TotalAmount5 / NumberOfPeople1;
    TotalAmountFinal = TotalAmount6.toFixed(2);

    if (isNaN(TotalAmountFinal)) {
      return;
    } else {
      document.getElementById("total").value = "$" + TotalAmountFinal;
    }
  }
}

//Calculation for 15% discount
function getValue2() {
  PerformComparison();

  //Final Calculation Value
  const Bill1 = parseFloat(Bill);
  const NumberOfPeople1 = parseFloat(NumberOfPeople);
  let TipAmountFinalValue;
  let TipAmount;
  // Button five value
  ButtonFifteen = document.getElementById("button-fifteen").value;
  if (isNaN(Bill1) && isNaN(NumberOfPeople1)) {
    return;
  } else {
    // Tip Amount Calculation
    TipAmount = (ButtonFifteen * Bill1) / NumberOfPeople1;
    // Setting the amount of fixed decimal places
    TipAmountFinalValue = TipAmount.toFixed(2);
    // displaying result for tip amount
    if (isNaN(TipAmountFinalValue)) {
      return;
    } else {
      document.getElementById("amount").value = "$" + TipAmountFinalValue;
    }

    let TotalAmount1;
    let TotalAmount2;
    let TotalAmount3;
    let TotalAmount4;
    let TotalAmount5;
    let TotalAmount6;
    let TotalAmountFinal;
    TotalAmount1 = ButtonFifteen * Bill1;
    TotalAmount2 = TotalAmount1.toFixed(2);
    TotalAmount3 = parseFloat(TotalAmount2);
    TotalAmount4 = TotalAmount3 + Bill1;
    TotalAmount5 = parseFloat(TotalAmount4);
    TotalAmount6 = TotalAmount5 / NumberOfPeople1;
    TotalAmountFinal = TotalAmount6.toFixed(2);

    if (isNaN(TotalAmountFinal)) {
      return;
    } else {
      document.getElementById("total").value = "$" + TotalAmountFinal;
    }
  }
}

//Calculation for 25% discount
function getValue3() {
  PerformComparison();

  //Final Calculation Value
  const Bill1 = parseFloat(Bill);
  const NumberOfPeople1 = parseFloat(NumberOfPeople);
  let TipAmountFinalValue;
  let TipAmount;
  // Button five value
  ButtonTwentyFive = document.getElementById("button-twenty-five").value;
  if (isNaN(Bill1) && isNaN(NumberOfPeople1)) {
    return;
  } else {
    // Tip Amount Calculation
    TipAmount = (ButtonTwentyFive * Bill1) / NumberOfPeople1;
    // Setting the amount of fixed decimal places
    TipAmountFinalValue = TipAmount.toFixed(2);
    // displaying result for tip amount
    if (isNaN(TipAmountFinalValue)) {
      return;
    } else {
      document.getElementById("amount").value = "$" + TipAmountFinalValue;
    }

    let TotalAmount1;
    let TotalAmount2;
    let TotalAmount3;
    let TotalAmount4;
    let TotalAmount5;
    let TotalAmount6;
    let TotalAmountFinal;
    TotalAmount1 = ButtonTwentyFive * Bill1;
    TotalAmount2 = TotalAmount1.toFixed(2);
    TotalAmount3 = parseFloat(TotalAmount2);
    TotalAmount4 = TotalAmount3 + Bill1;
    TotalAmount5 = parseFloat(TotalAmount4);
    TotalAmount6 = TotalAmount5 / NumberOfPeople1;
    TotalAmountFinal = TotalAmount6.toFixed(2);

    if (isNaN(TotalAmountFinal)) {
      return;
    } else {
      document.getElementById("total").value = "$" + TotalAmountFinal;
    }
  }
}

//Calculation for 50% discount
function getValue4() {
  PerformComparison();

  //Final Calculation Value
  let TipAmountFinalValue;
  let TipAmount;
  const Bill1 = parseFloat(Bill);
  const NumberOfPeople1 = parseFloat(NumberOfPeople);
  // Button five value
  ButtonFifty = document.getElementById("button-fifty").value;
  if (isNaN(Bill1) && isNaN(NumberOfPeople1)) {
    return;
  } else {
    // Tip Amount Calculation
    TipAmount = (ButtonFifty * Bill1) / NumberOfPeople1;
    // Setting the amount of fixed decimal places
    TipAmountFinalValue = TipAmount.toFixed(2);
    // displaying result for tip amount
    if (isNaN(TipAmountFinalValue)) {
      return;
    } else {
      document.getElementById("amount").value = "$" + TipAmountFinalValue;
    }

    let TotalAmount1;
    let TotalAmount2;
    let TotalAmount3;
    let TotalAmount4;
    let TotalAmount5;
    let TotalAmount6;
    let TotalAmountFinal;
    TotalAmount1 = ButtonFifty * Bill1;
    TotalAmount2 = TotalAmount1.toFixed(2);
    TotalAmount3 = parseFloat(TotalAmount2);
    TotalAmount4 = TotalAmount3 + Bill1;
    TotalAmount5 = parseFloat(TotalAmount4);
    TotalAmount6 = TotalAmount5 / NumberOfPeople1;
    TotalAmountFinal = TotalAmount6.toFixed(2);

    if (isNaN(TotalAmountFinal)) {
      return;
    } else {
      document.getElementById("total").value = "$" + TotalAmountFinal;
    }
  }
}

document.getElementById("custom-input").onchange = function () {
  getValue5();
};

function getValue5() {
  PerformComparison();
  //Final Calculation Value
  let TipAmountFinalValue;
  let TipAmount;
  let CustomValueFinal;
  const Bill1 = parseFloat(Bill);
  const NumberOfPeople1 = parseFloat(NumberOfPeople);
  CustomValue = document.getElementById("custom-input").value;
  // Dividing it by 100 because it is a discount
  if (isNaN(Bill1) && isNaN(NumberOfPeople1)) {
    return;
  } else {
    CustomValue1 = parseFloat(CustomValue);
    CustomValueFinal = CustomValue1 / 100;
    TipAmount = (CustomValueFinal * Bill1) / NumberOfPeople1;
    // Setting the amount of fixed decimal places
    TipAmountFinalValue = TipAmount.toFixed(2);
    // displaying result for tip amount
    if (isNaN(TipAmountFinalValue)) {
      return;
    } else {
      document.getElementById("amount").value = "$" + TipAmountFinalValue;
    }
    let TotalAmount1;
    let TotalAmount2;
    let TotalAmount3;
    let TotalAmount4;
    let TotalAmount5;
    let TotalAmount6;
    let TotalAmountFinal;
    TotalAmount1 = CustomValueFinal * Bill1;
    TotalAmount2 = TotalAmount1.toFixed(2);
    TotalAmount3 = parseFloat(TotalAmount2);
    TotalAmount4 = TotalAmount3 + Bill1;
    TotalAmount5 = parseFloat(TotalAmount4);
    TotalAmount6 = TotalAmount5 / NumberOfPeople1;
    TotalAmountFinal = TotalAmount6.toFixed(2);

    if (isNaN(TotalAmountFinal)) {
      return;
    } else {
      document.getElementById("total").value = "$" + TotalAmountFinal;
    }
  }
}
