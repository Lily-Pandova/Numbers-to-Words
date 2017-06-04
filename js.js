   var form = document.getElementById("myForm");
   form.addEventListener("submit", myFunction);

    function myFunction(e) {
        e.preventDefault();
        var number = document.getElementById('input-number').value;
        var  text = document.getElementById('input-text');

        var ones = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
        var tens = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
        var hundred = ' hundred';
        var output = '';
        var numString = number.toString();

        if (number == 0){
            output = 'zero';
            text.value = output;
        }
        else if (number < 20){
            output = ones[number];
            text.value = output;
        }
        else if (number > 20 && number < 100){
            output = (tens[Math.floor(number/10)] + " " + ones[number % 10]);
            text.value = output;
        }
        else {
            var devidedHundred = number % 100;
            output = (ones[Math.floor(number/100)] + " " + hundred + " " + (tens[Math.floor(devidedHundred/10)]) + " " + ones[number % 10]  );
            text.value = output;
        }

    }
