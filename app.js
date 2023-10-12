var result = "";

function appendToResult(value) {
    result += value;
    document.getElementById("result").value = result;
}

function clearResult() {
    result = "";
    document.getElementById("result").value = result;
}

function cancelLastEntry() {
    if (result !== "") {
        result = result.slice(0, -1);
        document.getElementById("result").value = result;
    }
}

function square() {
    if (result === "") return;

    var lastChar = result.charAt(result.length - 1);

    if (!isNaN(lastChar) || lastChar === '.') {
        let lastIndex = result.length - 1;
        while (lastIndex >= 0 && !isNaN(result.charAt(lastIndex))) {
            lastIndex--;
        }

        lastIndex++;
        var  number = parseFloat(result.slice(lastIndex));

        result = result.substring(0, lastIndex) + Math.pow(number, 2);
        document.getElementById("result").value = result;
    }
}


function appendToResult(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        var lastChar = result.charAt(result.length - 1);

        if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
            return;
        }
    }
    
    result += value;
    document.getElementById("result").value = result;
}


function calculateResult() {
    try {
        var lastChar = result.charAt(result.length - 1);
        if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
            document.getElementById("result").value
            result = "";
            return;
        }
        
        result = eval(result);
        if (isNaN(result) || result === Infinity) {
            document.getElementById("result").value = "Error";
            result = "";
        } else {
            document.getElementById("result").value = result;
        }
    } catch (error) {
        document.getElementById("result").value = "Error";
        result = "";
    }
}
