let display = document.getElementById("display");
        let resultDiv = document.getElementById("result");
        let currentExpression = "";

        function appendNumber(number) {
            currentExpression += number;
            display.value = currentExpression;
        }

        function appendOperator(operator) {
            currentExpression += " " + operator + " ";
            display.value = currentExpression;
        }

        function appendDecimal() {
            if (!currentExpression.includes('.')) {
                currentExpression += ".";
                display.value = currentExpression;
            }
        }

        function calculateResult() {
            try {
                let result = eval(currentExpression);
                resultDiv.innerHTML = "= " + result;
            } catch (error) {
                resultDiv.innerHTML = "Error";
            }
        }

        function clearDisplay() {
            currentExpression = "";
            display.value = "";
            resultDiv.innerHTML = "";
        }