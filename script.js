let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let carYear = document.getElementById("car-year");
    let numDays = document.getElementById("days");
    let total = document.getElementById("total");
    let time = document.getElementById("start-date");
    let expiration = document.getElementById("expiration");
    let creditCard = document.getElementById("credit-card");

    let costPerDay = 5;

    let parkingDate = new Date(time.value);
    let expireDate = new Date(expiration.value);
    let currentDate = new Date();

    let parkingYear = parkingDate.getFullYear();
    let parkingDayOfWeek = parkingDate.getDay();
    let parkingMonth = parkingDate.getMonth();
    let parkingDay = parkingDate.getDay();
    let expireMonth = expireDate.getMonth();
    let expireYear = expireDate.getFullYear();
    

    if((carYear.value > 1900) && (carYear.value < currentDate.getFullYear())){

        console.log("valid");
        console.log("Higher than 1900: " + (carYear.value > 1900));
        console.log("Lower than current date: " + (carYear.value < currentDate.getFullYear()));
        let statementValue = (parseInt(carYear.value) > 1900)  && (parseInt(carYear.value) < currentDate.getFullYear());
        console.log("Value of if statement: " + statementValue);
        console.log("Value: " + carYear.value);
        console.log("Current Year: " + currentDate.getFullYear());
        
        carYear.parentElement.classList.add("input-valid");
    
    }else{
        console.log("invalid");
        console.log("Higher than 1900: " + (carYear.value > 1900));
        console.log("Lower than current date: " + (carYear.value < currentDate.getFullYear()));
        let statementValue = (parseInt(carYear.value) > 1900)  && (parseInt(carYear.value) < currentDate.getFullYear());
        console.log("Value of if statement: " + statementValue);
        console.log("Value: " + carYear.value);
        console.log("Current Year: " + currentDate.getFullYear());

        carYear.parentElement.classList.add("input-invalid");
        carYear.setAttribute("title", "Not a valid car year");

    }

    if(parkingDayOfWeek === 0 || parkingDayOfWeek === 6){
        console.log("Weekend: " + parkingDayOfWeek);

        costPerDay = 7;
        
        console.log(costPerDay);

    }else{
        console.log("Weekday: " + parkingDayOfWeek);

        costPerDay = 5;
        
        console.log(costPerDay)
    }

    if(!isNaN(Number(numDays.value)) &&
       Number(numDays.value) < 30    &&
       Number(numDays.value) > 1){

        console.log("valid");

        numDays.parentElement.classList.add("input-valid");
        total.textContent = "The cost is $" + (Number(numDays.value))*costPerDay;
    }else{
        console.log("invalid");

        carYear.parentElement.classList.add("input-invalid");

    }

    if(parkingDay > currentDate.getDay()     &&
       parkingMonth > currentDate.getMonth() &&
       parkingYear > currentDate.getFullYear()){
        
        time.parentElement.classList.add("input-valid");

    }else{
        time.parentElement.classList.add("input-invalid");
        creditCard.setAttribute("title", "Not a date");

    }

    if(validateCardNumber(creditCard.value) === true){
        console.log(validateCardNumber(creditCard.value));

        creditCard.parentElement.classList.add("input-valid");

    }else{
        console.log(validateCardNumber(creditCard.value));

        creditCard.parentElement.classList.add("input-invalid");
        creditCard.setAttribute("title", "Not a valid card number");

    }

    if(expireMonth < currentDate.getMonth()   && 
       expireYear < currentDate.getFullYear() &&
       expireMonth < 12                       &&
       (!isNaN(expireYear))                   &&
       (!isNaN(expireMonth))){
           
        expiration.parentElement.classList.add("input-invalid");
        expiration.setAttribute("title", "Not a valid expiration date");

    }else{
        console.log("Is a valid expireYear date: " + (!isNaN(expireYear)))
        console.log("expireYear value: " + expireYear);
        console.log("Is a valid expireMonth date: " + (!isNaN(expireMonth)));
        console.log("expireMonth value: " + expireMonth);

        expiration.parentElement.classList.add("input-valid");

    }

    function validateCardNumber(number) {
        var regex = new RegExp("^[0-9]{16}$");
        if (!regex.test(number))
            return false;
    
        return luhnCheck(number);
    }
    
    function luhnCheck(val) {
        var sum = 0;
        for (var i = 0; i < val.length; i++) {
            var intVal = parseInt(val.substr(i, 1));
            if (i % 2 == 0) {
                intVal *= 2;
                if (intVal > 9) {
                    intVal = 1 + (intVal % 10);
                }
            }
            sum += intVal;
        }
        return (sum % 10) == 0;
    }
     
})
