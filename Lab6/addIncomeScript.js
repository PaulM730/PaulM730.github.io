document.getElementById("addIncome").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting automatically
    
    // Get form values
    const source = document.getElementById("incomeSource").value;
    const amount = document.getElementById("amount").value;
    const frequency = document.getElementById("frequency").value;
    

    document.getElementById("amount").addEventListener("blur", function() {
        let value = Number(amount.value);

        if(value>0){
            amount.value = value.toFixed(2);
        }
    });
    // Log to console (or do whatever you need with the data)
    console.log("Form submitted successfully!");
    console.log("Source of Income:", source);
    console.log("Amount of Income:", amount);
    console.log("Frrquency of Income:", frequency);
});