var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) { // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
    document.getElementById("nextBtn").type = "submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n) //... and run a function that will display the correct step indicator:
}

// This function will figure out which tab to display
function nextPrev(n) { 
  var x = document.getElementsByClassName("tab"); 
  if (n == 1 && !validateForm()) return false;    // Exit the function if any field in the current tab is invalid:
  x[currentTab].style.display = "none";           // Hide the current tab:
  currentTab = currentTab + n;             // Increase or decrease the current tab by 1:
  if (currentTab >= x.length) {           // if you have reached the end of the form...
  document.getElementById("regForm").submit();    // ... the form gets submitted:
  return false;
  }
  showTab(currentTab); // Otherwise, display the correct tab:
}


// This function deals with validation of the form fields
function validateForm() {  
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");    
  for (i = 0; i < y.length; i++) {  // A loop that checks every input field in the current tab:
    if (y[i].value == "") {         // If a field is empty...
      y[i].className += " invalid"; // add an "invalid" class to the field:
      valid = false;                // and set the current valid status to false
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
    document.getElementsByClassName("title")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}


// This function removes the "active" class of all steps...
function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  var i, x = document.getElementsByClassName("title");
  for (i = 1; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";   //... and adds the "active" class on the current step:
}

