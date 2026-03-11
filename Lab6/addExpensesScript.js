document.getElementById("addExpenses").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting automatically
    

    //sets max value for date to today
    const today = new Date().toISOString().split("T")[0];
    document.getElementById("expensesDate").max = today;
    // Get form values
    const place = document.getElementById("expensesPlace").value;
    const date = document.getElementById("expensesDate").value;
    const mode = document.getElementById("mode").value;
    const amount = document.getElementById("amount").value;
    

        
    // Log to console (or do whatever you need with the data)
    console.log("Form submitted successfully!");
    console.log("Place of Expenses:", place);
    console.log("Date of Expenses:", date);
    console.log("Amount in Expenses:", amount);
    console.log("Mode of Expense:", mode);

    
});