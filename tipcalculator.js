function calculateTip() {
    var billAmt = document.getElementById("billamount").value;
    var serviceQual = document.getElementById("serviceQuality").value;
    var numOfPeople = document.getElementById("peopleamt").value;
  
    //validate input
    if (billAmt === "" || serviceQual == 0) {
      alert("Please enter values");
      return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
  
    //Calculate tip
    var total = (billAmt * serviceQual) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
        //displaytip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    total_amt_per_person = billAmt + total
    

  
  }
  
  //Hide the tip amount 
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";

  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };