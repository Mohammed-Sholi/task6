var form = document.querySelector("form");
form.onsubmit = function(e){
    e.preventDefault();
    console.log("HI");

    // Get the value of the input and convert it to a number
    var value = parseFloat(document.querySelector("input[type=text]").value);

    var selectElement = document.querySelector("select");
    var result = document.querySelector("p");

    // Check if the input is not empty
    if (isNaN(value)) {
        alert("Please enter a valid number in the input field.");
        return;
    }

    // Perform calculations based on the selected currency
    if(selectElement.value === "dollar"){
        result.textContent = value * 3.7;
    }
    else if(selectElement.value === "dinar"){
        result.textContent = value * 5;
    }
    else if(selectElement.value === "euro"){
        result.textContent = value * 4;
    }
}
